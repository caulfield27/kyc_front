import type { ReactElement } from 'react';

import type { IElement } from '@/services/processes/processesTypes';

import { useFlowStore } from '../../FlowStore';
import DocReaderProvider from '../docReader/DocReaderProvider';
import { DynamicField } from '../dynamicField/DynamicField';
import FaceScanProvider from '../faceRecognition/FaceScanProvider';

const component: { [key: string]: (data: IElement) => ReactElement } = {
  phone_otp: (data) => <DynamicField data={data} />,
  regula_ocr_front: (data) => <DocReaderProvider process={data} />,
  visionlabs_liveness: (data) => <FaceScanProvider process={data} />,
  visionlabs_face_match: (data) => <FaceScanProvider process={data} />,
  regula_ocr_back: (data) => <DocReaderProvider process={data} />,
  info_text: (data) => <DynamicField data={data} />,
  info_number: (data) => <DynamicField data={data} />,
  file_upload: (data) => <DynamicField data={data} />,
};

export const ProcessStep = () => {
  const { validation, page } = useFlowStore();

  return (
    <div className="w-full pt-5 flex flex-col justify-start items-start gap-5.5">
      {page?.elements.map((element) => {
        return (
          <div className="w-full" key={element.id}>
            <div className="w-full">
              {!!component[element.element_type.name] &&
                component[element.element_type.name](element)}
            </div>
            {!!validation[element.element_type.name] && (
              <span className="text-red-500 font-light text-[14px]">
                {validation[element.element_type.name]}
              </span>
            )}
          </div>
        );
      })}
    </div>
  );
};
