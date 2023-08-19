import { Registrator } from '@berish/class';

import {
  CustomError,
  ForbiddenError,
  IncorrectParameterError,
  MissingParameterError,
  NotAuthorizedError,
  NotImplementedMethodError,
  UnknownError,
} from './general';

export function getErrorRegistrator() {
  const registrator = new Registrator();

  registrator.register('CustomError', CustomError);
  registrator.register('ForbiddenError', ForbiddenError);
  registrator.register('IncorrectParameterError', IncorrectParameterError);
  registrator.register('MissingParameterError', MissingParameterError);
  registrator.register('NotAuthorizedError', NotAuthorizedError);
  registrator.register('NotImplementedMethodError', NotImplementedMethodError);
  registrator.register('UnknownError', UnknownError);

  registrator.register('Error', Error);

  return registrator;
}

export {
  CustomError,
  ForbiddenError,
  IncorrectParameterError,
  MissingParameterError,
  NotAuthorizedError,
  NotImplementedMethodError,
  UnknownError,
};

export type { Registrator };
