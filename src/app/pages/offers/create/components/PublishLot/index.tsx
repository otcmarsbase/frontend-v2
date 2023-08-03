import { FC, ReactNode } from 'react';
import { Button } from '@chakra-ui/react';

export const PublishLot: FC<{
  onPublishLot: () => void;
  children: ReactNode;
  isActive: boolean;
}> = ({ onPublishLot, children, isActive }) => {
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
