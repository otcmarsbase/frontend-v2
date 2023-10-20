import { Permission } from '../types';

export function combinePermissions(permissions: Permission[]): Permission {
  return (next) => {
    return permissions.reduceRight(
      (next, permission) => async () => {
        return permission(next);
      },
      next,
    )();
  };
}
