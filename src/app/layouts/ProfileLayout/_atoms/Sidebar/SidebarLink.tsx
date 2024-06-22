import { PropsWithChildren, ReactNode } from 'react';

import { Link } from '@chakra-ui/react';
import { useRouter } from '@packages/router5-react-auto';
import { Button, LinkComponent, LinkComponentProps } from '@shared/ui-kit';

interface SidebarLinkProps<Props> extends LinkComponentProps<Props> {
  icon: JSX.Element;
}

export function SidebarLink<Props>({ icon, children, page, ...linkProps }: PropsWithChildren<SidebarLinkProps<Props>>) {
  const router = useRouter();
  const isActive = router.isActiveRouteByComponent(page);

  return (
    <LinkComponent page={page} {...linkProps}>
      <Button
        px="6"
        py="4"
        as={Link}
        border="2px solid"
        borderColor={isActive ? 'orange.300' : 'dark.800'}
        borderRadius="sm"
        fontWeight="bold"
        color={isActive ? 'white' : 'dark.200'}
        fontSize="2md"
        w="full"
        display="flex"
        leftIcon={icon}
        variant="unstyled"
        justifyContent="flex-start"
        _hover={{
          textDecoration: 'none',
          borderColor: 'orange.300',
          color: 'white',
        }}
      >
        {children}
      </Button>
    </LinkComponent>
  );
}
