import { FC, useEffect } from 'react';
import { FormProvider, useForm } from 'react-hook-form';

import { LocationSelect, useAuth } from '@app/components';
import { ProfileLayout } from '@app/layouts';
import { MBPages } from '@app/pages';
import { VStack, Heading, Box, HStack } from '@chakra-ui/react';
import { yupResolver } from '@hookform/resolvers/yup';
import { useRouter } from '@packages/router5-react-auto';
import { Input, InputTelegram } from '@shared/ui-kit';

import { InputGroup, ProfileInput, UserCard } from './_atoms';
import { ProfileSchema } from './schema';

const Home: FC = () => {
  const router = useRouter();
  const { account, isAuthorized } = useAuth();
  const formMethods = useForm({
    defaultValues: account?.profile,
    resolver: yupResolver(ProfileSchema),
    mode: 'onChange',
  });

  useEffect(() => {
    if (!isAuthorized) router.navigateComponent(MBPages.Marketplace.Home, {}, {});
  }, [isAuthorized, router]);

  if (!isAuthorized) return;

  return (
    <FormProvider {...formMethods}>
      <Heading fontSize="xl" mb="4">
        My profile
      </Heading>
      <VStack spacing="0.75rem">
        <UserCard
          id={account.id}
          nickname={account.nickname}
          isVerifyKYC
          lastLoginDeviceType="PC"
          lastLoginTime={new Date()}
        />
        <VStack width="100%" spacing="4" alignItems="flex-start">
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
        </VStack>
      </VStack>
    </FormProvider>
  );
};

Home.getLayout = ({ children }) => <ProfileLayout>{children}</ProfileLayout>;

export default Home;
