import axios, { AxiosError } from 'axios';
import type { IResponseError } from './apiTypes';
import { toast } from 'sonner';
import { TOAST_LOADER_ID, toasterOptions } from '@/constants';
import { getToken } from '@/utils/getToken';

export const baseUrl = import.meta.env.VITE_BACKEND_URL;

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
    if (err.response?.status === 422 || err.response?.status === 401) {
      const errorMsg = Array.isArray(err?.response?.data?.detail)
        ? (err?.response?.data?.detail?.[0].msg ?? 'Ошибка запрса!')
        : (err?.response?.data?.detail ?? 'Ошибка запрса!');

      toast.dismiss(TOAST_LOADER_ID);
      toast.error(errorMsg, toasterOptions['error']);
    }

    return Promise.reject(err);
  }
);
