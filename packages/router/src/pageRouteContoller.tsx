import { useRoute } from 'react-router5';
import { PageRoute } from './types';
import React from 'react';

interface PageRouteProps {
  routes: PageRoute[];
}

export const PageRouteController = ({ routes }: PageRouteProps) => {
  const { route } = useRoute();

  const renderedComponent = routes.find(
    (pageRoute) => pageRoute.component.routeName === route?.name
  )?.component;

  if (!route || !renderedComponent) {
    return <div>Not found</div>;
  }

  return React.createElement(renderedComponent);
};
