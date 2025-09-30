import type { DraggableAttributes } from '@dnd-kit/core';
import type { SyntheticListenerMap } from '@dnd-kit/core/dist/hooks/utilities';


import type { IElement } from '@/services/processes/processesTypes';

interface IComponentProps {
  element: IElement;
  position: number;
  listeners?: SyntheticListenerMap | undefined;
  attributes?: DraggableAttributes;
  isStatic?: boolean;
  isDraggable?: boolean;
  onElementDelete?: (order: number) => void;
  showDragIcon?: boolean;
}

export type { IComponentProps };
