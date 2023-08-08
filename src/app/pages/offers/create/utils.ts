import {formDefaultValues} from "@app/pages/offers/create/consts";
import {
    EPricingModel, IReorderItemsProps,
    IStepThreeRecountProps, IStepThreeRecountResult,
    ITypeOfDeal
} from "@app/pages/offers/create/types";
import Decimal from "decimal.js";

export function reorderItems({curIds, id}: IReorderItemsProps) {
    const index = curIds.indexOf(id);
    if (index > -1) {
        curIds.splice(index, 1);
    }
    curIds.push(id);
    curIds.reverse();
    return curIds;
}

//todo check validations
export function isValidField(field: string | number) {
    return field && field.toString().length > 0
}

export function getDefaultValues({typeOfDeal}: ITypeOfDeal) {
    const draftByTypeOfDeal = JSON.parse(localStorage.getItem(`${typeOfDeal}Draft`));

    if (!draftByTypeOfDeal) {
        return formDefaultValues
    } else {
        return draftByTypeOfDeal
    }
}

export function getRecountedValue({
                                      denomByPricingModel,
                                      contractValue,
                                      targetFDV,
                                      roundFDV,
                                      _value,
                                      denomByLotType,
                                      pricingModel,
                                      currentID,
                                      bindedID
                                  }: IStepThreeRecountProps): IStepThreeRecountResult {

    let _currentID = currentID;
    let _bindedID = bindedID
    let _result: Decimal;

    if (pricingModel === EPricingModel.IN_STABLECOIN) {
        const share0 = contractValue.mul(100).div(roundFDV);
        const share1 = denomByPricingModel.mul(100).div(targetFDV);
        const ratio = share1.div(share0);
        const uq1 = denomByLotType.mul(ratio);
        if (currentID === 'targetFDV') {
            _result = denomByPricingModel.div(uq1);
        } else {
            const share0 = roundFDV.div(contractValue);
            const totalTokensForSale = denomByLotType.mul(share0);
            _result = totalTokensForSale.mul(_value);
        }

    } else {
        const share0 = contractValue.mul(100).div(roundFDV);
        const ratio = denomByPricingModel.div(denomByLotType);
        const share1 = ratio.mul(share0).div(100);
        let cv1 = targetFDV.mul(share1);

        if (currentID === 'targetFDV') {
            _result = cv1.div(denomByPricingModel);
        } else {
            const share0 = roundFDV.div(contractValue);
            const totalTokensForSale = denomByLotType.mul(share0);
            _result = totalTokensForSale.mul(_value);
        }
    }

    return {
        _bindedID: _bindedID,
        _result: Number(_result),
        _currentID: _currentID
    }
}


