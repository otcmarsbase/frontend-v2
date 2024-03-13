import { AssetVerticalTitleDictionary } from '@app/dictionary';
import { DeskGatewaySchema } from '@schema/desk-gateway';
import { UIKit } from '@shared/ui-kit';

import { AssetVerticalRow } from '../AssetVertical/AssetVerticalRow';

export type AssetVerticalSelectProps = Omit<
  React.ComponentProps<typeof UIKit.SelectSync<DeskGatewaySchema.AssetVertical, true>>,
  'items' | 'renderItem'
>;

export const AssetVerticalSelect: React.FC<AssetVerticalSelectProps> = (props) => {
  return (
    <UIKit.SelectSync<DeskGatewaySchema.AssetVertical, true>
      {...props}
      renderItem={(item) => <AssetVerticalRow value={item} />}
      items={AssetVerticalTitleDictionary.keys()}
    />
  );
};
