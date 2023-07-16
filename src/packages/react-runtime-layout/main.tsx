import { isReactComponentTypeComposite, isReactFC } from '@packages/react-utils';

export function main<T>(Component: React.FC<T>, props: T, base: React.ReactNode) {
  if (isReactComponentTypeComposite(Component) && Component.getLayout) {
    const Layout = Component.getLayout;
    if (isReactFC(Layout)) {
      return Layout({ ...props, children: base });
    } else if (Array.isArray(Layout) && (Layout as any[]).every((m) => isReactFC(m))) {
      return (Layout as any[]).reduce((base, getLayout) => getLayout({ ...props, children: base }), base);
    }
  }
  return base;
}
