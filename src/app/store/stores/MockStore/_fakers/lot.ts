import {
  LotStatusDictionary,
  LotTypeDictionary,
  ParticipantTypeDictionary,
  TradeDirectionDictionary,
} from '@app/dictionary';
import { faker } from '@faker-js/faker';
import { Resource } from '@schema/api-gateway';
import { sample } from 'lodash';

export const createLot = (assets: Resource.Asset.Asset[], id = faker.number.int().toString()): Resource.Lot.Lot => {
  const randomAsset = sample(assets);
  return {
    resource: 'lot',
    id,
    deadline: faker.date.future().valueOf(),
    asset: {
      resource: 'asset_key',
      id: randomAsset.id,
    },
    type: faker.helpers.arrayElement(LotTypeDictionary.keys()),
    direction: faker.helpers.arrayElement(TradeDirectionDictionary.keys()),
    owner: {
      resource: 'user_key',
      nickname: faker.number.int().toString(),
    },
    ownerType: faker.helpers.arrayElements(ParticipantTypeDictionary.keys(), 3),
    status: faker.helpers.arrayElement(LotStatusDictionary.keys()),
    isDirect: faker.datatype.boolean(),
    execution_quantity_info: {
      executed: {
        asset: faker.number.bigInt().toString(),
        quote: faker.number.int().toString(),
      },
      reserved: {
        asset: faker.number.bigInt().toString(),
        quote: faker.number.int().toString(),
      },
      available: {
        asset: faker.number.bigInt().toString(),
        quote: faker.number.int().toString(),
      },
      total: {
        asset: faker.number.bigInt().toString(),
        quote: faker.number.int().toString(),
      },
      total_bids: faker.number.int(),
    },
    valuation_info: {
      fdv: {
        asset: faker.number.bigInt().toString(),
        quote: faker.number.int().toString(),
      },
      quantity: {
        asset: faker.number.bigInt().toString(),
        quote: faker.number.int().toString(),
      },
      price: faker.number.bigInt().toString(),
      share: faker.number.bigInt().toString(),
    },
    filters: [],
    score: faker.number.int({ min: 0, max: 10 }),
  };
};
