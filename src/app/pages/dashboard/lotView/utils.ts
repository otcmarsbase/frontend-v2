import {ELotType} from "@app/pages/offers/create/components/ProjectInfo/types";
import Decimal from "decimal.js";

export function recountToUSD({amount}) {
    const usdtRate = 90
    return Number(new Decimal(amount).mul(usdtRate)).toLocaleString('en-US', {maximumFractionDigits: 2})
}
export const getTypeOfDealChipColors = ({lotType}) => {
    switch (lotType) {
        case ELotType.SAFE:
            return '#EF5DA8'
        case ELotType.SAFT:
            return "#5D5FEF"
        case ELotType.TOKEN_WARRANT:
            return "#FF5B37"
        default:
            return '#EF5DA8'
    }
}
