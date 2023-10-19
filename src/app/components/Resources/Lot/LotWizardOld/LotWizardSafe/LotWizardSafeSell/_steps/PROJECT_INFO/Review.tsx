import { useFormContext } from 'react-hook-form';

import { ParticipantTypeDictionary } from '@app/dictionary';
import { Text } from '@chakra-ui/react';
import { format } from 'date-fns';

import { StepReview } from '../../../../_atoms';
import { CreateStepDictionary } from '../../const';

import { ProjectInfoFieldsDictionary } from './const';
import { ProjectInfoModel } from './types';

export const PrjectInfoReview: React.FC = () => {
  const { getValues } = useFormContext<ProjectInfoModel>();

  return (
    <StepReview<ProjectInfoModel>
      stepTitle={CreateStepDictionary.get('PROJECT_INFO').title}
      stepIndexTitle="2 Step"
      model={getValues()}
      fields={[
        {
          renderTitle: () => ProjectInfoFieldsDictionary.get('OFFER_MAKER_TYPE').title,
          renderValue: (model) => (
            <Text color="white">{ParticipantTypeDictionary.get(model.offerMakerType).title}</Text>
          ),
        },
        {
          renderTitle: () => ProjectInfoFieldsDictionary.get('IS_DIRECT').title,
          renderValue: (model) => <Text color="white">{model.isDirect ? 'Yes' : 'No'}</Text>,
        },
        {
          renderTitle: () => ProjectInfoFieldsDictionary.get('IS_READY_TO_SPV').title,
          renderValue: (model) => <Text color="white">{model.isReadyToSPV ? 'Yes' : 'No'}</Text>,
        },
        {
          renderTitle: () => ProjectInfoFieldsDictionary.get('TELEGRAM').title,
          renderValue: (model) => <Text color="white">{model.telegram}</Text>,
        },
        {
          renderTitle: () => ProjectInfoFieldsDictionary.get('BIDDER_TYPE').title,
          renderValue: (model) => (
            <Text color="white">
              {model.bidderType
                ? model.bidderType.map((type) => ParticipantTypeDictionary.get(type).title).join(', ')
                : 'No limitations'}
            </Text>
          ),
        },
        {
          renderTitle: () => ProjectInfoFieldsDictionary.get('DEADLINE').title,
          renderValue: (model) => (
            <Text color="white">{model.deadline ? format(model.deadline, 'dd.MM.yyyy') : '-'}</Text>
          ),
        },
      ]}
    />
  );
};
