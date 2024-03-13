// import { faker } from '@faker-js/faker';
// import { DeskGatewaySchema} from '@schema/desk-gateway';

// export const createAssetLink = (): DeskGatewaySchema.AssetLink => {
//   return {
//     resource: 'asset_link',
//     title: faker.word.noun(),
//     type: faker.helpers.arrayElement(['SITE', 'WHITE_PAPER', 'GITHUB', 'TWITTER', 'REDDIT', 'DISCORD', 'OTHER']),
//     group: faker.helpers.arrayElement(['OFFICIAL', 'SOCIAL', 'OTHER']),
//     url: faker.internet.url(),
//   };
// };

// export const createAsset = (): DeskGatewaySchema.Asset => {
//   return {
//     resource: 'asset',
//     id: faker.number.int().toString(),
//     info: {
//       title: faker.internet.displayName(),
//       description: faker.word.words(10),
//       logo_url: faker.internet.avatar(),
//       links: faker.helpers.multiple(createAssetLink, { count: { min: 3, max: 10 } }),
//       verticals: faker.helpers.arrayElements([
//         'BLOCKCHAIN_SERVICE',
//         'LAYER_1',
//         'SOCIAL',
//         'CEFI',
//         'NFT',
//         'BRIDGE',
//         'METAVERSE',
//         'ZK_ROLLUP',
//         'LENDING',
//         'INFRA',
//         'GAMEFI',
//         'DEFI',
//       ]),
//     },
//     stats: {
//       average_fdv: faker.number.bigInt().toString(),
//       lot_sell_count: faker.number.int({ max: 3000 }),
//       lot_buy_count: faker.number.int({ max: 3000 }),
//       lot_sell_cv_sum: faker.number.bigInt().toString(),
//       lot_buy_cv_sum: faker.number.bigInt().toString(),
//     },
//     score: faker.number.float({ min: 0, max: 5 }),
//   };
// };
