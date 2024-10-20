import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './main.scss';
import AuthProvider from './providers/auth.provider';
import AppRouter from './router/app.router';

const rootElement = document.getElementById('root')!;

createRoot(rootElement)
  .render(
    <StrictMode>
      <AuthProvider>
        <div className='app'>
          <AppRouter/>
        </div>
      </AuthProvider>
    </StrictMode>,
  );