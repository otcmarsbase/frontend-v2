import { Controller, FormProvider, get, useForm } from 'react-hook-form';

import { Button, chakra, VStack } from '@chakra-ui/react';
import { FormControl, FormLabel, UIKit, useIsRequired } from '@shared/ui-kit';

import { FeedbackCreateModel, FeedbackCreateSchema } from './schema';

export interface FeedbackFormProps {
  onSubmit?: (payload: FeedbackCreateModel) => void;
}

export const FeedbackForm = ({ onSubmit }: FeedbackFormProps) => {
  const formMethods = useForm<FeedbackCreateModel>();

  const isRequired = useIsRequired(FeedbackCreateSchema, formMethods.getValues);

  return (
    <FormProvider {...formMethods}>
      <VStack as={chakra.form} onSubmit={formMethods.handleSubmit(onSubmit, console.log)} spacing="1rem" width="full">
        <FormControl isInvalid={!!get(formMethods.formState.errors, 'text')} isRequired={isRequired('text')}>
          <FormLabel display="flex" gap="0.25rem" alignItems="center">
            Comment
          </FormLabel>
          <Controller
            name="text"
            render={({ field, formState: { isValid } }) => <UIKit.Textarea {...field} isInvalid={!isValid} />}
          />
        </FormControl>
        <FormControl isInvalid={!!get(formMethods.formState.errors, 'text')} isRequired={isRequired('rating')}>
          <FormLabel display="flex" gap="0.25rem" alignItems="center">
            How likely is it that you would recommend marsbase to a friend or colleague?
          </FormLabel>
          <Controller
            name="rating"
            render={({ field, formState: { isValid } }) => (
              <UIKit.SelectSync
                key="feedback-rating"
                items={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
                renderKey={(item) => item}
                renderItem={(item) => item}
                isInvalid={!isValid}
                {...field}
              />
            )}
          />
        </FormControl>
        <Button w="full" isLoading={formMethods.formState?.isSubmitting} type="submit">
          Submit
        </Button>
      </VStack>
    </FormProvider>
  );
};
