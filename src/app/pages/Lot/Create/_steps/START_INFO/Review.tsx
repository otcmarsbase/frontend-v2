import { MutableRefObject } from 'react';

import { LotTypeDictionary, TradeDirectionDictionary } from '@app/dictionary';
import { Text } from '@chakra-ui/react';

import { StepReview, StepReviewProps } from '../../_atoms';

import { StartInfoFieldsDictionary } from './const';
import { StartInfoModel, StartInfoStepRef } from './View';

export interface StartStepReviewProps extends Omit<StepReviewProps<StartInfoModel>, 'fields' | 'model'> {
  stepRef: MutableRefObject<StartInfoStepRef>;
}

export const StartStepReview: React.FC<StartStepReviewProps> = ({ stepRef, ...reviewProps }) => {
  return (
    <StepReview<StartInfoModel>
      {...reviewProps}
      model={stepRef.current.getValues()}
      fields={[
        {
          renderTitle: () => StartInfoFieldsDictionary.get('DIRECTION').title,
          isRequired: stepRef.current.isRequired('direction'),
          renderValue: (model) => <Text color="white">{TradeDirectionDictionary.get(model.direction).title}</Text>,
        },
        {
          renderTitle: () => StartInfoFieldsDictionary.get('LOT_TYPE').title,
          isRequired: stepRef.current.isRequired('type'),
          renderValue: (model) => <Text color="white">{LotTypeDictionary.get(model.type).title}</Text>,
        },
        {
          renderTitle: () => StartInfoFieldsDictionary.get('IS_REASSIGNED').title,
          isRequired: stepRef.current.isRequired('isReassigned'),
          renderValue: (model) => <Text color="white">{model.isReassigned ? 'Yes' : 'No'}</Text>,
        },
        {
          renderTitle: () => StartInfoFieldsDictionary.get('WITH_TOKEN_WARRANT').title,
          isRequired: stepRef.current.isRequired('withTokenWarrant'),
          renderValue: (model) => <Text color="white">{model.withTokenWarrant ? 'Yes' : 'No'}</Text>,
        },
        {
          renderTitle: () => StartInfoFieldsDictionary.get('PROJECT_NAME').title,
          isRequired: stepRef.current.isRequired('asset'),
          renderValue: (model) => (
            <Text color="white">{typeof model.asset === 'string' ? model.asset : model.asset.info.title}</Text>
          ),
        },
      ]}
    />
  );
};
