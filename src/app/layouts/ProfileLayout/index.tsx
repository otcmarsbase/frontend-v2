import { FC, PropsWithChildren } from 'react';

import { useBreakpointDevice } from '@app/hooks';
import { AppLayout } from '@app/layouts';
import { GridItem, SimpleGrid } from '@chakra-ui/react';

import { Sidebar } from './_atoms';

export interface ProfileLayoutProps {}

export const ProfileLayout: FC<PropsWithChildren<ProfileLayoutProps>> = ({ children }) => {
  const { isMobile } = useBreakpointDevice();

  return (
    <SimpleGrid gridTemplateColumns={{ base: '1fr', md: '18rem 1fr' }} gap="10">
      {!isMobile && (
        <GridItem>
          <Sidebar />
        </GridItem>
      )}
      <GridItem>{children}</GridItem>
    </SimpleGrid>
  );
};

ProfileLayout.getLayout = ({ children }) => <AppLayout containerSize="container.xl">{children}</AppLayout>;
