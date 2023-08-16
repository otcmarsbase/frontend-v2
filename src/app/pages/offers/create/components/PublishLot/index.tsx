import { FC } from 'react';

import { Button } from '@chakra-ui/react';

import { IPublishLot } from '../PublishLot/types';

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
