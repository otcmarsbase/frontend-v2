import { PropsWithChildren } from 'react';

import { HStack, Heading } from '@chakra-ui/react';
import { UIIcons } from '@components/icons';

import { LinkComponent, LinkComponentProps } from '../LinkComponent';

export interface BackToProps<Props> extends Omit<LinkComponentProps<Props>, 'children'>, PropsWithChildren {}

export function BackTo<Props>({ children, ...linkProps }: BackToProps<Props>) {
  return (
    <LinkComponent {...linkProps}>
      <HStack w="100%" color="#888D9B" cursor="pointer">
        <UIIcons.Common.ArrowLeft />
        <Heading variant="h5" fontWeight={600}>
          {children}
        </Heading>
      </HStack>
    </LinkComponent>
  );
}
