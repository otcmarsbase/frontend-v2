import { Controller, useForm } from 'react-hook-form';

import { Button, HStack, VStack } from '@chakra-ui/react';
import { FormControl, FormErrorMessage, FormLabel, UIKit, useIsRequired } from '@shared/ui-kit';

import { FeedbackCreateModel, FeedbackCreateSchema } from './schema';

export interface FeedbackFormProps {
  onSubmit?: (payload: FeedbackCreateModel) => void
}

export const FeedbackForm = ({ onSubmit }: FeedbackFormProps) => {
  const {
    handleSubmit,
    control,
    getValues,
    formState: { errors, isSubmitting },
  } = useForm<FeedbackCreateModel>()

  const isRequired = useIsRequired(FeedbackCreateSchema, getValues);

  return (
    <VStack spacing="1rem" width="full">
      <FormControl isInvalid={Boolean(errors?.text)} isRequired={isRequired('text')}>
        <FormLabel display="flex" gap="0.25rem" alignItems="center">
          Comment
        </FormLabel>
        <Controller
          control={control}
          name="text"
          render={({ field }) => <UIKit.Textarea {...field} />}
        />
        {errors?.text && <FormErrorMessage>{errors?.text?.message}</FormErrorMessage>}
      </FormControl>
      <FormControl isInvalid={Boolean(errors?.rating)}  isRequired={isRequired('rating')}>
        <FormLabel display="flex" gap="0.25rem" alignItems="center">
          How likely is it that you would recommend marsbase to a friend or colleague?
        </FormLabel>
        <Controller
          control={control}
          name="rating"
          render={({ field }) => (
            <UIKit.SelectSync
              key="feedback-rating"
              items={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
              renderKey={(item) => item}
              renderItem={(item) => item}
              {...field}
            />
          )}
        />
        {errors?.text && <FormErrorMessage>{errors?.text?.message}</FormErrorMessage>}
      </FormControl>
      <Button w="full" isLoading={isSubmitting} onClick={handleSubmit(onSubmit)}>
        Submit
      </Button>
    </VStack>
  )
}
