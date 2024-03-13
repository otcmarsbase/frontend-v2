import { LotTypeDictionary } from '@app/dictionary';
import { DeskGatewaySchema } from '@schema/desk-gateway';
import { UIKit } from '@shared/ui-kit';

export type LotTypeSelectProps = Omit<
  React.ComponentProps<typeof UIKit.SelectSync<DeskGatewaySchema.LotType, true>>,
  'items' | 'renderItem'
>;

export const LotTypeSelect: React.FC<LotTypeSelectProps> = (props) => {
  return (
    <UIKit.SelectSync<DeskGatewaySchema.LotType, true>
      {...props}
      renderItem={(item) => LotTypeDictionary.get(item).title}
      items={LotTypeDictionary.keys()}
    />
  );
};
