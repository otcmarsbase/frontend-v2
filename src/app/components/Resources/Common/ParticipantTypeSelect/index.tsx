import { ParticipantTypeDictionary } from '@app/dictionary';
import { Resource } from '@schema/api-gateway';
import { UIKit } from '@shared/ui-kit';

export type ParticipantTypeSelectProps = Omit<
  React.ComponentProps<typeof UIKit.SelectSync<Resource.Common.ParticipantType>>,
  'items' | 'renderItem'
>;

export const ParticipantTypeSelect: React.FC<ParticipantTypeSelectProps> = (props) => {
  return (
    <UIKit.SelectSync<Resource.Common.ParticipantType>
      {...props}
      renderItem={(item) => ParticipantTypeDictionary.get(item).title}
      items={ParticipantTypeDictionary.keys()}
    />
  );
};
