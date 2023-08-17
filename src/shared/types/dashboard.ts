import { Icons } from '@shared/ui-kit';
import { LotFlow } from './lotFlow';

export namespace Dashboard {
  export enum OfferType {
    BUY = 'buy',
    SELL = 'sell',
  }

  export enum OfferStatus {
    DRAFT = 'draft',
    ACTIVE = 'active',
    ON_MODERATION = 'onModeration',
    ENDED = 'ended',
    HALF_FIELD = 'halfField',
  }

  export interface OfferItem {
    id: number;
    isHot: boolean;
    offerType: OfferType;
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
}
