import { DefaultValues, FormProvider, SubmitHandler, useForm } from 'react-hook-form';

import { Button, Heading, HStack, VStack, Text, chakra } from '@chakra-ui/react';
import { yupResolver } from '@hookform/resolvers/yup';
import { Resource } from '@schema/otc-desk-gateway';
import { Section } from '@shared/ui-kit';

import { LotWizardProvider, FormContext } from './_atoms';
import { useLotWizard } from './_atoms';
import { LotWizardDictionary } from './const';
import { LotWizardType } from './LotWizardType';

export interface LotWizardProps {
  defaultValues: DefaultValues<Resource.Lot.Lot>;
}

const LotWizardInner: React.FC<LotWizardProps> = ({ defaultValues }) => {
  const { formContext } = useLotWizard();
  const formMethods = useForm<Resource.Lot.Lot, FormContext>({
    mode: 'onTouched',
    defaultValues,
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

  const onSubmit: SubmitHandler<Resource.Lot.Lot> = async (data) => {
    console.log(data);
  };

  return (
    <VStack w="full" alignItems="start">
      <HStack w="full" justifyContent="space-between" mb="1.25rem">
        <VStack alignItems="start" gap="0.1rem">
          <Heading fontSize="lg">{LotWizardDictionary.get('HEADER').title}</Heading>
          <Text color="dark.50" fontSize="sm">
            {LotWizardDictionary.get('HEADER').description}
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
            <LotWizardType />
          </chakra.form>
        </FormProvider>
      </Section>
    </VStack>
  );
};

export const LotWizard: React.FC<LotWizardProps> = (props) => (
  <LotWizardProvider>
    <LotWizardInner {...props} />
  </LotWizardProvider>
);
