export interface BaseInputProps {}

export interface NumberInputProps extends BaseInputProps {
  rightElementText: string;
}

export interface InputDescriptor {
  label?: string;
  tooltip?: string;
  placeholder?: string;
}
