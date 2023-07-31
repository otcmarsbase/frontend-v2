import { useCallback, useMemo } from 'react';
import {
  FieldPath,
  FieldValues,
  UseFormProps as RhfUseFormProps,
  UseFormReturn as RhfUseFormReturn,
  UseFormHandleSubmit as RhfUserFormReturn,
  SubmitErrorHandler,
  SubmitHandler,
  useForm as useRhfForm,
} from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import _get from 'lodash/get';
import * as Yup from 'yup';

export interface UseFormProps<
  TFieldValues extends FieldValues = FieldValues,
  TContext = any,
> extends Omit<RhfUseFormProps<TFieldValues, TContext>, 'resolver'> {
  schema?: Yup.ObjectSchema<TFieldValues>;
  schemaResolveOptions?: Yup.ValidateOptions;
}

export type UseFormIsRequired<TFieldValues extends FieldValues = FieldValues> =
  <TFieldName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>>(
    name: TFieldName,
  ) => boolean;

export type UseFormHandleSubmit<
  TFieldValues extends FieldValues = FieldValues,
> = RhfUserFormReturn<TFieldValues, TFieldValues>;

export interface UseFormReturn<
  TFieldValues extends FieldValues = FieldValues,
  TContext = any,
> extends Omit<RhfUseFormReturn<TFieldValues, TContext>, 'handleSubmit'> {
  isRequired: UseFormIsRequired<TFieldValues>;
  handleSubmit: UseFormHandleSubmit<TFieldValues>;
}

export function useForm<
  TFieldValues extends FieldValues = FieldValues,
  TContext = any,
>({
  schema,
  schemaResolveOptions,
  ...useFormProps
}: UseFormProps<TFieldValues, TContext>): UseFormReturn<
  TFieldValues,
  TContext
> {
  const { handleSubmit: _handleSubmit, ...props } = useRhfForm<
    TFieldValues,
    TContext
  >({
    mode: 'onTouched',
    resolver: schema && yupResolver(schema, schemaResolveOptions),
    ...useFormProps,
  });

  // Утилита для проверки того, что поле действительно обязательно в схеме
  // Нужно для правильного показа обязательности поля формы в UI
  const isRequired = useCallback(
    (name: string) => {
      // Нужна схема формы, чтобы проверить что поле действительно обязательное
      if (!schema) return false;
      const values = props.getValues();
      const root = schema.describe({ value: values });
      const propField = _get(root.fields, name);
      if (!propField) return false;
      // console.log({ propField });
      return (
        propField['tests'].findIndex(({ name }) => name === 'required') >= 0
      );
    },
    [props, schema],
  );

  const _onValid = useCallback<
    (child: SubmitHandler<TFieldValues>) => SubmitHandler<TFieldValues>
  >(
    (child) => (data, event) => {
      console.log({ data, event });
      return child(data, event);
    },
    [],
  );

  const _onError = useCallback<
    (
      child: SubmitErrorHandler<TFieldValues>,
    ) => SubmitErrorHandler<TFieldValues>
  >(
    (child) => (data, event) => {
      return child?.(data, event);
    },
    [],
  );

  const handleSubmit = useMemo<
    (
      onValid: SubmitHandler<TFieldValues>,
      onInvalid?: SubmitErrorHandler<TFieldValues>,
    ) => (e?: React.BaseSyntheticEvent) => Promise<void>
  >(
    () => (onValid, onError) => {
      return _handleSubmit(_onValid(onValid), _onError(onError));
    },
    [_onValid, _onError, _handleSubmit],
  );

  return { isRequired, handleSubmit, ...props };
}
