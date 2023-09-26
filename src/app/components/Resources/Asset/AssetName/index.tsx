import { HStack, Image, Text } from '@chakra-ui/react';
import { Resource } from '@schema/api-gateway';

import { AssetImage } from '../AssetImage';

export interface AssetNameProps {
  asset: Resource.Asset.Asset;
  size?: 'sm' | 'md';
  onClick?: (e: React.MouseEvent<HTMLDivElement>) => void;
}

export const AssetName: React.FC<AssetNameProps> = ({ asset, size = 'md', onClick }) => {
  return (
    <HStack gap="0.5rem" alignItems="center" onClick={onClick} cursor={onClick && 'pointer'}>
      <AssetImage
        borderRadius="50%"
        objectFit="cover"
        asset={asset}
        w={size === 'md' ? '3rem' : '1.875rem'}
        h={size === 'md' ? '3rem' : '1.875rem'}
      />
      <Text fontWeight="semibold">{asset?.info.title}</Text>
    </HStack>
  );
};
