import {
  CommonIsDirectInput,
  CommonOfferMakerTypesInput,
  CommonTelegramInput,
  InvestDocAssetInput,
  InvestDocTypeInput,
  InvestDocWithReassignInput,
} from '../form';
import { CommonDirectionInput } from '../form/CommonDirectionInput';

export const InvestDocStartStep = () => {
  return (
    <>
      <CommonDirectionInput />
      <CommonTelegramInput />
      <CommonIsDirectInput />
      <CommonOfferMakerTypesInput />
      <InvestDocTypeInput />
      <InvestDocAssetInput />
      <InvestDocWithReassignInput />
    </>
  );
};
