import { useAuth } from '@app/components';
import { Box } from '@chakra-ui/react';
import { DeskGatewaySchema } from '@schema/desk-gateway';

import { LotQuestionForm } from './_atoms/LotQuestionForm';

interface LotQuestionsProps {
  lot: DeskGatewaySchema.Lot;
  questions: DeskGatewaySchema.LotQuestion[];
}

export function LotQuestions({ lot, questions }: LotQuestionsProps) {
  const { isAuthorized } = useAuth();

  return <Box mt={9}>{isAuthorized && <LotQuestionForm lot={lot} />}</Box>;
}
