import { Suspense } from 'react';
import { createBrowserRouter } from 'react-router';

import { Layout } from '@/app/layout';
import {
  LazyApplications,
  LazyFlow,
  LazyHomePage,
  LazyLogin,
  LazyOrganization,
  LazyProcess,
} from '@/app/lazy';
import { Loader } from '@/ui';

import { GuestRoutes } from '../accessProviders/GuestRoutes';

export const routes = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <LazyHomePage />,
      },
      {
        path: 'applications',
        element: <LazyApplications />,
      },
      {
        path: 'org',
        element: <LazyOrganization />,
      },
      {
        path: 'process/:id',
        element: <LazyProcess />,
      },
    ],
  },
  {
    path: 'login',
    element: (
      <GuestRoutes>
        <LazyLogin />
      </GuestRoutes>
    ),
  },
  {
    path: 'flow/:slug',
    element: (
      <Suspense fallback={<Loader />}>
        <LazyFlow />
      </Suspense>
    ),
  },
]);
