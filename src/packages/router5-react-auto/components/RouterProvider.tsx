import { Router } from 'router5';

import { RouterContextProvider } from '../context';
import { PageComponent, PageRenderFunction } from '../core';

import { PageRoute } from './PageRoute';

export interface RouterProviderProps {
  router: Router;
  notFound?: PageComponent;
  render?: PageRenderFunction;
}

export const RouterProvider: React.FC<RouterProviderProps> = ({
  router,
  notFound,
  render,
}) => {
  return (
    <RouterContextProvider value={router}>
      <PageRoute render={render} notFound={notFound} />
    </RouterContextProvider>
  );
};
