import { ParticipantTypeDictionary } from '@app/dictionary';
import { Resource } from '@schema/desk-gateway';
import { UIKit } from '@shared/ui-kit';

export type ParticipantTypeSelectProps = Omit<
  React.ComponentProps<typeof UIKit.SelectSync<Resource.Common.Enums.InvestorType>>,
  'items' | 'renderItem'
> & {
  // TODO move to SelectSyncProps as filterItems prop
  showOnlyTypes?: Resource.Common.Enums.InvestorType[];
};

export const ParticipantTypeSelect: React.FC<ParticipantTypeSelectProps> = (props) => {
  const { showOnlyTypes, ...selectProps } = props;

  return (
    <UIKit.SelectSync<Resource.Common.Enums.InvestorType>
      {...selectProps}
      renderItem={(item) => ParticipantTypeDictionary.get(item).title}
      items={
        showOnlyTypes?.length
          ? ParticipantTypeDictionary.keys().filter((type) => showOnlyTypes.includes(type))
          : ParticipantTypeDictionary.keys()
      }
    />
  );
};
