import { useEffect, useMemo } from 'react';
import { Controller, useFormContext } from 'react-hook-form';

import {
  VStack,
  FormControl,
  FormErrorMessage,
  FormLabel,
  InputGroup,
  InputRightElement,
  SimpleGrid,
  Text,
} from '@chakra-ui/react';
import { SuggestionIcon, Tooltip, UIKit, useIsRequired } from '@shared/ui-kit';

import { useLotWizard } from '../../../../_atoms';
import {
  PricingModelFieldDictionary,
  PricingModelUnitDictionary,
  PricingModel,
  PricingModelDictionary,
} from '../../../../const';

import { LotInfoFieldsDictionary } from './const';
import { lotInfoSchema } from './schema';
import { LotInfoModel } from './types';

export function LotInfoFields() {
  const { setFormSchema } = useLotWizard();
  const { watch, formState, control, setValue } = useFormContext<LotInfoModel>();
  const isRequired = useIsRequired(lotInfoSchema);

  const pricingModel = watch('pricingModel');
  const errors = useMemo(() => formState.errors, [formState]);

  const pricingModels = useMemo<PricingModel[]>(() => ['IN_STABLECOIN', 'IN_EQUITY'], []);
  const pricingModelFieldDictionary = useMemo(() => PricingModelFieldDictionary.get(pricingModel), [pricingModel]);

  const pricingModelFieldUnitDictionary = useMemo(() => PricingModelUnitDictionary.get(pricingModel), [pricingModel]);

  useEffect(() => {
    setValue('pricingModel', pricingModels[0]);
  }, [setValue, pricingModels]);

  useEffect(() => {
    setFormSchema(lotInfoSchema);
  }, [setFormSchema]);

  return (
    <VStack p="2rem" gap="2rem" alignItems="start">
      <UIKit.FormElement
        label={LotInfoFieldsDictionary.get('PRICING_MODEL').title}
        info={LotInfoFieldsDictionary.get('PRICING_MODEL').tooltip}
        isRequired={true}
        w="full"
      >
        <VStack w="full" alignItems="start" gap="0.75rem">
          <VStack w="full" alignItems="start" bg="dark.900" gap="1.25rem" borderRadius="sm" p="1.5rem">
            <UIKit.RadioButtons
              variant="outline"
              w="full"
              value={pricingModel}
              renderKey={(item) => item}
              onChange={(type) => setValue('pricingModel', type)}
              renderItem={(item) => PricingModelDictionary.get(item).title}
              items={pricingModels}
            />
            <SimpleGrid w="full" columns={2} gap="1.25rem">
              <FormControl isRequired={isRequired('quantity')} isInvalid={Boolean(errors.quantity)}>
                <FormLabel display="flex" gap="0.25rem" alignItems="center">
                  {pricingModelFieldDictionary.QUANTITY.title}
                  <Tooltip label={pricingModelFieldDictionary.QUANTITY.tooltip}>
                    <SuggestionIcon />
                  </Tooltip>
                </FormLabel>
                <Controller
                  control={control}
                  name="quantity"
                  render={(props) => (
                    <InputGroup>
                      <UIKit.InputNumber
                        {...props.field}
                        onChange={(value) => {
                          props.field.onChange(value);
                        }}
                        placeholder={pricingModelFieldDictionary.QUANTITY.placeholder}
                      />
                      <InputRightElement>
                        <Text color="orange.500" fontSize="sm">
                          {pricingModelFieldUnitDictionary?.QUANTITY}
                        </Text>
                      </InputRightElement>
                    </InputGroup>
                  )}
                />
                {errors.quantity && <FormErrorMessage>{errors.quantity.message}</FormErrorMessage>}
              </FormControl>
              <FormControl isRequired={isRequired('minSize')} isInvalid={Boolean(errors.minSize)}>
                <FormLabel display="flex" gap="0.25rem" alignItems="center">
                  {pricingModelFieldDictionary.MIN_SIZE.title}
                  <Tooltip label={pricingModelFieldDictionary.MIN_SIZE.tooltip}>
                    <SuggestionIcon />
                  </Tooltip>
                </FormLabel>
                <Controller
                  control={control}
                  name="minSize"
                  render={(props) => (
                    <InputGroup>
                      <UIKit.InputNumber
                        {...props.field}
                        onChange={(value) => {
                          props.field.onChange(value);
                        }}
                        placeholder={pricingModelFieldDictionary.MIN_SIZE.placeholder}
                      />
                      <InputRightElement>
                        <Text color="orange.500" fontSize="sm">
                          {pricingModelFieldUnitDictionary?.MIN_SIZE}
                        </Text>
                      </InputRightElement>
                    </InputGroup>
                  )}
                />
                {errors.minSize && <FormErrorMessage>{errors.minSize.message}</FormErrorMessage>}
              </FormControl>
            </SimpleGrid>
          </VStack>

          <VStack w="full" alignItems="start" layerStyle="orangeGradient" gap="1.25rem" borderRadius="sm" p="1.5rem">
            <SimpleGrid w="full" columns={2} gap="1.25rem">
              <FormControl isRequired={isRequired('targetFDV')} isInvalid={Boolean(errors.targetFDV)}>
                <FormLabel display="flex" gap="0.25rem" alignItems="center">
                  {LotInfoFieldsDictionary.get('FDV').title}
                  <Tooltip label={LotInfoFieldsDictionary.get('FDV').tooltip}>
                    <SuggestionIcon />
                  </Tooltip>
                </FormLabel>
                <Controller
                  control={control}
                  name="targetFDV"
                  render={(props) => (
                    <InputGroup>
                      <UIKit.InputNumber
                        {...props.field}
                        onChange={(value) => {
                          props.field.onChange(value);
                        }}
                        placeholder={LotInfoFieldsDictionary.get('FDV').placeholder}
                      />
                      <InputRightElement>
                        <Text color="orange.500" fontSize="sm">
                          $
                        </Text>
                      </InputRightElement>
                    </InputGroup>
                  )}
                />
                {errors.targetFDV && <FormErrorMessage>{errors.targetFDV.message}</FormErrorMessage>}
              </FormControl>
              <FormControl isRequired={isRequired('price')} isInvalid={Boolean(errors.price)}>
                <FormLabel display="flex" gap="0.25rem" alignItems="center">
                  {LotInfoFieldsDictionary.get('PRICE').title}
                  <Tooltip label={LotInfoFieldsDictionary.get('PRICE').tooltip}>
                    <SuggestionIcon />
                  </Tooltip>
                </FormLabel>
                <Controller
                  control={control}
                  name="price"
                  render={(props) => (
                    <InputGroup>
                      <UIKit.InputNumber
                        {...props.field}
                        onChange={(value) => {
                          props.field.onChange(value);
                        }}
                        placeholder={LotInfoFieldsDictionary.get('PRICE').placeholder}
                      />
                      <InputRightElement>
                        <Text color="orange.500" fontSize="sm">
                          $
                        </Text>
                      </InputRightElement>
                    </InputGroup>
                  )}
                />
                {errors.price && <FormErrorMessage>{errors.price.message}</FormErrorMessage>}
              </FormControl>
            </SimpleGrid>
          </VStack>
        </VStack>
      </UIKit.FormElement>
    </VStack>
  );
}
