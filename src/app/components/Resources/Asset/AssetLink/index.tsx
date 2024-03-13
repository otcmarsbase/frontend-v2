import { PropsWithChildren, useMemo } from 'react';

import { Button } from '@chakra-ui/react';
import { DeskGatewaySchema } from '@schema/desk-gateway';

import { AssetLinkTypeIconMap } from './AssetLinkTypeIconMap';

export interface AssetLinkProps extends PropsWithChildren {
  type?: DeskGatewaySchema.AssetLinkType;
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
