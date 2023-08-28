import { useCallback } from 'react';

import { AppConfig } from '@app/config';
import { ModalController } from '@app/logic';
import pages from '@app/pages';
import { Box, Container, ContainerProps, Link, VStack } from '@chakra-ui/react';
import { UIModals } from '@components/modals';
import { useRouter } from '@packages/router5-react-auto';

import { Header, Footer } from './atoms';

export interface AppLayoutProps {
  containerSize?: ContainerProps['size'];
}

export function AppLayout({ children, containerSize = 'md' }) {
  const router = useRouter();

  const onCreateOfferClick = useCallback(async () => {
    const direction = await ModalController.create(UIModals.TradeDirectionChooseModal, {});
    router.navigateComponent(pages.Home, {}, {});
  }, [router]);

  return (
    <VStack minHeight="100vh" width="full" gap="0">
      <Box width="full" flexShrink="0">
        <Header onCreateOfferClick={onCreateOfferClick} />
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
}
