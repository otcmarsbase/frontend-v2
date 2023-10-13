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

  user: {
    getByNickname(payload: DTO.UserGetByNickname.Payload): DTO.UserGetByNickname.Result;
  };

  lot: {
    getById(payload: DTO.LotGetById.Payload): DTO.LotGetById.Result;
    listActive(payload: DTO.LotListActive.Payload): DTO.LotListActive.Result;
    listMy(payload: DTO.LotListMy.Payload): DTO.LotListMy.Result;
  };
  bid: {
    create(payload: DTO.BidCreate.Payload): DTO.BidCreate.Result;
    listByLot(payload: DTO.BidListByLot.Payload): DTO.BidListByLot.Result;
    listMy(payload: DTO.BidListMy.Payload): DTO.BidListMy.Result;
    accept(payload: DTO.BidAccept.Payload): DTO.BidAccept.Result;
    reject(payload: DTO.BidReject.Payload): DTO.BidReject.Result;
    makeActive(payload: DTO.BidMakeActive.Payload): DTO.BidMakeActive.Result;
  };
  deals: {
    listMy(payload: DTO.DealsListMy.Payload): DTO.DealsListMy.Result;
    getById(payload: DTO.DealGetById.Payload): DTO.DealGetById.Result;
  };

  dev: {
    generateJwtToken(payload: DTO.DevGenerateJwtToken.Payload): DTO.DevGenerateJwtToken.Result;
    hello(payload: DTO.DevHello.Payload): DTO.DevHello.Result;
  };

  system: {
    getVersion(payload: DTO.SystemGetVersion.Payload): DTO.SystemGetVersion.Result;
  };
};
