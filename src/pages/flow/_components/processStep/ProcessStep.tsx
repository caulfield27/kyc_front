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

export const ProcessStep = () => {
  const { validation, page } = useFlowStore();

  return (
    <div className="w-full pt-5 flex flex-col justify-start items-start gap-5.5">
      {page?.elements.map((element) => {
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
