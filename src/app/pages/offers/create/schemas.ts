import * as yup from 'yup';

export const TokenInfoSchema = yup.object().shape({
  investmentRound: yup.string().required(`Investment round is required`),
  roundFDV: yup.number().required(`Round FDV is required`),
  targetFDV: yup.number(),
  pricePerEquity: yup.number(),
  contractValue: yup.number().required(`Contract value is required`),
  dates: yup.object(),
  alreadyOver: yup.boolean(),
  lockupPeriod: yup.number(),
  vestingPeriod: yup.number(),
});

export const ProjectInfoSchema = yup.object().shape({
  projectName: yup.string().required(`Project Name is required`),
  projectWebsite: yup.string().required(`Project Website is required`),
  lotType: yup.string().required(`Need to select at least one`),
  typesOfSeller: yup.array(),
  typesOfBuyer: yup.array(),
  telegram: yup.string().required(`Telegram is required`),
  isReAssigned: yup.boolean(),
  deadlineDate: yup.string(),
  isDirectSeller: yup.boolean(),
  isAdmToBuy: yup.boolean(),
  isDataPickerDisabled: yup.boolean(),
  isTokenWarrant: yup.boolean(),
});

export const SellOfferSchema = ProjectInfoSchema.concat(TokenInfoSchema);
