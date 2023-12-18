export interface RenderMapperProps<T> {
  value: T;
  map: Record<keyof T, React.ComponentType>;
}

export const RenderMapper = <T = any,>({ value, map }: RenderMapperProps<T>) => {
  const Component = map[value as any];

  return React.createElement(Component, {});
};
