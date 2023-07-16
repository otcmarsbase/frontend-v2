export function convertRouterPathToPath(items: (string | number)[]): string {
  return '/' + items.join('/').toLocaleLowerCase();
}
