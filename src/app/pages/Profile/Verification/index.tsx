import { FC, useEffect, useState } from 'react';

import { useAuth, useRpcSchemaClient } from '@app/components';
import { ProfileLayout } from '@app/layouts';
import { MBPages } from '@app/pages';
import { Heading, HStack, VStack, Text, Box, Image } from '@chakra-ui/react';
import { useRouter } from '@packages/router5-react-auto';

import { UserCard } from './_atoms/UserCard';
import sumsubLogoUrl from './assets/sumsubLogo.png';

const Verification: FC = () => {
  const router = useRouter();
  const { account, isAuthorized } = useAuth();
  const rpcSchema = useRpcSchemaClient();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!isAuthorized) router.navigateComponent(MBPages.Marketplace.Home, {}, {});
  }, [isAuthorized, router]);

  if (!isAuthorized) return;

  const handleVerifyClick = async () => {
    setIsLoading(true);

    const { url } = await rpcSchema.send('sumsub.generateVerificationLink', {});
    window.location.href = url;

    setIsLoading(false);
  };

  return (
    <Box>
      <Heading fontSize="xl" mb="4">
        Verification
      </Heading>
      <UserCard
        nickname={account.nickname}
        isVerifyKYC={account.verification.isVerified}
        onVerifyClick={handleVerifyClick}
        isLoading={isLoading}
      />
      <VStack alignItems="flex-start" my={3}>
        <HStack spacing={3}>
          <Text fontWeight={500}>Provider</Text>
          <Box px={2} py={1} bg="linear-gradient(263.9deg, #FF693E 3.46%, #E24400 50.09%, #F36F24 105.19%)" rounded={4}>
            <Image src={sumsubLogoUrl} alt="Sumsub" w={16} />
          </Box>
        </HStack>
        <Text color="dark.50">Sumsub named gold winner at the 2023 Globee ® Cybersecurity awards</Text>
      </VStack>
    </Box>
  );
};

Verification.getLayout = ({ children }) => <ProfileLayout>{children}</ProfileLayout>;

export default Verification;
