export interface SelectViewProps<T> {
  options: SelectOption<T>[];
  selectedKey: string;
  selectedOption: SelectOption<T>;

  renderOption: (option: SelectOption<T>) => React.ReactNode;
  onChange: (key: string) => void;

  isDisabled: boolean;
  isLoading: boolean;

  placeholder: React.ReactNode;
  isClearable: boolean;
  isInvalid: boolean;
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
