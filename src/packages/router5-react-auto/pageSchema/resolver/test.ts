import { Common } from '@shared/types';
import { PageSchema, PageSchemaStringify } from '../pageSchema';

export interface MyOfferProps {
  filters?: {
    search?: string;
    directions?: Common.Direction[];
    test: {
      type: 'SHORT' | 'LONG';
      count: number;
      good: {
        name: string;
      };
    }[];
    minValue?: number;
    maxValue?: number;
  };
}

const props: Record<string, any> = {
  filters: {
    search: '123',
    directions: ['BUY', 'SELL'],
    test: [
      {
        type: 'SHORT',
        count: '1',
        good: {
          name: 'L0',
        },
      },
      {
        type: 'LONG',
        count: '5',
        good: {
          name: 'Bitoin',
        },
      },
    ],
  },
};

export function test() {
  const directionSchema = PageSchema.enumParser<Common.Direction>([
    'BUY',
    'SELL',
  ]);

  console.log(directionSchema('buy'));
}

// const MyOffersPageSchema = {
//   filters: {
//     search: PageSchema.stringParser,
//     directions: [PageSchema.enumParser<Common.Direction>(['BUY', 'SELL'])],
//     test: [
//       {
//         type: PageSchema.enumParser(['SHORT', 'LONG']),
//         count: PageSchema.numberParser,
//         good: { name: PageSchema.stringParser },
//       },
//     ],
//     minValue: PageSchema.numberParser,
//     maxValue: PageSchema.numberParser,
//   },
// } satisfies PageSchema<MyOfferProps>;
