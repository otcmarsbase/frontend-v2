import { useEffect, useMemo } from 'react';
import { Controller, useFormContext } from 'react-hook-form';

import { UILogic } from '@app/components';
import { TradeDirectionDictionary, LotTypeDictionary } from '@app/dictionary';
import { VStack, FormControl, FormErrorMessage, HStack, Checkbox, SimpleGrid, Flex, Tooltip } from '@chakra-ui/react';
import { UIKit, RadioButtons, SuggestionIcon } from '@shared/ui-kit';
import { useIsRequired } from '@shared/ui-kit';

import { useCreateLotContext } from '../../../../../_atoms';

import { StartInfoFieldsDictionary } from './const';
import { startInfoSchema } from './schema';
import { StartInfoModel } from './types';

export function StartInfoFields() {
  const { setFormSchema } = useCreateLotContext();
  const { watch, formState, control } = useFormContext<StartInfoModel>();
  const asset = watch('asset');
  const isRequired = useIsRequired(startInfoSchema);

  const errors = useMemo(() => formState.errors, [formState]);

  useEffect(() => {
    setFormSchema(startInfoSchema);
  }, [setFormSchema]);

  return (
    <VStack p="2rem" w="full" gap="2rem">
      <UIKit.FormElement
        label={StartInfoFieldsDictionary.get('DIRECTION').title}
        info={StartInfoFieldsDictionary.get('DIRECTION').tooltip}
        isRequired={isRequired('direction')}
      >
        <FormControl isInvalid={Boolean(errors.direction)}>
          <Controller
            control={control}
            name="direction"
            render={(props) => (
              <RadioButtons
                variant="outline"
                value={props.field.value}
                renderKey={(item) => item}
                onChange={(lotType) => {
                  props.field.onChange({ target: { name: props.field.name, value: lotType } });
                }}
                renderItem={(item) => TradeDirectionDictionary.get(item).title}
                items={TradeDirectionDictionary.keys()}
                isInvalid={Boolean(errors.direction)}
              />
            )}
          />
          {errors.direction && <FormErrorMessage>{errors.direction.message}</FormErrorMessage>}
        </FormControl>
      </UIKit.FormElement>
      <UIKit.FormElement
        label={StartInfoFieldsDictionary.get('LOT_TYPE').title}
        info={StartInfoFieldsDictionary.get('LOT_TYPE').tooltip}
        isRequired={isRequired('type')}
      >
        <VStack alignItems="start" gap="1rem">
          <FormControl isInvalid={Boolean(errors.type)}>
            <Controller
              control={control}
              name="type"
              render={(props) => (
                <RadioButtons
                  variant="outline"
                  value={props.field.value}
                  renderKey={(item) => item}
                  onChange={(lotType) => {
                    props.field.onChange(lotType);
                  }}
                  renderItem={(item) => LotTypeDictionary.get(item).title}
                  items={LotTypeDictionary.keys()}
                  isInvalid={Boolean(errors.type)}
                />
              )}
            />
            {errors.type && <FormErrorMessage>{errors.type.message}</FormErrorMessage>}
          </FormControl>
          <HStack w="full" gap="1rem">
            <FormControl>
              <Controller
                control={control}
                name="isReassigned"
                render={(props) => (
                  <Checkbox checked={props.field.value} onChange={(e) => props.field.onChange(e.target.checked)}>
                    <Flex alignItems="center" gap="0.25rem">
                      {StartInfoFieldsDictionary.get('IS_REASSIGNED').title}
                      <Tooltip label={StartInfoFieldsDictionary.get('IS_REASSIGNED').tooltip}>
                        <SuggestionIcon />
                      </Tooltip>
                    </Flex>
                  </Checkbox>
                )}
              />
            </FormControl>
          </HStack>
        </VStack>
      </UIKit.FormElement>
      <UIKit.FormElement
        label={StartInfoFieldsDictionary.get('PROJECT_NAME').title}
        info={StartInfoFieldsDictionary.get('PROJECT_NAME').tooltip}
        isRequired={isRequired('asset')}
        w="full"
      >
        {typeof asset === 'string' ? (
          <SimpleGrid columns={2} gap="1.25rem">
            <FormControl isInvalid={Boolean(errors.asset)}>
              <Controller
                control={control}
                name="asset"
                render={({ field }) => (
                  <UILogic.AssetCreateSelect
                    isInvalid={Boolean(errors.asset)}
                    placeholder={StartInfoFieldsDictionary.get('PROJECT_NAME').placeholder}
                    {...field}
                  />
                )}
              />
              {errors.asset && <FormErrorMessage>{errors.asset.message}</FormErrorMessage>}
            </FormControl>
            <FormControl isInvalid={Boolean(errors.website)}>
              <Controller
                control={control}
                name="website"
                render={({ field }) => (
                  <UIKit.InputWebsite
                    w="full"
                    placeholder={StartInfoFieldsDictionary.get('WEBSITE').placeholder}
                    {...field}
                  />
                )}
              />
              {errors.website && <FormErrorMessage>{errors.website.message}</FormErrorMessage>}
            </FormControl>
          </SimpleGrid>
        ) : (
          <FormControl isInvalid={Boolean(errors.asset)}>
            <Controller
              control={control}
              name="asset"
              render={({ field }) => (
                <UILogic.AssetCreateSelect
                  isInvalid={Boolean(errors.asset)}
                  placeholder={StartInfoFieldsDictionary.get('PROJECT_NAME').placeholder}
                  {...field}
                />
              )}
            />
            {errors.asset && <FormErrorMessage>{errors.asset.message}</FormErrorMessage>}
          </FormControl>
        )}
      </UIKit.FormElement>
    </VStack>
  );
}
