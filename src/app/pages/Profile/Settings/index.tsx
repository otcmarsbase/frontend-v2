import { FC, useEffect, useRef } from 'react';
import { useForm, FormProvider } from 'react-hook-form';

import { NotificationSettingsItem, useRpcSchemaClient, useRpcSchemaQuery } from '@app/components';
import { ProfileLayout } from '@app/layouts';
import { Heading, VStack, Text, Divider } from '@chakra-ui/react';
import { Resource } from '@schema/desk-gateway';

const Settings: FC = () => {
  const rpcSchema = useRpcSchemaClient();
  const { data, isLoading } = useRpcSchemaQuery('notificationConfig.get', {}, { staleTime: 0 });
  const isReady = useRef(false);

  const formMethods = useForm<Resource.NotificationConfig.ValueObjects.NotificationTypesSettings>();

  const values = formMethods.watch();

  useEffect(() => {
    if (!data) return;

    for (const key in data.settings) {
      formMethods.setValue(key as Resource.NotificationCommon.Enums.NotificationType, data.settings[key]);
    }

    isReady.current = true;
  }, [data, formMethods]);

  useEffect(() => {
    if (!isReady.current) return;

    rpcSchema.send('notificationConfig.update', {
      settings: values as Resource.NotificationConfig.ValueObjects.NotificationTypesSettings,
    });
  }, [values, rpcSchema]);

  if (isLoading) return;

  return (
    <FormProvider {...formMethods}>
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
          <NotificationSettingsItem
            label="Deal Status Update"
            text="Notify me about a trade progress status update, deal status update, new deal"
            name="DEAL_STATUS_CHANGED"
          />
          <Divider color="dark.500" opacity="0.5" />
          <NotificationSettingsItem
            label="Lot Status Update"
            text="Notify me about the status update of the lot I created"
            name="LOT_STATUS_CHANGED"
          />
          <Divider color="dark.500" opacity="0.5" />
          <NotificationSettingsItem
            label="Bid Status Update"
            text="Notify me of an update on the status of a bid I left"
            name="BID_STATUS_CHANGED"
          />
          <Divider color="dark.500" opacity="0.5" />
          <NotificationSettingsItem
            label="New Lot Notification"
            text="Notify me about new lots on the platform"
            name="LOT_CREATED"
          />
          <Divider color="dark.500" opacity="0.5" />
          <NotificationSettingsItem
            label="OTC Desk News"
            text="Notify me about announcements, news and platform updates"
            name="SYSTEM_INFO"
          />
        </VStack>
      </VStack>
    </FormProvider>
  );
};

Settings.getLayout = ({ children }) => <ProfileLayout>{children}</ProfileLayout>;

export default Settings;
