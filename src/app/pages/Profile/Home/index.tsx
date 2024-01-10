import { FC } from 'react';
import { Controller, useForm } from 'react-hook-form';

import { LocationSelect } from '@app/components';
import { ProfileLayout } from '@app/layouts';
import { VStack, Heading, Text } from '@chakra-ui/react';
import { FormElement, Input, InputTelegram } from '@shared/ui-kit';

const Home: FC = () => {
  const { control } = useForm();

  return (
    <>
      <Heading fontSize="xl" mb="4">
        My profile
      </Heading>
      <VStack spacing="4" alignItems="flex-start">
        <VStack spacing="3" w="full" alignItems="flex-start">
          <VStack alignItems="start" gap="0.1rem">
            <Text fontSize="2md" fontWeight="bold">
              Name info
            </Text>
            <Text color="dark.50" fontSize="sm">
              Provide information about the round on which you purchased the tokens. This information is necessary to
              calculate your supply.
            </Text>
          </VStack>
          <VStack
            bg="dark.900"
            px={{ base: '3', md: '9' }}
            py={{ base: '3', md: '6' }}
            w="full"
            rounded="md"
            spacing={{ base: '3', md: '9' }}
          >
            <FormElement label="Nickname" isRequired={false} w="full" alignItems="center">
              <Controller
                control={control}
                name="nickname"
                render={({ field }) => <Input placeholder="Enter nickname" {...field} />}
              />
            </FormElement>
            <FormElement label="Name" isRequired={false} w="full" alignItems="center">
              <Controller
                control={control}
                name="name"
                render={({ field }) => <Input placeholder="Enter name" {...field} />}
              />
            </FormElement>
            <FormElement label="Last Name" isRequired={false} w="full" alignItems="center">
              <Controller
                control={control}
                name="lastname"
                render={({ field }) => <Input placeholder="Enter last name" {...field} />}
              />
            </FormElement>
          </VStack>
        </VStack>
        <VStack spacing="3" w="full" alignItems="flex-start">
          <VStack alignItems="start" gap="0.1rem">
            <Text fontSize="2md" fontWeight="bold">
              Contacts info
            </Text>
            <Text color="dark.50" fontSize="sm">
              Provide information about the round on which you purchased the tokens. This information is necessary to
              calculate your supply.
            </Text>
          </VStack>
          <VStack
            bg="dark.900"
            px={{ base: '3', md: '9' }}
            py={{ base: '3', md: '6' }}
            w="full"
            rounded="md"
            spacing={{ base: '3', md: '9' }}
          >
            <FormElement label="Telegram" isRequired={false} w="full" alignItems="center">
              <Controller
                control={control}
                name="telegram"
                render={({ field }) => <InputTelegram placeholder="Enter telegram" {...field} />}
              />
            </FormElement>
            <FormElement label="Email" isRequired={false} w="full" alignItems="center">
              <Controller
                control={control}
                name="email"
                render={({ field }) => <Input placeholder="Enter email" {...field} />}
              />
            </FormElement>
            <FormElement label="Location" isRequired={false} w="full" alignItems="center">
              <Controller control={control} name="location" render={({ field }) => <LocationSelect {...field} />} />
            </FormElement>
          </VStack>
        </VStack>
      </VStack>
    </>
  );
};

Home.getLayout = ({ children }) => <ProfileLayout>{children}</ProfileLayout>;

export default Home;
