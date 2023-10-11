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
} from '@chakra-ui/react';
import { UIIcons } from '@shared/ui-icons';
import { UIKit } from '@shared/ui-kit';

import { useCreateLotContext } from '../../../../../_atoms';

import { RoundInfoFieldsDictionary } from './const';
import { roundInfoSchema } from './schema';
import { RoundInfoModel } from './types';

export function RoundInfoFields() {
  const { setFormSchema } = useCreateLotContext();
  const { formState, control } = useFormContext<RoundInfoModel>();

  const errors = useMemo(() => formState.errors, [formState]);

  useEffect(() => {
    setFormSchema(roundInfoSchema);
  }, [setFormSchema]);

  return (
    <VStack p="2rem" gap="2rem" alignItems="start">
      <UIKit.FormElement label={RoundInfoFieldsDictionary.get('ROUND').title} w="full">
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

      <UIKit.FormElement label={RoundInfoFieldsDictionary.get('ROUND_FDV').title} w="full">
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

      <UIKit.FormElement label={RoundInfoFieldsDictionary.get('CONTRACT_VALUE').title} w="full">
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

      <UIKit.FormElement label={RoundInfoFieldsDictionary.get('PRICE_INFORMATION').title} w="full">
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
                      <Text color="orange.500" fontSize="sm">
                        $
                      </Text>
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
