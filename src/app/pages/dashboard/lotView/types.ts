import {TLotType} from "@app/pages/offers/create/components/ProjectInfo/types";
import {ReactElement, ReactNode} from "react";
import {ComponentWithAs, IconProps} from "@chakra-ui/react";

export interface ILotView {
    amountToBuy: number,
    giveFunds: number,
    typeOfUser: number,
    isUserDirectBuyer: boolean
}

export interface ISimilarDealitem {
    lotType: TLotType,
    nameOfAsset: string,
    description: string,
    icon: ReactElement,
    value: number,
    tokenSymbol: string
}
