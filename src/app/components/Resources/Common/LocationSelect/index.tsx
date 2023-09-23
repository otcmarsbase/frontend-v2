import { LocationDictionary } from '@app/dictionary';
import { Resource } from '@schema/api-gateway';
import { UIKit } from '@shared/ui-kit';

export type LocationSelectProps = Omit<
  React.ComponentProps<typeof UIKit.SelectSync<Resource.Common.Location>>,
  'items' | 'renderItem'
>;

export const LocationSelect: React.FC<LocationSelectProps> = (props) => {
  return (
    <UIKit.SelectSync<Resource.Common.Location>
      {...props}
      renderItem={(item) => LocationDictionary.get(item).title}
      items={LocationDictionary.keys()}
    />
  );
};
