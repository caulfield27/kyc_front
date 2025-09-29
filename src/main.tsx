// import { StrictMode } from 'react'
import './index.css';

import { createRoot } from 'react-dom/client';

import { AppProvider, QueryProvider } from './app/providers';

createRoot(document.getElementById('root')!).render(
  // <StrictMode>
  //   <AppProvider/>
  // </StrictMode>,
  <QueryProvider>
    <AppProvider />
  </QueryProvider>
);
