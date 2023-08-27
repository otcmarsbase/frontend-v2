import { PropsWithChildren, useCallback } from 'react';

import { observer } from 'mobx-react-lite';

import { AppConfig } from '@app/config';
import { ModalController, router } from '@app/logic';
import pages from '@app/pages';
import { Box, Container, ContainerProps, Link, VStack } from '@chakra-ui/react';
import { UIModals } from '@components/modals';
import { Footer, Header, LinkComponent } from '@components/ui-kit';

import { HeaderRightContent } from './components';

export interface AppLayoutProps {
  containerSize?: ContainerProps['size'];
}

export const AppLayout: React.FC<PropsWithChildren<AppLayoutProps>> = observer(({ children, containerSize = 'md' }) => {
  const onCreateOfferClick = useCallback(async () => {
    // TODO
    const direction = await ModalController.create(UIModals.TradeDirectionChooseModal, {});
    router.navigateComponent(pages.Home, {}, {});
  }, []);

  return (
    <VStack minHeight="100vh" width="full" gap="0">
      <Box width="full" flexShrink="0">
        <Header
          items={[
            <LinkComponent page={pages.Home} pageProps={{}}>
              OTC Desk
            </LinkComponent>,
            <LinkComponent page={pages.Home} pageProps={{}}>
              My Dashboard
            </LinkComponent>,
            <LinkComponent page={pages.Home} pageProps={{}} onClick={onCreateOfferClick}>
              Create offer
            </LinkComponent>,
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
            <Link href="#">About</Link>,
            <Link href="#">Security</Link>,
            <Link href="#">Fee Structure</Link>,
            <Link href="#">API Docs</Link>,
            <Link href="#">Support</Link>,
            <Link href="#">Cookie Policy</Link>,
            <Link href="#">Terms Of Use</Link>,
            <Link href="#">Privacy Policy</Link>,
          ]}
          about={{
            title: 'MARSBASE dOTC Desk',
            description:
              'A perfect place for crypto whales and retail investors to trade large volumes of any digital asset with no price slippage or market impact.',
          }}
          socials={{
            githubUrl: AppConfig.socials.githubUrl,
            twitterUrl: AppConfig.socials.twitterUrl,
            telegramUrl: AppConfig.socials.telegramUrl,
            discordUrl: AppConfig.socials.discordUrl,
            mediumUrl: AppConfig.socials.mediumUrl,
            linktreeUrl: AppConfig.socials.linktreeUrl,
          }}
          copyrightText={`© All Rights Reserved MarsBase, ${new Date().getFullYear()}`}
        />
      </Box>
    </VStack>
  );
});
