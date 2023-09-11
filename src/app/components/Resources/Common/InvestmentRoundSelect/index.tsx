import { InvestmentRoundDictionary } from '@app/dictionary';
import { Resource } from '@schema/api-gateway';
import { UIKit } from '@shared/ui-kit';

export type InvestmentRoundSelectProps = Omit<
  React.ComponentProps<typeof UIKit.SelectSync<Resource.Common.RoundType>>,
  'items' | 'renderItem'
>;

export const InvestmentRoundSelect: React.FC<InvestmentRoundSelectProps> = (props) => {
  return (
    <UIKit.SelectSync<Resource.Common.RoundType>
      {...props}
      renderItem={(item) => InvestmentRoundDictionary.get(item).title}
      items={InvestmentRoundDictionary.keys()}
    />
  );
};
