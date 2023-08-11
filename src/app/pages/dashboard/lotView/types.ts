import {ReactElement, ReactNode} from "react";
import {ELotType, TInvAccType, TLotType} from "@app/pages/offers/create/components/ProjectInfo/types";
import {ETypeOfDeal} from "@app/pages/offers/create/types";

export interface ILotView {
    amountToSell: number,
    giveFunds: number,
    typeOfUser: number,
    isUserDirectBuyer: boolean,
    location: string,
    readyForKYC: boolean
}

export interface IRoundInfoFields {
    id: string,
    value: any
}
export interface ISimilarDealItem {
    dealID:number,
    lotType: TLotType,
    nameOfAsset: string,
    typeOfDeal: ETypeOfDeal,
    icon: ReactElement,
    isHot: boolean,
    currentAmount: number,
    totalAmount: number
}
export interface IBidsProps extends IBidsListProps {
    createBid: (data: any) => void
}

export type TBidListFilters = 'order' | 'user' | 'bidAmount' | 'location' | 'bidderType' | 'readyForKYC' | 'deadline' | 'status'

export type TStatus = 'active' | 'inactive'
export interface IBid {
    id: number,
    bid: number,
    bidSize: number,
    userName: string,
    location: string,
    validation: boolean,
    bidderType: TInvAccType,
    deadline: Date,
    status: TStatus
}
export interface IBidsListProps {
    bids: IBid[],
    viewOrderHandler: (id: TBidListFilters) => void
}
export interface ILotViewLinks {
    icon: ReactNode,
    text: string,
    href: string
}
export interface ILotInfo {
    id:number,
    typeOfDeal:ETypeOfDeal,
    typeOfLot:ELotType,
    userAvatar: ReactNode,
    userName: string,
    nameOfSeller: string
}
export interface IDataFieldsInterface {
    id:string,
    value: string | number
}
export interface ISidebarHeader {
    icon: ReactNode,
    name: string,
    analitics: string
}
export interface ILotViewProjectData {
    id: number,
    name: string,
    description: string,
    typeOfDeal: ETypeOfDeal,
    typeOfLot: ELotType,
    userAvatar: ReactNode,
    userName: string,
    nameOfSeller: string,
    currentAmount: number,
    totalAmount: number,
    dataFieldsMain: IDataFieldsInterface[],
    roundInfoFields: IRoundInfoFields[],
    analitics: string,
    icon: ReactNode,
    socialMediaLinks: ILotViewLinks[],
    officialLinks: ILotViewLinks[],
    verticalItems: ILotViewLinks[],
}
