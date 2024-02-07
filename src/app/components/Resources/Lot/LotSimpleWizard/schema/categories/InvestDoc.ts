import * as yup from 'yup';

import { INVEST_DOC_ASSET, INVEST_DOC_FDV, INVEST_DOC_REASSIGNMENT_TYPE } from '../inputs';

export const InvestDocInputs = yup
  .object({
    INVEST_DOC_ASSET: INVEST_DOC_ASSET,
    INVEST_DOC_FDV: INVEST_DOC_FDV.required(),
    INVEST_DOC_REASSIGNMENT_TYPE: INVEST_DOC_REASSIGNMENT_TYPE.required(),
  })
  .from('INVEST_DOC_ASSET_PK', 'INVEST_DOC_ASSET')
  .from('INVEST_DOC_ASSET_CREATE_REQUEST', 'INVEST_DOC_ASSET');

export type InvestDocModel = yup.InferType<typeof InvestDocInputs>;
