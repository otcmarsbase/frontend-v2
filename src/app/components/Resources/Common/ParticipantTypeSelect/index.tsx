import { ParticipantTypeDictionary } from '@app/dictionary';
import { DeskGatewaySchema } from '@schema/desk-gateway';
import { UIKit } from '@shared/ui-kit';

export type ParticipantTypeSelectProps = Omit<
  React.ComponentProps<typeof UIKit.SelectSync<DeskGatewaySchema.InvestorType>>,
  'items' | 'renderItem'
> & {
  // TODO move to SelectSyncProps as filterItems prop
  showOnlyTypes?: DeskGatewaySchema.InvestorType;
};

export const ParticipantTypeSelect: React.FC<ParticipantTypeSelectProps> = (props) => {
  const { showOnlyTypes, ...selectProps } = props;

  return (
    <UIKit.SelectSync<DeskGatewaySchema.InvestorType>
      {...selectProps}
      renderItem={(item) => ParticipantTypeDictionary.get(item).title}
      items={
        !!showOnlyTypes
          ? ParticipantTypeDictionary.keys().filter((type) => showOnlyTypes.includes(type))
          : ParticipantTypeDictionary.keys()
      }
    />
  );
};
