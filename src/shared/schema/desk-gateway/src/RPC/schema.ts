import * as DTO from './DTO';

export type Schema = {
  account: {
    me(payload: DTO.AccountMe.Payload): DTO.AccountMe.Result;
    saveProfile(payload: DTO.AccountSaveProfile.Payload): DTO.AccountSaveProfile.Result;
  };
  asset: {
    getById(payload: DTO.AssetGetById.Payload): DTO.AssetGetById.Result;
    getStatsById(payload: DTO.AssetGetStatsById.Payload): DTO.AssetGetStatsById.Result;
    list(payload: DTO.AssetList.Payload): DTO.AssetList.Result;
  };
  auth: {
    signIn(payload: DTO.AuthSignIn.Payload): DTO.AuthSignIn.Result;
    generateMessage(payload: DTO.AuthGenerateMessage.Payload): DTO.AuthGenerateMessage.Result;
  };
  bid: {
    create(payload: DTO.BidCreate.Payload): DTO.BidCreate.Result;
    listByLot(payload: DTO.BidListByLot.Payload): DTO.BidListByLot.Result;
    listMy(payload: DTO.BidListMy.Payload): DTO.BidListMy.Result;
    accept(payload: DTO.BidAccept.Payload): DTO.BidAccept.Result;
    reject(payload: DTO.BidReject.Payload): DTO.BidReject.Result;
    makeActive(payload: DTO.BidMakeActive.Payload): DTO.BidMakeActive.Result;
  };
  deal: {
    getById(payload: DTO.DealGetById.Payload): DTO.DealGetById.Result;
    listMy(payload: DTO.DealListMy.Payload): DTO.DealListMy.Result;
  };
  lot: {
    archive(payload: DTO.LotArchive.Payload): DTO.LotArchive.Result;
    cancelModeration(payload: DTO.LotCancelModeration.Payload): DTO.LotCancelModeration.Result;
    complete(payload: DTO.LotComplete.Payload): DTO.LotComplete.Result;
    create(payload: DTO.LotCreate.Payload): DTO.LotCreate.Result;
    duplicate(payload: DTO.LotDuplicate.Payload): DTO.LotDuplicate.Result;
    getById(payload: DTO.LotGetById.Payload): DTO.LotGetById.Result;
    listActive(payload: DTO.LotListActive.Payload): DTO.LotListActive.Result;
    listMy(payload: DTO.LotListMy.Payload): DTO.LotListMy.Result;
    sendOnModeration(payload: DTO.LotSendOnModeration.Payload): DTO.LotSendOnModeration.Result;
    update(payload: DTO.LotUpdate.Payload): DTO.LotUpdate.Result;
  };
  system: {
    getVersion(payload: DTO.SystemGetVersion.Payload): DTO.SystemGetVersion.Result;
  };
  user: {};
};
