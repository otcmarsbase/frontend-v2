import { FC, useEffect, useState } from 'react';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';

import { LocationSelect, useAuth, useRpcSchemaClient } from '@app/components';
import { useToastInnerCallback } from '@app/hooks';
import { ProfileLayout } from '@app/layouts';
import { MBPages } from '@app/pages';
import { VStack, Heading, Box, Show, Button, chakra } from '@chakra-ui/react';
import { yupResolver } from '@hookform/resolvers/yup';
import { useRouter } from '@packages/router5-react-auto';
import { DeskGatewaySchema } from '@schema/desk-gateway';
import { Input, InputTelegram } from '@shared/ui-kit';

import { InputGroup, ProfileInput, UserCard } from './_atoms';
import { ProfileSchema } from './schema';

const Home: FC = () => {
  const router = useRouter();
  const { account, isAuthorized, updateAccount } = useAuth();
  const rpcSchema = useRpcSchemaClient();
  const formMethods = useForm({
    defaultValues: account?.profile,
    resolver: yupResolver(ProfileSchema),
    mode: 'onChange',
  });
  const [isLoading, setIsLoading] = useState(false);

  const save: SubmitHandler<DeskGatewaySchema.AccountProfile> = async (data) => {
    try {
      setIsLoading(true);
      await rpcSchema.send('user.updateProfile', data);
      const account = await rpcSchema.send('account.me', {});
      updateAccount(account);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = useToastInnerCallback(save, {});

  useEffect(() => {
    if (!isAuthorized) router.navigateComponent(MBPages.Marketplace.Home, {}, {});
  }, [isAuthorized, router]);

  if (!isAuthorized) return;

  return (
    <Box maxW="45.5rem">
      <FormProvider {...formMethods}>
        <Heading fontSize="xl" mb="4">
          My profile
        </Heading>
        <VStack spacing="0.75rem">
          <UserCard
            id={account.id}
            nickname={account.nickname}
            isVerifyKYC={account.verification.isVerified}
            lastLoginDeviceType="PC"
            lastLoginTime={new Date()}
          />
          <VStack
            onSubmit={formMethods.handleSubmit(handleSubmit, console.log)}
            width="100%"
            spacing="4"
            alignItems="flex-start"
            as={chakra.form}
          >
            <InputGroup
              title="Name info"
              description="Provide information about the round on which you purchased the tokens. This information is necessary to
              calculate your supply."
            >
              <ProfileInput
                name="firstName"
                label="Name"
                render={({ field }) => <Input placeholder="Enter name" {...field} />}
              />
              <ProfileInput
                name="lastName"
                label="Last Name"
                render={({ field }) => <Input placeholder="Enter last name" {...field} />}
              />
            </InputGroup>

            <InputGroup
              title="Contacts info"
              description="Provide information about the round on which you purchased the tokens. This information is necessary to
              calculate your supply."
            >
              <ProfileInput
                name="telegram"
                label="Telegram"
                render={({ field }) => <InputTelegram placeholder="Enter telegram" {...field} />}
              />
              <ProfileInput name="location" label="Location" render={({ field }) => <LocationSelect {...field} />} />
            </InputGroup>

            <Show below="md">
              <Button isLoading={isLoading} w="full" type="submit">
                Save
              </Button>
            </Show>
          </VStack>
        </VStack>
      </FormProvider>
    </Box>
  );
};

Home.getLayout = ({ children }) => <ProfileLayout>{children}</ProfileLayout>;

export default Home;
