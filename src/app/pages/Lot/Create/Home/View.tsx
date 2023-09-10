import { useCallback, useEffect, useRef, useState } from 'react';

import { UILayout } from '@app/layouts';
import { Box, Heading, VStack, Text, HStack, Button, Center, SimpleGrid } from '@chakra-ui/react';
import { Resource } from '@schema/api-gateway';
import { Section, Steps } from '@shared/ui-kit';

import { FormInvalidError } from '../_const';
import ProjectInfoStep, { ProjectInfoStepRef } from '../_steps/PROJECT_INFO';
import StartInfoStep, { StartInfoStepRef } from '../_steps/START_INFO';

import { CreateLotDictionary, CreateStepDictionary, CreateStepType } from './const';

export interface CreateFormLayoutProps extends React.PropsWithChildren {}

export const CreateLot: React.FC<CreateFormLayoutProps> = ({ children }) => {
  const projectInfoStepRef = useRef<ProjectInfoStepRef>();
  const startInfoStepRef = useRef<StartInfoStepRef>();
  const [step, setStep] = useState<CreateStepType>('START_INFO');
  const [lot, setLot] = useState<Resource.Lot.Lot>(null);
  const shouldViewStep = useCallback(
    (step: CreateStepType) => {
      if (!lot) return false;
      if (step === 'PROJECT_INFO') {
        return true;
      }
      if (step === 'ROUND_INFO') {
        return [lot.round_info?.type, lot.round_info?.valuation_info].some(Boolean);
      }
      if (step === 'LOT_INFO') {
        return [lot.type].some(Boolean);
      }
      return false;
    },
    [lot],
  );

  const onPreviewClick = () => {};

  const onLoadLot = () => {
    const lot: Resource.Lot.Lot = null;
  };

  const onNext = async () => {
    try {
      if (step === 'START_INFO') {
        await startInfoStepRef.current.onSubmit();
        // onSaveLot()
        setStep('PROJECT_INFO');
      }
      if (step === 'PROJECT_INFO') {
        await projectInfoStepRef.current.onSubmit();
        // onSaveLot()
        setStep('ROUND_INFO');
      }
      if (step === 'ROUND_INFO') {
        // await basicInfoStepRef.current.onSubmit();
        // onSaveLot()
        setStep('LOT_INFO');
      }
      if (step === 'LOT_INFO') {
        await projectInfoStepRef.current.onSubmit();
        // onSaveLot()
        setStep('ROUND_INFO');
      }
    } catch (err) {
      if (err === FormInvalidError) return void 0;
      throw err;
    }
  };

  useEffect(() => {
    onLoadLot();
  }, []);

  const { title: stepTitle, description: stepDescription } = CreateStepDictionary.get(step);

  console.log({ step });

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
        <SimpleGrid gridTemplateColumns="50rem 1fr" w="full" gap="0" alignItems="stretch">
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
          </Box>
          <Box p="2rem">
            <Steps
              value={step}
              onChange={(step) => setStep(step)}
              canClickItem={(item) =>
                CreateStepDictionary.get(step).backSteps.indexOf(item) !== -1 || shouldViewStep(item)
              }
              items={CreateStepDictionary.keys()}
              renderKey={(item) => item}
              renderTitle={(item) => CreateStepDictionary.get(item).stepTitle}
            />
          </Box>
        </SimpleGrid>
      </Section>

      <Button onClick={onNext}>On next</Button>
    </VStack>
  );
};

CreateLot.getLayout = ({ children }) => (
  <UILayout.AppLayout containerSize="md">
    <Center>{children}</Center>
  </UILayout.AppLayout>
);

export default CreateLot;
