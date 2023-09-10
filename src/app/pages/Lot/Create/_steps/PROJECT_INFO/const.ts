import { createDictionary } from '@app/dictionary';

export const ProjectInfoFieldName = [
  'TYPE_OF_SELLER',
  'IS_DIRECT',
  'IS_READY_TO_SPV',
  'TELEGRAM',
  'TYPE_OF_BUYER',
  'IS_NO_LIMIT',
  'DEADLINE',
  'IS_PERMANENT',
  'WEBSITE',
] as const;
export type ProjectInfoFieldName = (typeof ProjectInfoFieldName)[number];
export type ProjectInfoFieldsDictionaryInfo = {
  title: string;
  placeholder: string;
};

export const ProjectInfoFieldsDictionary = createDictionary<ProjectInfoFieldName, ProjectInfoFieldsDictionaryInfo>()
  .setFromRecord({
    DEADLINE: {
      title: 'Deadline',
      placeholder: 'Choose finish day',
    },
    TYPE_OF_SELLER: {
      title: 'Type of seller',
      placeholder: 'Choose type',
    },
    IS_DIRECT: {
      title: 'I’m the direct seller',
      placeholder: '',
    },
    IS_READY_TO_SPV: {
      title: 'Ready to SPV',
      placeholder: '',
    },
    IS_NO_LIMIT: {
      title: 'No limitations',
      placeholder: '',
    },
    IS_PERMANENT: {
      title: 'Permanent',
      placeholder: '',
    },
    TELEGRAM: {
      title: 'Telegram',
      placeholder: '@nickname',
    },
    TYPE_OF_BUYER: {
      title: 'Type of buyer',
      placeholder: 'Choose type',
    },
    WEBSITE: {
      title: 'Website',
      placeholder: 'Website',
    },
  })
  .setDefaultFactory((key) => ({
    title: key,
    placeholder: '',
  }))
  .asReadonly();
