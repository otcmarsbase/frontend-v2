import { RouterProvider } from '@packages/router5-react-auto';
import { AppLoad, GlobalPreload } from '@shared/ui-kit';

import { ModalProvider, router } from './logic';
import { onAppLoad } from './onAppLoad';
import pages from './pages';

export function App() {
  return (
    <AppLoad loader={GlobalPreload} preload={onAppLoad}>
      <ModalProvider />
      <RouterProvider router={router} notFoundComponent={pages.errors._404} />
    </AppLoad>
  );
}
