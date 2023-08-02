import { DeepMap, FieldError, FieldValues } from 'react-hook-form';
import {
  Box,
  FormControl,
  FormErrorMessage,
  FormLabel,
  HStack,
  Input,
} from '@chakra-ui/react';

type IFieldErrors<TFieldValues extends FieldValues = FieldValues> = DeepMap<
  TFieldValues,
  FieldError
>;

export interface IRawFieldProps {
  value: string | number;
  id: string;
  register: any;
  label: string;
  errors: IFieldErrors;
  placeholder: string;
}

export const RawField = ({
  value,
  id,
  register,
  label,
  placeholder,
  errors,
}: IRawFieldProps) => {
  return (
    <HStack>
      <FormControl isInvalid={Boolean(errors[id])}>
        <FormLabel>{label}</FormLabel>
        <Input placeholder={placeholder} value={value} {...register} />
        {errors[id] ? (
          <FormErrorMessage>{errors[id].message}</FormErrorMessage>
        ) : (
          <Box height={'25px'} />
        )}
      </FormControl>
    </HStack>
  );
};
