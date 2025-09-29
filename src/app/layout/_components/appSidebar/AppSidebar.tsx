import { LogOut } from 'lucide-react';
import { NavLink, useLocation, useNavigate } from 'react-router';

import { cn } from '@/lib/utils';
import { useGlobalStore } from '@/store';
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
} from '@/ui';

import { navItems } from './AppSidebarConstants';

export function AppSidebar() {
  const navigate = useNavigate();
  const { organization } = useGlobalStore();
  const { pathname } = useLocation();
  return (
    <Sidebar>
      <SidebarHeader>
        <span className="font-[900] text-[32px] text-primary ">KYC</span>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {navItems.map((link) => {
                const isActive = pathname === link.path;
                return (
                  <NavLink
                    key={link.path}
                    className={cn(
                      'py-[10px] px-[16px] text-[#434343] text-[16px] flex flex-row justify-start items-center gap-3 rounded-[8px]',
                      isActive && 'bg-primary text-white'
                    )}
                    to={link.path}
                  >
                    <link.icon color={isActive ? 'white' : '#434343'} />
                    <span>{link.title}</span>
                  </NavLink>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <div className="flex flex-row items-center justify-between">
          <div className="flex flex-row justify-center items-center  gap-2">
            <Avatar>
              {organization.logo ? (
                <AvatarImage src={organization.logo} />
              ) : (
                <AvatarFallback>
                  {organization.name.slice(0, 2).toUpperCase()}
                </AvatarFallback>
              )}
            </Avatar>
            <span className="font-semibold">{organization.name}</span>
          </div>
          <button
            onClick={() => navigate('/login')}
            className="outline-0 border-0 bg-none cursor-pointer"
          >
            <LogOut />
          </button>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}
