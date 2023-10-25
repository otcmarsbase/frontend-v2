import { useMemo } from 'react';

import { Square } from '@chakra-ui/react';
import { Resource } from '@schema/desk-gateway';
import { Tooltip } from '@shared/ui-kit';

import { AssetVerticalIconDictionary, AssetVerticalTitle } from './const';

export interface AssetVerticalIconProps {
  value: Resource.Asset.Enums.AssetVertical;
}

export const AssetVerticalIcon: React.FC<AssetVerticalIconProps> = ({ value }) => {
  const IconComponent = useMemo(() => AssetVerticalIconDictionary.get(value), [value]);
  const title = useMemo(() => AssetVerticalTitle.get(value), [value]);

  return (
    <Tooltip label={title}>
      <Square border="0.0625rem solid" borderColor="dark.300" borderRadius="micro" size="1.5rem">
        <IconComponent w="0.75rem" h="0.75rem" />
      </Square>
    </Tooltip>
  );
};
