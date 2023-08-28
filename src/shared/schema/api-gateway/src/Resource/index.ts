/* eslint-disable @typescript-eslint/no-unused-vars */

import * as AccountImports from './Account';
import * as AssetImports from './Asset';
import * as AuthImports from './Auth';
import * as BidImports from './Bid';
import * as CommonImports from './Common';
import * as DealImports from './Deal';
import * as LotImports from './Lot';
import * as UserImports from './User';

export namespace Resource {
  export import Account = AccountImports.Account;
  export import Asset = AssetImports.Asset;
  export import Auth = AuthImports.Auth;
  export import Bid = BidImports.Bid;
  export import Common = CommonImports.Common;
  export import Deal = DealImports.Deal;
  export import User = UserImports.User;
  export import Lot = LotImports.Lot;
}
