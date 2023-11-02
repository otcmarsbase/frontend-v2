import { Text } from '@chakra-ui/react';
import { UIKit } from '@shared/ui-kit';

import { StepReviewField } from '../_atoms';
import { LotCreateModel } from '../schema';

export const TokenTgeField = {
  renderTitle: () => <Text>Estimated TGE Date</Text>,
  renderValue: (model) => {
    return model.TOKEN_TGE_IS_TBD || typeof model.TOKEN_TGE !== 'number' ? (
      <Text>TBD</Text>
    ) : (
      <UIKit.DateText value={model.TOKEN_TGE} />
    );
  },
} satisfies StepReviewField<LotCreateModel>;
