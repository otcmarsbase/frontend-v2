import * as yup from 'yup';

import { FormShape } from '../types';

/**
 * Функция для создания `yup` схемы валидации со строгой типизацией на основе
 * типа модели
 * @param formShape Описание модели схемы
 */
export function createFormSchema<ModelType>(formShape: FormShape<ModelType>) {
  return yup.object().shape(formShape);
}
