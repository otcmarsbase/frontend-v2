import { HStack, Text } from '@chakra-ui/react';
import { Assets } from '@shared/types';
import { Icons } from '../..';

export interface AssetNameProps {
  name: string;
  iconName: Assets.AssetIcon;
}

export const AssetName: React.FC<AssetNameProps> = ({ name, iconName }) => {
  const LotIcon = Icons[iconName];

  return (
    <HStack gap="0.5rem" alignItems="center" my="1.25rem">
      <LotIcon w="1.875rem" h="1.875rem" />
      <Text fontWeight="semibold">{name}</Text>
    </HStack>
  );
};
