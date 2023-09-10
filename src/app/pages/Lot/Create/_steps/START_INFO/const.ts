import { createDictionary } from '@app/dictionary';

export const StartInfoFieldName = [
  'PROJECT_NAME',
  'DIRECTION',
  'LOT_TYPE',
  'IS_REASSIGNED',
  'WITH_TOKEN_WARRANT',
] as const;
export type StartInfoFieldName = (typeof StartInfoFieldName)[number];
export type StartInfoFieldsDictionaryInfo = {
  title: string;
  placeholder: string;
};

export const StartInfoFieldsDictionary = createDictionary<StartInfoFieldName, StartInfoFieldsDictionaryInfo>()
  .setFromRecord({
    PROJECT_NAME: {
      title: 'Project info',
      placeholder: 'Project info',
    },
    DIRECTION: {
      title: 'Trade direction',
      placeholder: '',
    },
    LOT_TYPE: {
      title: 'Type of lot',
      placeholder: '',
    },
    IS_REASSIGNED: {
      title: 'Re-assign',
      placeholder: '',
    },
    WITH_TOKEN_WARRANT: {
      title: 'Token Warrant',
      placeholder: '',
    },
  })
  .setDefaultFactory((key) => ({
    title: key,
    placeholder: '',
  }))
  .asReadonly();
