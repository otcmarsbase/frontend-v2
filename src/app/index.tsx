import { RouterProvider } from '@packages/router5-react-auto';
import { AppLoad, GlobalPreload } from '@shared/ui-kit';
import { ModalProvider, router } from './logic';
import { onAppLoad } from './onAppLoad';
import pages from './pages';
import { ThemeProvider } from '@shared/ui-kit';
import {Header} from "../features/Header/ui/Header";
import {Web3ModalComponent} from "../features/Web3Modal/ui/Web3Modal";

export function App() {
  return (
    <ThemeProvider>
      <AppLoad loader={GlobalPreload} preload={onAppLoad}>
        <ModalProvider />
          <Header
              menuItems={[
                  { label: 'OTC', href: { url: '/' } },
                  { label: 'Create offer', href: null },
              ]}
              rightContent={<Web3ModalComponent/>}
          />
        <RouterProvider router={router} notFoundComponent={pages.errors._404} />
      </AppLoad>
    </ThemeProvider>
  );
}
