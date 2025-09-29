import type {
  DragEndEvent,
  DragMoveEvent,
  DragOverEvent,
  DragStartEvent,
} from '@dnd-kit/core';
import { Plus } from 'lucide-react';
import { useState } from 'react';
import { toast } from 'sonner';

import { toasterOptions } from '@/constants';
import { cn } from '@/utils/clsx';
import { useProcessStore } from '@/store';
import type { IPage } from '@/store/process/processStoreTypes';
import {
  Button,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
} from '@/ui';

import { actions } from '../../ProcessContants';
import type { IAction } from '../../ProcessTypes';
import { DNDContextWrapper } from '../dndContext/DndContextWrapper';
import { Draggable } from '../draggable/Draggable';
import { ElementCard } from '../elementCard/ElementCard';
import { swapById } from './AddPageSheetUtils';

const AddPageSheet = ({ page }: { page: IPage }) => {
  // zustand store states
  const updateActions = useProcessStore((state) => state.updateActions);

  // locel states
  const [currentActions, setCurrentActions] = useState<IAction[]>(page.actions);
  const [draggedItem, setDraggedItem] = useState<IAction | null>(null);
  const [overItem, setOverItem] = useState<IAction | null>(null);

  // event handlers
  function handleDragStart(event: DragStartEvent) {
    const { id } = event.active;
    const dragged = currentActions.find((action) => action.id === id);
    setDraggedItem(dragged ?? null);
  }

  function handleDragEnd(event: DragEndEvent) {
    const id = event.over?.id;
    if (id) {
      const swapped = swapById(
        currentActions,
        draggedItem?.id ?? 0,
        id as number
      );
      setCurrentActions(swapped);
    }

    setDraggedItem(null);
    setOverItem(null);
  }

  function handleDragOver(event: DragOverEvent) {
    if (draggedItem?.id === event.over?.id) return;

    if (event.over?.id) {
      const overElem = currentActions.find(
        (action) => action.id === event.over?.id
      );
      setOverItem(overElem ?? null);
    }
  }

  function handleDragMove(event: DragMoveEvent) {
    if (!event.over?.id) {
      setOverItem(null);
    }
  }
  return (
    <SheetContent className="w-fit sm:max-w-none">
      <SheetHeader>
        <SheetTitle>Добавить элементы</SheetTitle>
      </SheetHeader>
      <div className="px-3.5 flex flex-col gap-5 h-[90vh] overflow-y-auto">
        <div className="flex flex-row gap-8">
          <div className="w-[190px] flex flex-col gap-3">
            <span className="text-[16px] font-semibold">Выберите элементы</span>
            <div className="flex flex-col gap-2">
              {actions.map((action) => {
                return (
                  <div
                    role="button"
                    onClick={() =>
                      setCurrentActions((prev) => [
                        ...prev,
                        { ...action, id: Date.now() },
                      ])
                    }
                    key={action.code}
                    className={cn(
                      'flex cursor-pointer items-center justify-center w-full py-2 px-3 bg-[#fff] rounded-[8px]  border border-[#D1D1D1]'
                    )}
                  >
                    <div className="w-full flex flex-row justify-start items-center  gap-2">
                      <Plus />
                      <span className="text-[16px] font-semibold">
                        {action.label}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="w-[530px] flex flex-col gap-3">
            <span className="text-[16px] font-semibold">{`Элементы страницы: ${page.name}`}</span>
            <div className="flex flex-col p-3 bg-background rounded-[8px] gap-2">
              <DNDContextWrapper
                draggedItem={draggedItem}
                onDragStart={handleDragStart}
                onDragEnd={handleDragEnd}
                onDragOver={handleDragOver}
                onDragMove={handleDragMove}
              >
                {currentActions.length ? (
                  currentActions.map((action, idx) => {
                    return overItem && draggedItem?.id === action.id ? (
                      <ElementCard
                        showDragIcon={true}
                        isDraggable={true}
                        isStatic
                        key={action.id}
                        action={overItem}
                        position={idx + 1}
                      />
                    ) : (
                      <Draggable
                        key={action.code + idx}
                        action={action}
                        position={idx + 1}
                      />
                    );
                  })
                ) : (
                  <div className="bg-white  p-2.5 rounded-[8px] flex justify-center items-center">
                    <span>У страницы пока нет элементов</span>
                  </div>
                )}
              </DNDContextWrapper>
            </div>
          </div>
        </div>
      </div>
      <SheetFooter className="flex flex-row">
        <SheetClose asChild>
          <Button
            onClick={() => {
              updateActions(currentActions);
              toast.success(
                'Изменения успешно сохранены.',
                toasterOptions['success']
              );
            }}
          >
            Сохранить
          </Button>
        </SheetClose>
        <SheetClose asChild>
          <Button variant="outline">Отмена</Button>
        </SheetClose>
      </SheetFooter>
    </SheetContent>
  );
};

export default AddPageSheet;
