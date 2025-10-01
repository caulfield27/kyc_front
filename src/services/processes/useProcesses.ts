import { useMutation, useQuery } from '@tanstack/react-query';
import { toast } from 'sonner';

import { TOAST_LOADER_ID, toasterOptions } from '@/constants';

import {
  addProcess,
  getElements,
  getProcessById,
  getProcesses,
  getProcessForm,
  publishProcess,
  updateProcessById,
} from './processesApi';
import { PROCESSES_KEY } from './processesConstants';
import type { ProcessData } from './processesTypes';

export const useProcesses = () => {
  const query = useQuery({
    queryKey: [PROCESSES_KEY.processes],
    queryFn: getProcesses,
  });

  const mutation = useMutation({
    mutationFn: addProcess,
    onMutate: () => {
      toast.loading('Добавлям процесс...', toasterOptions['loading']);
    },
    onSuccess: () => {
      toast.dismiss(TOAST_LOADER_ID);
      toast.success('Процесс успешно добавлен', toasterOptions['success']);
      query.refetch();
    },
  });

  return { query, mutation };
};

export const useProcessById = (id: number) => {
  const query = useQuery({
    queryKey: [PROCESSES_KEY.process, id],
    queryFn: () => getProcessById(id),
  });

  const addMutation = useMutation({
    mutationFn: (data: ProcessData) => updateProcessById(id, data),
    onMutate: () => {
      toast.loading('Сохраняем процесс...', toasterOptions['loading']);
    },
    onSuccess: () => {
      toast.dismiss(TOAST_LOADER_ID);
      toast.success('Процесс успешно сохранён', toasterOptions['success']);
      query.refetch();
    },
  });

  const publishMutation = useMutation({
    mutationFn: () => publishProcess(id),
    onMutate: () => {
      toast.loading('Процесс публикуется...', toasterOptions['loading']);
    },
    onSuccess: () => {
      toast.dismiss(TOAST_LOADER_ID);
      toast.success('Процесс успешно опубликован', toasterOptions['success']);
      query.refetch();
    },
  });

  return { query, addMutation, publishMutation };
};

export const useProcessForm = (slug: string, step: number) => {
  const query = useQuery({
    queryKey: [PROCESSES_KEY.process_form, slug, step],
    queryFn: () => getProcessForm(slug, step),
  });

  return query;
};

export const useElements = () => {
  const query = useQuery({
    queryKey: [PROCESSES_KEY.elements],
    queryFn: getElements,
  });

  return query;
};
