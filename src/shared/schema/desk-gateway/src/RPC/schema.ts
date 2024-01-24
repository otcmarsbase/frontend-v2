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
    list(payload: DTO.BidList.Payload): DTO.BidList.Result;
    accept(payload: DTO.BidAccept.Payload): DTO.BidAccept.Result;
    reject(payload: DTO.BidReject.Payload): DTO.BidReject.Result;
    makeActive(payload: DTO.BidMakeActive.Payload): DTO.BidMakeActive.Result;
  };
  deal: {
    getById(payload: DTO.DealGetById.Payload): DTO.DealGetById.Result;
    list(payload: DTO.DealList.Payload): DTO.DealList.Result;
  };
  lot: {
    archive(payload: DTO.LotArchive.Payload): DTO.LotArchive.Result;
    cancelModeration(payload: DTO.LotCancelModeration.Payload): DTO.LotCancelModeration.Result;
    complete(payload: DTO.LotComplete.Payload): DTO.LotComplete.Result;
    create(payload: DTO.LotCreate.Payload): DTO.LotCreate.Result;
    duplicate(payload: DTO.LotDuplicate.Payload): DTO.LotDuplicate.Result;
    getById(payload: DTO.LotGetById.Payload): DTO.LotGetById.Result;
    list(payload: DTO.LotList.Payload): DTO.LotList.Result;
    sendOnModeration(payload: DTO.LotSendOnModeration.Payload): DTO.LotSendOnModeration.Result;
    update(payload: DTO.LotUpdate.Payload): DTO.LotUpdate.Result;
  };
  system: {
    getVersion(payload: DTO.SystemGetVersion.Payload): DTO.SystemGetVersion.Result;
  };
  user: {
    updateProfile(payload: DTO.UserProfileUpdate.Payload): DTO.UserProfileUpdate.Result;
  };
};
