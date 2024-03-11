import { LotReassignmentType } from '@app/components';
import { LotReassignmentTypeDictionary } from '@app/dictionary';
import { Resource } from '@schema/desk-gateway';
import { UIKit } from '@shared/ui-kit';

export type LotReassignmentTypeSelectProps = Omit<
  React.ComponentProps<typeof UIKit.SelectSync<Resource.Lot.Enums.LotReassignmentType, true>>,
  'items' | 'renderItem'
>;

export const LotReassignmentTypeSelect: React.FC<LotReassignmentTypeSelectProps> = (props) => {
  return (
    <UIKit.SelectSync<Resource.Lot.Enums.LotReassignmentType, true>
      {...props}
      renderItem={(item) => <LotReassignmentType value={item} />}
      items={LotReassignmentTypeDictionary.keys()}
    />
  );
};
