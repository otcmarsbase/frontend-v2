import { useCallback } from 'react';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';

import { UILayout } from '@app/layouts';
import { Button, Center, Heading, HStack, VStack, Text, chakra } from '@chakra-ui/react';
import { yupResolver } from '@hookform/resolvers/yup';
import { Resource } from '@schema/api-gateway';
import { Section } from '@shared/ui-kit';

import { CreateLotProvider, FormContext } from './_atoms';
import { useCreateLotContext } from './_atoms';
import { Document } from './_document';
import { CreateLotDictionary } from './const';

const CreateLot: React.FC<React.PropsWithChildren> = () => {
  const { formContext } = useCreateLotContext();
  const formMethods = useForm<Resource.Lot.Lot, FormContext>({
    defaultValues: {
      resource: 'lot',
      type: 'SAFE',
      direction: 'BUY',
    },
    context: formContext,
    resolver(values, context, options) {
      if (!context?.schema)
        return {
          values,
          errors: {},
        };
      // @ts-ignore
      return yupResolver(context.schema)(values, context, options);
    },
  });

  const onPreviewClick = () => {};

  const onSubmit = useCallback<SubmitHandler<Resource.Lot.Lot>>((data) => {
    console.log(data);
  }, []);

  return (
    <VStack w="full" alignItems="start">
      <HStack w="full" justifyContent="space-between" mb="1.25rem">
        <VStack alignItems="start" gap="0.1rem">
          <Heading fontSize="lg">{CreateLotDictionary.get('HEADER').title}</Heading>
          <Text color="dark.50" fontSize="sm">
            {CreateLotDictionary.get('HEADER').description}
          </Text>
        </VStack>
        {false && (
          <Button onClick={onPreviewClick} size="sm" variant="darkOutline">
            Preview
          </Button>
        )}
      </HStack>

      <Section w="full" p="0" borderRadius="sm">
        <FormProvider {...formMethods}>
          <chakra.form w="full" onSubmit={formMethods.handleSubmit(onSubmit)}>
            <Document />
          </chakra.form>
        </FormProvider>
      </Section>
    </VStack>
  );
};

CreateLot.getLayout = ({ children }) => (
  <UILayout.AppLayout containerSize="md">
    <Center>
      <CreateLotProvider>{children}</CreateLotProvider>
    </Center>
  </UILayout.AppLayout>
);

export default CreateLot;
