import { FC } from 'react';
import { Controller, useForm } from 'react-hook-form';

import { ProfileLayout } from '@app/layouts';
import { Heading, VStack, Text, HStack, Divider } from '@chakra-ui/react';
import { Switch } from '@shared/ui-kit';

const Settings: FC = () => {
  const { control } = useForm();

  return (
    <>
      <Heading fontSize="xl" mb="5">
        Settings
      </Heading>
      <VStack spacing="3" w="full" alignItems="flex-start">
        <VStack alignItems="start" gap="0.1rem">
          <Text fontSize="2md" fontWeight="bold">
            Notification
          </Text>
          <Text color="dark.50" fontSize="sm">
            Provide information about the round on which you purchased the tokens. This information is necessary to
            calculate your supply.
          </Text>
        </VStack>
        <VStack bg="dark.900" px={{ base: '3', md: '9' }} py={{ base: '3', md: '6' }} w="full" rounded="md" spacing="4">
          <HStack w="full" justifyContent="space-between">
            <VStack alignItems="flex-start" spacing="1">
              <Text fontSize="md" fontWeight="bold">
                Deal Status Update
              </Text>
              <Text color="dark.50" fontSize="sm">
                Notify me about a trade progress status update, deal status update, new deal
              </Text>
            </VStack>
            <Controller control={control} name="setting1" render={({ field }) => <Switch {...field} />} />
          </HStack>
          <Divider color="dark.500" opacity="0.5" />
          <HStack w="full" justifyContent="space-between">
            <VStack alignItems="flex-start" spacing="1">
              <Text fontSize="md" fontWeight="bold">
                Lot Status Update
              </Text>
              <Text color="dark.50" fontSize="sm">
                Notify me about the status update of the lot I created
              </Text>
            </VStack>
            <Controller control={control} name="setting1" render={({ field }) => <Switch {...field} />} />
          </HStack>
          <Divider color="dark.500" opacity="0.5" />
          <HStack w="full" justifyContent="space-between">
            <VStack alignItems="flex-start" spacing="1">
              <Text fontSize="md" fontWeight="bold">
                Bid Status Update
              </Text>
              <Text color="dark.50" fontSize="sm">
                Notify me of an update on the status of a bid I left
              </Text>
            </VStack>
            <Controller control={control} name="setting1" render={({ field }) => <Switch {...field} />} />
          </HStack>
          <Divider color="dark.500" opacity="0.5" />
          <HStack w="full" justifyContent="space-between">
            <VStack alignItems="flex-start" spacing="1">
              <Text fontSize="md" fontWeight="bold">
                New Lot Notification
              </Text>
              <Text color="dark.50" fontSize="sm">
                Notify me about new lots on the platform
              </Text>
            </VStack>
            <Controller control={control} name="setting1" render={({ field }) => <Switch {...field} />} />
          </HStack>
          <Divider color="dark.500" opacity="0.5" />
          <HStack w="full" justifyContent="space-between">
            <VStack alignItems="flex-start" spacing="1">
              <Text fontSize="md" fontWeight="bold">
                OTC Desk News
              </Text>
              <Text color="dark.50" fontSize="sm">
                Notify me about announcements, news and platform updates
              </Text>
            </VStack>
            <Controller control={control} name="setting1" render={({ field }) => <Switch {...field} />} />
          </HStack>
        </VStack>
      </VStack>
    </>
  );
};

Settings.getLayout = ({ children }) => <ProfileLayout>{children}</ProfileLayout>;

export default Settings;
