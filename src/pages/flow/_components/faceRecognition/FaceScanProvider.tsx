import type { IFileResponse } from '@/services/applications/applicationTypes';
import type { IElement } from '@/services/processes/processesTypes';
import { Button, Card } from '@/ui';
import { cn } from '@/utils/clsx';

import { useFlowStore } from '../../FlowStore';
import type { VisionlabsType } from '../../FlowTypes';
import { FileInfo } from '../fileInfo/FileInfo';

const FaceScanProvider = ({ process }: { process: IElement }) => {
  const { field_key, required, title } = process;
  const { inputData, setLivenessOpen, resetValidation, setVisionType } =
    useFlowStore();
  const data = inputData[field_key] as IFileResponse | undefined;

  return (
    <Card className="py-2.5 px-3.5">
      <div className="flex flex-row justify-between items-center">
        {data ? (
          <FileInfo data={data} />
        ) : (
          <>
            <span
              className={cn(
                required && 'after:content-["*"] after:text-[#ff0000]'
              )}
            >
              {title}
            </span>
            <Button
              onClick={() => {
                resetValidation(field_key);
                setVisionType(field_key as VisionlabsType);
                setLivenessOpen(true);
              }}
            >
              Начать
            </Button>
          </>
        )}
      </div>
    </Card>
  );
};

export default FaceScanProvider;
