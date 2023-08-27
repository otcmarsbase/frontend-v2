import { WindowProvider } from 'wagmi';

declare global {
  interface Window {
    ethereum: WindowProvider;
  }
}

declare module '*.svg' {
  const ReactComponent: any;
  export { ReactComponent };
}
