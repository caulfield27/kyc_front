import type { IElement } from '@/services/processes/processesTypes';
import { Button, Card, Label } from '@/ui';
import { cn } from '@/utils/clsx';

import { useFlowStore } from '../../FlowStore';

const FaceScanProvider = ({ process }: { process: IElement }) => {
  const { element_type, required, title } = process;
  const { name } = element_type;
  const { inputData, setLivenessOpen, resetValidation } = useFlowStore();

  return (
    <Card className="py-2.5 px-3.5">
      <div className="flex flex-row justify-between items-center">
        <span
          className={cn(required && 'after:content-["*"] after:text-[#ff0000]')}
        >
          {title}
        </span>
        {inputData[name] ? (
          <Label className="py-3">{`Совпадение - ${inputData[name] ?? 0}%`}</Label>
        ) : (
          <Button
            onClick={() => {
              resetValidation(name);
              setLivenessOpen(true);
            }}
          >
            Начать
          </Button>
        )}
      </div>
    </Card>
  );
};

export default FaceScanProvider;
