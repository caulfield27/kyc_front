import { create } from 'zustand';

import type { IOrganizarionInfo } from './globalStoreTypes';
import type { IUser } from '@/services/auth/authTypes';

interface IStates {
  organization: IOrganizarionInfo;
  user: IUser | null;
}

type Actions = {
  updateOrgName: (name: string) => void;
  updateOrgLogo: (blob: string | null) => void;
  addDomen: (domen: string) => void;
  updateDomen: (value: string) => void;
  setUser: (user: IUser) => void;
};

const initialStates: IStates = {
  organization: {
    name: 'Хумо',
    logo: null,
    domens: [],
  },
  user: null
};

export const useGlobalStore = create<IStates & Actions>((set, get) => ({
  ...initialStates,
  updateOrgLogo: (blob) =>
    set((state) => ({ organization: { ...state.organization, logo: blob } })),
  updateOrgName: (name) =>
    set((state) => ({ organization: { ...state.organization, name: name } })),
  addDomen: (domen) =>
    set((state) => ({
      organization: {
        ...state.organization,
        domens: [
          ...state.organization.domens,
          { value: domen, isValid: false },
        ],
      },
    })),

  updateDomen: (value) => {
    const { organization } = get();
    const updatedDomens = organization.domens.map((domen) =>
      domen.value === value ? { ...domen, isValid: true } : domen
    );
    set({
      organization: { ...organization, domens: updatedDomens },
    });
  },
  setUser: (user) => set({user: user})
}));
