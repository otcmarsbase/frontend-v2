import { Children, PropsWithChildren } from 'react';

import { Box, Divider, VStack } from '@chakra-ui/react';
import { DeskGatewaySchema } from '@schema/desk-gateway';

import { LotQuestionContent } from './LotQuestionContent';
import { LotQuestionsubform } from './LotQuestionSubform';

interface LotQuestionItemProps {
  user: DeskGatewaySchema.User;
  question: DeskGatewaySchema.LotQuestion;
  isLotOwner?: boolean;
}

export function LotQuestionItem({ user, question, isLotOwner, children }: PropsWithChildren<LotQuestionItemProps>) {
  return (
    <VStack
      spacing={3}
      padding={5}
      backgroundColor="dark.900"
      rounded="xl"
      _hover={{ backgroundColor: 'dark.800' }}
      w="full"
    >
      <LotQuestionContent user={user} question={question} isLotOwner={isLotOwner} />
      <Divider color="dark.800" />
      <Box w="full" pl={6}>
        {!!Children.count(children) && (
          <VStack spacing={3} mb={6}>
            {children}
          </VStack>
        )}
        <LotQuestionsubform parentQuestion={question} />
      </Box>
    </VStack>
  );
}
