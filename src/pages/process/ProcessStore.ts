import { create } from 'zustand';

import type {
  IElement,
  IPage,
  IProcess,
} from '@/services/processes/processesTypes';

interface IStates {
  currentProcess: IProcess | null;
  currentPage: IPage | null;
}

type Actions = {
  setPages: (newPage: IPage) => void;
  updateCurrentProcess: (process: IProcess, successCb?: () => void) => void;
  setCurrentProcess: (process: IProcess) => void;
  setCurrentPage: (page: IPage) => void;
  removePage: (id: number) => void;
  updateElements: (newAction: IElement[]) => void;
  removeElement: (order: number) => void;
  updateElement: (
    order: number,
    newAction: IElement,
    successCb?: () => void
  ) => void;
  updatePageName: (name: string) => void;
};

const initialStates: IStates = {
  currentProcess: null,
  currentPage: null,
};

export const useProcessStore = create<IStates & Actions>((set, get) => ({
  ...initialStates,
  updatePageName: (value) => {
    const { currentPage, currentProcess } = get();
    if (currentPage && currentProcess) {
      currentPage.title = value;
      const updatedProcess = {
        ...currentProcess,
        pages: currentProcess.pages.map((page) =>
          page.id === currentPage.id ? currentPage : page
        ),
      };
      set({
        currentPage: currentPage,
        currentProcess: updatedProcess,
      });
    }
  },
  setPages: (newPage) => {
    const { currentProcess } = get();
    if (currentProcess) {
      currentProcess.pages = [...currentProcess.pages, newPage];
      set({ currentProcess: currentProcess });
    }
  },
  updateCurrentProcess: (process, cb) => {
    cb && cb();
    set({ currentProcess: process });
  },
  setCurrentPage: (page) => set({ currentPage: page }),
  setCurrentProcess: (process) => set({ currentProcess: process }),
  removePage: (id) => {
    const { currentProcess, currentPage } = get();
    if (currentProcess) {
      const updatedProcess = {
        ...currentProcess,
        pages: currentProcess.pages.filter((page) => page.id !== id),
      };
      set({ currentProcess: updatedProcess });
      if (currentPage?.id === id) {
        set({
          currentPage: updatedProcess.pages[updatedProcess.pages.length - 1],
        });
      }
    }
  },
  updateElements: (elements) => {
    const { currentPage, currentProcess } = get();
    if (currentPage && currentProcess) {
      const updatedPage = {
        ...currentPage,
        elements: elements,
      };
      const updatedProcess = {
        ...currentProcess,
        pages: currentProcess.pages.map((page) => {
          if (page.id === currentPage.id) return updatedPage;
          return page;
        }),
      };
      set({
        currentPage: updatedPage,
        currentProcess: updatedProcess,
      });
    }
  },
  removeElement: (order) => {
    const { currentPage, currentProcess } = get();
    if (currentPage && currentProcess) {
      const filteredElements = currentPage.elements.filter(
        (elem) => elem.order !== order
      );
      const updatedPage = { ...currentPage, elements: filteredElements };
      const updatedProcess = {
        ...currentProcess,
        pages: currentProcess.pages.map((page) =>
          page.id === currentPage.id ? updatedPage : page
        ),
      };
      set({
        currentPage: updatedPage,
        currentProcess: updatedProcess,
      });
    }
  },
  updateElement: (order, newElem, cb) => {
    const { currentPage, currentProcess } = get();
    if (currentPage && currentProcess) {
      const updatedElements = currentPage.elements.map((elem) =>
        elem.order === order ? newElem : elem
      );
      const updatedPage = { ...currentPage, elements: updatedElements };
      const updatedProcess = {
        ...currentProcess,
        pages: currentProcess.pages.map((page) =>
          page.id === currentPage.id ? updatedPage : page
        ),
      };

      cb && cb();
      set({
        currentPage: updatedPage,
        currentProcess: updatedProcess,
      });
    }
  },
}));
