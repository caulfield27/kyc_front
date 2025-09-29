import { sendRequest } from '@/api/apiConfig';
import type { IProsess, ProcessData } from './processesTypes';
import { PROCESSES } from './processesConstants';

export async function getProcesses(): Promise<IProsess[]> {
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
