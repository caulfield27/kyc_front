import { useMutation, useQuery } from '@tanstack/react-query';
import { addProcess, getProcesses } from './processesApi';
import { toast } from 'sonner';
import { TOAST_LOADER_ID, toasterOptions } from '@/constants';
import { PROCESSES_KEY } from './processesConstants';

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
