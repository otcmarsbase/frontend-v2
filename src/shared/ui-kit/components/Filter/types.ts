export type FilterRenderPayload<T> = {
  value: T;
  onChange: (value: T) => any;
};
