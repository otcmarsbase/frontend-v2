import { PropsWithChildren } from 'react';
import { router } from '@app/logic';
import pages from '@app/pages';
import { Box, Button, Container, VStack } from '@chakra-ui/react';
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

export const AppLayout: React.FC<PropsWithChildren<{}>> = ({ children }) => {
  const copyright = `© All Rights Reserved MarsBase, ${new Date().getFullYear()}`;

  return (
    <VStack minHeight="100vh" width="100%" gap="0">
      <Box width="100%" flexShrink="0">
        <Header
          onLogoClick={() => router.navigateComponent(pages.home, {})}
          menuItems={[
            { label: '🔥 ZERO-LOCK OFFERS', href: { url: '#' } },
            { label: 'BEST BID AUCTION' },
            { label: 'OTC DESK' },
            {
              label: 'Create offer',
              onClick: () => router.navigateComponent(pages.offers.create, {}),
            },
          ]}
          rightContent={<Button>MetaMask</Button>}
        />
      </Box>
      <Box flex="1" width="100%">
        <Container>{children}</Container>
      </Box>
      <Box width="100%" marginTop="auto">
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
};
