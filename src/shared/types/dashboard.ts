import { ReactNode } from 'react';

import { Icons } from '@shared/ui-kit';

import { Common } from './common';
import { LotFlow } from './lotFlow';

export namespace Dashboard {
  export type TDealStatus = 'COMPLETED' | 'NEGOTIATION' | 'ENDED';

  export type OfferStatus =
    | 'DRAFT'
    | 'ACTIVE'
    | 'ON_MODERATION'
    | 'ENDED'
    | 'HALF_FIELD';

  export interface IDealItem {
    id: number;
    lotName: string;
    offerType: Common.Direction;
    lotType: LotFlow.LotType;
    lotId: number;
    dealSize: number;
    dealFDV: number;
    createdAt: Date;
    status: TDealStatus;
    lotIconName: keyof typeof Icons.ProjectsIcons;
  }
  export interface IDealItemExtended {
    id: number;
    lotName: string;
    offerType: Common.Direction;
    lotType: LotFlow.LotType;
    lotId: number;
    dealSize: number;
    dealFDV: number;
    createdAt: Date;
    status: TDealStatus;
    lotIconName: string;
    //todo check types above
    offerMakerName: string;
    offerMakerIcon: string;
    offerMakerWallet: string;
    moderatorName: string;
    moderatorIcon: string;
    moderatorWallet: string;
    bidMakerName: string;
    bidMakerIcon: string;
    bidMakerWallet: string;
    telegramChatLink: string;
  }
  export interface OfferItem {
    id: number;
    isHot: boolean;
    offerType: Common.Direction;
    lotType: LotFlow.LotType;
    publishedAt: string;
    finishedAt: string;
    fdv: number;
    totalBidsPlace: number;
    lotValue: number;
    lotName: string;
    lotIconName: keyof typeof Icons.ProjectsIcons;
    verticalCount: number;
    status: OfferStatus;
  }
  //todo delete or compare
  export interface IBidItem {
    id: number;
    offerType: Common.Direction;
    lotType: LotFlow.LotType;
    isHot: boolean;
    publishedAt: Date;
    fdv: number;
    offerMaker: string;
    offerMakerIcon: ReactNode;
    isDirectSeller: boolean;
    location: string;
    lotName: string;
    lotIconName: keyof typeof Icons.ProjectsIcons;
    bidSize: number;
    status: OfferStatus;
  }
}
