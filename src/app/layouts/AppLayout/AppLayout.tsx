import { useAuth } from '@app/components';
import { MBPages } from '@app/pages';
import { Box, Container, ContainerProps, VStack } from '@chakra-ui/react';
import { useRouter } from '@packages/router5-react-auto';
import { AppConfig } from '@shared/config';

import { FeedbackButton } from '../../components/Resources/Feedback';

import { Header, Footer } from './atoms';
import { BottomMenu } from './atoms/BottomMenu';

export interface AppLayoutProps {
  containerSize?: ContainerProps['size'];
}

export function AppLayout({ children, containerSize = 'lg' }) {
  const router = useRouter();
  const { isAuthorized } = useAuth()

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
                {
                  title: 'About',
                  href: AppConfig.links.aboutURL,
                },
                {
                  title: 'Support',
                  href: AppConfig.links.supportURL,
                },
                {
                  title: 'Terms of Use',
                  href: AppConfig.links.termsOfUseURL,
                },
                {
                  title: 'Privacy Policy',
                  href: AppConfig.links.privacyPolicyURL,
                },
              ]}
              about={{
                title: 'MARSBASE dOTC Desk',
                description:
                  'Pioneering the Evolution of Web3 Secondary Markets! DeFi secondary market for all types of illiquid assets in the web3 ecosystem. Facilitating trading of locked assets, options, distressed tokens, and more.',
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
            onClick: () => router.navigateComponent(MBPages.Lot.Create.Home, { direction: 'BUY' }, {}),
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
            onClick: () => router.navigateComponent(MBPages.Profile.Home, {}, {}),
            needAuth: true,
          },
          {
            label: 'More',
            icon: 'KebabMenuIcon',
            onClick: () => router.navigateComponent(MBPages.Marketplace.Home, {}, {}),
          },
        ]}
      />
      {isAuthorized && <FeedbackButton />}
    </>
  );
}
