import { Text } from '@chakra-ui/react';
import { UIKit } from '@shared/ui-kit';

import { StepReviewField } from '../_atoms';
import { LotCreateModel } from '../schema';

export const InvestDocRoundFdvField = {
  renderTitle: () => <Text>Round FDV</Text>,
  renderValue: (model) => <UIKit.MoneyText value={model.INVEST_DOC_ROUND_FDV} addon="$" format="0,0.X" />,
} satisfies StepReviewField<LotCreateModel>;
