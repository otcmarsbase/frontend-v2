import { HStack, Image, Text } from '@chakra-ui/react';
import { Resource } from '@schema/api-gateway';

export interface AssetNameProps {
  asset: Resource.Asset.Asset;
  size?: 'sm' | 'md';
}

export const AssetName: React.FC<AssetNameProps> = ({ asset, size = 'md' }) => {
  return (
    <HStack gap="0.5rem" alignItems="center">
      <Image
        borderRadius="50%"
        objectFit="cover"
        src={asset?.info.logo_url}
        w={size === 'md' ? '3rem' : '1.875rem'}
        h={size === 'md' ? '3rem' : '1.875rem'}
      />
      <Text fontWeight="semibold">{asset?.info.title}</Text>
    </HStack>
  );
};
