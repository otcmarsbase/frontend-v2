import { ChangeEvent, FormEvent, useMemo, useState } from 'react';
import { get, SubmitHandler, useForm } from 'react-hook-form';

import { UIModals, useRpcSchemaClient } from '@app/components';
import { ModalController } from '@app/logic';
import { FormControl, FormErrorMessage, HStack, IconButton, Input, Textarea } from '@chakra-ui/react';
import { yupResolver } from '@hookform/resolvers/yup';
import { DeskGatewaySchema } from '@schema/desk-gateway';
import { UIIcons } from '@shared/ui-icons';

import { LotQuestionSchema, LotQuestionModel } from '../schema';

interface LotQuestionFormProps {
  parentQuestion: DeskGatewaySchema.LotQuestion;
}

export function LotQuestionsubform({ parentQuestion }: LotQuestionFormProps) {
  const rpcSchema = useRpcSchemaClient();
  const form = useForm<LotQuestionModel>({ resolver: yupResolver(LotQuestionSchema), mode: 'onChange' });

  form.watch();

  const error = form.formState.errors.text;

  const publish: SubmitHandler<LotQuestionModel> = async (data) => {
    await rpcSchema.send('lotQuestion.create', {
      lot: parentQuestion.lotKey.id,
      text: data.text,
      parentLotQuestion: parentQuestion.id,
    });
    form.reset();
    ModalController.create(UIModals.LotQuestionModerationModal, {});
  };

  return (
    <HStack spacing={3} as="form" onSubmit={form.handleSubmit(publish)} w="full">
      <FormControl isInvalid={!!error}>
        <Input placeholder="Write a comment" size="xs" {...form.register('text')} />
        {error && <FormErrorMessage>{error.message}</FormErrorMessage>}
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
        icon={<UIIcons.Common.SendIcon />}
        disabled={!!error}
      />
    </HStack>
  );
}
