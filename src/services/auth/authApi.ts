import { sendRequest } from '@/api/apiConfig';
import type { ILoginData, ILoginResponse } from './authTypes';
import { useGlobalStore } from '@/store';
import { LOGIN, ME } from './authConstants';

export async function login(data: ILoginData): Promise<ILoginResponse> {
  try {
    const response = await sendRequest.post(LOGIN, data);
    return response.data;
  } catch (e) {
    throw e;
  }
}

export async function getMe() {
  try {
    const { setUser } = useGlobalStore.getState();
    const response = await sendRequest.get(ME);
    setUser(response.data);
  } catch (e) {
    console.error(e);
  }
}
