import { useMemo } from 'react';

import { formatAddress } from '@app/utils';
import { Box, Flex, HStack, Text, Tooltip } from '@chakra-ui/react';
import { DeskGatewaySchema } from '@schema/desk-gateway';
import { UIIcons } from '@shared/ui-icons';
import { format } from 'date-fns';

interface LotQuestionContentProps {
  user: DeskGatewaySchema.User;
  question: DeskGatewaySchema.LotQuestion;
  isLotOwner?: boolean;
}

export function LotQuestionContent({ user, question, isLotOwner }: LotQuestionContentProps) {
  const formattedNickname = useMemo(() => formatAddress(user.nickname, 8, 4), [user.nickname]);

  return (
    <HStack alignItems="center" spacing={3} w="full">
      <Flex alignItems="center" justifyContent="center" borderRadius="100%" bg="dark.500" width="3rem" height="3rem">
        <UIIcons.Common.UserIcon width="2rem" height="2rem" color="dark.100" />
      </Flex>
      <Box>
        <HStack spacing={2}>
          <HStack spacing={1}>
            <Text fontSize="sm">{formattedNickname}</Text>
            {isLotOwner && (
              <Tooltip label="Author the lot">
                <UIIcons.Common.StarIcon width="0.75rem" height="0.75rem" color="orange.300" />
              </Tooltip>
            )}
          </HStack>
          <Text fontSize="sm" color="dark.50">
            {format(question.createdAt, 'LLLL d, yyyy')}
          </Text>
        </HStack>
        <Text whiteSpace="break-spaces" fontSize="sm">
          {question.text}
        </Text>
      </Box>
    </HStack>
  );
}
