import {UseFormReturn} from "react-hook-form";
import {TLotType} from "@app/pages/offers/create/components/ProjectInfo/types";
import {EPricingModel, ETypeOfDeal, TCreateOfferFieldTypes} from "@app/pages/offers/create/types";

export interface IHandleRecount {
    currentID: TCreateOfferFieldTypes,
    bindedID: TCreateOfferFieldTypes,
    value: string,
    pricingModel: EPricingModel
}
export interface IProjectDetailsProps {
    form: UseFormReturn,
    lotType: TLotType,
    handleRecountValues: ({}: IHandleRecount) => void,
    typeOfDeal: ETypeOfDeal
}
