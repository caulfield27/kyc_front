import { publicRequest, sendRequest } from '@/api/apiConfig';

import {
  GET_FILE,
  SUBMISSION_BY_ID,
  SUBMISSIONS,
  SUBMIT_FORM,
  UPDATE_SUBMISSION,
  UPLOAD_FILE,
} from './applicationConstants';
import type {
  ApplyStatus,
  IApplication,
  IDownloadFileData,
  IFile,
  IFileResponse,
  ISubmitData,
  ISubmitResponse,
} from './applicationTypes';

export async function getSubmissions(
  status: ApplyStatus
): Promise<IApplication[]> {
  try {
    const response = await sendRequest.get(SUBMISSIONS(status));
    return response.data;
  } catch (e) {
    console.error(e);
    throw e;
  }
}

export async function getSubmissionById(id: number): Promise<IApplication> {
  try {
    const response = await sendRequest.get(SUBMISSION_BY_ID(id));
    return response.data;
  } catch (e) {
    console.error(e);
    throw e;
  }
}

export async function updateSubmissionStatus(data: {
  id: number;
  status: ApplyStatus;
}) {
  try {
    const { id, status } = data;
    const response = await sendRequest.put(UPDATE_SUBMISSION(id), { status });
    return response.data;
  } catch (e) {
    console.error(e);
    throw e;
  }
}

export async function getFile(
  data: IDownloadFileData & { id: number }
): Promise<{ filename: string; blob: Blob }> {
  try {
    const response = await sendRequest.get(GET_FILE(data.id), {
      responseType: 'blob',
    });
    return {
      filename: data.filename,
      blob: response.data,
    };
  } catch (e) {
    console.error(e);
    throw e;
  }
}

export async function submitPublicForm(
  data: ISubmitData,
  slug: string
): Promise<ISubmitResponse> {
  try {
    const response = await publicRequest.post(SUBMIT_FORM(slug), data);
    return response.data;
  } catch (e) {
    console.error(e);
    throw e;
  }
}

export async function uploadFile(data: IFile): Promise<IFileResponse> {
  try {
    const response = await publicRequest.post(UPLOAD_FILE, data);
    return response.data;
  } catch (e) {
    console.error(e);
    throw e;
  }
}
