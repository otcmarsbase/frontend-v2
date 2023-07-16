import { Permission } from '../types';

export function resolve(permission: Permission, initialValue: any) {
  return permission(() => Promise.resolve(initialValue));
}
