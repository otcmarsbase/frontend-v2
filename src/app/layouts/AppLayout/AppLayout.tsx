import { MBPages } from '@app/pages';
import { Box, Container, ContainerProps, Link, VStack } from '@chakra-ui/react';
import { useRouter } from '@packages/router5-react-auto';
import { AppConfig } from '@shared/config';

import { Header, Footer } from './atoms';
import { BottomMenu } from './atoms/BottomMenu';

export interface AppLayoutProps {
  containerSize?: ContainerProps['size'];
}

export function AppLayout({ children, containerSize = 'lg' }) {
  const router = useRouter();

  return (
    <>
      <VStack minHeight="100vh" width="full" gap="0" mb={{ base: '5rem', md: 'initial' }}>
        <Box width="full" flexShrink="0">
          <Header />
        </Box>
        <Box flex="1" width="full">
          <Container size={containerSize} mt={{ base: '1rem', md: '3rem' }} maxW={{ base: '100%', md: '85%' }}>
            {children}
          </Container>
        </Box>
        <Box width="full" marginTop="auto">
          <Box w="full" px={{ base: '1rem', md: '10rem' }} margin="0 auto">
            <Footer
              links={[
                <Link href={AppConfig.links.aboutURL} target="_blank">
                  About
                </Link>,
                <Link href={AppConfig.links.supportURL} target="_blank">
                  Support
                </Link>,
                <Link href={AppConfig.links.termsOfUseURL} target="_blank">
                  Terms Of Use
                </Link>,
                <Link href={AppConfig.links.privacyPolicyURL} target="_blank">
                  Privacy Policy
                </Link>,
              ]}
              about={{
                title: 'MARSBASE dOTC Desk',
                description:
                  'A perfect place for crypto whales and retail investors to trade large volumes of any digital asset with no price slippage or market impact.',
              }}
              socials={AppConfig.socials}
              copyrightText={`© All Rights Reserved MarsBase, ${new Date().getFullYear()}`}
            />
          </Box>
        </Box>
      </VStack>
      <BottomMenu
        items={[
          {
            label: 'Create offer',
            icon: 'AddIcon',
            onClick: () => router.navigateComponent(MBPages.Lot.Create.Home, {}, {}),
            needAuth: true,
          },
          {
            label: 'OTC Desk',
            icon: 'SwapIcon',
            onClick: () => router.navigateComponent(MBPages.Marketplace.Home, {}, {}),
          },
          {
            label: 'Dashboard',
            icon: 'DashboardIcon',
            onClick: () => router.navigateComponent(MBPages.Dashboard.Home, {}, {}),
            needAuth: true,
          },
          {
            label: 'Profile',
            icon: 'ProfileIcon',
            onClick: () => router.navigateComponent(MBPages.Marketplace.Home, {}, {}),
            needAuth: true,
          },
          {
            label: 'More',
            icon: 'KebabMenuIcon',
            onClick: () => router.navigateComponent(MBPages.Marketplace.Home, {}, {}),
          },
        ]}
      />
    </>
  );
}
