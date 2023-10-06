import { useCallback, useMemo, useState } from 'react';
import { Controller } from 'react-hook-form';

import {
  VStack,
  SimpleGrid,
  Text,
  FormControl,
  FormLabel,
  InputGroup,
  InputRightElement,
  FormErrorMessage,
  Checkbox,
} from '@chakra-ui/react';
import { UIKit } from '@shared/ui-kit';

import { StepPropsByDirection } from '../../../../types';
import {
  LotInfoFieldsDictionary,
  PricingModelFieldTypeDictionary,
  PricingModelType,
  PricingModelTypeDictionary,
} from '../../../const';
import { LotInfoModel } from '../../../types';

export interface LotInfoSAFESellProps extends StepPropsByDirection<LotInfoModel> {}

export const LotInfoSAFESell: React.FC<LotInfoSAFESellProps> = ({ isRequired, errors, control, setValue, lot }) => {
  const [pricingModelType, setPricingModelType] = useState<PricingModelType>('IN_STABLECOIN');

  const pricingModelTypes: PricingModelType[] = useMemo(() => {
    if (lot.type === 'SAFE') {
      return ['IN_STABLECOIN', 'IN_EQUITY'];
    }
    if (lot.type === 'SAFT') {
      return ['IN_STABLECOIN', 'IN_TOKENS'];
    }
    if (lot.type === 'TOKEN_WARRANT') {
      return ['IN_STABLECOIN', 'IN_TOKEN_SHARES'];
    }
    return ['IN_STABLECOIN', 'IN_EQUITY'];
  }, [lot]);

  const setPricingModel = useCallback(
    (type: PricingModelType) => {
      setPricingModelType(type);
      setValue('pricingModel', type);
    },
    [setValue],
  );

  const pricingModelFieldDictionary = PricingModelFieldTypeDictionary.get(pricingModelType);

  return (
    <VStack p="2rem" gap="2rem" alignItems="start">
      <UIKit.FormElement
        label={LotInfoFieldsDictionary.get('PRICING_MODEL').title}
        isRequired={isRequired('minSize') || isRequired('quantity') || isRequired('targetFDV') || isRequired('price')}
        w="full"
      >
        <VStack w="full" alignItems="start" gap="0.75rem">
          <VStack w="full" alignItems="start" bg="dark.900" gap="1.25rem" borderRadius="sm" p="1.5rem">
            <UIKit.RadioButtons
              variant="outline"
              w="full"
              value={pricingModelType}
              renderKey={(item) => item}
              onChange={(lotType) => setPricingModel(lotType)}
              renderItem={(item) => PricingModelTypeDictionary.get(item).title}
              items={pricingModelTypes}
            />
            <SimpleGrid w="full" columns={2} gap="1.25rem">
              <FormControl isInvalid={Boolean(errors.quantity)}>
                <FormLabel>{pricingModelFieldDictionary.QUANTITY.title}</FormLabel>
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
                        <Text color="orange.500">%</Text>
                      </InputRightElement>
                    </InputGroup>
                  )}
                />
                {errors.quantity && <FormErrorMessage>{errors.quantity.message}</FormErrorMessage>}
              </FormControl>
              <FormControl isInvalid={Boolean(errors.minSize)}>
                <FormLabel>{pricingModelFieldDictionary.MIN_SIZE.title}</FormLabel>
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
                        <Text color="orange.500">%</Text>
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
              <FormControl isInvalid={Boolean(errors.targetFDV)}>
                <FormLabel>{LotInfoFieldsDictionary.get('FDV').title}</FormLabel>
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
                        <Text color="orange.500">$</Text>
                      </InputRightElement>
                    </InputGroup>
                  )}
                />
                {errors.targetFDV && <FormErrorMessage>{errors.targetFDV.message}</FormErrorMessage>}
              </FormControl>
              <FormControl isInvalid={Boolean(errors.price)}>
                <FormLabel>{LotInfoFieldsDictionary.get('PRICE').title}</FormLabel>
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
                        <Text color="orange.500">$</Text>
                      </InputRightElement>
                    </InputGroup>
                  )}
                />
                {errors.price && <FormErrorMessage>{errors.price.message}</FormErrorMessage>}
              </FormControl>
            </SimpleGrid>
            <FormControl>
              <Controller
                control={control}
                name="isBestBid"
                render={(props) => (
                  <Checkbox checked={props.field.value} onChange={(e) => props.field.onChange(e.target.checked)}>
                    {LotInfoFieldsDictionary.get('IS_BEST_BID').title}
                  </Checkbox>
                )}
              />
            </FormControl>
          </VStack>
        </VStack>
      </UIKit.FormElement>
    </VStack>
  );
};
