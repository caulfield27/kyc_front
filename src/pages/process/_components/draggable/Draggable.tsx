import { useDraggable } from '@dnd-kit/core';
import { CSS } from '@dnd-kit/utilities';

import { Droppable } from '../droppable/Droppable';
import { ElementCard } from '../elementCard/ElementCard';
import type { Props } from './DraggableTypes';
import { memo } from 'react';

export const Draggable = memo((props: Props) => {
  const { element, position, setElements } = props;
  const { attributes, listeners, transform, setNodeRef } = useDraggable({
    id: element.order,
  });

  const style = transform
    ? {
        transform: CSS.Transform.toString(transform),
        visibility: 'hidden' as const,
      }
    : {
        userSelect: 'none' as const,
      };

  return (
    <div ref={setNodeRef} style={style}>
      <Droppable id={element.order}>
        <ElementCard
          showDragIcon
          isDraggable={true}
          element={element}
          position={position}
          attributes={attributes}
          listeners={listeners}
          onElementDelete={(order) =>
            setElements((prev) => prev.filter((elem) => elem.order !== order))
          }
        />
      </Droppable>
    </div>
  );
});
