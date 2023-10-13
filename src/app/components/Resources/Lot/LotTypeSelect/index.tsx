import { LotTypeDictionary } from '@app/dictionary';
import { Resource } from '@schema/otc-desk-gateway';
import { UIKit } from '@shared/ui-kit';

export type LotTypeSelectProps = Omit<
  React.ComponentProps<typeof UIKit.SelectSync<Resource.Lot.Enums.LotType, true>>,
  'items' | 'renderItem'
>;

export const LotTypeSelect: React.FC<LotTypeSelectProps> = (props) => {
  return (
    <UIKit.SelectSync<Resource.Lot.Enums.LotType, true>
      {...props}
      renderItem={(item) => LotTypeDictionary.get(item).title}
      items={LotTypeDictionary.keys()}
    />
  );
};
