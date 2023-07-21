export type PermissionNext = () => any;

export type Permission = (next: PermissionNext) => PermissionResult;
export type PermissionResult =
  | boolean
  | React.ReactNode
  | Promise<boolean | React.ReactNode>;
