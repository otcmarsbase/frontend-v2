import { memo } from 'react';
import { ROUTER_CONTEXT } from '../context';
import { PageProvider, PageProviderProps } from './PageProvider';

export const RouterProvider: React.FC<PageProviderProps> = memo(({ router, ...props }) => {
  return (
    <ROUTER_CONTEXT.Provider value={router}>
      <PageProvider router={router} {...props} />
    </ROUTER_CONTEXT.Provider>
  );
});
