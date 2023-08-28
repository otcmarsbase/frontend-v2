import { useMemo } from 'react';

import { Square } from '@chakra-ui/react';
import { Resource } from '@schema/api-gateway';

import { AssetVerticalIconMap } from './const';

export interface AssetVerticalIconProps {
  value: Resource.Asset.AssetVertical;
}

export const AssetVerticalIcon: React.FC<AssetVerticalIconProps> = ({ value }) => {
  const IconComponent = useMemo(() => AssetVerticalIconMap.get(value), [value]);

  return (
    <Square>
      <IconComponent />
    </Square>
  );
};
