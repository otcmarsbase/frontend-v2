import { RouterProvider } from '@packages/router5-react-auto';
import { AppLoad, GlobalPreload, ThemeProvider } from '@shared/ui-kit';

import { ModalProvider, router } from './logic';
import { WalletProvider } from './logic/walletConnector';
import { onAppLoad } from './onAppLoad';
import pages from './pages';

export const App: React.FC = () => {
  return (
    // <WalletProvider>
    //   <ThemeProvider>
    //     <AppLoad loader={GlobalPreload} preload={onAppLoad}>
    //       <ModalProvider />
    //       <RouterProvider router={router} notFound={pages.errors._404} />
    //     </AppLoad>
    //   </ThemeProvider>
    // </WalletProvider>

    <ThemeProvider>
      <AppLoad loader={GlobalPreload} preload={onAppLoad}>
        <ModalProvider />
        <RouterProvider router={router} notFound={pages.errors._404} />
      </AppLoad>
    </ThemeProvider>
  );
};
