import { forwardRef, useCallback, useImperativeHandle } from 'react';
import { Controller } from 'react-hook-form';

import { UILogic, useRpcSchemaClient } from '@app/components';
import { LotTypeDictionary, TradeDirectionDictionary } from '@app/dictionary';
import { Center, Checkbox, FormControl, FormErrorMessage, HStack, Input } from '@chakra-ui/react';
import { useRouter } from '@packages/router5-react-auto';
import { Resource } from '@schema/api-gateway';
import { RadioButtons, UIKit, VStack, useForm } from '@shared/ui-kit';

import { FormInvalidError } from '../../_const';

import { StartInfoFieldsDictionary } from './const';
import { startInfoSchema } from './schema';

export interface StartInfoStepProps {
  lot: Resource.Lot.Lot;
  active: boolean;
}

export type StartInfoModel = {
  projectName: string;
  direction: Resource.Common.TradeDirection;
  type: Resource.Lot.LotType;
  isReassigned: boolean;
  withTokenWarrant: boolean;
};

export interface StartInfoStepRef {
  onSubmit: () => Promise<StartInfoModel>;
}

export const StartInfoStep = forwardRef<StartInfoStepRef, StartInfoStepProps>(({ lot, active }, ref) => {
  const router = useRouter();
  const rpcSchema = useRpcSchemaClient();
  const {
    control,
    isRequired,
    handleSubmit,
    formState: { errors },
  } = useForm({ schema: startInfoSchema, defaultValues: {} });

  // const onSubmit = async (model: any) => {
  //   const lot = await rpcSchema.send('lot.save', { model });

  // }

  const onSubmit = useCallback(async () => {
    const validatePromise = new Promise<StartInfoModel>((resolve, reject) => {
      handleSubmit(resolve, () => reject(FormInvalidError))();
    });
    const params = await validatePromise;
    return params;
  }, [handleSubmit]);

  useImperativeHandle(
    ref,
    () => ({
      onSubmit,
    }),
    [onSubmit],
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
                        props.field.onChange({ target: { name: props.field.name, value: lotType } });
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

                <Controller
                  control={control}
                  name="withTokenWarrant"
                  render={(props) => (
                    <FormControl>
                      <Checkbox checked={props.field.value} onChange={(e) => props.field.onChange(e.target.checked)}>
                        {StartInfoFieldsDictionary.get('WITH_TOKEN_WARRANT').title}
                      </Checkbox>
                    </FormControl>
                  )}
                />
              </HStack>
            </VStack>
          </UIKit.FormElement>
          <UIKit.FormElement
            label={StartInfoFieldsDictionary.get('PROJECT_NAME').title}
            isRequired={isRequired('projectName')}
            w="full"
          >
            <FormControl isRequired={isRequired('projectName')} isInvalid={Boolean(errors.projectName)}>
              <Controller
                control={control}
                name="projectName"
                render={({ field }) => (
                  <Input w="full" placeholder={StartInfoFieldsDictionary.get('PROJECT_NAME').placeholder} {...field} />
                )}
              />
              {errors.projectName && <FormErrorMessage>{errors.projectName.message}</FormErrorMessage>}
            </FormControl>
          </UIKit.FormElement>
        </VStack>
      </Center>
    </VStack>
  );
});

export default StartInfoStep;
