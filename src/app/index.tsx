import { RouterProvider } from '@packages/router5-react-auto';
import { AppLoad, GlobalPreload, ThemeProvider } from '@shared/ui-kit';
import { ModalProvider, router } from './logic';
import { onAppLoad } from './onAppLoad';
import pages from './pages';

export function App() {
  return (
    <ThemeProvider>
      <AppLoad loader={GlobalPreload} preload={onAppLoad}>
        <ModalProvider />
        <RouterProvider router={router} notFoundComponent={pages.errors._404} />
      </AppLoad>
    </ThemeProvider>
  );
}
