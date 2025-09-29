import { Suspense } from 'react';
import { Outlet } from 'react-router';

import { SidebarProvider, SidebarTrigger } from '@/ui';
import { Loader } from '@/ui/loader/Loader';

import { AppSidebar } from './_components';

const Layout = () => {
  return (
    <SidebarProvider>
      <AppSidebar />
      <div className="w-full">
        <SidebarTrigger />
        <main className="w-full px-[28px]">
          <Suspense fallback={<Loader />}>
            <Outlet />
          </Suspense>
        </main>
      </div>
    </SidebarProvider>
  );
};

export default Layout;
