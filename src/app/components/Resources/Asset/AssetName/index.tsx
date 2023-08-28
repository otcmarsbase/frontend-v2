import { HStack, Image, Text } from '@chakra-ui/react';
import { Resource } from '@schema/api-gateway';

export interface AssetNameProps {
  asset: Resource.Asset.Asset;
}

export const AssetName: React.FC<AssetNameProps> = ({ asset }) => {
  return (
    <HStack gap="0.5rem" alignItems="center" my="1.25rem">
      <Image borderRadius="50%" objectFit="cover" src={asset.info.logo_url} w="3rem" h="3rem" />
      <Text fontWeight="semibold">{asset.info.title}</Text>
    </HStack>
  );
};
