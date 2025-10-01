import { type ReactNode } from 'react';
import { Navigate } from 'react-router';

import { getToken } from '@/utils/getToken';

export const PrivateRoutes = ({ children }: { children: ReactNode }) => {
  if (!getToken()) return <Navigate to={'/login'} replace />;

  return children;
};
