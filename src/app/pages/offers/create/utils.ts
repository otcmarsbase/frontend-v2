import {formDefaultValues} from "@app/pages/offers/create/consts";

export function hasAllProperties(obj, props) {
    for (let i = 0; i < props.length; i++) {
        if (!obj.hasOwnProperty(props[i])) return false;
    }
    return true;
}

export function reorderItems<T>(arr: Array<T>, value: T): Array<T> {
    const index = arr.indexOf(value);
    if (index > -1) {
        arr.splice(index, 1);
    }
    arr.push(value);
    arr.reverse();
    return arr;
}

export function isValidField(field) {
    return field && field.length > 0
}

export function getDefaultValues(typeOfDeal) {
    const draftByTypeOfDeal = JSON.parse(localStorage.getItem(`${typeOfDeal}Draft`));

    if (!draftByTypeOfDeal) {
        return formDefaultValues
    } else {
        return draftByTypeOfDeal
    }
}

export function getRecountedValue({
                                      cv1,
                                      cv0,
                                      fdv1,
                                      fdv0,
                                      equityToOffer,
                                      value,
                                      denom,
                                      pricingModel,
                                      currentID,
                                      bindedID
                                  }) {

    let _currentID = currentID;
    let _bindedID = bindedID
    let _result = 0;

    if (pricingModel === 'In Stablecoin') {
        const share0 = (cv0 * 100) / fdv0;
        const share1 = (cv1 * 100) / fdv1;
        const ratio = share1 / share0;
        const uq1 = denom * ratio;
        if (currentID === 'targetFDV') {
            _result = cv1 / uq1;
        } else {
            const share0 = fdv0 / cv0;
            const totalTokensForSale = denom * share0;
            _result = totalTokensForSale * value;
        }

    } else {
        const share0 = (cv0 * 100) / fdv0;
        const ratio = equityToOffer / denom;
        const share1 = (ratio * share0) / 100;
        let cv1 = fdv1 * share1;

        if (currentID === 'targetFDV') {
            _result = cv1 / equityToOffer;
        } else {
            const share0 = fdv0 / cv0;
            const totalTokensForSale = denom * share0;
            _result = totalTokensForSale * value;
        }
    }

    return {
        _bindedID: _bindedID,
        _result: _result,
        _currentID: _currentID
    }
}


