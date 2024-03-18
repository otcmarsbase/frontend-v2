import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';

import { is } from 'date-fns/locale';

import { useRpcSchemaQuery } from '../RPCSchemaProvider';

import { useWebAppVerifyData } from './hooks';
import type { ITelegramUser, IWebApp } from './types';

export interface ITelegramContext {
  webApp?: IWebApp;
  user?: ITelegramUser;
}

export const TelegramContext = createContext<ITelegramContext>({});

export function TelegramProvider({ children, }: { children: React.ReactNode; }) {
  const [webApp, setWebApp] = useState<IWebApp | null>(null);
  const { checkDataString, hash, username } = useWebAppVerifyData(webApp)
  useRpcSchemaQuery('auth.telegramVerifyWebApp', {
    checkDataString,
    hash,
    username
  })

  useEffect(() => {
    const app = (window as any).Telegram?.WebApp;
    if (app) {
      app.ready();
      setWebApp(app);
    }
  }, []);

  const value = useMemo(() => {
    return webApp
      ? {
        webApp,
        unsafeData: webApp.initDataUnsafe,
        user: webApp.initDataUnsafe.user,
        initData: webApp.initData,
      }
      : {};
  }, [webApp]);

  return (
    <TelegramContext.Provider value={value}>
      {children}
    </TelegramContext.Provider>
  );
};

export const useTelegram = () => useContext(TelegramContext);
