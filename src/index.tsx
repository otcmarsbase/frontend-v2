import React from 'react';
import { App } from '@app';
import {ErrorBoundary} from "@app/layouts/errorBoundary/ErrorBoundary";
import { RootStore, StoresContext } from '@app/store/rootStore';
import { override } from '@packages/react-runtime-layout';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';

override();

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
const store = new RootStore();

root.render(
  <React.StrictMode>
    <StoresContext.Provider value={store}>
      <ErrorBoundary>
        <App />
      </ErrorBoundary>
    </StoresContext.Provider>
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
