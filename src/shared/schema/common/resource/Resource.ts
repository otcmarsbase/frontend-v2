export interface Resource<T extends string> {
  resource: T;
}

export type ResourceOmit<T extends Resource<any>> = Omit<T, keyof Resource<any>>;
