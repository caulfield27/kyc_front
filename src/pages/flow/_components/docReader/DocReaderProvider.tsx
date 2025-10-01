import type { IElement } from '@/services/processes/processesTypes';
import { Button, Card, Label } from '@/ui';
import { cn } from '@/utils/clsx';

import { useFlowStore } from '../../FlowStore';

const DocReaderProvider = ({ process }: { process: IElement }) => {
  const { element_type, title, required } = process;
  const { inputData, setDocReaderOpen, setPassportType, resetValidation } =
    useFlowStore();
  const { name } = element_type;

  if (inputData[name]) {
    return (
      <div className="flex flex-col gap-3 max-w-[500px]">
        <Label
          className={cn(required && 'after:content-["*"] after:text-[#ff0000]')}
        >
          {title}
        </Label>
        <img
          className="rounded-2xl"
          src={`data:image/png;base64,${inputData[name]}`}
          alt={title}
        />
      </div>
    );
  }

  return (
    <Card className="py-2.5 px-3.5">
      <div className="flex flex-row justify-between items-center">
        <span
          className={cn(required && 'after:content-["*"] after:text-[#ff0000]')}
        >
          {title}
        </span>
        <Button
          onClick={() => {
            resetValidation(name);
            if (name.endsWith('front')) {
              setPassportType('front');
            } else {
              setPassportType('back');
            }

            setDocReaderOpen(true);
          }}
        >
          Начать
        </Button>
      </div>
    </Card>
  );
};

export default DocReaderProvider;
