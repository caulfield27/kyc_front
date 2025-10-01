import axios, { AxiosError } from 'axios';
import { toast } from 'sonner';

import { TOAST_LOADER_ID, toasterOptions } from '@/constants';
import { useFlowStore } from '@/pages/flow/FlowStore';
import { getToken } from '@/utils/getToken';

import type { IResponseError } from './apiTypes';

export const baseUrl = import.meta.env.VITE_BACKEND_URL;

// private axios instanse
export const sendRequest = axios.create({
  baseURL: baseUrl,
});

sendRequest.interceptors.request.use((request) => {
  request.headers['Authorization'] = `Bearer ${getToken() ?? ''}`;
  return request;
});

sendRequest.interceptors.response.use(
  (response) => {
    return response;
  },
  (err: AxiosError<IResponseError>) => {
    const status = err.response?.status;
    if (status === 422 || status === 401 || status === 403) {
      const errorMsg = Array.isArray(err?.response?.data?.detail)
        ? (err?.response?.data?.detail?.[0].msg ?? 'Ошибка запрса!')
        : (err?.response?.data?.detail ?? 'Ошибка запрса!');

      toast.dismiss(TOAST_LOADER_ID);
      toast.error(errorMsg, toasterOptions['error']);
    }

    if (status === 401) {
      localStorage.removeItem('access_token');
      window.location.href = '/login';
    }

    return Promise.reject(err);
  }
);

// public axios instanse
export const publicRequest = axios.create({
  baseURL: baseUrl,
});

publicRequest.interceptors.response.use(
  (response) => {
    return response;
  },
  (err: AxiosError<IResponseError>) => {
    const { setErrorState } = useFlowStore.getState();
    const errorMsg = Array.isArray(err?.response?.data?.detail)
      ? (err?.response?.data?.detail?.[0].msg ?? 'Неизвестная ошибка')
      : (err?.response?.data?.detail ?? 'Неизвестная ошибка');

    setErrorState({
      isError: true,
      errorMsg,
    });

    return Promise.reject(err);
  }
);
