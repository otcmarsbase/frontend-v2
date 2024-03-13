import { LotReassignmentType } from '@app/components';
import { LotReassignmentTypeDictionary } from '@app/dictionary';
import { DeskGatewaySchema } from '@schema/desk-gateway';
import { UIKit } from '@shared/ui-kit';

export type LotReassignmentTypeSelectProps = Omit<
  React.ComponentProps<typeof UIKit.SelectSync<DeskGatewaySchema.LotReassignmentType, true>>,
  'items' | 'renderItem'
>;

export const LotReassignmentTypeSelect: React.FC<LotReassignmentTypeSelectProps> = (props) => {
  return (
    <UIKit.SelectSync<DeskGatewaySchema.LotReassignmentType, true>
      {...props}
      renderItem={(item) => <LotReassignmentType value={item} />}
      items={LotReassignmentTypeDictionary.keys()}
    />
  );
};
