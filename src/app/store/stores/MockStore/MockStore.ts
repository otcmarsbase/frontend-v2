// import { faker } from '@faker-js/faker';
// import { RpcApiMethodName, RpcApiPayload, RpcApiResult } from '@packages/berish-rpc-client-schema';
// import { RPC, Resource } from '@schema/otc-desk-gateway';

// import { createAsset, createBid, createLot } from './_fakers';

// type MockStoreMethod = RpcApiMethodName<RPC.Schema>;
// type MockStorePayload<T extends MockStoreMethod> = RpcApiPayload<RPC.Schema, T>;
// type MockStoreResult<T extends MockStoreMethod> = RpcApiResult<RPC.Schema, T>;

// export class MockStore {
//   public lotListActive(assets: Resource.Asset.Asset[]): MockStoreResult<'lot.listActive'> {
//     return {
//       items: faker.helpers.multiple(() => createLot(assets), {
//         count: 20,
//       }),
//       total: 20,
//     };
//   }

//   public assetList(params: MockStorePayload<'asset.list'>): MockStoreResult<'asset.list'> {
//     return {
//       items: faker.helpers.multiple(createAsset, {
//         count: 20,
//       }),
//       total: 20,
//     };
//   }

//   public bidListLot(params: MockStorePayload<'bids.listLot'>): {
//     items: Resource.Bid.Bid[];
//     total: number;
//   } {
//     return {
//       items: faker.helpers.multiple(createBid, {
//         count: 20,
//       }),
//       total: 20,
//     };
//   }
// }
