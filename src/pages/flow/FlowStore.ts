import { create } from 'zustand';

import type { IElement, IPage } from '@/services/processes/processesTypes';

// const currentPage: IPage = {
//   id: 1,
//   process_id: 1,
//   title: 'Идентификация',
//   order: 0,
//   elements: [
//     {
//       id: 1,
//       page_id: 1,
//       element_type_id: 1,
//       element_type: {
//         id: 1,
//         is_full_page: false,
//         name: 'text',
//         created_at: new Date().toDateString(),
//       },
//       title: 'Дополнительная информация',
//       field_key: 'info_text',
//       required: false,
//       order: 0,
//     },
//     {
//       id: 2,
//       page_id: 1,
//       element_type_id: 2,
//       element_type: {
//         id: 2,
//         is_full_page: false,
//         name: 'income',
//         created_at: new Date().toDateString(),
//       },
//       title: 'Доход в месяц',
//       field_key: 'info_number',
//       required: true,
//       order: 1,
//     },
//     {
//       id: 3,
//       page_id: 1,
//       element_type_id: 3,
//       element_type: {
//         id: 3,
//         is_full_page: false,
//         name: 'date',
//         created_at: new Date().toDateString(),
//       },
//       title: 'Дата',
//       field_key: 'info_date',
//       required: true,
//       order: 2,
//     },
//     {
//       id: 4,
//       page_id: 1,
//       element_type_id: 4,
//       element_type: {
//         id: 4,
//         is_full_page: false,
//         name: 'info_checkbox',
//         created_at: new Date().toDateString(),
//       },
//       title: 'Наличие военного билета',
//       field_key: 'info_checkbox',
//       required: true,
//       order: 3,
//     },
//     {
//       id: 5,
//       page_id: 1,
//       element_type_id: 5,
//       element_type: {
//         id: 5,
//         is_full_page: false,
//         name: 'phone',
//         created_at: new Date().toDateString(),
//       },
//       title: 'Телефон',
//       field_key: 'phone_otp',
//       required: true,
//       order: 4,
//     },
//     {
//       id: 6,
//       page_id: 1,
//       element_type_id: 6,
//       element_type: {
//         id: 6,
//         is_full_page: false,
//         name: 'doc_front',
//         created_at: new Date().toDateString(),
//       },
//       title: 'Паспорт(лицевая)',
//       field_key: 'regula_ocr_front',
//       required: true,
//       order: 5,
//     },
//     {
//       id: 7,
//       page_id: 1,
//       element_type_id: 7,
//       element_type: {
//         id: 7,
//         is_full_page: false,
//         name: 'doc_back',
//         created_at: new Date().toDateString(),
//       },
//       title: 'Паспорт(оборот)',
//       field_key: 'regula_ocr_back',
//       required: true,
//       order: 6,
//     },
//     {
//       id: 8,
//       page_id: 1,
//       element_type_id: 8,
//       element_type: {
//         id: 8,
//         is_full_page: false,
//         name: 'liveness',
//         created_at: new Date().toDateString(),
//       },
//       title: 'Проверка живости',
//       field_key: 'visionlabs_liveness',
//       required: true,
//       order: 7,
//     },
//     {
//       id: 9,
//       page_id: 1,
//       element_type_id: 9,
//       element_type: {
//         id: 9,
//         is_full_page: false,
//         name: 'visionlabs_face_match',
//         created_at: new Date().toDateString(),
//       },
//       title: 'Сравнение лица',
//       field_key: 'face_match',
//       required: true,
//       order: 8,
//     },
//     {
//       id: 10,
//       page_id: 1,
//       element_type_id: 10,
//       element_type: {
//         id: 10,
//         is_full_page: false,
//         name: 'phone',
//         created_at: new Date().toDateString(),
//       },
//       title: 'Доп. документ (опц)',
//       field_key: 'extra_doc',
//       required: true,
//       order: 9,
//     },
//   ],
// };

type ErrorState = {
  isError: boolean;
  errorMsg: string;
};

interface IStates {
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
  validation: { [key: string]: string };
}

type Actions = {
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
};

const initialStates: IStates = {
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
};

export const useFlowStore = create<IStates & Actions>((set, get) => ({
  ...initialStates,
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
      if (!inputData[element.element_type.name] && element.required) {
        validation[element.element_type.name] =
          'Поле обязательно для заполнения';
        isValid = false;
      }
    }

    set({ validation: validation });

    if (isValid) {
      handleSend();
    }
  },
}));
