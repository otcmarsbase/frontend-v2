import { createContext } from 'react';

import { Resource } from '@schema/desk-gateway';

export interface LotViewContextValue {
  lot: Resource.Lot.Lot;
  asset: Resource.Asset.Asset | Resource.Lot.ValueObjects.AssetCreateRequest;
}

export const LotViewContext = createContext<LotViewContextValue>(undefined);
