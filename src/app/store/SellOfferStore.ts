import {makeAutoObservable, autorun, action, observable} from 'mobx';

export class SellOfferStore {
    @observable public basicInfo: any = {};
    @observable public stepOneSuccess: boolean = false;
    @observable public stepOneWasOnSuccess: boolean = false;

    constructor() {
        makeAutoObservable(this, {}, { autoBind: true });
    }
    @action setBasicInfo = (updatedBasicInfo) => {
        this.basicInfo = updatedBasicInfo;
    }

    @action setStepOneSuccess = (bool) => {
        this.stepOneSuccess = bool;
    }

    @action setStepOneWasOnSuccess = (bool) => {
        this.stepOneWasOnSuccess = bool;
    }


}

