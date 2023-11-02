import { useCallback } from 'react';

import { HStack, Text } from '@chakra-ui/react';
import { Resource } from '@schema/desk-gateway';

import { AssetImage } from '../AssetImage';

type AssetNameSize = 'xs' | 'sm' | 'md';

export interface AssetNameProps {
  asset: Resource.Asset.Asset | Resource.Lot.ValueObjects.AssetCreateRequest;
  size?: AssetNameSize;
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

  const fontSizes: Record<AssetNameSize, string> = {
    xs: '1rem',
    sm: '1.25rem',
    md: '1.25rem',
  };

  const assetImageSize: Record<AssetNameSize, string> = {
    xs: '1.5rem',
    sm: '2.25rem',
    md: '3rem',
  };

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
      {'title' in asset ? (
        <Text fontWeight="semibold" fontSize={fontSizes[size]}>
          {asset.title}
        </Text>
      ) : (
        <>
          <AssetImage
            rounded="full"
            objectFit="cover"
            asset={asset}
            w={assetImageSize[size]}
            h={assetImageSize[size]}
          />
          <Text fontWeight="semibold" fontSize={fontSizes[size]}>
            {asset?.info.title}
          </Text>
        </>
      )}
    </HStack>
  );
};
