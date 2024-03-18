import { TradeDirectionDictionary } from '@app/dictionary';
import { DeskGatewaySchema } from '@schema/desk-gateway';
import { UIKit } from '@shared/ui-kit';

export type TradeDirectionSelectProps = Omit<
  React.ComponentProps<typeof UIKit.SelectSync<DeskGatewaySchema.TradeDirection, false>>,
  'items' | 'renderItem'
>;

export const TradeDirectionSelect: React.FC<TradeDirectionSelectProps> = (props) => {
  return (
    <UIKit.SelectSync<DeskGatewaySchema.TradeDirection, false>
      {...props}
      renderItem={(item) => TradeDirectionDictionary.get(item).title}
      items={TradeDirectionDictionary.keys()}
    />
  );
};
