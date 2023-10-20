import { useFormContext } from 'react-hook-form';

import { LotTypeDictionary, TradeDirectionDictionary } from '@app/dictionary';
import { Text } from '@chakra-ui/react';

import { StepReview } from '../../../../_atoms';
import { CreateStepDictionary } from '../../const';

import { StartInfoFieldsDictionary } from './const';
import { StartInfoModel } from './types';

export const StartInfoReview = () => {
  const { getValues } = useFormContext<StartInfoModel>();
  return (
    <StepReview<StartInfoModel>
      stepTitle={CreateStepDictionary.get('START_INFO').title}
      stepIndexTitle="1 Step"
      model={getValues()}
      fields={[
        {
          renderTitle: () => StartInfoFieldsDictionary.get('DIRECTION').title,
          renderValue: (model) => <Text color="white">{TradeDirectionDictionary.get(model.direction).title}</Text>,
        },
        {
          renderTitle: () => StartInfoFieldsDictionary.get('LOT_TYPE').title,
          renderValue: (model) => <Text color="white">{LotTypeDictionary.get(model.type).title}</Text>,
        },
        {
          renderTitle: () => StartInfoFieldsDictionary.get('IS_REASSIGNED').title,
          renderValue: (model) => <Text color="white">{model.isReassigned ? 'Yes' : 'No'}</Text>,
        },
        {
          renderTitle: () => StartInfoFieldsDictionary.get('WITH_TOKEN_WARRANT').title,
          renderValue: (model) => <Text color="white">{model.withTokenWarrant ? 'Yes' : 'No'}</Text>,
        },
        {
          renderTitle: () => StartInfoFieldsDictionary.get('PROJECT_NAME').title,
          renderValue: (model) => (
            <Text color="white">{typeof model.asset === 'string' ? model.asset : model.asset.info.title}</Text>
          ),
        },
      ]}
    />
  );
};
