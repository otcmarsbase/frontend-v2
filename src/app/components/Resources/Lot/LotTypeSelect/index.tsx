import { LotTypeDictionary } from '@app/dictionary';
import { Resource } from '@schema/api-gateway';
import { UIKit } from '@shared/ui-kit';

export type LotTypeSelectProps = Omit<
  React.ComponentProps<typeof UIKit.SelectSync<Resource.Lot.Enums.LotType>>,
  'items' | 'renderItem'
>;

export const LotTypeSelect: React.FC<LotTypeSelectProps> = (props) => {
  return (
    <UIKit.SelectSync<Resource.Lot.Enums.LotType>
      {...props}
      renderItem={(item) => LotTypeDictionary.get(item).title}
      items={LotTypeDictionary.keys()}
    />
  );
};
