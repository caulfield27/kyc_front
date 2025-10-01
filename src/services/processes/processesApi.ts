import { publicRequest, sendRequest } from '@/api/apiConfig';

import {
  ELEMENTS,
  PROCESS_BY_ID,
  PROCESS_FORM,
  PROCESSES,
  PUBLISH_PROCESS,
} from './processesConstants';
import type {
  IElementType,
  IProcess,
  IProcessFormResponse,
  ProcessData,
} from './processesTypes';

export async function getProcesses(): Promise<IProcess[]> {
  try {
    const response = await sendRequest.get(PROCESSES);
    return response.data;
  } catch (e) {
    console.error(e);
    throw e;
  }
}

export async function addProcess(data: ProcessData) {
  try {
    const response = await sendRequest.post(PROCESSES, data);
    return response.data;
  } catch (e) {
    console.error(e);
    throw e;
  }
}

export async function getProcessById(id: number): Promise<IProcess> {
  try {
    const response = await sendRequest.get(PROCESS_BY_ID(id));
    return response.data;
  } catch (e) {
    console.error(e);
    throw e;
  }
}

export async function updateProcessById(
  id: number,
  data: ProcessData
): Promise<IProcess> {
  try {
    const response = await sendRequest.put(PROCESS_BY_ID(id), data);
    return response.data;
  } catch (e) {
    console.error(e);
    throw e;
  }
}

export async function getElements(): Promise<IElementType[]> {
  try {
    const response = await sendRequest.get(ELEMENTS);
    return response.data;
  } catch (e) {
    console.error(e);
    throw e;
  }
}

export async function publishProcess(id: number) {
  try {
    const response = await sendRequest.post(PUBLISH_PROCESS(id));
    return response.data;
  } catch (e) {
    console.error(e);
    throw e;
  }
}

export async function getProcessForm(
  slug: string,
  step: number
): Promise<IProcessFormResponse> {
  try {
    const response = await publicRequest.get(PROCESS_FORM(slug, step));
    return response.data;
  } catch (e) {
    console.error(e);
    throw e;
  }
}
