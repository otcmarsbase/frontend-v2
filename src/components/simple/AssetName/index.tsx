import { HStack, Image, Text } from '@chakra-ui/react';

export interface AssetNameProps {
  name: string;
  logo: string;
}

export const AssetName: React.FC<AssetNameProps> = ({ name, logo }) => {
  return (
    <HStack gap="0.5rem" alignItems="center" my="1.25rem">
      <Image borderRadius="50%" objectFit="cover" src={logo} w="3rem" h="3rem" />
      <Text fontWeight="semibold">{name}</Text>
    </HStack>
  );
};
