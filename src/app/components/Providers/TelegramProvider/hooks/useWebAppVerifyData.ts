import { useState } from 'react';

import { IWebApp } from '../types';

export interface UseWebAppVerifyData {
  hash: string;
  checkDataString: string;
}

export function useWebAppVerifyData(webApp?: IWebApp) {
  let hash;
  let checkDataString;
  let username;

  if (webApp && webApp?.initData) {
    const data = Object.fromEntries(new URLSearchParams(webApp.initData));

    checkDataString = Object.keys(data)
      .filter((key) => key !== 'hash')
      .map((key) => `${key}=${data[key]}`)
      .sort()
      .join('\n');

    hash = data.hash;

    username = webApp.initDataUnsafe.user.username;
  }

  return {
    username,
    hash,
    checkDataString,
  };
}
