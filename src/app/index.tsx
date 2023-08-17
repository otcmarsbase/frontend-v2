import { RouterProvider } from '@packages/router5-react-auto';
import { AppLoad, GlobalPreload, ThemeProvider } from '@shared/ui-kit';

import { ModalProvider, router, WalletProvider } from './logic';
import { onAppLoad } from './onAppLoad';
import pages from './pages';

export const App: React.FC = () => {
  return (
    <WalletProvider>
      <ThemeProvider>
        <AppLoad loader={GlobalPreload} preload={onAppLoad}>
          <ModalProvider />
          <RouterProvider router={router} notFound={pages.errors._404} />
        </AppLoad>
      </ThemeProvider>
    </WalletProvider>
  );
};
