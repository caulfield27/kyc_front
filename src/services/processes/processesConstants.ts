export const PROCESSES = 'processes';
export const ELEMENTS = 'processes/element-types/';
export const PROCESS_BY_ID = (id: number) => `processes/${id}`;
export const PUBLISH_PROCESS = (id: number) => `processes/${id}/publish/`;
export const PROCESS_FORM = (slug: string, step: number) =>
  `processes/public/${slug}${step ? '?step=' + step : ''}`;

export const PROCESSES_KEY = {
  processes: 'processes',
  process: 'process_by_id',
  elements: 'element-types',
  publishProcess: 'publish_process',
  process_form: 'process_form',
};
