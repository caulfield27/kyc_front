import { useMutation } from '@tanstack/react-query';
import { login } from './authApi';
import { useNavigate } from 'react-router';
import { toast } from 'sonner';
import { toasterOptions } from '@/constants';

export function useLoginMutauion() {
  const navigate = useNavigate();
  const mutation = useMutation({
    mutationFn: login,
    onSuccess: (data) => {
      localStorage.setItem('access_token', data.access_token);
      toast.success('Вход выполнен успешно.', toasterOptions['success']);
      navigate('/');
    }
  });

  return mutation;
}