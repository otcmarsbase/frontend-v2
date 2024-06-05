import { ChangeEvent, FormEvent, useState } from 'react';

import { UIModals, useRpcSchemaClient } from '@app/components';
import { ModalController } from '@app/logic';
import { Button, FormControl, Heading, HStack, VStack } from '@chakra-ui/react';
import { DeskGatewaySchema } from '@schema/desk-gateway';
import { Input } from '@shared/ui-kit';

interface LotQuestionFormProps {
  lot: DeskGatewaySchema.Lot;
}

export function LotQuestionForm({ lot }: LotQuestionFormProps) {
  const [question, setQuestion] = useState('');
  const rpcSchema = useRpcSchemaClient();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setQuestion(e.target.value);
  };

  const publish = async (e: FormEvent) => {
    e.preventDefault();
    await rpcSchema.send('lotQuestion.create', { lot: lot.id, text: question });
    setQuestion('');
    ModalController.create(UIModals.LotQuestionModerationModal, {});
  };

  return (
    <VStack gap={6} alignItems="flex-start">
      <Heading fontSize="md" w="full">
        You can ask questions
      </Heading>
      <HStack spacing={3} as="form" onSubmit={publish} w="full" ml={6}>
        <FormControl>
          <Input placeholder="Write a question" value={question} onChange={handleChange} />
        </FormControl>
        <Button minW={36} type="submit" isDisabled={!question}>
          Punlish
        </Button>
      </HStack>
    </VStack>
  );
}
