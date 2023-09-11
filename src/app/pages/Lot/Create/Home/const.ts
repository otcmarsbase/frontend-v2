import { createDictionary } from '@app/dictionary';

export type CreateStepType = 'START_INFO' | 'PROJECT_INFO' | 'ROUND_INFO' | 'LOT_INFO' | 'REVIEW';
export interface CreateStepValue {
  title: string;
  description: string;
  stepTitle: string;
  backSteps: CreateStepType[];
}

export const CreateStepDictionary = createDictionary<CreateStepType, CreateStepValue>().setFromRecord({
  START_INFO: {
    title: 'Start',
    description: '',
    stepTitle: 'Start',
    backSteps: [],
  },
  PROJECT_INFO: {
    title: 'Project info',
    description: '',
    stepTitle: 'Project info',
    backSteps: ['START_INFO'],
  },
  ROUND_INFO: {
    title: 'Round info',
    description:
      'Provide information about the round on which you purchased the tokens. This information is necessary to calculate your supply.',
    stepTitle: 'Round info',
    backSteps: ['START_INFO', 'PROJECT_INFO'],
  },
  LOT_INFO: {
    title: 'Lot info',
    description:
      'Provide information about the round on which you purchased the tokens. This information is necessary to calculate your supply.',
    stepTitle: 'Lot info',
    backSteps: ['START_INFO', 'PROJECT_INFO', 'ROUND_INFO'],
  },
  REVIEW: {
    title: 'Review',
    description: '',
    stepTitle: 'Review',
    backSteps: ['START_INFO', 'PROJECT_INFO', 'ROUND_INFO', 'LOT_INFO'],
  },
});

export type CreateLotField = 'HEADER';
export type CreateLotFieldValue = {
  title: string;
  description: string;
};
export const CreateLotDictionary = createDictionary<CreateLotField, CreateLotFieldValue>({
  HEADER: {
    title: 'Creating an offer',
    description: 'Set suitable conditions',
  },
});
