import { AssetTierDictionary } from '@app/dictionary';
import { DeskGatewaySchema } from '@schema/desk-gateway';
import { UIKit } from '@shared/ui-kit';

export type AssetTierSelectProps = Omit<
  React.ComponentProps<typeof UIKit.SelectSync<DeskGatewaySchema.AssetTier, true>>,
  'items' | 'renderItem'
>;

export const AssetTierSelect: React.FC<AssetTierSelectProps> = (props) => {
  return (
    <UIKit.SelectSync<DeskGatewaySchema.AssetTier, true>
      {...props}
      renderItem={(item) => AssetTierDictionary.get(item)}
      items={AssetTierDictionary.keys()}
    />
  );
};
