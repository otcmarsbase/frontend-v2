import { InvestmentRoundDictionary } from '@app/dictionary';
import { DeskGatewaySchema } from '@schema/desk-gateway';
import { UIKit } from '@shared/ui-kit';

export type InvestmentRoundSelectProps = Omit<
  React.ComponentProps<typeof UIKit.SelectSync<DeskGatewaySchema.InvestRound>>,
  'items' | 'renderItem'
>;

export const InvestmentRoundSelect: React.FC<InvestmentRoundSelectProps> = (props) => {
  return (
    <UIKit.SelectSync<DeskGatewaySchema.InvestRound>
      {...props}
      renderItem={(item) => InvestmentRoundDictionary.get(item).title}
      items={InvestmentRoundDictionary.keys()}
    />
  );
};
