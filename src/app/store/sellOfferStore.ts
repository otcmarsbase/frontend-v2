import { makeAutoObservable } from 'mobx';

import { Common, LotFlow } from '@shared/types';

export class SellOfferStore {
  public basicInfo: any = {};
  public stepOneSuccess: boolean = false;
  public stepOneWasOnSuccess: boolean = false;

  public stepTwoSuccess: boolean = false;
  public stepTwoWasOnSuccess: boolean = false;

  public stepThreeSuccess: boolean = false;
  public stepThreeWasOnSuccess: boolean = false;
  public typeOfPricingModel: LotFlow.PricingModel = 'IN_STABLECOIN';
  public direction: Common.Direction = 'SELL';

  constructor() {
    makeAutoObservable(this, {}, { autoBind: true });
  }

  setTypeOfDeal = (payload: Common.Direction) => {
    this.direction = payload;
  };
  setTypeOfPricingModel = (payload: LotFlow.PricingModel) => {
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
