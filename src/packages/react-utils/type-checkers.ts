import React from 'react';

import { isExtends } from '@berish/class';

export function isReactComponentClass(component: any): component is React.ComponentClass {
  return typeof component === 'function' && isExtends(component, React.Component);
}

export function isReactFC(component: any): component is React.FC {
  return typeof component === 'function';
}

export function isReactComponentType(component: any): component is React.ComponentClass | React.FC {
  return isReactComponentClass(component) || isReactFC(component);
}

export function isReactComponentTypeComposite(component: any): component is React.ComponentClass | React.FC {
  return (
    isReactComponentType(component) ||
    (typeof component === 'object' && component && isReactComponentType(component.type))
  );
}

export function isReactElement(element: any): element is React.ReactElement {
  return React.isValidElement(element);
}

export function isReactElementTypeDOM(element: any): element is React.ReactElement {
  return isReactElement(element) && typeof element.type === 'string';
}

export function isReactElementTypeComposite(element: any): element is React.ReactElement {
  return isReactElement(element) && typeof element.type === 'function';
}
