import { create } from 'zustand';

import type { IAction } from '@/pages/process/ProcessTypes';

import type { IPage, IProcess } from './processStoreTypes';

interface IStates {
  processes: IProcess[];
  currentProcess: IProcess | null;
  currentPage: IPage | null;
}

type Actions = {
  setPages: (newPage: IPage) => void;
  updateCurrentProcess: (process: IProcess, successCb?: () => void) => void;
  updateProcesses: (id: number, successCb?: () => void) => void;
  addProcess: (newProcess: IProcess) => void;
  setCurrentProcess: (process: IProcess) => void;
  setCurrentPage: (page: IPage) => void;
  removePage: (id: number) => void;
  updateActions: (newAction: IAction[]) => void;
  removeAction: (id: number) => void;
  updateAction: (
    id: number,
    newAction: IAction,
    successCb?: () => void
  ) => void;
  updatePageName: (name: string) => void;
};

const initialStates: IStates = {
  processes: [],
  currentProcess: null,
  currentPage: null,
};

export const useProcessStore = create<IStates & Actions>((set, get) => ({
  ...initialStates,
  updatePageName: (value) => {
    const { currentPage, currentProcess } = get();
    if (currentPage && currentProcess) {
      currentPage.name = value;
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
  updateProcesses: (id, cb) => {
    const { currentProcess, processes } = get();
    const updatedProcesses = processes.map((process) =>
      process.id === id ? (currentProcess ?? process) : process
    );

    cb && cb();
    set({ processes: updatedProcesses });
  },
  updateCurrentProcess: (process, cb) => {
    cb && cb();
    set({ currentProcess: process });
  },
  addProcess: (process) =>
    set((state) => ({ processes: [...state.processes, process] })),
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
  updateActions: (actions) => {
    const { currentPage, currentProcess } = get();
    if (currentPage && currentProcess) {
      const updatedPage = {
        ...currentPage,
        actions: actions,
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
  removeAction: (id) => {
    const { currentPage, currentProcess } = get();
    if (currentPage && currentProcess) {
      const filteredActions = currentPage.actions.filter(
        (action) => action.id !== id
      );
      const updatedPage = { ...currentPage, actions: filteredActions };
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
  updateAction: (id, newAction, cb) => {
    const { currentPage, currentProcess } = get();
    if (currentPage && currentProcess) {
      const updatedActions = currentPage.actions.map((action) =>
        action.id === id ? newAction : action
      );
      const updatedPage = { ...currentPage, actions: updatedActions };
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
