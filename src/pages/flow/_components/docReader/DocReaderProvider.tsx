import type { IFileResponse } from '@/services/applications/applicationTypes';
import type { IElement } from '@/services/processes/processesTypes';
import { Button, Card } from '@/ui';
import { cn } from '@/utils/clsx';

import { useFlowStore } from '../../FlowStore';
import { FileInfo } from '../fileInfo/FileInfo';

const DocReaderProvider = ({ process }: { process: IElement }) => {
  const { field_key, title, required } = process;
  const { inputData, setDocReaderOpen, setPassportType, resetValidation } =
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
                if (field_key.endsWith('front')) {
                  setPassportType('front');
                } else {
                  setPassportType('back');
                }

                setDocReaderOpen(true);
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

export default DocReaderProvider;
