import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom';
import appRouter from './router/app.router';

import './main.scss';

const rootElement = document.getElementById('root')!;

createRoot(rootElement)
  .render(
    <StrictMode>
      <div className='app'>
        <RouterProvider router={appRouter}/>
      </div>
    </StrictMode>,
  );
