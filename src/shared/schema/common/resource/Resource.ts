export interface Resource<ResourceName extends string> {
  resource: ResourceName;
}

export interface ResourceKey<ResourceName extends string>
  extends Resource<`${ResourceName}_key`> {}

export type ResourceOmit<T extends Resource<any>> = Omit<
  T,
  keyof Resource<any>
>;
