import { Merge, PickEnum } from '@schema/common';

import { Lot } from '../../Lot';

export namespace LotAbstract {
  export type LotDraftState<Draft> = Draft & { status: PickEnum<Lot.Enums.LotStatus, 'DRAFT'> };
  export type LotOnModerationState<OnModeration> = OnModeration & { status: PickEnum<Lot.Enums.LotStatus, 'ON_MODERATION'> };
  export type LotActiveState<Active> = Active & { status: PickEnum<Lot.Enums.LotStatus, 'ACTIVE'> };
  export type LotCompletedState<Completed> = Completed & { status: PickEnum<Lot.Enums.LotStatus, 'COMPLETED'> };
  export type LotArchivedState<Archived> = Archived & { status: PickEnum<Lot.Enums.LotStatus, 'ARCHIVED'> };
  export type LotRejectedState<Rejected> = Rejected & {
    status: PickEnum<Lot.Enums.LotStatus, 'REJECTED'>;
  };

  export type LotState<Draft, OnModeration, Active, Completed, Archived, Rejected> = Merge<
    [
      LotDraftState<Draft>,
      LotOnModerationState<OnModeration>,
      LotActiveState<Active>,
      LotCompletedState<Completed>,
      LotArchivedState<Archived>,
      LotRejectedState<Rejected>,
    ]
  >;
}
