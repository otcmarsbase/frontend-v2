import { Icons } from '@shared/ui-kit';
import { Common } from './common';
import { LotFlow } from './lot-flow';

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
}
