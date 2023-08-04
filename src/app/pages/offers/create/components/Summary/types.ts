import {TLotType} from "@app/pages/offers/create/components/ProjectInfo/types";
import {ETypeOfDeal, TPricingModel} from "@app/pages/offers/create/types";
import {EStepTypes} from "@app/pages/offers/create/components/Summary/constants";

export interface IStepWrapperProps {
    isSuccessFilled: boolean;
    step: EStepTypes;
    data: any;
    lotType: TLotType;
    pricingModel: TPricingModel;
    stepWasOpened: boolean
}

export interface ISummaryProps {
    onPublishLot: () => void;
    lotType: TLotType;
    typeOfDeal: ETypeOfDeal
}
export interface IGetTargetFieldsProps {
    step: EStepTypes,
    lotType: TLotType,
    pricingModel: TPricingModel
}
export interface INormFieldsReturn {
    name: string;
    value: string
}
