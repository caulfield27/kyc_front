import type { IElement } from "@/services/processes/processesTypes";
import type { Dispatch, SetStateAction } from "react";

interface Props {
  element: IElement;
  position: number;
  setElements: Dispatch<SetStateAction<IElement[]>>
}

export type { Props };
