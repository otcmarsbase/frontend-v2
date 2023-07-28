import { DeepMap, FieldError, FieldValues } from 'react-hook-form';
import {
  FormControl,
  FormControlProps,
  FormErrorMessage,
  FormLabel,
  Input,
} from '@chakra-ui/react';

type IFieldErrors<TFieldValues extends FieldValues = FieldValues> = DeepMap<
  TFieldValues,
  FieldError
>;

export interface IRawFieldProps extends FormControlProps {
  value: string | number;
  id: string;
  register: any;
  label?: string;
  errors: IFieldErrors;
  placeholder: string;
}

export const FormField = ({
  value,
  id,
  register,
  label,
  errors,
  placeholder,
  ...props
}: IRawFieldProps) => {
  return (
    <FormControl isInvalid={Boolean(errors[id])} {...props}>
      {label && <FormLabel>{label}</FormLabel>}
      <Input placeholder={placeholder} value={value} {...register} />

      {errors[id] ? (
        <FormErrorMessage position="absolute">
          {errors[id].message}
        </FormErrorMessage>
      ) : null}
    </FormControl>
  );
};
