import { Box, Container, ContainerProps, Link, VStack } from '@chakra-ui/react';
import { AppConfig } from '@shared/config';

import { Header, Footer } from './atoms';

export interface AppLayoutProps {
  containerSize?: ContainerProps['size'];
}

export function AppLayout({ children, containerSize = 'lg' }) {
  return (
    <VStack minHeight="100vh" width="full" gap="0">
      <Box width="full" flexShrink="0">
        <Header />
      </Box>
      <Box flex="1" width="full">
        <Container size={containerSize} mt="3rem">
          {children}
        </Container>
      </Box>
      <Box width="full" marginTop="auto">
        <Box w="full" px="10rem" margin="0 auto">
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
  );
}
