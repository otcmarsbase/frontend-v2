import { PropsWithChildren } from 'react';

import { observer } from 'mobx-react-lite';

import { useCreateOfferModal } from '@app/hooks';
import { router } from '@app/logic';
import * as pages from '@app/pages';
import { Box, Container, ContainerProps, VStack } from '@chakra-ui/react';
import { Footer, Header } from '@shared/ui-molecules';

import { HeaderRightContent } from './components';

export interface AppLayoutProps {
  containerSize?: ContainerProps['size'];
}

export const AppLayout: React.FC<PropsWithChildren<AppLayoutProps>> = observer(({ children, containerSize = 'md' }) => {
  const copyright = `© All Rights Reserved MarsBase, ${new Date().getFullYear()}`;
  const openCreateOfferModal = useCreateOfferModal();

  return (
    <VStack minHeight="100vh" width="full" gap="0">
      <Box width="full" flexShrink="0">
        <Header
          onLogoClick={() => router.navigateComponent(pages.home, {})}
          menuItems={[
            {
              label: 'OTC DESK',
              onClick: () => router.navigateComponent(pages.otcDesk.home, {}),
            },
            {
              label: 'My Dashboard',
              onClick: () => router.navigateComponent(pages.dashboard.offers, {}),
            },
            {
              label: 'Create offer',
              onClick: openCreateOfferModal,
            },
          ]}
          rightContent={<HeaderRightContent />}
        />
      </Box>
      <Box flex="1" width="full">
        <Container size={containerSize} mt="3rem">
          {children}
        </Container>
      </Box>
      <Box width="full" marginTop="auto">
        <Footer
          links={[
            { label: 'About', href: { url: '#' } },
            { label: 'Security', href: { url: '#' } },
            { label: 'Fee Structure', href: { url: '#' } },
            { label: 'API Docs', href: { url: '#' } },
            { label: 'Support', href: { url: '#' } },
            { label: 'Cookie Policy', href: { url: '#' } },
            { label: 'Terms Of Use', href: { url: '#' } },
            { label: 'Privacy Policy', href: { url: '#' } },
          ]}
          about={{
            title: 'MARSBASE dOTC Desk',
            description:
              'A perfect place for crypto whales and retail investors to trade large volumes of any digital asset with no price slippage or market impact.',
          }}
          socials={[
            {
              iconName: 'DiscordIcon',
              href: 'https://discord.com/channels/889519633890177074/892286634224132106',
            },
            {
              iconName: 'RedditIcon',
              href: 'https://www.reddit.com/r/MarsbaseCryptoOTC/',
            },
            { iconName: 'TelegramIcon', href: 'https://t.me/otcmarsbase' },
            { iconName: 'LinktreeIcon', href: 'https://linktr.ee/MARSBASE' },
            {
              iconName: 'TwitterIcon',
              href: 'https://twitter.com/MARSBASEio',
            },
            {
              iconName: 'MediumIcon',
              href: 'https://marsbaseotc.medium.com/',
            },
          ]}
          copyright={copyright}
        />
      </Box>
    </VStack>
  );
});
