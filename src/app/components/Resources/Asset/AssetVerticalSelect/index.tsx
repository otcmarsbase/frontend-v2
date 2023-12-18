import { AssetVerticalTitleDictionary } from '@app/dictionary';
import { Resource } from '@schema/desk-gateway';
import { UIKit } from '@shared/ui-kit';

import { AssetVerticalRow } from '../AssetVertical/AssetVerticalRow';

export type AssetVerticalSelectProps = Omit<
  React.ComponentProps<typeof UIKit.SelectSync<Resource.Asset.Enums.AssetVertical, true>>,
  'items' | 'renderItem'
>;

export const AssetVerticalSelect: React.FC<AssetVerticalSelectProps> = (props) => {
  return (
    <UIKit.SelectSync<Resource.Asset.Enums.AssetVertical, true>
      {...props}
      renderItem={(item) => <AssetVerticalRow value={item} />}
      items={AssetVerticalTitleDictionary.keys()}
    />
  );
};
