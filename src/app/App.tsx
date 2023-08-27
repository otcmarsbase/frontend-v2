import { StoreProvider } from '@app/store';
import { ThemeProvider } from '@components/providers';
import { AppLoad, GlobalPreload } from '@components/ui-kit';
import { WalletConnectProvider } from '@components/ui-logic';
import { RouterProvider } from '@packages/router5-react-auto';

import { onAppLoad, ModalProvider, router } from './logic';

export function App() {
  return (
    <ThemeProvider>
      <AppLoad onAppLoad={onAppLoad} renderLoader={() => <GlobalPreload />}>
        {() => (
          <>
            <StoreProvider>
              <WalletConnectProvider>
                <ModalProvider />
                <RouterProvider router={router} />
              </WalletConnectProvider>
            </StoreProvider>
          </>
        )}
      </AppLoad>
    </ThemeProvider>
  );
}
