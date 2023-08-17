import { ReactNode } from 'react';
import { Icons } from '@shared/ui-kit';
import { Common } from './common';
import { LotFlow } from './lotFlow';

export namespace Dashboard {
  export type OfferStatus =
    | 'DRAFT'
    | 'ACTIVE'
    | 'ON_MODERATION'
    | 'ENDED'
    | 'HALF_FIELD';

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
  export interface IBidItem {
    id: number;
    //todo
    offerType: any;
    lotType: LotFlow.LotType;
    isHot: boolean;
    publishedAt: Date;
    fdv: number;
    offerMaker: 'Some user';
    offerMakerIcon: ReactNode;
    isDirectSeller: boolean;
    location: string;
    lotName: string;
    lotIconName: keyof typeof Icons.ProjectsIcons;
    bidSize: number;
    status: Dashboard.OfferStatus;
  }
}
