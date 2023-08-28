import * as yup from 'yup';
import { ObjectSchema } from 'yup';

import { ILotView } from './types';

export const LotViewSchema: ObjectSchema<ILotView> = yup.object().shape({
  amountToSell: yup.number(),
  giveFunds: yup.number(),
  typeOfUser: yup.number(),
  isUserDirectBuyer: yup.boolean(),
  location: yup.string(),
  readyForKYC: yup.boolean(),
  amountToBuy: yup.number(),
  getFunds: yup.number(),
});
