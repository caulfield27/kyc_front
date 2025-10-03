import { Building2, Home, NotepadText, Users } from 'lucide-react';

import type { INavLink } from './AppSidebarTypes';

export const navItems: INavLink[] = [
  {
    title: 'Кабинет',
    path: '/',
    icon: Home,
  },
  {
    title: 'Организация',
    path: '/org',
    icon: Building2,
  },
  {
    title: 'Заявки',
    path: '/applications',
    icon: NotepadText,
  },
  {
    title: 'Роли',
    path: '/roles',
    icon: Users,
  },
];
