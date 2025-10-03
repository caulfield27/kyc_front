import type { ApplyStatus } from './applicationTypes';

export const SUBMISSIONS = (status: ApplyStatus) =>
  `submissions${status ? '&status_filter=' + status : ''}`;
export const SUBMISSION_BY_ID = (id: number) => `submissions/${id}`;
export const UPDATE_SUBMISSION = (status_id: number) =>
  `submissions/${status_id}/status`;
export const SUBMIT_FORM = (slug: string) => `submissions/public/${slug}`;
export const UPLOAD_FILE = 'submissions/upload-file/';
export const GET_FILE = (id: number) => `submissions/files/${id}`;

export const SUBMISSIONS_KEY = {
  submissions: 'submissions',
  submission_by_id: 'submission_by_id',
};
