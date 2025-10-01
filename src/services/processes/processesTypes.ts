import type { IOrganizationData } from '../organization/organizationTypes';

export interface IPage {
  id?: number;
  process_id?: number;
  title: string;
  order: number;
  elements: IElement[];
  created_at?: string;
}

export interface IElementType {
  id: number;
  name: string;
  is_full_page: boolean;
  created_at: string;
}

export interface IElement {
  id?: number;
  page_id?: number;
  element_type_id?: number;
  element_type: IElementType;
  field_key: string;
  title: string;
  required: boolean;
  options?: null;
  order: number;
  created_at?: string;
}

export interface IProcess {
  id: number;
  name: string;
  slug: string;
  published: boolean;
  organization_id: number;
  pages: IPage[];
  created_at: string;
  published_at: string;
}

export interface IProcessFormResponse {
  process: IProcess;
  organization: IOrganizationData;
  pages: IPage[];
  step: number;
  total: number;
  current_page: IPage;
}

export type ProcessData = Pick<IProcess, 'name' | 'pages'>;
