import * as AssetImports from './Asset';
import * as AuthImports from './Auth';
import * as LotImports from './Lot';
import * as OfferImports from './Offer';
import * as UserImports from './User';

export namespace Resource {
  export import Auth = AuthImports.Auth;
  export import User = UserImports.User;
  export import Asset = AssetImports.Asset;
  export import Lot = LotImports.Lot;
  export import Offer = OfferImports.Offer;
}
