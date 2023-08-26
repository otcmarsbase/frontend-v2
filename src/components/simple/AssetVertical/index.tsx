import { Square } from '@chakra-ui/react';

import { AssetVerticalIcons } from './icons';

export interface AssetVerticalProps {
  value: string;
}

export const AssetVertical: React.FC<AssetVerticalProps> = ({ value }) => {
  const Icon = AssetVerticalIcons[value];
  return (
    <Square>
      <Icon />
    </Square>
  );
};
