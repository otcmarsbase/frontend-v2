import { TradeDirectionDictionary } from '@app/dictionary';
import { Resource } from '@schema/desk-gateway';
import { UIKit } from '@shared/ui-kit';

export type TradeDirectionSelectProps = Omit<
  React.ComponentProps<typeof UIKit.SelectSync<Resource.Common.Enums.TradeDirection, false>>,
  'items' | 'renderItem'
>;

export const TradeDirectionSelect: React.FC<TradeDirectionSelectProps> = (props) => {
  return (
    <UIKit.SelectSync<Resource.Common.Enums.TradeDirection, false>
      {...props}
      renderItem={(item) => TradeDirectionDictionary.get(item).title}
      items={TradeDirectionDictionary.keys()}
    />
  );
};
