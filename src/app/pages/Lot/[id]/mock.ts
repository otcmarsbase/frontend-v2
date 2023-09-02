import { faker } from '@faker-js/faker';
import { Resource } from '@schema/api-gateway';

export function createBid(): Resource.Bid.Bid {
  return {
    resource: 'bid',
    id: faker.string.numeric(5),
    status: faker.helpers.arrayElement(['NEW', 'ON_MODERATE', 'ACTIVE', 'ACCEPTED', 'REJECTED', 'DEAL', 'ARCHIVED']),
    owner: { nickname: faker.company.buzzNoun(), resource: 'user_key' },
    ownerType: faker.helpers.arrayElements(['INDIVIDUAL', 'VC', 'HEDGE_FUND', 'FAMILY_OFFICE', 'DAO'], {
      max: 1,
      min: 1,
    }),
    location: faker.helpers.arrayElement(['RUSSIA', 'OAE']),
    is_direct: faker.datatype.boolean(),
    deadline: faker.date.future().valueOf(),
    valuation_info: {
      fdv: {
        asset: faker.string.numeric(5),
        quote: faker.string.numeric(5),
      },
      quantity: {
        asset: faker.string.numeric(5),
        quote: faker.string.numeric(5),
      },
      price: faker.string.numeric(5),
      share: faker.string.numeric(5),
    },
    contact_info: {
      telegram: `@${faker.internet.displayName().toLowerCase()}`,
    },
  };
}

export function createBids(count: number = 10): Resource.Bid.Bid[] {
  return faker.helpers.multiple(createBid, { count });
}
