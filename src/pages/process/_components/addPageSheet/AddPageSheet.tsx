import type {
  DragEndEvent,
  DragMoveEvent,
  DragOverEvent,
  DragStartEvent,
} from '@dnd-kit/core';
import { useCallback, useState } from 'react';
import { toast } from 'sonner';

import { toasterOptions } from '@/constants';
import type { IElement, IPage } from '@/services/processes/processesTypes';
import {
  Button,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
} from '@/ui';

import { useProcessStore } from '../../ProcessStore';
import { DNDContextWrapper } from '../dndContext/DndContextWrapper';
import { Draggable } from '../draggable/Draggable';
import { ElementCard } from '../elementCard/ElementCard';
import { ElementsList } from '../elementsList/ElementsList';
import { swapById } from './AddPageSheetUtils';

export const AddPageSheet = ({ page }: { page: IPage }) => {
  // zustand store states
  const updateActions = useProcessStore((state) => state.updateElements);

  // locel states
  const [currentElements, setCurrentElements] = useState<IElement[]>(
    page.elements
  );
  const [draggedItem, setDraggedItem] = useState<IElement | null>(null);
  const [overItem, setOverItem] = useState<IElement | null>(null);

  // event handlers
  const handleDragStart = useCallback(
    (event: DragStartEvent) => {
      const { id } = event.active;
      const dragged = currentElements.find((element) => element.order === id);
      setDraggedItem(dragged ?? null);
    },
    [currentElements]
  );

  const handleDragEnd = useCallback(
    (event: DragEndEvent) => {
      const id = event.over?.id;
      if (id !== undefined) {
        const swapped = swapById(
          currentElements,
          draggedItem?.order ?? 0,
          id as number
        );
        setCurrentElements(swapped);
      }

      setDraggedItem(null);
      setOverItem(null);
    },
    [draggedItem]
  );

  const handleDragOver = useCallback(
    (event: DragOverEvent) => {
      if (draggedItem?.order === event.over?.id) return;

      if (event.over?.id !== undefined) {
        const overElem = currentElements.find(
          (element) => element.order === event.over?.id
        );
        setOverItem(overElem ?? null);
      }
    },
    [draggedItem, currentElements]
  );

  const handleDragMove = useCallback((event: DragMoveEvent) => {
    if (!(event.over?.id !== undefined)) {
      setOverItem(null);
    }
  }, []);

  return (
    <SheetContent className="w-fit sm:max-w-none">
      <SheetHeader>
        <SheetTitle>Добавить элементы</SheetTitle>
      </SheetHeader>
      <div className="px-3.5 flex flex-col gap-5 h-[90vh] overflow-y-auto">
        <div className="flex flex-row gap-8">
          <div className="w-[190px] flex flex-col gap-3">
            <span className="text-[16px] font-semibold">Выберите элементы</span>
            <ElementsList
              curElements={currentElements}
              setElements={setCurrentElements}
            />
          </div>
          <div className="w-[530px] flex flex-col gap-3">
            <span className="text-[16px] font-semibold">{`Элементы страницы: ${page.title}`}</span>
            <div className="flex flex-col p-3 bg-background rounded-[8px] gap-2">
              <DNDContextWrapper
                draggedItem={draggedItem}
                onDragStart={handleDragStart}
                onDragEnd={handleDragEnd}
                onDragOver={handleDragOver}
                onDragMove={handleDragMove}
              >
                {currentElements.length ? (
                  currentElements.map((element) => {
                    return overItem && draggedItem?.order === element.order ? (
                      <ElementCard
                        showDragIcon={true}
                        isDraggable={true}
                        isStatic
                        key={element.title}
                        element={overItem}
                        position={element.order + 1}
                      />
                    ) : (
                      <Draggable
                        key={element.title}
                        element={element}
                        position={element.order + 1}
                        setElements={setCurrentElements}
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
              updateActions(currentElements);
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
