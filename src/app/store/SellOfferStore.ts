import { makeAutoObservable } from 'mobx';

export class SellOfferStore {
  public basicInfo: any = {};
  // TODO: Переписать на геттеры, скорее всего как-то можно это сделать
  public stepOneSuccess: boolean = false;
  public stepOneWasOnSuccess: boolean = false;

  constructor() {
    makeAutoObservable(this, {}, { autoBind: true });
  }

  setBasicInfo = (updatedBasicInfo) => {
    this.basicInfo = updatedBasicInfo;
  };

  setStepOneSuccess = (bool) => {
    this.stepOneSuccess = bool;
  };

  setStepOneWasOnSuccess = (bool) => {
    this.stepOneWasOnSuccess = bool;
  };
}
