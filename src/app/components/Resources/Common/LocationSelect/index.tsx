import { Resource } from '@schema/otc-desk-gateway';
import { UIKit } from '@shared/ui-kit';
import { Location } from 'src/app/components/Modals/CreateBidModal/schema';

export type LocationSelectProps = Omit<
  React.ComponentProps<typeof UIKit.SelectSync<Resource.Common.Enums.Location>>,
  'items' | 'renderItem'
>;

export const LocationSelect: React.FC<LocationSelectProps> = (props) => {
  return (
    <UIKit.SelectSync<Resource.Common.Enums.Location> {...props} renderItem={(item) => item} items={Location.slice()} />
  );
};
