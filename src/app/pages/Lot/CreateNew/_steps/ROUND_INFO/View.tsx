import { forwardRef, useCallback, useImperativeHandle } from 'react';
import { Controller } from 'react-hook-form';

import { UILogic } from '@app/components';
import {
  Checkbox,
  FormControl,
  FormErrorMessage,
  HStack,
  Text,
  InputGroup,
  InputRightElement,
  FormLabel,
  SimpleGrid,
  Circle,
} from '@chakra-ui/react';
import { Resource } from '@schema/api-gateway';
import { UIIcons } from '@shared/ui-icons';
import { UIKit, VStack, useForm } from '@shared/ui-kit';

import { FormInvalidError } from '../../_const';
import { StepRef } from '../../types';

import { RoundInfoFieldsDictionary } from './const';
import { roundInfoSchema } from './schema';

export interface RoundInfoStepProps {
  lot: Resource.Lot.Lot;
  active: boolean;
}

export type RoundInfoModel = {
  round: Resource.Common.Enums.InvestRound;
  roundFDV: string;
  contractValue: string;
  isBestBid: boolean;
  totalEquityBought: number;
  pricePerEquity: string;
  description: string;
  // Fields for `SAFT | TOKEN_WARRANT`
  estimateTGEDate: Date | null;
  TBD: boolean | null;
  vestingCalendar: string | null;
  lockupPeriod: string | null;
  alreadyOver: boolean | null;
};

export type RoundInfoStepRef = StepRef<RoundInfoModel>;

export const RoundInfoStep = forwardRef<RoundInfoStepRef, RoundInfoStepProps>(({ lot, active }, ref) => {
  const {
    control,
    isRequired,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm({ schema: roundInfoSchema, defaultValues: {} });

  const onSubmit = useCallback(async () => {
    const validatePromise = new Promise<RoundInfoModel>((resolve, reject) => {
      handleSubmit(resolve, (err) => {
        reject(FormInvalidError);
      })();
    });
    const params = await validatePromise;
    return params;
  }, [handleSubmit]);

  useImperativeHandle(
    ref,
    () => ({
      onSubmit,
      getValues,
      isRequired,
      isSkippable: true,
      schema: roundInfoSchema,
    }),
    [onSubmit, getValues, isRequired],
  );

  if (!active) return null;

  return (
    <VStack p="2rem" gap="2rem" alignItems="start">
      <UIKit.FormElement label={RoundInfoFieldsDictionary.get('ROUND').title} isRequired={isRequired('round')} w="full">
        <FormControl isRequired={isRequired('round')} isInvalid={Boolean(errors.round)}>
          <Controller
            control={control}
            name="round"
            render={(props) => (
              <UILogic.InvestmentRoundSelect
                {...props.field}
                onChange={(value) => {
                  props.field.onChange(value);
                }}
                placeholder={RoundInfoFieldsDictionary.get('ROUND').placeholder}
              />
            )}
          />
          {errors.round && <FormErrorMessage>{errors.round.message}</FormErrorMessage>}
        </FormControl>
      </UIKit.FormElement>

      <UIKit.FormElement
        label={RoundInfoFieldsDictionary.get('ROUND_FDV').title}
        isRequired={isRequired('roundFDV')}
        w="full"
      >
        <FormControl isInvalid={Boolean(errors.roundFDV)}>
          <Controller
            control={control}
            name="roundFDV"
            render={(props) => (
              <InputGroup>
                <UIKit.InputNumber
                  {...props.field}
                  onChange={(value) => {
                    props.field.onChange(value);
                  }}
                  placeholder={RoundInfoFieldsDictionary.get('ROUND_FDV').placeholder}
                />
                <InputRightElement>
                  <Text color="orange.500">$</Text>
                </InputRightElement>
              </InputGroup>
            )}
          />
          {errors.roundFDV && <FormErrorMessage>{errors.roundFDV.message}</FormErrorMessage>}
        </FormControl>
      </UIKit.FormElement>

      <UIKit.FormElement
        label={RoundInfoFieldsDictionary.get('CONTRACT_VALUE').title}
        isRequired={isRequired('contractValue')}
        w="full"
      >
        <FormControl isInvalid={Boolean(errors.contractValue)}>
          <Controller
            control={control}
            name="contractValue"
            render={(props) => (
              <InputGroup>
                <UIKit.InputNumber
                  {...props.field}
                  onChange={(value) => {
                    props.field.onChange(value);
                  }}
                  placeholder={RoundInfoFieldsDictionary.get('CONTRACT_VALUE').placeholder}
                />
                <InputRightElement>
                  <Text color="orange.500">$</Text>
                </InputRightElement>
              </InputGroup>
            )}
          />
          {errors.contractValue && <FormErrorMessage>{errors.contractValue.message}</FormErrorMessage>}
        </FormControl>
      </UIKit.FormElement>

      <UIKit.FormElement
        label={RoundInfoFieldsDictionary.get('PRICE_INFORMATION').title}
        isRequired={isRequired('totalEquityBought') || isRequired('pricePerEquity')}
        w="full"
      >
        <VStack layerStyle="orangeGradient" p="1.5rem" alignItems="start" gap="1.25rem">
          <HStack>
            <Circle bg="orange.500" size="1.25rem">
              <UIIcons.Common.InfoIcon color="white" />
            </Circle>
            <Text fontWeight={800} fontSize="sm" color="orange.500">
              Automatically calculated
            </Text>
          </HStack>
          <SimpleGrid columns={2} w="full" gap="1.25rem">
            <FormControl isInvalid={Boolean(errors.totalEquityBought)}>
              <FormLabel>{RoundInfoFieldsDictionary.get('TOTAL_EQUITY_BOUGHT').title}</FormLabel>
              <Controller
                control={control}
                name="totalEquityBought"
                render={(props) => (
                  <InputGroup>
                    <UIKit.InputNumber
                      {...props.field}
                      onChange={(value) => {
                        props.field.onChange(value);
                      }}
                      placeholder={RoundInfoFieldsDictionary.get('TOTAL_EQUITY_BOUGHT').placeholder}
                    />
                    <InputRightElement>
                      <Text color="orange.500">$</Text>
                    </InputRightElement>
                  </InputGroup>
                )}
              />
              {errors.totalEquityBought && <FormErrorMessage>{errors.totalEquityBought.message}</FormErrorMessage>}
            </FormControl>
            <FormControl isInvalid={Boolean(errors.pricePerEquity)}>
              <FormLabel>{RoundInfoFieldsDictionary.get('PRICE_PER_EQUITY').title}</FormLabel>
              <Controller
                control={control}
                name="pricePerEquity"
                render={(props) => (
                  <InputGroup>
                    <UIKit.InputNumber
                      {...props.field}
                      onChange={(value) => {
                        props.field.onChange(value);
                      }}
                      placeholder={RoundInfoFieldsDictionary.get('PRICE_PER_EQUITY').placeholder}
                    />
                    <InputRightElement>
                      <Text color="orange.500">$</Text>
                    </InputRightElement>
                  </InputGroup>
                )}
              />
              {errors.pricePerEquity && <FormErrorMessage>{errors.pricePerEquity.message}</FormErrorMessage>}
            </FormControl>
          </SimpleGrid>
          <FormControl>
            <Controller
              control={control}
              name="isBestBid"
              render={(props) => (
                <Checkbox checked={props.field.value} onChange={(e) => props.field.onChange(e.target.checked)}>
                  {RoundInfoFieldsDictionary.get('IS_BEST_BID').title}
                </Checkbox>
              )}
            />
          </FormControl>
        </VStack>
      </UIKit.FormElement>

      <UIKit.FormElement
        label={RoundInfoFieldsDictionary.get('DESCRIPTION').title}
        isRequired={isRequired('description')}
        w="full"
      >
        <FormControl isInvalid={Boolean(errors.contractValue)}>
          <Controller
            control={control}
            name="description"
            render={(props) => (
              <UIKit.Textarea
                {...props.field}
                onChange={(value) => {
                  props.field.onChange(value);
                }}
                placeholder={RoundInfoFieldsDictionary.get('DESCRIPTION').placeholder}
              />
            )}
          />
          {errors.contractValue && <FormErrorMessage>{errors.contractValue.message}</FormErrorMessage>}
        </FormControl>
      </UIKit.FormElement>
    </VStack>
  );
});

export default RoundInfoStep;
