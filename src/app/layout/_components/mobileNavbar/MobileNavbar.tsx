import { NavLink, useLocation } from 'react-router';

import { cn } from '@/utils/clsx';

import { navItems } from '../appSidebar/AppSidebarConstants';

export const MobileNavbar = () => {
  const { pathname } = useLocation();
  return (
    <nav className="fixed bottom-0 left-0 h-[55px] w-full flex flex-row shadow-[0px_3px_12px_0px_#00000014] bg-background">
      {navItems.map((item) => {
        const isActive = pathname === item.path;
        return (
          <NavLink
            key={item.path}
            className={cn(
              'py-[6px] w-[25%] text-[#837E7C] text-[12px] flex flex-col justify-center items-center',
              isActive && 'text-primary'
            )}
            to={item.path}
          >
            <item.icon
              className={cn('text-[#837E7C]', isActive && 'text-primary')}
            />
            <span>{item.title}</span>
          </NavLink>
        );
      })}
    </nav>
  );
};
