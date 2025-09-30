import { sendRequest } from '@/api/apiConfig';
import type { IElementType, IProcess, ProcessData } from './processesTypes';
import { ELEMENTS, PROCESS_BY_ID, PROCESSES, PUBLISH_PROCESS } from './processesConstants';

export async function getProcesses(): Promise<IProcess[]> {
  try {
    const response = await sendRequest.get(PROCESSES);
    return response.data;
  } catch (e) {
    throw e;
  }
}

export async function addProcess(data: ProcessData) {
  try {
    const response = await sendRequest.post(PROCESSES, data);
    return response.data;
  } catch (e) {
    throw e;
  }
}

export async function getProcessById(id: number): Promise<IProcess> {
  try {
    const response = await sendRequest.get(PROCESS_BY_ID(id));
    return response.data;
  } catch (e) {
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
    throw e;
  }
}

export async function getElements(): Promise<IElementType[]> {
  try {
    const response = await sendRequest.get(ELEMENTS);
    return response.data;
  } catch (e) {
    throw e;
  }
}

export async function publishProcess(id: number) {
  try {
    const response = await sendRequest.post(PUBLISH_PROCESS(id));
    return response.data;
  } catch (e) {
    throw e;
  }
}