import { Controller, useFormContext } from 'react-hook-form';

import { VStack, Text, HStack, Switch } from '@chakra-ui/react';
import { DeskGatewaySchema } from '@schema/desk-gateway';

export interface NotificationSettingsItemProps {
  label: string;
  text: string;
  name: DeskGatewaySchema.NotificationType;
}

export function NotificationSettingsItem({ label, text, name }: NotificationSettingsItemProps) {
  const { control } = useFormContext();

  return (
    <HStack w="full" justifyContent="space-between">
      <VStack alignItems="flex-start" spacing="1">
        <Text fontSize="md" fontWeight="bold">
          {label}
        </Text>
        <Text color="dark.50" fontSize="sm">
          {text}
        </Text>
      </VStack>
      <Controller
        control={control}
        name={name}
        render={({ field }) => <Switch {...field} defaultChecked={field.value} isChecked={field.value} />}
      />
    </HStack>
  );
}
