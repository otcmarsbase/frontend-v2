import '@packages/router5-react-auto';

import React from 'react';
import TagManager from 'react-gtm-module';

import { override } from '@packages/react-runtime-layout';
import { AppConfig } from '@shared/config';
import ReactDOM from 'react-dom/client';

import './locale';
import { App } from './app';
import reportWebVitals from './reportWebVitals';

override();

if (AppConfig.analytics.googleTagId) {
  TagManager.initialize({ gtmId: AppConfig.analytics.googleTagId });
}

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
