// import {
//   LotStatusDictionary,
//   LotTypeDictionary,
//   ParticipantTypeDictionary,
//   TradeDirectionDictionary,
// } from '@app/dictionary';
// import { faker } from '@faker-js/faker';
// import { DeskGatewaySchema} from '@schema/desk-gateway';
// import { sample } from 'lodash';

// const lot: DeskGatewaySchema.Lot = null;

// if (lot.status === 'DRAFT') {
//   lot.offerMaker.
// }

// export const createLot = (assets: DeskGatewaySchema.Asset[], id = faker.number.int()): DeskGatewaySchema.Lot => {
//   const randomAsset = sample(assets);
//   return {
//     resource: 'lot',
//     id,
//     deadline: faker.date.future().valueOf(),
//     assetPK: {
//       resource: 'asset_key',
//       id: randomAsset.id,
//     },
//     type: faker.helpers.arrayElement(LotTypeDictionary.keys()),
//     direction: faker.helpers.arrayElement(TradeDirectionDictionary.keys()),
//     ownerType: faker.helpers.arrayElements(ParticipantTypeDictionary.keys(), 3),
//     status: faker.helpers.arrayElement(LotStatusDictionary.keys()),
//     isDirect: faker.datatype.boolean(),
//     execution_quantity_info: {
//       executed: {
//         asset: faker.number.bigInt().toString(),
//         quote: faker.number.int().toString(),
//       },
//       reserved: {
//         asset: faker.number.bigInt().toString(),
//         quote: faker.number.int().toString(),
//       },
//       available: {
//         asset: faker.number.bigInt().toString(),
//         quote: faker.number.int().toString(),
//       },
//       total: {
//         asset: faker.number.bigInt().toString(),
//         quote: faker.number.int().toString(),
//       },
//       total_bids: faker.number.int(),
//     },
//     valuation_info: {
//       fdv: {
//         asset: faker.number.bigInt().toString(),
//         quote: faker.number.int().toString(),
//       },
//       quantity: {
//         asset: faker.number.bigInt().toString(),
//         quote: faker.number.int().toString(),
//       },
//       price: faker.number.bigInt().toString(),
//       share: faker.number.bigInt().toString(),
//     },
//     filters: [],
//     score: faker.number.int({ min: 0, max: 10 }),
//   };
// };
