export interface IPage {
  id: number;
  process_id: number;
  title: string;
  order: number;
  elements: IElement[];
  created_at: string;
}

export interface IElement {
  id: number;
  page_id: number;
  element_type_id: number;
  element_type: {
    id: number;
    name : string;
    is_full_page: boolean;
    created_at: string;
  }
  field_key: string;
  title: string;
  required: boolean;
  options: null;
  order : number;
  created_at: string;
}

export interface IProsess {
  id: number;
  name: string;
  slug: string;
  published: boolean;
  organization_id: number;
  pages: IPage[];
  created_at: string;
  published_at: string;
}

export type ProcessData = Pick<IProsess, 'name' | 'pages'>;
