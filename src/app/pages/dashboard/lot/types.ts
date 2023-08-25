import { ComponentType, ReactElement, ReactNode } from 'react';

import { Common, LotFlow } from '@shared/types';

export interface ILotView {
  amountToSell: number;
  giveFunds: number;
  typeOfUser: number;
  isUserDirectBuyer: boolean;
  location: string;
  readyForKYC: boolean;
  amountToBuy: number;
  getFunds: number;
}

export type TLotModalFields =
  | 'amountToSell'
  | 'giveFunds'
  | 'typeOfUser'
  | 'isUserDirectBuyer'
  | 'location'
  | 'readyForKYC'
  | 'amountToBuy'
  | 'getFunds';

export interface IRoundInfoFields {
  id: string;
  value: any;
}
export interface ISimilarDealItem {
  dealID: number;
  lotType: LotFlow.LotType;
  nameOfAsset: string;
  direction: Common.Direction;
  icon: ReactElement;
  isHot: boolean;
  currentAmount: number;
  totalAmount: number;
}
export interface IBidsProps extends IBidsListProps {
  createBid: (data: any) => void;
  //todo add userstate
  isBidder: boolean;
}

export type TBidListFilters =
  | 'order'
  | 'user'
  | 'bidAmount'
  | 'location'
  | 'bidderType'
  | 'readyForKYC'
  | 'deadline'
  | 'status';

export type TStatus = 'active' | 'inactive';
export interface IBid {
  id: number;
  bid: number;
  bidSize: number;
  userName: string;
  location: string;
  validation: boolean;
  bidderType: Common.AccountType;
  deadline: Date;
  status: TStatus;
}
export interface IBidsListProps {
  bids: IBid[];
  viewOrderHandler: (id: TBidListFilters) => void;
  isBidder: boolean;
}
export interface ILotViewLinks {
  icon: React.ReactNode;
  text: string;
  href: string;
}
export interface ILotInfo {
  id: number;
  direction: Common.Direction;
  typeOfLot: LotFlow.LotType;
  userAvatar: ReactNode;
  userName: string;
  nameOfSeller: string;
  auctionEndDate: Date;
}
export interface IDataFieldsInterface {
  id: string;
  value: string | number;
}

export interface ILotViewProjectData {
  id: number;
  name: string;
  description: string;
  direction: Common.Direction;
  typeOfLot: LotFlow.LotType;
  userAvatar: ReactNode;
  userName: string;
  nameOfSeller: string;
  currentAmount: number;
  totalAmount: number;
  dataFieldsMain: IDataFieldsInterface[];
  roundInfoFields: IRoundInfoFields[];
  analytics: string;
  auctionEndDate: Date;
  Icon: React.ReactNode;
  socialMediaLinks: ILotViewLinks[];
  officialLinks: ILotViewLinks[];
  verticalItems: ILotViewLinks[];
}
