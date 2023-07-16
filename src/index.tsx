import React from 'react';
import ReactDOM from 'react-dom/client';

import { RouterProvider } from '@packages/router5-react-auto';
import { override } from '@packages/react-runtime-layout';

import { AppLoad, GlobalPreload } from '@shared/ui-kit';

import { router } from '@logic/router';
import { onAppLoad } from '@logic/onAppLoad';
import { ModalProvider } from '@logic/modal';
import pages from '@pages';

import reportWebVitals from './reportWebVitals';

override();

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <AppLoad loader={GlobalPreload} preload={onAppLoad}>
      <ModalProvider />
      <RouterProvider router={router} notFoundComponent={pages.errors._404} />
    </AppLoad>
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
