import { PropsWithChildren } from 'react';
import { router } from '@app/logic';
import pages from '@app/pages';
import { Box, Button, Container, VStack } from '@chakra-ui/react';
import { Header } from '@shared/ui-kit';

export const AppLayout: React.FC<PropsWithChildren<{}>> = ({ children }) => {
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
      {
        // TODO: Заменить на футер в будущих задачах
      }
      <Box width="100%" marginTop="auto">
        Footer
      </Box>
    </VStack>
  );
};
