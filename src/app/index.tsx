import { RouterProvider } from '@packages/router5-react-auto';
import { AppLoad, GlobalPreload, ThemeProvider } from '@shared/ui-kit';
import { WalletConnectProvider } from '@shared/ui-logic';

import { ModalProvider, router } from './logic';
import { onAppLoad } from './onAppLoad';
import pages from './pages';

export const App: React.FC = () => {
  return (
    <WalletConnectProvider>
      <ThemeProvider>
        <AppLoad loader={GlobalPreload} preload={onAppLoad}>
          <ModalProvider />
          <RouterProvider router={router} notFound={pages.errors._404} />
        </AppLoad>
      </ThemeProvider>
    </WalletConnectProvider>
  );
};
