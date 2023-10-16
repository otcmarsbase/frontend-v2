import { useCallback } from 'react';

import { HStack, Image, Text } from '@chakra-ui/react';
import { Resource } from '@schema/otc-desk-gateway';

import { AssetImage } from '../AssetImage';

export interface AssetNameProps {
  asset: Resource.Asset.Asset;
  size?: 'sm' | 'md';
  onClick?: (e: React.MouseEvent<HTMLDivElement>) => void;
}

export const AssetName: React.FC<AssetNameProps> = ({ asset, size = 'md', onClick }) => {
  const handleClick = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      e.stopPropagation();
      onClick && onClick(e);
    },
    [onClick],
  );

  return (
    <HStack
      gap="0.5rem"
      alignItems="center"
      onClick={handleClick}
      cursor={onClick && 'pointer'}
      _hover={{
        textDecoration: onClick && 'underline',
      }}
    >
      <AssetImage
        rounded="full"
        objectFit="cover"
        asset={asset}
        w={size === 'md' ? '3rem' : '2.25rem'}
        h={size === 'md' ? '3rem' : '2.25rem'}
      />
      <Text fontWeight="semibold" fontSize="1.25rem">
        {asset?.info.title}
      </Text>
    </HStack>
  );
};
