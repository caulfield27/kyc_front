import { getToken } from '@/utils/getToken';
import type { ReactNode } from 'react';
import { Navigate } from 'react-router';

export const GuestRoutes = ({ children }: { children: ReactNode }) => {
  if (getToken()) return <Navigate to={'/'} replace />;

  return children;
};
