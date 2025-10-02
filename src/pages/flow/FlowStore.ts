import { create } from 'zustand';

import type { IElement, IPage } from '@/services/processes/processesTypes';

import type { VisionlabsType } from './FlowTypes';

type ErrorState = {
  isError: boolean;
  errorMsg: string;
};

interface IStates {
  current_submission_id: number | null;
  errorState: ErrorState;
  submissionState: {
    isSuccess: boolean;
    redirect_url: string;
  };
  page: IPage | null;
  step: number;
  inputData: { [key: string]: unknown };
  isLivenessOpen: boolean;
  isDocReaderOpen: boolean;
  passportType: 'front' | 'back';
  visionType: VisionlabsType;
  validation: { [key: string]: string };
}

type Actions = {
  setCurrentSubmissionId: (id: number) => void;
  setErrorState: (err: ErrorState) => void;
  setStep: (step: number) => void;
  setInputData: (key: string, value: unknown) => void;
  setLivenessOpen: (payload: boolean) => void;
  setDocReaderOpen: (payload: boolean) => void;
  setPassportType: (type: 'front' | 'back') => void;
  resetValidation: (key: string) => void;
  nextStep: (actions: IElement[], handleSend: () => void) => void;
  setPage: (page: IPage) => void;
  setSubmissionState: (state: {
    isSuccess: boolean;
    redirect_url: string;
  }) => void;
  setVisionType: (type: VisionlabsType) => void;
};

const initialStates: IStates = {
  current_submission_id: null,
  errorState: {
    isError: false,
    errorMsg: '',
  },
  submissionState: {
    isSuccess: false,
    redirect_url: '',
  },
  passportType: 'front',
  page: null,
  step: 1,
  inputData: {},
  isDocReaderOpen: false,
  isLivenessOpen: false,
  validation: {},
  visionType: 'liveness',
};

export const useFlowStore = create<IStates & Actions>((set, get) => ({
  ...initialStates,
  setCurrentSubmissionId: (id) => set({ current_submission_id: id }),
  setVisionType: (type) => set({ visionType: type }),
  setErrorState: (state) => set({ errorState: state }),
  setSubmissionState: (state) => set({ submissionState: state }),
  setPage: (page) => set({ page: page }),
  setPassportType: (type) => set({ passportType: type }),
  setLivenessOpen: (payload) => set({ isLivenessOpen: payload }),
  setDocReaderOpen: (payload) => set({ isDocReaderOpen: payload }),
  setStep: (step) => set({ step: step }),
  resetValidation: (key: string) => {
    const { validation } = get();
    delete validation[key];
    set({
      validation: validation,
    });
  },
  setInputData: (key, value) =>
    set((state) => ({ inputData: { ...state.inputData, [key]: value } })),
  nextStep: (elements, handleSend) => {
    const { inputData, validation } = get();
    let isValid = true;
    for (const element of elements) {
      if (!inputData[element.field_key] && element.required) {
        validation[element.field_key] = 'Поле обязательно для заполнения';
        isValid = false;
      }
    }

    set({ validation: validation });

    if (isValid) {
      handleSend();
    }
  },
}));
