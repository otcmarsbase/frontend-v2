export type PageName = string;
export type PagePath = (string | number)[];
export type PageComponent<P = {}> = React.ComponentType<P>;

export type PageRenderFunction<P = {}> = (
  Component: PageComponent<P>,
  props: P,
) => JSX.Element;
