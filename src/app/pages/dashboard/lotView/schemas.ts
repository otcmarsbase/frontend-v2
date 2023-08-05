import {ILotView} from "@app/pages/dashboard/lotView/types";
import * as yup from 'yup';
import {ObjectSchema} from "yup";

export const LotViewSchema: ObjectSchema<ILotView> = yup.object().shape({
  amountToBuy: yup.number(),
  giveFunds: yup.number(),
  typeOfUser: yup.number(),
  isUserDirectBuyer: yup.boolean()
});



