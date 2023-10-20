export type PageName = string;
export type PagePath = (string | number)[];
export type PageComponent<P = {}> = React.ComponentType<P> | ((props: P) => JSX.Element);

export type PageRenderFunction<P = {}> = (Component: PageComponent<P>, props: P) => JSX.Element;

export type PageComponentInferProps<T> = T extends PageComponent<infer Props> ? Props : never;
