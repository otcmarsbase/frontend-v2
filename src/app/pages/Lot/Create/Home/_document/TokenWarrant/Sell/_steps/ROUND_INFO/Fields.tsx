import { useEffect, useMemo } from 'react';
import { Controller, useFormContext } from 'react-hook-form';

import { UILogic } from '@app/components';
import {
  VStack,
  FormControl,
  FormErrorMessage,
  FormLabel,
  InputGroup,
  InputRightElement,
  SimpleGrid,
  Text,
  HStack,
  Circle,
  Checkbox,
} from '@chakra-ui/react';
import { UIIcons } from '@shared/ui-icons';
import { SuggestionIcon, Tooltip, UIKit, useIsRequired } from '@shared/ui-kit';

import { useCreateLotContext } from '../../../../../_atoms';

import { RoundInfoFieldsDictionary } from './const';
import { roundInfoSchema } from './schema';
import { RoundInfoModel } from './types';

export function RoundInfoFields() {
  const { setFormSchema } = useCreateLotContext();
  const { watch, formState, control, setValue } = useFormContext<RoundInfoModel>();
  const isRequired = useIsRequired(roundInfoSchema);

  const isTBD = watch('isTBD');
  const alreadyOver = watch('alreadyOver');

  const errors = useMemo(() => formState.errors, [formState]);

  useEffect(() => {
    setFormSchema(roundInfoSchema);
  }, [setFormSchema]);

  return (
    <VStack p="2rem" gap="2rem" alignItems="start">
      <UIKit.FormElement
        label={RoundInfoFieldsDictionary.get('ROUND').title}
        info={RoundInfoFieldsDictionary.get('ROUND').tooltip}
        isRequired={isRequired('round')}
        w="full"
      >
        <FormControl isInvalid={Boolean(errors.round)}>
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
        info={RoundInfoFieldsDictionary.get('ROUND_FDV').tooltip}
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
                  <Text color="orange.500" fontSize="sm">
                    $
                  </Text>
                </InputRightElement>
              </InputGroup>
            )}
          />
          {errors.roundFDV && <FormErrorMessage>{errors.roundFDV.message}</FormErrorMessage>}
        </FormControl>
      </UIKit.FormElement>

      <UIKit.FormElement
        label={RoundInfoFieldsDictionary.get('CONTRACT_VALUE').title}
        info={RoundInfoFieldsDictionary.get('CONTRACT_VALUE').tooltip}
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
                  <Text color="orange.500" fontSize="sm">
                    $
                  </Text>
                </InputRightElement>
              </InputGroup>
            )}
          />
          {errors.contractValue && <FormErrorMessage>{errors.contractValue.message}</FormErrorMessage>}
        </FormControl>
      </UIKit.FormElement>

      <UIKit.FormElement
        label={RoundInfoFieldsDictionary.get('ESTIMATE_TGE_DATE').title}
        info={RoundInfoFieldsDictionary.get('ESTIMATE_TGE_DATE').tooltip}
        isRequired={isRequired('estimateTGEDate')}
        w="full"
      >
        <VStack gap="1.5rem" bg="dark.800" padding="1.5rem" rounded="xl">
          <FormControl isDisabled={isTBD} isInvalid={Boolean(errors.estimateTGEDate)}>
            <Controller
              control={control}
              name="estimateTGEDate"
              render={({ field }) => (
                <UIKit.DatePicker
                  placeholder={RoundInfoFieldsDictionary.get('ESTIMATE_TGE_DATE').placeholder}
                  {...field}
                />
              )}
            />
            {errors.estimateTGEDate && <FormErrorMessage>{errors.estimateTGEDate.message}</FormErrorMessage>}
          </FormControl>

          <FormControl>
            <Controller
              control={control}
              name="isTBD"
              render={(props) => (
                <Checkbox
                  checked={props.field.value}
                  onChange={(e) => {
                    const checked = e.target.checked;
                    props.field.onChange(checked);
                  }}
                >
                  {RoundInfoFieldsDictionary.get('IS_TBD').title}
                </Checkbox>
              )}
            />
          </FormControl>
        </VStack>
      </UIKit.FormElement>

      <UIKit.FormElement
        label={RoundInfoFieldsDictionary.get('LOCKUP_PERIOD').title}
        info={RoundInfoFieldsDictionary.get('LOCKUP_PERIOD').tooltip}
        isRequired={isRequired('lockupPeriod')}
        w="full"
      >
        <VStack gap="1rem">
          <FormControl isDisabled={alreadyOver} isInvalid={Boolean(errors.lockupPeriod)}>
            <Controller
              control={control}
              name="lockupPeriod"
              render={(props) => (
                <InputGroup>
                  <UIKit.InputNumber
                    {...props.field}
                    onChange={(value) => {
                      props.field.onChange(value);
                    }}
                    placeholder={RoundInfoFieldsDictionary.get('LOCKUP_PERIOD').placeholder}
                  />
                  <InputRightElement w="auto" px="0.75rem">
                    <Text color="orange.500" fontSize="sm">
                      months
                    </Text>
                  </InputRightElement>
                </InputGroup>
              )}
            />
            {errors.contractValue && <FormErrorMessage>{errors.contractValue.message}</FormErrorMessage>}
          </FormControl>

          <FormControl>
            <Controller
              control={control}
              name="alreadyOver"
              render={(props) => (
                <Checkbox
                  checked={props.field.value}
                  onChange={(e) => {
                    const checked = e.target.checked;
                    props.field.onChange(checked);
                    if (checked) {
                      setValue('lockupPeriod', null);
                    }
                  }}
                >
                  {RoundInfoFieldsDictionary.get('ALREADY_OVER').title}
                </Checkbox>
              )}
            />
          </FormControl>
        </VStack>
      </UIKit.FormElement>

      <UIKit.FormElement
        label={RoundInfoFieldsDictionary.get('VESTING_CALENDAR').title}
        info={RoundInfoFieldsDictionary.get('VESTING_CALENDAR').tooltip}
        isRequired={isRequired('vestingCalendar')}
        w="full"
      >
        <FormControl isInvalid={Boolean(errors.vestingCalendar)}>
          <Controller
            control={control}
            name="vestingCalendar"
            render={(props) => (
              <InputGroup>
                <UIKit.InputNumber
                  {...props.field}
                  onChange={(value) => {
                    props.field.onChange(value);
                  }}
                  placeholder={RoundInfoFieldsDictionary.get('VESTING_CALENDAR').placeholder}
                />
                <InputRightElement w="auto" px="0.75rem">
                  <Text color="orange.500" fontSize="sm">
                    months
                  </Text>
                </InputRightElement>
              </InputGroup>
            )}
          />
          {errors.vestingCalendar && <FormErrorMessage>{errors.vestingCalendar.message}</FormErrorMessage>}
        </FormControl>
      </UIKit.FormElement>

      <UIKit.FormElement
        label={RoundInfoFieldsDictionary.get('PRICE_INFORMATION').title}
        info={RoundInfoFieldsDictionary.get('PRICE_INFORMATION').tooltip}
        isRequired
        w="full"
      >
        <VStack layerStyle="orangeGradient" p="1.5rem" alignItems="start" gap="1.25rem">
          <HStack alignItems="flex-start">
            <Circle bg="orange.500" size="1.25rem">
              <UIIcons.Common.InfoIcon color="white" />
            </Circle>
            <Text fontWeight={800} fontSize="sm" color="orange.500">
              Automatically calculated
            </Text>
          </HStack>
          <SimpleGrid columns={2} w="full" gap="1.25rem">
            <FormControl isRequired={isRequired('totalEquityBought')} isInvalid={Boolean(errors.totalEquityBought)}>
              <FormLabel display="flex" gap="0.25rem" alignItems="center">
                {RoundInfoFieldsDictionary.get('TOTAL_EQUITY_BOUGHT').title}
                <Tooltip label={RoundInfoFieldsDictionary.get('TOTAL_EQUITY_BOUGHT').tooltip}>
                  <SuggestionIcon />
                </Tooltip>
              </FormLabel>
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
                      <Text color="orange.500" fontSize="sm">
                        $
                      </Text>
                    </InputRightElement>
                  </InputGroup>
                )}
              />
              {errors.totalEquityBought && <FormErrorMessage>{errors.totalEquityBought.message}</FormErrorMessage>}
            </FormControl>
            <FormControl isRequired={isRequired('pricePerEquity')} isInvalid={Boolean(errors.pricePerEquity)}>
              <FormLabel display="flex" gap="0.25rem" alignItems="center">
                {RoundInfoFieldsDictionary.get('PRICE_PER_EQUITY').title}
                <Tooltip label={RoundInfoFieldsDictionary.get('PRICE_PER_EQUITY').tooltip}>
                  <SuggestionIcon />
                </Tooltip>
              </FormLabel>
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
                      <Text color="orange.500" fontSize="sm">
                        $
                      </Text>
                    </InputRightElement>
                  </InputGroup>
                )}
              />
              {errors.pricePerEquity && <FormErrorMessage>{errors.pricePerEquity.message}</FormErrorMessage>}
            </FormControl>
          </SimpleGrid>
        </VStack>
      </UIKit.FormElement>
    </VStack>
  );
}
