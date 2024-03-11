import { createDictionary } from '@app/dictionary';

import { InputDescriptor } from '../types';

export const DescriptorDictionary = createDictionary<boolean, InputDescriptor>()
  .setFromEntries([
    [
      true,
      {
        label: 'Investor type',
        placeholder: 'Choose type',
      },
    ],
    [
      false,
      {
        label: 'Your client type',
        placeholder: 'Choose type',
      },
    ],
  ])
  .asReadonly();

export const BuyTooltipDictionary = createDictionary<boolean, string>().setFromEntries([
  [true, 'Who will be the owner of this asset'],
  [false, 'Which direct buyer type is most suitable'],
]);

export const SellTooltipDictionary = createDictionary<boolean, string>().setFromEntries([
  [true, 'Who is an owner of this asset'],
  [false, 'Which direct seller type is most suitable'],
]);
