import * as AccountImports from './Account';
import * as AssetImports from './Asset';
import * as AuthImports from './Auth';
import * as CommonImports from './Common';
import * as LotImports from './Lot';
import * as UserImports from './User';

export namespace Resource {
  export import Account = AccountImports.Account;
  export import Asset = AssetImports.Asset;
  export import Auth = AuthImports.Auth;
  export import Common = CommonImports.Common;
  export import User = UserImports.User;
  export import Lot = LotImports.Lot;
}
