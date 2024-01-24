import { FC } from 'react';
import { FormProvider, useForm } from 'react-hook-form';

import { LocationSelect } from '@app/components';
import { ProfileLayout } from '@app/layouts';
import { VStack, Heading } from '@chakra-ui/react';
import { yupResolver } from '@hookform/resolvers/yup';
import { Input, InputTelegram } from '@shared/ui-kit';

import { InputGroup, ProfileInput } from './_atoms';
import { ProfileSchema } from './schema';

const Home: FC = () => {
  const formMethods = useForm({ resolver: yupResolver(ProfileSchema), mode: 'onTouched' });

  return (
    <FormProvider {...formMethods}>
      <Heading fontSize="xl" mb="4">
        My profile
      </Heading>
      <VStack spacing="4" alignItems="flex-start">
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
          <ProfileInput
            name="email"
            label="Email"
            render={({ field }) => <Input placeholder="Enter email" {...field} />}
          />
          <ProfileInput name="location" label="Location" render={({ field }) => <LocationSelect {...field} />} />
        </InputGroup>
      </VStack>
    </FormProvider>
  );
};

Home.getLayout = ({ children }) => <ProfileLayout>{children}</ProfileLayout>;

export default Home;
