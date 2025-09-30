import type { IElement } from '@/services/processes/processesTypes';

export function swapById(
  array: IElement[],
  firstOrder: number,
  secondOrder: number
): IElement[] {
  let firstIdx = null,
    secondIdx = null;
  const updatedElements = [...array];

  for (let i = 0; i < updatedElements.length; i++) {
    const element = updatedElements[i];
    if (element.order === firstOrder || element.order === secondOrder) {
      if (firstIdx !== null) {
        secondIdx = i;
      } else {
        firstIdx = i;
      }
      if (firstIdx && secondIdx) break;
    }
  }

  if (firstIdx !== null && secondIdx !== null) {
    const temp = updatedElements[firstIdx].order;
    updatedElements[firstIdx].order = updatedElements[secondIdx].order;
    updatedElements[secondIdx].order = temp;
    [updatedElements[firstIdx], updatedElements[secondIdx]] = [
      updatedElements[secondIdx],
      updatedElements[firstIdx],
    ];
  }

  return updatedElements;
}
