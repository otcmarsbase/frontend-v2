type BaseComponent = () => JSX.Element;

export type RoutedComponent = BaseComponent & {
  routeName: string;
  displayName: string;
};

// TODO: Сделать более уточненные типы для `component` и самого `PageRoute`,
// основанные на роутинге на уровне директорий в `apps/main/src/pages`
export interface PageRoute {
  path: string;
  component: RoutedComponent;
}
