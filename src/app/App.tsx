import { AuthProvider } from '@app/components';
import { RpcSchemaProvider, ThemeProvider } from '@app/components';
import { StoreProvider } from '@app/store';
import { PortalProvider } from '@packages/berish-react-portal';
import { RouterProvider } from '@packages/router5-react-auto';
import { AppLoad, GlobalPreload } from '@shared/ui-kit';

import { onAppLoad, ModalRenderProvider, appManager, ModalController } from './logic';
import pages from './pages';

export function App() {
  return (
    <ThemeProvider>
      <AppLoad onAppLoad={onAppLoad} renderLoader={() => <GlobalPreload />}>
        {() => (
          <>
            <PortalProvider controller={ModalController}>
              <AuthProvider>
                <StoreProvider>
                  <RpcSchemaProvider client={appManager.serviceManager.backendApiService.schema}>
                    <ModalRenderProvider />
                    <RouterProvider router={appManager.router} notFound={pages.Errors.NotFound} />
                  </RpcSchemaProvider>
                </StoreProvider>
              </AuthProvider>
            </PortalProvider>
          </>
        )}
      </AppLoad>
    </ThemeProvider>
  );
}
