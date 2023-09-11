import { MutableRefObject } from 'react';

import { ParticipantTypeDictionary } from '@app/dictionary';
import { Text } from '@chakra-ui/react';

import { StepReview, StepReviewProps } from '../../_atoms';

import { ProjectInfoFieldsDictionary } from './const';
import { ProjectInfoModel, ProjectInfoStepRef } from './View';

export interface ProjectStepReviewProps extends Omit<StepReviewProps<ProjectInfoModel>, 'fields' | 'model'> {
  stepRef: MutableRefObject<ProjectInfoStepRef>;
}

export const ProjectStepReview: React.FC<ProjectStepReviewProps> = ({ stepRef, ...reviewProps }) => {
  return (
    <StepReview<ProjectInfoModel>
      {...reviewProps}
      model={stepRef.current.getValues()}
      fields={[
        {
          renderTitle: () => ProjectInfoFieldsDictionary.get('TYPE_OF_SELLER').title,
          isRequired: stepRef.current.isRequired('typeOfSeller'),
          renderValue: (model) => <Text color="white">{ParticipantTypeDictionary.get(model.typeOfSeller).title}</Text>,
        },
        {
          renderTitle: () => ProjectInfoFieldsDictionary.get('IS_DIRECT').title,
          isRequired: stepRef.current.isRequired('isDirect'),
          renderValue: (model) => <Text color="white">{model.isDirect ? 'Yes' : 'No'}</Text>,
        },
        {
          renderTitle: () => ProjectInfoFieldsDictionary.get('IS_READY_TO_SPV').title,
          isRequired: stepRef.current.isRequired('isReadyToSPV'),
          renderValue: (model) => <Text color="white">{model.isReadyToSPV ? 'Yes' : 'No'}</Text>,
        },
        {
          renderTitle: () => ProjectInfoFieldsDictionary.get('TELEGRAM').title,
          isRequired: stepRef.current.isRequired('telegram'),
          renderValue: (model) => <Text color="white">{model.telegram}</Text>,
        },
        {
          renderTitle: () => ProjectInfoFieldsDictionary.get('TYPE_OF_BUYER').title,
          isRequired: stepRef.current.isRequired('typeOfBuyer'),
          renderValue: (model) => <Text color="white">{ParticipantTypeDictionary.get(model.typeOfSeller).title}</Text>,
        },
        {
          renderTitle: () => ProjectInfoFieldsDictionary.get('IS_NO_LIMIT').title,
          isRequired: stepRef.current.isRequired('isNoLimit'),
          renderValue: (model) => <Text color="white">{model.isNoLimit ? 'Yes' : 'No'}</Text>,
        },
        {
          renderTitle: () => ProjectInfoFieldsDictionary.get('WEBSITE').title,
          isRequired: stepRef.current.isRequired('website'),
          renderValue: (model) => <Text color="white">{model.website}</Text>,
        },
      ]}
    />
  );
};
