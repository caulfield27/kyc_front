import type { ReactElement } from 'react';

import type { IElement } from '@/services/processes/processesTypes';

import { useFlowStore } from '../../FlowStore';
import DocReaderProvider from '../docReader/DocReaderProvider';
import { DynamicField } from '../dynamicField/DynamicField';
import FaceScanProvider from '../faceRecognition/FaceScanProvider';

const component: { [key: string]: (data: IElement) => ReactElement } = {
  phone: (data) => <DynamicField data={data} />,
  doc_front: (data) => <DocReaderProvider process={data} />,
  liveness: (data) => <FaceScanProvider process={data} />,
  face_match: (data) => <FaceScanProvider process={data} />,
  doc_back: (data) => <DocReaderProvider process={data} />,
  extra_info: (data) => <DynamicField data={data} />,
  income: (data) => <DynamicField data={data} />,
  extra_doc: (data) => <DynamicField data={data} />,
};

const elements: IElement[] = [
  // {
  //   id: 1,
  //   page_id: 1,
  //   element_type_id: 1,
  //   element_type: {
  //     id: 1,
  //     name: 'Phone Input',
  //     is_full_page: false,
  //     created_at: '2025-10-03T11:01:00+05:00',
  //   },
  //   field_key: 'phone',
  //   title: 'Phone Number',
  //   required: true,
  //   options: null,
  //   order: 1,
  //   created_at: '2025-10-03T11:01:00+05:00',
  // },
  // {
  //   id: 2,
  //   page_id: 1,
  //   element_type_id: 2,
  //   element_type: {
  //     id: 2,
  //     name: 'Document Front',
  //     is_full_page: true,
  //     created_at: '2025-10-03T11:01:00+05:00',
  //   },
  //   field_key: 'doc_front',
  //   title: 'Document Front Side',
  //   required: true,
  //   options: null,
  //   order: 2,
  //   created_at: '2025-10-03T11:01:00+05:00',
  // },
  // {
  //   id: 3,
  //   page_id: 1,
  //   element_type_id: 3,
  //   element_type: {
  //     id: 3,
  //     name: 'Liveness Check',
  //     is_full_page: true,
  //     created_at: '2025-10-03T11:01:00+05:00',
  //   },
  //   field_key: 'liveness',
  //   title: 'Liveness Verification',
  //   required: true,
  //   options: null,
  //   order: 3,
  //   created_at: '2025-10-03T11:01:00+05:00',
  // },
  // {
  //   id: 4,
  //   page_id: 1,
  //   element_type_id: 4,
  //   element_type: {
  //     id: 4,
  //     name: 'Face Match',
  //     is_full_page: true,
  //     created_at: '2025-10-03T11:01:00+05:00',
  //   },
  //   field_key: 'face_match',
  //   title: 'Face Match Verification',
  //   required: true,
  //   options: null,
  //   order: 4,
  //   created_at: '2025-10-03T11:01:00+05:00',
  // },
  // {
  //   id: 5,
  //   page_id: 1,
  //   element_type_id: 5,
  //   element_type: {
  //     id: 5,
  //     name: 'Document Back',
  //     is_full_page: true,
  //     created_at: '2025-10-03T11:01:00+05:00',
  //   },
  //   field_key: 'doc_back',
  //   title: 'Document Back Side',
  //   required: true,
  //   options: null,
  //   order: 5,
  //   created_at: '2025-10-03T11:01:00+05:00',
  // },
  // {
  //   id: 6,
  //   page_id: 1,
  //   element_type_id: 6,
  //   element_type: {
  //     id: 6,
  //     name: 'Extra Info',
  //     is_full_page: false,
  //     created_at: '2025-10-03T11:01:00+05:00',
  //   },
  //   field_key: 'extra_info',
  //   title: 'Additional Information',
  //   required: false,
  //   options: null,
  //   order: 6,
  //   created_at: '2025-10-03T11:01:00+05:00',
  // },
  // {
  //   id: 7,
  //   page_id: 1,
  //   element_type_id: 7,
  //   element_type: {
  //     id: 7,
  //     name: 'Income Details',
  //     is_full_page: false,
  //     created_at: '2025-10-03T11:01:00+05:00',
  //   },
  //   field_key: 'income',
  //   title: 'Income Information',
  //   required: true,
  //   options: null,
  //   order: 7,
  //   created_at: '2025-10-03T11:01:00+05:00',
  // },
  // {
  //   id: 8,
  //   page_id: 1,
  //   element_type_id: 8,
  //   element_type: {
  //     id: 8,
  //     name: 'Extra Document',
  //     is_full_page: false,
  //     created_at: '2025-10-03T11:01:00+05:00',
  //   },
  //   field_key: 'extra_doc',
  //   title: 'Additional Document',
  //   required: false,
  //   options: null,
  //   order: 8,
  //   created_at: '2025-10-03T11:01:00+05:00',
  // },
  {
    id: 3,
    page_id: 1,
    element_type_id: 3,
    element_type: {
      id: 3,
      name: 'Liveness Check',
      is_full_page: true,
      created_at: '2025-10-03T11:01:00+05:00',
    },
    field_key: 'liveness',
    title: 'Liveness Verification',
    required: true,
    options: null,
    order: 3,
    created_at: '2025-10-03T11:01:00+05:00',
  },
];

export const ProcessStep = () => {
  const { validation, page } = useFlowStore();

  return (
    <div className="w-full pt-5 flex flex-col justify-start items-start gap-5.5">
      {elements.map((element) => {
        return (
          <div className="w-full" key={element.id}>
            <div className="w-full">
              {!!component[element.field_key] &&
                component[element.field_key](element)}
            </div>
            {!!validation[element.field_key] && (
              <span className="text-red-500 font-light text-[14px]">
                {validation[element.field_key]}
              </span>
            )}
          </div>
        );
      })}
    </div>
  );
};
