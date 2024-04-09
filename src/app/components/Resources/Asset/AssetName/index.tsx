import React, { useCallback } from 'react';

import { Box, HStack, StackProps, Text, Flex } from '@chakra-ui/react';
import { DeskGatewaySchema } from '@schema/desk-gateway';

import { AssetImage } from '../AssetImage';

type AssetNameSize = 'xs' | 'sm' | 'md';

export interface AssetNameProps extends StackProps {
  asset: DeskGatewaySchema.Asset | DeskGatewaySchema.LotAssetRequest;
  size?: AssetNameSize;
  onClick?: (e: React.MouseEvent<HTMLDivElement>) => void;
}

export const AssetName: React.FC<AssetNameProps> = ({ asset, size = 'md', onClick, ...stackProps }) => {
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
      {...stackProps}
    >
      <Box>
        <Flex alignItems="center">
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
                marginRight="0.35rem"
              />
              <Text fontWeight="semibold" fontSize={fontSizes[size]}>
                {asset?.info.title}
              </Text>
            </>
          )}
        </Flex>
      </Box>
    </HStack>
  );
};
