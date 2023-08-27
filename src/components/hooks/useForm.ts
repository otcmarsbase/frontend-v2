import { FieldValues } from 'react-hook-form';

import { UIKit } from '../ui-kit';

export function useForm<TFieldValues extends FieldValues = FieldValues, TContext = any>(
  props: UIKit.UseFormProps<TFieldValues, TContext>,
) {
  return useForm(props);
}
