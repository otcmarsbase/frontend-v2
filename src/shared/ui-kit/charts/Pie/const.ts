import { createDictionary } from '@app/dictionary';

export const PieSize = ['xs', 'sm', 'md'] as const;
export type PieSize = (typeof PieSize)[number];

export const PieSizeDictionary = createDictionary<PieSize, { radius: number }>()
  .setFromRecord({
    xs: {
      radius: 0.5,
    },
    sm: {
      radius: 0.7,
    },
    md: {
      radius: 1,
    },
  })
  .asReadonly();
