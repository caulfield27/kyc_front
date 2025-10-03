import type {
  DragAbortEvent,
  DragCancelEvent,
  DragEndEvent,
  DragMoveEvent,
  DragOverEvent,
  DragPendingEvent,
  DragStartEvent,
} from '@dnd-kit/core';
import type { ReactNode } from 'react';

import type { IElement } from '@/services/processes/processesTypes';


interface Props {
  onDragStart?: (event: DragStartEvent) => void;
  onDragEnd?: (event: DragEndEvent) => void;
  onDragMove?: (event: DragMoveEvent) => void;
  onDragCancel?: (event: DragCancelEvent) => void;
  onDragOver?: (event: DragOverEvent) => void;
  onDragAbort?: (event: DragAbortEvent) => void;
  onDragPending?: (event: DragPendingEvent) => void;
  children: ReactNode;
  draggedItem: IElement | null;
}

export type { Props };
