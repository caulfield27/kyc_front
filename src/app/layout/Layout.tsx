import { Suspense, useEffect } from 'react';
import { Outlet } from 'react-router';

import { getMe } from '@/services/auth';
import { SidebarProvider, SidebarTrigger } from '@/ui';
import { Loader } from '@/ui/loader/Loader';

import { PrivateRoutes } from '../providers';
import { AppSidebar, MobileHeader, MobileNavbar } from './_components';

const Layout = () => {
  const isMobile = window.innerWidth <= 500;
  useEffect(() => {
    getMe();
  }, []);

  return !isMobile ? (
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
  ) : (
    <>
      <div className="w-full">
        <MobileHeader />
        <main className="w-full px-[28px] max-[500px]:px-[16px] max-[500px]:mb-[71px] max-[500px]:pt-[16px]">
          <Suspense fallback={<Loader />}>
            <PrivateRoutes>
              <Outlet />
            </PrivateRoutes>
          </Suspense>
        </main>
      </div>
      <MobileNavbar />
    </>
  );
};

export default Layout;
