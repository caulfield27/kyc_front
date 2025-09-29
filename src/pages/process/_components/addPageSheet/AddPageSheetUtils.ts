import type { IAction } from '../../ProcessTypes';

export function swapById(
  array: IAction[],
  firstId: number,
  secondId: number
): IAction[] {
  let firstIdx = null,
    secondIdx = null;
  const updatedActions = [...array];

  for (let i = 0; i < updatedActions.length; i++) {
    const action = updatedActions[i];
    if (action.id === firstId || action.id === secondId) {
      if (firstIdx !== null) {
        secondIdx = i;
      } else {
        firstIdx = i;
      }
      if (firstIdx && secondIdx) break;
    }
  }

  if (firstIdx !== null && secondIdx !== null) {
    [updatedActions[firstIdx], updatedActions[secondIdx]] = [
      updatedActions[secondIdx],
      updatedActions[firstIdx],
    ];
  }

  return updatedActions;
}
