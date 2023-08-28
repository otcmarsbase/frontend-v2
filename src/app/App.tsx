import { StoreProvider } from '@app/store';
import { RpcSchemaProvider, ThemeProvider } from '@components/providers';
import { AppLoad, GlobalPreload } from '@components/ui-kit';
import { WalletConnectProvider } from '@components/ui-logic';
import { RouterProvider } from '@packages/router5-react-auto';

import { onAppLoad, ModalProvider, appManager } from './logic';
import pages from './pages';

export function App() {
  return (
    <ThemeProvider>
      <AppLoad onAppLoad={onAppLoad} renderLoader={() => <GlobalPreload />}>
        {() => (
          <>
            <StoreProvider>
              <WalletConnectProvider>
                <RpcSchemaProvider client={appManager.serviceManager.backendApiService.schema}>
                  <ModalProvider />
                  <RouterProvider router={appManager.router} notFound={pages.Errors.Error404} />
                </RpcSchemaProvider>
              </WalletConnectProvider>
            </StoreProvider>
          </>
        )}
      </AppLoad>
    </ThemeProvider>
  );
}