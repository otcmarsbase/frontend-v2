import { useCallback } from 'react';

import { Button } from '@chakra-ui/react';
import { Resource } from '@schema/desk-gateway';
import { Tooltip } from '@shared/ui-kit';

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
    <Tooltip label={asset.info.title}>
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
      >
        <AssetImage asset={asset} w="2rem" h="2rem" />
      </Button>
    </Tooltip>
  );
}
