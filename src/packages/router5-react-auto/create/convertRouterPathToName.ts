export function convertRouterPathToName(
  items: (string | number)[],
  homePageItem?: string | number,
): string {
  const path = items.join('_').toLocaleLowerCase();
  if (path) return path;

  return homePageItem != null
    ? homePageItem.toString().toLocaleLowerCase()
    : 'home';
}
