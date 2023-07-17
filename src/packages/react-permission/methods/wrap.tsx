import {
  PermissionComponent,
  PermissionComponentProps,
} from '../PermissionComponent';

export const wrap = (props: PermissionComponentProps) => {
  return function <T>(Component: React.FC<T>): React.FC<T> {
    return (componentProps: T) => (
      <PermissionComponent {...props}>
        <Component {...componentProps} />
      </PermissionComponent>
    );
  };
};
