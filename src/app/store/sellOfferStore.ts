import { makeAutoObservable } from 'mobx';

import { EPricingModel, ETypeOfDeal } from '@app/pages/offers/create/types';

export class SellOfferStore {
  public basicInfo: any = {};
  public stepOneSuccess: boolean = false;
  public stepOneWasOnSuccess: boolean = false;

  public stepTwoSuccess: boolean = false;
  public stepTwoWasOnSuccess: boolean = false;

  public stepThreeSuccess: boolean = false;
  public stepThreeWasOnSuccess: boolean = false;
  public typeOfPricingModel: EPricingModel = EPricingModel.IN_STABLECOIN;
  public typeOfDeal: ETypeOfDeal = ETypeOfDeal.SELL;

  constructor() {
    makeAutoObservable(this, {}, { autoBind: true });
  }

  setTypeOfDeal = (payload: ETypeOfDeal) => {
    this.typeOfDeal = payload;
  };
  setTypeOfPricingModel = (payload: EPricingModel) => {
    this.typeOfPricingModel = payload;
  };
  setBasicInfo = (updatedBasicInfo) => {
    this.basicInfo = updatedBasicInfo;
  };

  setStepOneSuccess = (bool) => {
    this.stepOneSuccess = bool;
  };

  setStepOneWasOnSuccess = (bool) => {
    this.stepOneWasOnSuccess = bool;
  };

  setStepTwoSuccess = (bool) => {
    this.stepTwoSuccess = bool;
  };

  setStepTwoWasOnSuccess = (bool) => {
    this.stepTwoWasOnSuccess = bool;
  };

  setStepThreeSuccess = (bool) => {
    this.stepThreeSuccess = bool;
  };

  setStepThreeWasOnSuccess = (bool) => {
    this.stepThreeWasOnSuccess = bool;
  };
}
