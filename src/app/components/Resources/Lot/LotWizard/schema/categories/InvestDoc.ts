import * as yup from 'yup';

import {
  INVEST_DOC_ASSET,
  INVEST_DOC_FDV,
  INVEST_DOC_ROUND_FDV,
  INVEST_DOC_ROUND_PRICE,
  INVEST_DOC_ROUND_SHARE,
  INVEST_DOC_ROUND_SUMMARY,
  INVEST_DOC_ROUND_TYPE,
  INVEST_DOC_ROUND_UNITS,
  INVEST_DOC_SHARE,
  INVEST_DOC_WITH_REASSIGN,
} from '../inputs';

export const InvestDocInputs = yup
  .object({
    INVEST_DOC_ASSET: INVEST_DOC_ASSET,
    INVEST_DOC_FDV: INVEST_DOC_FDV.required(),
    INVEST_DOC_SHARE,
    INVEST_DOC_WITH_REASSIGN,
  })
  .from('INVEST_DOC_ASSET_PK', 'INVEST_DOC_ASSET')
  .from('INVEST_DOC_ASSET_CREATE_REQUEST', 'INVEST_DOC_ASSET');

export type InvestDocModel = yup.InferType<typeof InvestDocInputs>;

export const InvestDocRoundInputs = yup.object({
  INVEST_DOC_ROUND_FDV,
  INVEST_DOC_ROUND_PRICE: INVEST_DOC_ROUND_PRICE.required(),
  INVEST_DOC_ROUND_SHARE,
  INVEST_DOC_ROUND_SUMMARY,
  INVEST_DOC_ROUND_TYPE,
  INVEST_DOC_ROUND_UNITS: INVEST_DOC_ROUND_UNITS.required(),
});

export type InvestDocRoundModel = yup.InferType<typeof InvestDocRoundInputs>;
