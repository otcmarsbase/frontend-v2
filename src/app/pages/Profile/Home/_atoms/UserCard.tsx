import { useMemo } from 'react';

import { formatAddress } from '@app/utils';
import { Flex, HStack, Text, Divider, VStack, useBreakpointValue } from '@chakra-ui/react';
import { SystemProps } from '@chakra-ui/styled-system';
import { UIIcons } from '@shared/ui-icons';
import { CopyButton } from '@shared/ui-kit';
import { format } from 'date-fns';

import { LoginDeviceType } from './const';

export interface UserCardProps {
  id: string;
  nickname: string;
  isVerifyKYC: boolean;
  lastLoginTime: Date;
  lastLoginDeviceType: LoginDeviceType;
}

export const UserCard = ({ id, nickname, isVerifyKYC, lastLoginDeviceType, lastLoginTime }: UserCardProps) => {
  const formattedNickname = useMemo(() => nickname && formatAddress(nickname, 8, 4), [nickname]);
  const formattedId = useMemo(() => id && formatAddress(id, 8, 4), [id]);
  const formattedLastLoginTime = useMemo(() => lastLoginTime && format(lastLoginTime, 'dd.MM.yyyy HH:mm'), [lastLoginTime])

  const flexDirection: SystemProps['flexDirection'] = useBreakpointValue({
    base: 'column',
    md: 'row'
  })
  const fontSize = useBreakpointValue({
    base: '0.75rem',
    md: '0.875rem'
  })

  const verifyKYCComponent = (
    <HStack background="rgba(0, 203, 130, 0.10)" paddingX="0.5rem" paddingY="0.25rem" borderRadius="0.25rem">
      <UIIcons.Common.VerifyKYCIcon color="green.400"/>
      <Text fontSize={fontSize} color="green.400">
        Verification KYC
      </Text>
    </HStack>
  )

  const notVerifyKYCComponent = (
    <HStack background="rgba(216, 160, 0, 0.10)" paddingX="0.5rem" paddingY="0.25rem" borderRadius="0.25rem">
      <UIIcons.Common.NotVerifyKYCIcon color="yellow.400"/>
      <Text fontSize={fontSize} color="yellow.400">Not verified</Text>
    </HStack>
  )

  return (
    <Flex
      bg="dark.900"
      width="100%"
      paddingX="1.25rem"
      paddingY="1rem"
      gap="1rem"
      justifyContent="space-between"
      borderRadius="0.75rem"
      flexDirection={flexDirection}
    >
      <HStack spacing="1rem">
        <Flex alignItems="center" justifyContent="center" borderRadius="100%" bg="dark.500" width="3.5rem" height="3.5rem">
          <UIIcons.Common.UserIcon width="2rem" height="2rem" color="dark.100"/>
        </Flex>
        <VStack alignItems="flex-start" spacing="0.25rem">
          <Text fontSize={fontSize}>{formattedNickname}</Text>
          {
            isVerifyKYC ? verifyKYCComponent : notVerifyKYCComponent
          }
        </VStack>
      </HStack>
      <HStack spacing="1rem">
        <VStack alignItems="flex-start">
          <Text fontSize={fontSize} color="dark.50">ID</Text>
          <HStack alignItems="center">
            <Text fontSize={fontSize}>{formattedId}</Text>
            <CopyButton value={id} />
          </HStack>
        </VStack>
        <Divider height="3.75rem" color="dark.600" orientation='vertical'/>
        <VStack alignItems="flex-start">
          <Text fontSize={fontSize} color="dark.50">Last login time</Text>
          <HStack alignItems="center">
            <Text fontSize={fontSize}>{lastLoginDeviceType} | {formattedLastLoginTime}</Text>
          </HStack>
        </VStack>
      </HStack>
    </Flex>
  )
}
