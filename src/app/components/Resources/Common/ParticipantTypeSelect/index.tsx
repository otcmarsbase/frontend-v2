import { ParticipantTypeDictionary } from '@app/dictionary';
import { Resource } from '@schema/desk-gateway';
import { UIKit } from '@shared/ui-kit';

export type ParticipantTypeSelectProps = Omit<
  React.ComponentProps<typeof UIKit.SelectSync<Resource.Common.Enums.InvestorType>>,
  'items' | 'renderItem'
>;

export const ParticipantTypeSelect: React.FC<ParticipantTypeSelectProps> = (props) => {
  return (
    <UIKit.SelectSync<Resource.Common.Enums.InvestorType>
      {...props}
      renderItem={(item) => ParticipantTypeDictionary.get(item).title}
      items={ParticipantTypeDictionary.keys()}
    />
  );
};
