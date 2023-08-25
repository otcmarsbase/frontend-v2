import React from 'react';

import { RootStore, StoresContext } from '@app/store';
import { override } from '@packages/react-runtime-layout';
import '@packages/router5-react-auto';
import ReactDOM from 'react-dom/client';

import { App } from './app';
import reportWebVitals from './reportWebVitals';

override();

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
const store = new RootStore();

root.render(
  <React.StrictMode>
    <StoresContext.Provider value={store}>
      <App />
    </StoresContext.Provider>
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
