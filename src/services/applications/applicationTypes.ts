import type { IProcess } from '../processes/processesTypes';

export type ApplyStatus =
  | ''
  | 'new'
  | 'processing'
  | 'in_review'
  | 'approved'
  | 'rejected';

export interface IApplication {
  id: number;
  process_id: number;
  process: IProcess;
  status: ApplyStatus;
  fields: IApplyField[];
  files: IApplyFile[];
  created_at: string;
  updated_at: string;
}

export interface IApplyField {
  id: number;
  submission_id: number;
  field_key: string;
  field_value: string;
  created_at: string;
}

export interface IApplyFile {
  id: number;
  submission_id: number;
  field_key: string;
  filename: string;
  mimetype: string | null;
  size_bytes: string | null;
  created_at: string;
}

export interface ISubmitData {
  step: number;
  data: { [key: string]: unknown };
  is_final: boolean;
  submission_id?: number;
}

export interface ISubmitResponse {
  success: boolean;
  message: string;
  next_step: number | null;
  total_steps: number;
  submission_id: number;
  redirect_url: string;
}

export interface IFile {
  field_key: string;
  filename: string;
  content: string;
  is_integration_result: boolean;
  slug: string;
  submission_id?: number;
}

export interface IFileResponse {
  file_id: number;
  field_key: string;
  filename: string;
  mimetype: string;
  size_bytes: number;
  message: string;
  submission_id: number;
}

export type IDownloadFileData = Pick<IFileResponse, 'filename'>;
