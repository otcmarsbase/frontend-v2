import { ChangeEvent, FormEvent, useState } from 'react';

import { UIModals, useRpcSchemaClient } from '@app/components';
import { ModalController } from '@app/logic';
import { Button, FormControl, Heading, HStack, IconButton, VStack } from '@chakra-ui/react';
import { DeskGatewaySchema } from '@schema/desk-gateway';
import { UIIcons } from '@shared/ui-icons';
import { Input } from '@shared/ui-kit';

interface LotQuestionFormProps {
  parentQuestion: DeskGatewaySchema.LotQuestion;
}

export function LotQuestionsubform({ parentQuestion }: LotQuestionFormProps) {
  const [question, setQuestion] = useState('');
  const rpcSchema = useRpcSchemaClient();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setQuestion(e.target.value);
  };

  const publish = async (e: FormEvent) => {
    e.preventDefault();
    await rpcSchema.send('lotQuestion.create', {
      lot: parentQuestion.lotKey.id,
      text: question,
      parentLotQuestion: parentQuestion.id,
    });
    setQuestion('');
    ModalController.create(UIModals.LotQuestionModerationModal, {});
  };

  return (
    <HStack spacing={3} as="form" onSubmit={publish} w="full">
      <FormControl>
        <Input placeholder="Write a comment" size="xs" value={question} onChange={handleChange} />
      </FormControl>
      <IconButton
        variant="ghost"
        aria-label="publish"
        fontSize="2.25rem"
        height="fit-content"
        type="submit"
        color="dark.200"
        _disabled={{
          background: 'transparent',
          opacity: '0.5',
          cursor: 'not-allowed',
        }}
        _hover={{
          color: 'orange.500',
          _disabled: {
            color: 'dark.200',
          },
        }}
        isDisabled={!question}
        icon={<UIIcons.Common.SendIcon />}
      />
    </HStack>
  );
}
