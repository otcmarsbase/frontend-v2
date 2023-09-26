// import {
//   DealStatusDictionary,
//   LotStatusDictionary,
//   LotTypeDictionary,
//   ParticipantTypeDictionary,
//   TradeDirectionDictionary,
// } from '@app/dictionary';
// import { faker } from '@faker-js/faker';
// import { Resource } from '@schema/api-gateway';

// import { DealParticipantType } from './_atoms/const';
// import { DealParticipantItem } from './_atoms/DealParticipants';

// export const createDeal = (): Resource.Deal.Deal => {
//   return {
//     id: faker.number.int({ max: 5000 }),
//     resource: 'deal',

//     createdAt: faker.date.past().valueOf(),
//     status: faker.helpers.arrayElement(DealStatusDictionary.keys()),

//     lotKey: {
//       resource: 'lot_key',
//       id: faker.number.int({ max: 5000 }),
//     },

//     bid: {
//       resource: 'bid_key',
//       id: faker.number.int({ max: 5000 }).toString(),
//     },

//     commission: faker.number.float({ precision: 0.01 }),
//     valuation_info: {
//       fdv: {
//         quote: faker.number.bigInt().toString(),
//         asset: faker.number.bigInt().toString(),
//       },
//       quantity: {
//         quote: faker.number.bigInt().toString(),
//         asset: faker.number.bigInt().toString(),
//       },
//       price: faker.number.bigInt().toString(),
//       share: faker.number.bigInt().toString(),
//     },
//     communication: {
//       char_url: faker.internet.url(),
//     },
//     participants: faker.helpers.arrayElements(
//       [
//         {
//           type: '',
//           user: {
//             resource: 'user_key',
//             id: faker.number.int({ max: 5000 }).toString(),
//             nickname: faker.internet.userName(),
//           },
//           address: faker.number.hex({ max: 10000000 }),
//         },
//       ],
//       3,
//     ),
//   };
// };

// export const createAsset = (): Resource.Asset.Asset => {
//   return {
//     resource: 'asset',
//     id: faker.number.int().toString(),
//     info: {
//       title: faker.internet.displayName(),
//       description: faker.word.words(10),
//       logo_url: faker.internet.avatar(),
//     } as any,
//     score: faker.number.float({ min: 0, max: 5 }),
//   } as any;
// };

// export const createLot = (): Resource.Lot.Lot => {
//   return {
//     resource: 'lot',
//     asset: {
//       resource: 'asset_key',
//       id: faker.number.int().toString(),
//     },
//     type: faker.helpers.arrayElement(LotTypeDictionary.keys()),
//     direction: faker.helpers.arrayElement(TradeDirectionDictionary.keys()),
//     owner: {
//       resource: 'user_key',
//       nickname: faker.number.int().toString(),
//     },
//     ownerType: faker.helpers.arrayElements(ParticipantTypeDictionary.keys(), 3),
//     status: faker.helpers.arrayElement(LotStatusDictionary.keys()),
//     isDirect: faker.datatype.boolean(),
//   } as any;
// };

// export const createParticipant = (type: DealParticipantType): DealParticipantItem => {
//   return {
//     // type,
//     account: {
//       resource: 'account',
//       registered_at: faker.date.past().valueOf(),
//       nickname: faker.internet.displayName(),
//       profile: {
//         avatarUrl: faker.internet.avatar(),
//       },
//       verification: {
//         is_verified: faker.datatype.boolean(),
//       },
//     },
//   };
// };
