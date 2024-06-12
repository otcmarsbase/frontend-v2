import { useAuth } from '@app/components';
import { Box, VStack } from '@chakra-ui/react';
import { DeskGatewaySchema } from '@schema/desk-gateway';

import { LotQuestionContent } from './_atoms/LotQuestionContent';
import { LotQuestionForm } from './_atoms/LotQuestionForm';
import { LotQuestionItem } from './_atoms/LotQuestionItem';

interface LotQuestionsProps {
  lot: DeskGatewaySchema.Lot;
  questions: DeskGatewaySchema.LotQuestion[];
  users: DeskGatewaySchema.User[];
}

export function LotQuestions({ lot, questions, users }: LotQuestionsProps) {
  const { isAuthorized } = useAuth();

  const findUser = (question: DeskGatewaySchema.LotQuestion) => {
    return users.find((user) => user.id === question.userKey.id)!;
  };

  const findChildren = (question: DeskGatewaySchema.LotQuestion) =>
    questions.filter((item) => item.parentLotQuestion && item.parentLotQuestion.id === question.id);

  const sort = (questions: DeskGatewaySchema.LotQuestion[]) => questions.sort((a, b) => a.createdAt - b.createdAt);

  const topLevelQuestions = sort(questions.filter((question) => !question.parentLotQuestion));

  return (
    <VStack mt={9} spacing={4} w="100%">
      {isAuthorized && <LotQuestionForm lot={lot} />}

      {topLevelQuestions.map((question) => {
        const user = findUser(question);
        const childQuestions = findChildren(question);
        return (
          <LotQuestionItem key={question.id} question={question} user={user} isLotOwner={user.id === lot.offerMaker.id}>
            {childQuestions.map((childrenQuestion) => {
              const user = findUser(childrenQuestion);
              return (
                <LotQuestionContent
                  key={childrenQuestion.id}
                  question={childrenQuestion}
                  user={user}
                  isLotOwner={user.id === lot.offerMaker.id}
                />
              );
            })}
          </LotQuestionItem>
        );
      })}
    </VStack>
  );
}
