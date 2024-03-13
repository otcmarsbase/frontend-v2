import { useCallback } from 'react';

import { Button } from '@chakra-ui/react';
import { DeskGatewaySchema } from '@schema/desk-gateway';
import { Tooltip } from '@shared/ui-kit';

import { AssetImage } from '../AssetImage';

export interface AssetIconButtonProps {
  asset: DeskGatewaySchema.Asset;

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
        w={{ base: '2.5rem', md: 'full' }}
        h={{ base: '2.5rem', md: 'initial' }}
        onClick={onSelectCallback}
        p="0"
        sx={{
          '& .chakra-button__icon': {
            margin: 0,
          },
        }}
      >
        <AssetImage asset={asset} w={{ base: '1.5rem', md: '2rem' }} h={{ base: '1.5rem', md: '2rem' }} />
      </Button>
    </Tooltip>
  );
}
