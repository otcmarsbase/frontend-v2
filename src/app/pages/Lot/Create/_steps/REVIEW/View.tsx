import { MutableRefObject, forwardRef, useCallback, useImperativeHandle, useMemo, useState } from 'react';
import { Controller } from 'react-hook-form';

import { UILogic, useRpcSchemaClient } from '@app/components';
import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  HStack,
  Text,
  InputGroup,
  InputRightElement,
  SimpleGrid,
  Checkbox,
} from '@chakra-ui/react';
import { useRouter } from '@packages/router5-react-auto';
import { Resource } from '@schema/api-gateway';
import { UIIcons } from '@shared/ui-icons';
import { UIKit, VStack, useForm } from '@shared/ui-kit';

import { FormInvalidError } from '../../_const';
import { LotInfoStepRef } from '../LOT_INFO';
import { ProjectInfoStepRef } from '../PROJECT_INFO';
import { RoundInfoStepRef } from '../ROUND_INFO';
import { StartInfoStepRef } from '../START_INFO';

import {
  PricingModelFieldTypeDictionary,
  PricingModelType,
  PricingModelTypeDictionary,
  ReviewStepName,
  ReviewStepNameDictionary,
} from './const';

export interface ReviewStepProps {
  lot: Resource.Lot.Lot;
  active: boolean;
  startInfoStepRef: MutableRefObject<StartInfoStepRef>;
  projectInfoStepRef: MutableRefObject<ProjectInfoStepRef>;
  roundInfoStepRef: MutableRefObject<RoundInfoStepRef>;
  lotInfoStepRef: MutableRefObject<LotInfoStepRef>;
}

export interface ReviewStepRef {}

export const ReviewStep = forwardRef<ReviewStepRef, ReviewStepProps>(
  ({ lot, active, startInfoStepRef, projectInfoStepRef, roundInfoStepRef, lotInfoStepRef }, ref) => {
    const stepsRefs = {
      START_INFO: startInfoStepRef,
      PROJECT_INFO: projectInfoStepRef,
      ROUND_INFO: roundInfoStepRef,
      LOT_INFO: lotInfoStepRef,
    };

    const router = useRouter();
    const rpcSchema = useRpcSchemaClient();

    // const onSubmit = async (model: any) => {
    //   const lot = await rpcSchema.send('lot.save', { model });

    // }

    const onPublish = useCallback(async () => {
      const validatePromise = new Promise<Resource.Lot.Lot>((resolve, reject) => {});
      const params = await validatePromise;
      return params;
    }, []);

    if (!active) return null;

    return (
      <VStack p="2rem" gap="1.5rem" alignItems="start">
        {ReviewStepNameDictionary.keys().map((stepKey, index) => {
          const step = ReviewStepNameDictionary.get(stepKey);
          const Component = step.component;

          return Component ? (
            <Component
              key={index}
              stepRef={stepsRefs[stepKey] as any}
              stepTitle={step.title}
              stepIndexTitle={`${index + 1} Step`}
            />
          ) : null;
        })}
      </VStack>
    );
  },
);

export default ReviewStep;
