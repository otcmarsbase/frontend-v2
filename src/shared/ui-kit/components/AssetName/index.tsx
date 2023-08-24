import { HStack, Image, Text } from '@chakra-ui/react';
import { Resource } from '@schema/api-gateway';

export interface AssetNameProps {
  name: Resource.Asset.Asset['info']['title'];
  logo: Resource.Asset.Asset['info']['logo_url'];
}

export const AssetName: React.FC<AssetNameProps> = ({ name, logo }) => {
  return (
    <HStack gap="0.5rem" alignItems="center" my="1.25rem">
      <Image
        borderRadius="50%"
        objectFit="cover"
        src={logo}
        w="3rem"
        h="3rem"
      />
      <Text fontWeight="semibold">{name}</Text>
    </HStack>
  );
};
