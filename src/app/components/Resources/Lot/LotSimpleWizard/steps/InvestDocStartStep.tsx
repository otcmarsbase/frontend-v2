import {
  CommonIsDirectInput,
  CommonOfferMakerTypesInput,
  CommonTelegramInput,
  InvestDocAssetInput,
  InvestDocTypeInput,
  InvestDocWithReassignInput,
} from '../form';

export const InvestDocStartStep = () => {
  return (
    <>
      <CommonTelegramInput />
      <CommonIsDirectInput />
      <CommonOfferMakerTypesInput />
      <InvestDocTypeInput />
      <InvestDocAssetInput />
      <InvestDocWithReassignInput />
    </>
  );
};
