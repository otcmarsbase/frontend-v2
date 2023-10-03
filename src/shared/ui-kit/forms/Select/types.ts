export type MultiDependentValue<T, M extends boolean> = M extends true ? T[] : T;

export interface SelectViewProps<T, M extends boolean> {
  options: SelectOption<T>[];
  selectedKey: MultiDependentValue<string, M>;
  selectedOption: MultiDependentValue<SelectOption<T>, M>;

  renderOption: (option: SelectOption<T>) => React.ReactNode;
  onChange: (key: MultiDependentValue<string, M>) => void;

  isDisabled: boolean;
  isLoading: boolean;

  placeholder: React.ReactNode;
  isClearable: boolean;
  isInvalid: boolean;
  isMulti: M;

  search: null | {
    onSearch: (text: string) => any;
    value: string;
  };
}

export interface SelectOption<T> {
  key: string;
  index: number;
  item: T;
}
