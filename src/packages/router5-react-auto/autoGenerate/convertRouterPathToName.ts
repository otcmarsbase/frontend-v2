export type ConvertRouterPathToName = (
  items: PropertyKey[],
  homePageItem?: PropertyKey,
) => string;

export const defaultConvertRouterPathToName: ConvertRouterPathToName = (
  items,
  homePageItem,
) => {
  homePageItem = homePageItem ?? 'home';

  const path = items.join('_').toLocaleLowerCase();
  if (path) return path;

  return homePageItem.toString().toLocaleLowerCase();
};
