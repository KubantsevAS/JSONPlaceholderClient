import React from 'react';
import ReactDOM from 'react-dom/client';
import { router } from './constants';
import './index.css';
import { Provider } from 'react-redux';
import { setupStore } from './Redux/store.ts';
import { RouterProvider } from 'react-router-dom';

const store = setupStore();

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
