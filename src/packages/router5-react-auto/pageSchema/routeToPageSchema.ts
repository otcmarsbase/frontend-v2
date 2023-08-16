export type RouteToPageAtomicValue =
  | string
  | number
  | boolean
  | RouteToPageSchema;

export type RouteToPageSchema = {
  [key: string]: RouteToPageAtomicValue | RouteToPageAtomicValue[];
};
