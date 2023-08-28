import { WalletConnectProvider } from '@app/components';
import { RpcSchemaProvider, ThemeProvider } from '@app/components';
import { StoreProvider } from '@app/store';
import { RouterProvider } from '@packages/router5-react-auto';
import { AppLoad, GlobalPreload } from '@shared/ui-kit';

import { onAppLoad, ModalProvider, appManager } from './logic';
import pages from './pages';

export function App() {
  return (
    <ThemeProvider>
      <AppLoad onAppLoad={onAppLoad} renderLoader={() => <GlobalPreload />}>
        {() => (
          <>
            <StoreProvider>
              <WalletConnectProvider controller={{}}>
                <RpcSchemaProvider client={appManager.serviceManager.backendApiService.schema}>
                  <ModalProvider />
                  <RouterProvider router={appManager.router} notFound={pages.Errors.NotFound} />
                </RpcSchemaProvider>
              </WalletConnectProvider>
            </StoreProvider>
          </>
        )}
      </AppLoad>
    </ThemeProvider>
  );
}
