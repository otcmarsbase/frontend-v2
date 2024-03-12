import jsxRuntime from 'react/jsx-dev-runtime';

import { main } from './main';

export function overrideDev() {
  const prev = jsxRuntime['jsxDEV'];
  jsxRuntime['jsxDEV'] = (type, props, ...other) => {
    const base = prev(type, props, ...other);
    return main(type as any, props, base);
  };
}
