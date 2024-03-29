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
import * as Yup from 'yup';

import { useIsRequired } from './useIsRequired';

export interface UseFormProps<TFieldValues extends FieldValues = FieldValues, TContext = any>
  extends Omit<RhfUseFormProps<TFieldValues, TContext>, 'resolver'> {
  schema?: Yup.ObjectSchema<TFieldValues>;
  schemaResolveOptions?: Yup.ValidateOptions;
}

export type UseFormIsRequired<TFieldValues extends FieldValues = FieldValues> = <
  TFieldName extends FieldPath<Yup.InferType<Yup.ObjectSchema<TFieldValues>>> = FieldPath<
    Yup.InferType<Yup.ObjectSchema<TFieldValues>>
  >,
>(
  name: TFieldName,
) => boolean;

export type UseFormHandleSubmit<TFieldValues extends FieldValues = FieldValues> = RhfUserFormReturn<
  TFieldValues,
  TFieldValues
>;

export interface UseFormReturn<TFieldValues extends FieldValues = FieldValues, TContext = any>
  extends Omit<RhfUseFormReturn<TFieldValues, TContext>, 'handleSubmit'> {
  isRequired: UseFormIsRequired<TFieldValues>;
  handleSubmit: UseFormHandleSubmit<TFieldValues>;
}

export function useForm<TFieldValues extends FieldValues = FieldValues, TContext = any>({
  schema,
  schemaResolveOptions,
  ...useFormProps
}: UseFormProps<TFieldValues, TContext>): UseFormReturn<TFieldValues, TContext> {
  const resolver = schema && yupResolver(schema, schemaResolveOptions);

  const {
    handleSubmit: _handleSubmit,
    getValues,
    ...props
  } = useRhfForm<TFieldValues, TContext>({
    mode: 'onTouched',
    resolver: resolver as any,
    ...useFormProps,
  });

  const isRequired = useIsRequired(schema, getValues);

  const _onValid = useCallback<(child: SubmitHandler<TFieldValues>) => SubmitHandler<TFieldValues>>(
    (child) => (data, event) => {
      return child(data, event);
    },
    [],
  );

  const _onError = useCallback<(child: SubmitErrorHandler<TFieldValues>) => SubmitErrorHandler<TFieldValues>>(
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

  return { isRequired, handleSubmit, getValues, ...props };
}
