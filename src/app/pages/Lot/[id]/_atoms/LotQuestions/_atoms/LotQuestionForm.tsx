import { SubmitHandler, useForm } from 'react-hook-form';

import { UIModals, useRpcSchemaClient } from '@app/components';
import { ModalController } from '@app/logic';
import { Button, FormControl, FormErrorMessage, Heading, HStack, VStack } from '@chakra-ui/react';
import { yupResolver } from '@hookform/resolvers/yup';
import { DeskGatewaySchema } from '@schema/desk-gateway';
import { Input } from '@shared/ui-kit';

import { LotQuestionModel, LotQuestionSchema } from '../schema';

interface LotQuestionFormProps {
  lot: DeskGatewaySchema.Lot;
}

export function LotQuestionForm({ lot }: LotQuestionFormProps) {
  const rpcSchema = useRpcSchemaClient();
  const form = useForm<LotQuestionModel>({ resolver: yupResolver(LotQuestionSchema), mode: 'onChange' });

  form.watch();

  const error = form.formState.errors.text;

  const publish: SubmitHandler<LotQuestionModel> = async (data) => {
    await rpcSchema.send('lotQuestion.create', { lot: lot.id, text: data.text });
    form.reset();
    ModalController.create(UIModals.LotQuestionModerationModal, {});
  };

  return (
    <VStack gap={6} alignItems="flex-start" w="full" padding={5} backgroundColor="dark.900" rounded="xl">
      <Heading fontSize="md" w="full">
        You can ask questions
      </Heading>
      <HStack alignItems="flex-start" spacing={3} as="form" onSubmit={form.handleSubmit(publish)} w="full" ml={6}>
        <FormControl isInvalid={!!error}>
          <Input placeholder="Write a question" {...form.register('text')} />
          {error && <FormErrorMessage>{error.message}</FormErrorMessage>}
        </FormControl>
        <Button minW={36} type="submit" disabled={!!error}>
          Publish
        </Button>
      </HStack>
    </VStack>
  );
}
