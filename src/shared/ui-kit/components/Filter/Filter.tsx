import { useState } from 'react';
import { FilterRenderPayload } from './types';

export interface FilterProps<T> {
  render: (payload: FilterRenderPayload<T>) => React.ReactNode;
}

export function Filter<T>({ render }: FilterProps<T>) {
  const [value, onChange] = useState<T>();
  return <>{render({ value, onChange })}</>;
}
