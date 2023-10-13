import { useCallback } from 'react';

import { Button, Image } from '@chakra-ui/react';
import { Resource } from '@schema/otc-desk-gateway';

import { AssetImage } from '../AssetImage';

export interface AssetIconButtonProps {
  asset: Resource.Asset.Asset;

  isSelected: boolean;
  onSelect?: (isSelected: boolean) => void;
}

export function AssetIconButton({ asset, isSelected, onSelect }: AssetIconButtonProps) {
  const onSelectCallback = useCallback(() => {
    if (onSelect) onSelect(!isSelected);
  }, [isSelected, onSelect]);

  return (
    <Button
      aria-label={asset.id}
      variant={isSelected ? 'darkSolid' : 'darkOutline'}
      size="lg"
      w="full"
      onClick={onSelectCallback}
      p="0"
      sx={{
        '& .chakra-button__icon': {
          margin: 0,
        },
      }}
      leftIcon={<AssetImage asset={asset} w="2rem" h="2rem" />}
    >
      {/* <Box bg={`url(${asset.info.logo_url})`} w="2rem" h="2rem" /> */}
      {null}
    </Button>
  );
}
