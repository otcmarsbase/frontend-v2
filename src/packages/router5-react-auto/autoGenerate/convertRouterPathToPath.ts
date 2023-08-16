export type ConvertRouterPathToPath = (items: PropertyKey[]) => string;

export const defaultConvertRouterPathToPath: ConvertRouterPathToPath = (
  items,
) => {
  return '/' + items.join('/').toLocaleLowerCase();
};
