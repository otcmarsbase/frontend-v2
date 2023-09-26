import { PropsWithChildren, useMemo } from 'react';

import { Button } from '@chakra-ui/react';
import { Resource } from '@schema/api-gateway';

import { AssetLinkTypeIconMap } from './AssetLinkTypeIconMap';

export interface AssetLinkProps extends PropsWithChildren {
  type?: Resource.Asset.Enums.AssetLinkType;
  url?: string;
}

export function AssetLink({ type, url, children }: AssetLinkProps) {
  const LinkIcon = useMemo(() => AssetLinkTypeIconMap.get(type), [type]);

  return (
    <Button as="a" href={url} target="_blank" variant="darkSolid" size="xs" leftIcon={<LinkIcon color="white" />}>
      {children}
    </Button>
  );
}
