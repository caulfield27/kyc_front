import type {
  IElement,
  IElementType,
} from '@/services/processes/processesTypes';
import { useElements } from '@/services/processes/useProcesses';
import { DataLoader } from '@/ui';
import { memo, type Dispatch, type SetStateAction } from 'react';
import { elementsDetails } from '../../ProcessContants';
import { cn } from '@/utils/clsx';
import { Plus } from 'lucide-react';

export const ElementsList = memo(
  ({
    setElements,
    curElements,
  }: {
    setElements: Dispatch<SetStateAction<IElement[]>>;
    curElements: IElement[];
  }) => {
    const { isPending, data: elements } = useElements();

    function handleAddElement(element: IElementType) {
      const newElement: IElement = {
        element_type: element,
        field_key: element.name,
        title: elementsDetails[element.name].title ?? '',
        element_type_id: elementsDetails[element.name].element_type_id ?? 0,
        required: true,
        order: curElements.length,
      };
      setElements((prev) => [...prev, newElement]);
    }

    return isPending ? (
      <DataLoader size="m" />
    ) : (
      <div className="flex flex-col gap-2">
        {elements?.map((element) => {
          return (
            <div
              role="button"
              onClick={() => handleAddElement(element)}
              key={element.id}
              className={cn(
                'flex cursor-pointer items-center justify-center w-full py-2 px-3 bg-[#fff] rounded-[8px]  border border-[#D1D1D1]'
              )}
            >
              <div className="w-full flex flex-row justify-start items-center  gap-2">
                <Plus />
                <span className="text-[16px] font-semibold">
                  {element.name}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
);
