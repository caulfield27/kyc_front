import { useMutation, useQuery } from '@tanstack/react-query';
import { toast } from 'sonner';

import { TOAST_LOADER_ID, toasterOptions } from '@/constants';

import { SUBMISSIONS_KEY } from './applicationConstants';
import {
  getSubmissionById,
  getSubmissions,
  submitPublicForm,
  updateSubmissionStatus,
  uploadFile,
} from './applicationsApi';
import type {
  ApplyStatus,
  IFile,
  IFileResponse,
  ISubmitData,
} from './applicationTypes';

export const useApplications = (status: ApplyStatus) => {
  const query = useQuery({
    queryKey: [SUBMISSIONS_KEY.submissions, status],
    queryFn: () => getSubmissions(status),
  });

  const statusMutation = useMutation({
    mutationFn: updateSubmissionStatus,
    onMutate: () => {
      toast.loading('Обновляем статус заявки...', toasterOptions['loading']);
    },
    onSuccess: () => {
      toast.dismiss(TOAST_LOADER_ID);
      toast.success(
        'Статус заявки  успешно обновлен',
        toasterOptions['success']
      );
    },
  });

  return { query, statusMutation };
};

export const useApplicationById = (id: number) => {
  const query = useQuery({
    queryKey: [SUBMISSIONS_KEY.submission_by_id, id],
    queryFn: () => getSubmissionById(id),
  });

  return query;
};

export const useApplicationMutation = (
  slug: string,
  setStep: (step: number) => void,
  setSuccessState: (newState: {
    isSuccess: boolean;
    redirect_url: string;
  }) => void,
  setCurrentSubmissionId: (id: number) => void
) => {
  const mutation = useMutation({
    mutationFn: (data: ISubmitData) => submitPublicForm(data, slug),
    onSuccess: (data) => {
      const { next_step, redirect_url } = data;
      if (next_step) {
        toast.success('Данные успешно отправлены', toasterOptions['success']);
        setStep(next_step);
      } else {
        setSuccessState({
          isSuccess: true,
          redirect_url,
        });
      }
      setCurrentSubmissionId(data.submission_id);
    },
  });

  return mutation;
};

export const useFileUpload = (
  setInputData: (key: string, value: IFileResponse) => void,
  setCurrentSubmissionId: (id: number) => void
) => {
  const mutation = useMutation({
    mutationFn: (data: IFile) => uploadFile(data),
    onMutate: () => {
      toast.loading('Загружаем файл...', toasterOptions['loading']);
    },
    onSuccess: (data) => {
      toast.dismiss(TOAST_LOADER_ID);
      toast.success('Файл успешно загружен', toasterOptions['success']);
      setInputData(data.field_key, data);
      setCurrentSubmissionId(data.submission_id);
    },
  });

  return mutation;
};
