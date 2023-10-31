import { useCallback } from 'react';

import { HStack, Text } from '@chakra-ui/react';
import { Resource } from '@schema/desk-gateway';

import { AssetImage } from '../AssetImage';

export interface AssetNameProps {
  asset: Resource.Asset.Asset | Resource.Lot.ValueObjects.AssetCreateRequest;
  size?: 'xs' | 'sm' | 'md';
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
      fontSize={size === 'sm' ? '1rem' : undefined}
      _hover={{
        textDecoration: onClick && 'underline',
      }}
    >
      {'title' in asset ? (
        <Text fontWeight="semibold" fontSize="1.25rem">
          {asset.title}
        </Text>
      ) : (
        <>
          <AssetImage
            rounded="full"
            objectFit="cover"
            asset={asset}
            w={size === 'md' ? '3rem' : size === 'sm' ? '2.25rem' : '1.5rem'}
            h={size === 'md' ? '3rem' : size === 'sm' ? '2.25rem' : '1.5rem'}
          />
          <Text fontWeight="semibold" fontSize="1.25rem">
            {asset?.info.title}
          </Text>
        </>
      )}
    </HStack>
  );
};
