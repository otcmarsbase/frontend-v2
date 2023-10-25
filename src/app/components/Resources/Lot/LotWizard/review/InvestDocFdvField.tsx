import { Text } from '@chakra-ui/react';
import { UIKit } from '@shared/ui-kit';

import { StepReviewField } from '../_atoms';
import { LotCreateModel } from '../schema';

export const InvestDocFdvField = {
  renderTitle: () => <Text>Target FDV</Text>,
  renderValue: (model) => <UIKit.MoneyText value={model.INVEST_DOC_FDV} addon="$" format="0,0.X" />,
} satisfies StepReviewField<LotCreateModel>;
