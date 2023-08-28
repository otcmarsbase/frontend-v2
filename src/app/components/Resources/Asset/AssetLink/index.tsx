import { PropsWithChildren, useMemo } from 'react';

import { Button } from '@chakra-ui/react';
import { Resource } from '@schema/api-gateway';

import { AssetLinkTypeIconMap } from './AssetLinkTypeIconMap';

export interface AssetLinkProps extends PropsWithChildren {
  type?: Resource.Asset.AssetLinkType;
  url?: string;
}

export function AssetLink({ type, children }: AssetLinkProps) {
  const LinkIcon = useMemo(() => AssetLinkTypeIconMap.get(type), [type]);

  return (
    <Button as="a" variant="darkSolid" size="sm" leftIcon={<LinkIcon />}>
      {children}
    </Button>
  );
}
