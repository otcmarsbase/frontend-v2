import React, { useMemo } from 'react';
import {
  DeepMap,
  FieldError,
  FieldValues,
  Path,
  UseFormRegister,
} from 'react-hook-form';
import {
  FormControl,
  FormControlProps,
  FormErrorMessage,
  FormLabel,
  InputProps,
  CheckboxProps,
  Input,
  Checkbox,
} from '@chakra-ui/react';
import { Select, SelectProps } from '../Select';

type IFieldErrors<TFieldValues extends FieldValues = FieldValues> = DeepMap<
  TFieldValues,
  FieldError
>;

type FormComponent = React.ReactElement<
  InputProps | CheckboxProps | SelectProps
>;

export interface FormFieldProps<TFieldValues extends FieldValues = FieldValues>
  extends Omit<FormControlProps, 'placeholder'> {
  value: TFieldValues[FormFieldProps<TFieldValues>['name']];
  name: Path<TFieldValues>;
  register?: UseFormRegister<TFieldValues>;
  label?: string;
  errors?: IFieldErrors;
  component: FormComponent;
}

export const FormField = <TFieldValues extends FieldValues = any>({
  value,
  name,
  register,
  label,
  errors = {},
  component,
  ...props
}: FormFieldProps<TFieldValues>) => {
  console.log('name ',name)
  const renderedFormComponent = useMemo(() => {
    const registerResult = register ? register(name) : null;
    if (component.type === Input) {
      return React.cloneElement(component, {
        value,
        name,
        ...(registerResult || {}),
      });
    }
    if (component.type === Select) {
      const onChange = registerResult?.onChange;
      return React.cloneElement(component, {
        value,
        name,
        ...(registerResult || {}),
        onChange: (value, e) => onChange && onChange(e),
      });
    }
    if (component.type === Checkbox) {
      return React.cloneElement(component, {
        isChecked: value,
        ...(registerResult || {}),
      });
    }
  }, [value, component, register, name]);

  return (
    <FormControl isInvalid={Boolean(errors[name])} {...props}>
      {label && <FormLabel>{label}</FormLabel>}
      {renderedFormComponent}

      {errors[name] ? (
        <FormErrorMessage position="absolute">
          {errors[name].message}
        </FormErrorMessage>
      ) : null}
    </FormControl>
  );
};
