import { PropsWithChildren } from 'react';
import { observer } from 'mobx-react-lite';
import { useCreateOfferModal } from '@app/hooks';
import { router } from '@app/logic';
// import { WalletConnectButton } from '@app/logic/walletConnector';
import pages from '@app/pages';
import { Box, Container, ContainerProps, VStack } from '@chakra-ui/react';
import {
  Header,
  Footer,
  DiscordIcon,
  RedditIcon,
  TelegramIcon,
  LinktreeIcon,
  TwitterIcon,
  MediumIcon,
} from '@shared/ui-kit';
export interface AppLayoutProps {
  containerSize?: ContainerProps['size'];
}

export const AppLayout: React.FC<PropsWithChildren<AppLayoutProps>> = observer(
  ({ children, containerSize = 'md' }) => {
    const copyright = `© All Rights Reserved MarsBase, ${new Date().getFullYear()}`;
    const openCreateOfferModal = useCreateOfferModal();

    return (
      <VStack minHeight="100vh" width="full" gap="0">
        <Box width="full" flexShrink="0">
          <Header
            onLogoClick={() => router.navigateComponent(pages.home, {})}
            menuItems={[
              { label: 'OTC DESK' },
              {
                label: 'My Dashboard',
                onClick: () =>
                  router.navigateComponent(pages.dashboard.offers, {}),
              },
              {
                label: 'Create offer',
                onClick: openCreateOfferModal,
              },
            ]}
            rightContent={null}
          />
        </Box>
        <Box flex="1" width="full">
          <Container size={containerSize}>{children}</Container>
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
                icon: DiscordIcon,
                href: 'https://discord.com/channels/889519633890177074/892286634224132106',
              },
              {
                icon: RedditIcon,
                href: 'https://www.reddit.com/r/MarsbaseCryptoOTC/',
              },
              { icon: TelegramIcon, href: 'https://t.me/otcmarsbase' },
              { icon: LinktreeIcon, href: 'https://linktr.ee/MARSBASE' },
              { icon: TwitterIcon, href: 'https://twitter.com/MARSBASEio' },
              { icon: MediumIcon, href: 'https://marsbaseotc.medium.com/' },
            ]}
            copyright={copyright}
          />
        </Box>
      </VStack>
    );
  },
);
