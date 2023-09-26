import { forwardRef, useCallback, useImperativeHandle } from 'react';
import { Controller } from 'react-hook-form';

import { UILogic } from '@app/components';
import { LotTypeDictionary, TradeDirectionDictionary } from '@app/dictionary';
import { Center, Checkbox, FormControl, FormErrorMessage, HStack, SimpleGrid } from '@chakra-ui/react';
import { Resource } from '@schema/api-gateway';
import { RadioButtons, UIKit, VStack, useForm } from '@shared/ui-kit';
import { without } from 'lodash';

import { FormInvalidError } from '../../_const';
import { StepRef } from '../../types';

import { StartInfoFieldsDictionary } from './const';
import { startInfoSchema } from './schema';

export interface StartInfoStepProps {
  lot: Resource.Lot.Lot;
  active: boolean;
}

export type StartInfoModel = {
  asset: Resource.Asset.Asset | string;
  direction: Resource.Common.Enums.TradeDirection;
  type: Resource.Lot.Enums.LotType;
  isReassigned: boolean;
  withTokenWarrant: boolean;
  website: string | null;
};

export type StartInfoStepRef = StepRef<StartInfoModel>;

export const StartInfoStep = forwardRef<StartInfoStepRef, StartInfoStepProps>(({ lot, active }, ref) => {
  const {
    control,
    isRequired,
    handleSubmit,
    formState: { errors },
    getValues,
    watch,
  } = useForm({ schema: startInfoSchema, defaultValues: {} });

  const type = watch('type');
  const asset = watch('asset');

  const onSubmit = useCallback(async () => {
    const validatePromise = new Promise<StartInfoModel>((resolve, reject) => {
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
      isSkippable: false,
      schema: startInfoSchema,
    }),
    [onSubmit, getValues, isRequired],
  );

  if (!active) return null;

  return (
    <VStack p="2rem" w="full" gap="3rem">
      <Center>
        <VStack gap="2rem" alignItems="start">
          <UIKit.FormElement
            label={StartInfoFieldsDictionary.get('DIRECTION').title}
            isRequired={isRequired('direction')}
          >
            <FormControl isRequired={isRequired('direction')} isInvalid={Boolean(errors.direction)}>
              <Controller
                control={control}
                name="direction"
                render={(props) => (
                  <RadioButtons
                    variant="outline"
                    w="30rem"
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
          <UIKit.FormElement label={StartInfoFieldsDictionary.get('LOT_TYPE').title} isRequired={isRequired('type')}>
            <VStack alignItems="start" gap="1rem">
              <FormControl isRequired={isRequired('type')} isInvalid={Boolean(errors.type)}>
                <Controller
                  control={control}
                  name="type"
                  render={(props) => (
                    <RadioButtons
                      variant="outline"
                      w="30rem"
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
                        {StartInfoFieldsDictionary.get('IS_REASSIGNED').title}
                      </Checkbox>
                    )}
                  />
                </FormControl>

                {type === 'SAFE' && (
                  <FormControl>
                    <Controller
                      control={control}
                      name="withTokenWarrant"
                      render={(props) => (
                        <Checkbox
                          checked={props.field.value}
                          onChange={(e) => {
                            const { checked } = e.target;
                            props.field.onChange(checked);
                          }}
                        >
                          {StartInfoFieldsDictionary.get('WITH_TOKEN_WARRANT').title}
                        </Checkbox>
                      )}
                    />
                  </FormControl>
                )}
              </HStack>
            </VStack>
          </UIKit.FormElement>
          <UIKit.FormElement
            label={StartInfoFieldsDictionary.get('PROJECT_NAME').title}
            isRequired={isRequired('asset')}
            w="full"
          >
            {typeof asset === 'string' ? (
              <SimpleGrid columns={2} gap="1.25rem">
                <FormControl isRequired={isRequired('asset')} isInvalid={Boolean(errors.asset)}>
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
                <FormControl isRequired={isRequired('website')} isInvalid={Boolean(errors.website)}>
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
              <FormControl isRequired={isRequired('asset')} isInvalid={Boolean(errors.asset)}>
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
      </Center>
    </VStack>
  );
});

export default StartInfoStep;
