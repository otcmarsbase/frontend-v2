import jsxRuntime from 'react/jsx-runtime';

import { main } from './main';

export function overrideProd() {
  const prev = jsxRuntime['jsx'];
  jsxRuntime['jsx'] = (type, props, ...other) => {
    const base = prev(type, props, ...other);
    return main(type as any, props, base);
  };
}
