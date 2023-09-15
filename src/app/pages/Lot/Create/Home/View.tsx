import { useCallback, useEffect, useRef, useState } from 'react';

import { UILayout } from '@app/layouts';
import { Box, Heading, VStack, Text, HStack, Button, Center, SimpleGrid } from '@chakra-ui/react';
import { Resource } from '@schema/api-gateway';
import { Section, Steps } from '@shared/ui-kit';
import Decimal from 'decimal.js';
import { isEmpty } from 'lodash';
import { NullableObject } from 'src/shared/ddd-errors/NullableObject';

import { FormInvalidError } from '../_const';
import {
  RoundInfoStep,
  RoundInfoStepRef,
  ProjectInfoStep,
  ProjectInfoStepRef,
  StartInfoStep,
  StartInfoStepRef,
  LotInfoStep,
  LotInfoStepRef,
  ReviewStep,
} from '../_steps';
import { StepRef } from '../types';

import { CreateLotDictionary, CreateStepDictionary, CreateStepType } from './const';

export const CreateLot: React.FC<React.PropsWithChildren> = () => {
  const projectInfoStepRef = useRef<ProjectInfoStepRef>();
  const startInfoStepRef = useRef<StartInfoStepRef>();
  const roundInfoStepRef = useRef<RoundInfoStepRef>();
  const lotInfoStepRef = useRef<LotInfoStepRef>();
  const [step, setStep] = useState<CreateStepType>('START_INFO');
  const [lot, setLot] = useState<Resource.Lot.Lot>({
    resource: 'lot',
  } as any);
  const shouldViewStep = useCallback((step: CreateStepType) => {
    const startInfoStep = startInfoStepRef.current;
    const projectInfoStep = projectInfoStepRef.current;
    const roundInfoStep = roundInfoStepRef.current;
    const lotInfoStep = lotInfoStepRef.current;
    const refByStep: Record<string, StepRef<any>> = {
      START_INFO: startInfoStep,
      PROJECT_INFO: projectInfoStep,
      ROUND_INFO: roundInfoStep,
      LOT_INFO: lotInfoStep,
    };
    const stepRef = refByStep[step];
    if (!stepRef) return false;
    const values = stepRef.getValues();
    if (isEmpty(values) && stepRef.isSkippable) {
      return true;
    } else {
      try {
        const validations = stepRef.schema.validateSync(values, {});
        return !!validations;
      } catch (err) {
        return false;
      }
    }
  }, []);

  const onPreviewClick = () => {};

  const onLoadLot = () => {};

  const onNext = async () => {
    try {
      if (step === 'START_INFO') {
        const startInfo = await startInfoStepRef.current.onSubmit();
        setLot({
          resource: 'lot',
          id: '122323',
          type: startInfo.withTokenWarrant ? 'SAFE_TOKEN_WARRANT' : startInfo.type,
          direction: startInfo.direction,
          asset: {
            resource: 'asset_key',
            id: typeof startInfo.asset === 'string' ? startInfo.asset : startInfo.asset.id,
          },
        } as any);
        // onSaveLot()
        setStep('PROJECT_INFO');
      }
      if (step === 'PROJECT_INFO') {
        await projectInfoStepRef.current.onSubmit();
        // onSaveLot()
        setStep('ROUND_INFO');
      }
      if (step === 'ROUND_INFO') {
        await roundInfoStepRef.current.onSubmit();
        // onSaveLot()
        setStep('LOT_INFO');
      }
      if (step === 'LOT_INFO') {
        await lotInfoStepRef.current.onSubmit();
        // onSaveLot()
        setStep('REVIEW');
      }
    } catch (err) {
      if (err === FormInvalidError) return void 0;
      throw err;
    }
  };

  function round(precision: number, value: Decimal.Value) {
    const currentValue = new Decimal(value);

    if (NullableObject.isEmpty(precision)) return value;
    if (precision >= 0) return currentValue.toDecimalPlaces(precision);

    const pow = new Decimal(10).pow(Decimal.abs(precision));
    return currentValue.div(pow).toDecimalPlaces(0).mul(pow);
  }

  useEffect(() => {
    onLoadLot();
    console.log(1, round(2, NaN).toString());
    console.log(2, round(-2, -Infinity).toString());
    console.log(3, round(-5, Infinity).toString());
  }, []);

  const { title: stepTitle, description: stepDescription } = CreateStepDictionary.get(step);

  return (
    <VStack w="full" alignItems="start">
      <HStack w="full" justifyContent="space-between">
        <VStack alignItems="start" gap="0.1rem">
          <Heading fontSize="lg">{CreateLotDictionary.get('HEADER').title}</Heading>
          <Text color="dark.50" fontSize="sm">
            {CreateLotDictionary.get('HEADER').description}
          </Text>
        </VStack>
        {onPreviewClick && (
          <Button onClick={onPreviewClick} size="sm" variant="darkOutline">
            Preview
          </Button>
        )}
      </HStack>

      <Section w="full" p="0" borderRadius="sm">
        <SimpleGrid gridTemplateColumns="50rem 1fr" w="full" gap="0" alignItems="stretch" position="relative">
          <Box borderRight="1px solid" w="full" borderColor="dark.800">
            <VStack alignItems="start" p="2rem" pb="0">
              {stepTitle && (
                <Text fontSize="2md" color="white" fontWeight="600">
                  {stepTitle}
                </Text>
              )}
              {stepDescription && (
                <Text color="dark.50" fontSize="sm">
                  {stepDescription}
                </Text>
              )}
            </VStack>
            <StartInfoStep ref={startInfoStepRef} active={step === 'START_INFO'} lot={lot} />
            <ProjectInfoStep ref={projectInfoStepRef} active={step === 'PROJECT_INFO'} lot={lot} />
            <RoundInfoStep ref={roundInfoStepRef} active={step === 'ROUND_INFO'} lot={lot} />
            <LotInfoStep ref={lotInfoStepRef} active={step === 'LOT_INFO'} lot={lot} />
            <ReviewStep
              active={step === 'REVIEW'}
              lot={lot}
              startInfoStepRef={startInfoStepRef}
              projectInfoStepRef={projectInfoStepRef}
              roundInfoStepRef={roundInfoStepRef}
              lotInfoStepRef={lotInfoStepRef}
            />
          </Box>
          <Box p="2rem" position="relative" display="flex" flexDirection="column" justifyContent="space-between">
            <Box position="sticky" top="2rem">
              <Steps
                value={step}
                onChange={(step) => setStep(step)}
                canClickItem={(item) => {
                  console.log({ item });
                  return CreateStepDictionary.get(step).backSteps.indexOf(item) !== -1 || shouldViewStep(item);
                }}
                items={CreateStepDictionary.keys()}
                renderKey={(item) => item}
                renderTitle={(item) => CreateStepDictionary.get(item).stepTitle}
              />
            </Box>

            <VStack position="sticky" bottom="2rem" mt="10rem" gap="1rem">
              <Button w="full" color="white" onClick={onNext}>
                On next
              </Button>
              <Button w="full" variant="darkOutline">
                Skip
              </Button>
            </VStack>
          </Box>
        </SimpleGrid>
      </Section>
    </VStack>
  );
};

CreateLot.getLayout = ({ children }) => (
  <UILayout.AppLayout containerSize="md">
    <Center>{children}</Center>
  </UILayout.AppLayout>
);

export default CreateLot;
