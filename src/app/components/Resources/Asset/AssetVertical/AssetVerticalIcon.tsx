import { useMemo } from 'react';

import { Square } from '@chakra-ui/react';
import { Resource } from '@schema/api-gateway';

import { AssetVerticalIconDictionary } from './const';

export interface AssetVerticalIconProps {
  value: Resource.Asset.AssetVertical;
}

export const AssetVerticalIcon: React.FC<AssetVerticalIconProps> = ({ value }) => {
  const IconComponent = useMemo(() => AssetVerticalIconDictionary.get(value), [value]);

  return (
    <Square border="0.0625rem solid" borderColor="dark.300" borderRadius="micro" size="1.5rem">
      <IconComponent w="0.75rem" h="0.75rem" />
    </Square>
  );
};
