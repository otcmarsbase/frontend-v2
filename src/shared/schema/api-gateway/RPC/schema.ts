import * as DTO from './DTO';

export type Schema = {
  account: {
    me(payload: DTO.AccountMe.Payload): DTO.AccountMe.Result;
    saveProfile(payload: DTO.AccountSaveProfile.Payload): DTO.AccountSaveProfile.Result;
  };
  asset: {
    getById(payload: DTO.AssetGetById.Payload): DTO.AssetGetById.Result;
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
  bids: {
    listLot(payload: DTO.BidListByLot.Payload): DTO.BidListByLot.Result;
    listMy(payload: DTO.BidsListMy.Payload): DTO.BidsListMy.Result;
    getById(payload: DTO.BidsGetById.Payload): DTO.BidsGetById.Result;
  };
  deals: {
    listMy(payload: DTO.DealsListMy.Payload): DTO.DealsListMy.Result;
    getById(payload: DTO.DealsGetById.Payload): DTO.DealsGetById.Result;
  };

  dev: {
    hello(payload: DTO.DevHello.Payload): DTO.DevHello.Result;
  };
};
