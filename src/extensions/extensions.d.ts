declare module '*.woff';
declare module '*.woff2';

declare module '*.svg' {
  const ReactComponent: any;
  export { ReactComponent };
}
