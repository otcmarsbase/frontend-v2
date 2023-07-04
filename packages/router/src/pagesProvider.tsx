import { RouterProvider } from 'react-router5';
import { PageRoute } from './types';
import { useEffect, useRef } from 'react';
import createRouter, { Router } from 'router5';
import browserPlugin from 'router5-plugin-browser';
import React from 'react';
import { PageRouteController } from './pageRouteContoller';

interface PagesProviderProps {
  routes: PageRoute[];
  startRouteName: string;
}

export const PagesProvider = ({
  routes,
  startRouteName,
}: React.PropsWithChildren<PagesProviderProps>) => {
  const paths = routes.map((route) => ({
    name: route.component.routeName,
    path: route.path,
  }));
  const routerRef = useRef<Router>(createRouter(paths));
  const router = routerRef.current;

  useEffect(() => {
    const startPath = paths.find(
      (route) => route.name === startRouteName
    )?.path;
    if (!router || !startPath) return;
    router.usePlugin(browserPlugin());
    console.log({ startPath });
    router.start();
  }, [startRouteName, paths]);

  if (!router) return null;

  return (
    <RouterProvider router={router}>
      <PageRouteController routes={routes} />
    </RouterProvider>
  );
};
