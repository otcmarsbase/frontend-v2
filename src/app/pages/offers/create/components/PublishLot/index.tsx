import { FC } from 'react';
import { IPublishLot } from '@app/pages/offers/create/components/PublishLot/types';
import { Button } from '@chakra-ui/react';

export const PublishLot: FC<IPublishLot> = ({
  onPublishLot,
  children,
  isActive,
}) => {
  return (
    <Button
      onClick={onPublishLot}
      w="full"
      isDisabled={!isActive}
      layerStyle="brandLinearGradient"
      size="xl"
    >
      {children}
    </Button>
  );
};
