import { useCallback } from 'react';

import { IconButton, Image } from '@chakra-ui/react';
import { Resource } from '@schema/api-gateway';

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
    <IconButton
      aria-label={asset.id}
      variant={isSelected ? 'darkOutline' : 'darkSolid'}
      size="lg"
      w="full"
      onClick={onSelectCallback}
      icon={<Image src={asset.info.logo_url} />}
    />
  );
}
