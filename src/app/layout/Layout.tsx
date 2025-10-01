import { Suspense, useEffect } from 'react';
import { Outlet } from 'react-router';

import { getMe } from '@/services/auth';
import { SidebarProvider, SidebarTrigger } from '@/ui';
import { Loader } from '@/ui/loader/Loader';

import { PrivateRoutes } from '../providers';
import { AppSidebar } from './_components';

const Layout = () => {
  useEffect(() => {
    getMe();
  }, []);

  return (
    <SidebarProvider>
      <AppSidebar />
      <div className="w-full">
        <SidebarTrigger />
        <main className="w-full px-[28px]">
          <Suspense fallback={<Loader />}>
            <PrivateRoutes>
              <Outlet />
            </PrivateRoutes>
          </Suspense>
        </main>
      </div>
    </SidebarProvider>
  );
};

export default Layout;
