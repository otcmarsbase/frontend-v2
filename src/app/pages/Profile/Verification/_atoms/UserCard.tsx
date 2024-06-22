import { useMemo } from 'react';

import { formatAddress } from '@app/utils';
import { Flex, HStack, Text, VStack, useBreakpointValue, Button } from '@chakra-ui/react';
import { UIIcons } from '@shared/ui-icons';

export interface UserCardProps {
  nickname: string;
  isVerifyKYC: boolean;
  isLoading?: boolean;
  onVerifyClick: () => void;
}

export const UserCard = ({ isLoading, nickname, isVerifyKYC, onVerifyClick }: UserCardProps) => {
  const formattedNickname = useMemo(() => nickname && formatAddress(nickname, 8, 4), [nickname]);

  const fontSize = useBreakpointValue({
    base: '0.75rem',
    md: '0.875rem',
  });

  const verifyKYCComponent = (
    <HStack background="rgba(0, 203, 130, 0.10)" paddingX="0.5rem" paddingY="0.25rem" borderRadius="0.25rem">
      <UIIcons.Common.VerifyKYCIcon color="green.400" />
      <Text fontSize={fontSize} color="green.400">
        Verification KYC
      </Text>
    </HStack>
  );

  const notVerifyKYCComponent = (
    <HStack background="rgba(216, 160, 0, 0.10)" paddingX="0.5rem" paddingY="0.25rem" borderRadius="0.25rem">
      <UIIcons.Common.NotVerifyKYCIcon color="yellow.400" />
      <Text fontSize={fontSize} color="yellow.400">
        Not verified
      </Text>
    </HStack>
  );

  return (
    <Flex
      bg="dark.900"
      width="100%"
      paddingX="1.25rem"
      paddingY="1rem"
      gap="1rem"
      justifyContent="space-between"
      alignItems={{
        md: 'center',
      }}
      borderRadius="0.75rem"
      flexDirection={{
        base: 'column',
        md: 'row',
      }}
    >
      <HStack spacing="1rem">
        <Flex
          alignItems="center"
          justifyContent="center"
          borderRadius="100%"
          bg="dark.500"
          width="3.5rem"
          height="3.5rem"
        >
          <UIIcons.Common.UserIcon width="2rem" height="2rem" color="dark.100" />
        </Flex>
        <VStack alignItems="flex-start" spacing="0.25rem">
          <Text fontSize={fontSize}>{formattedNickname}</Text>
          {isVerifyKYC ? verifyKYCComponent : notVerifyKYCComponent}
        </VStack>
      </HStack>
      {!isVerifyKYC && (
        <Button
          variant="brand"
          size="sm"
          borderRadius="0.375rem"
          padding="0.5rem 0.75rem"
          isLoading={isLoading}
          onClick={onVerifyClick}
        >
          Continue KYC Process
        </Button>
      )}
    </Flex>
  );
};
