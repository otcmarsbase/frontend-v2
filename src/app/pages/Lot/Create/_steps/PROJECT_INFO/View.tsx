import { forwardRef, useCallback, useImperativeHandle } from 'react';
import { Controller } from 'react-hook-form';

import { UILogic, useRpcSchemaClient } from '@app/components';
import { LotTypeDictionary, TradeDirectionDictionary } from '@app/dictionary';
import { Button, Center, Checkbox, FormControl, FormErrorMessage, HStack, Input } from '@chakra-ui/react';
import { useRouter } from '@packages/router5-react-auto';
import { Resource } from '@schema/api-gateway';
import { RadioButtons, UIKit, VStack, useForm } from '@shared/ui-kit';

import { FormInvalidError } from '../../_const';

import { ProjectInfoFieldsDictionary } from './const';
import { projectInfoSchema } from './schema';

export interface ProjectInfoStepProps {
  lot: Resource.Lot.Lot;
  active: boolean;
}

export type ProjectInfoModel = {
  deadline: Date;
  isDirect: boolean;
  isReadyToSPV: boolean;
  isNoLimit: boolean;
  isPermanent: boolean;
  typeOfSeller: Resource.Common.ParticipantType;
  typeOfBuyer: Resource.Common.ParticipantType;
  telegram: string;
  website: string;
};

export interface ProjectInfoStepRef {
  onSubmit: () => Promise<ProjectInfoModel>;
}

export const ProjectInfoStep = forwardRef<ProjectInfoStepRef, ProjectInfoStepProps>(({ lot, active }, ref) => {
  const router = useRouter();
  const rpcSchema = useRpcSchemaClient();
  const {
    control,
    isRequired,
    handleSubmit,
    formState: { errors },
  } = useForm({ schema: projectInfoSchema, defaultValues: {} });

  // const onSubmit = async (model: any) => {
  //   const lot = await rpcSchema.send('lot.save', { model });

  // }

  const onSubmit = useCallback(async () => {
    const validatePromise = new Promise<ProjectInfoModel>((resolve, reject) => {
      handleSubmit(resolve, (err) => {
        reject(FormInvalidError);
        console.log({ err });
      })();
    });
    const params = await validatePromise;
    console.log({ params });
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
    <VStack p="2rem" gap="2rem" alignItems="start">
      <UIKit.FormElement
        label={ProjectInfoFieldsDictionary.get('TYPE_OF_SELLER').title}
        isRequired={isRequired('typeOfSeller')}
        w="full"
      >
        <VStack gap="1.5rem">
          <FormControl isRequired={isRequired('typeOfSeller')} isInvalid={Boolean(errors.typeOfSeller)}>
            <Controller
              control={control}
              name="typeOfSeller"
              render={(props) => (
                <UILogic.ParticipantTypeSelect
                  {...props.field}
                  onChange={(value) => {
                    props.field.onChange(value);
                  }}
                  placeholder={ProjectInfoFieldsDictionary.get('TYPE_OF_SELLER').placeholder}
                />
              )}
            />
            {errors.typeOfSeller && <FormErrorMessage>{errors.typeOfSeller.message}</FormErrorMessage>}
          </FormControl>

          <HStack w="full">
            <FormControl isRequired={isRequired('isDirect')}>
              <Controller
                control={control}
                name="isDirect"
                render={(props) => (
                  <Checkbox checked={props.field.value} onChange={props.field.onChange}>
                    {ProjectInfoFieldsDictionary.get('IS_DIRECT').title}
                  </Checkbox>
                )}
              />
            </FormControl>
            <FormControl isRequired={isRequired('isReadyToSPV')}>
              <Controller
                control={control}
                name="isReadyToSPV"
                render={(props) => (
                  <Checkbox checked={props.field.value} onChange={props.field.onChange}>
                    {ProjectInfoFieldsDictionary.get('IS_READY_TO_SPV').title}
                  </Checkbox>
                )}
              />
            </FormControl>
          </HStack>
        </VStack>
      </UIKit.FormElement>

      <UIKit.FormElement
        label={ProjectInfoFieldsDictionary.get('TELEGRAM').title}
        isRequired={isRequired('telegram')}
        w="full"
      >
        <FormControl isRequired={isRequired('telegram')} isInvalid={Boolean(errors.telegram)}>
          <Controller
            control={control}
            name="telegram"
            render={({ field, formState: { errors } }) => (
              <Input w="full" placeholder={ProjectInfoFieldsDictionary.get('TELEGRAM').placeholder} {...field} />
            )}
          />
          {errors.telegram && <FormErrorMessage>{errors.telegram.message}</FormErrorMessage>}
        </FormControl>
      </UIKit.FormElement>

      <UIKit.FormElement
        label={ProjectInfoFieldsDictionary.get('TYPE_OF_BUYER').title}
        isRequired={isRequired('typeOfBuyer')}
        w="full"
      >
        <VStack gap="1.5rem">
          <FormControl isRequired={isRequired('typeOfBuyer')} isInvalid={Boolean(errors.typeOfBuyer)}>
            <Controller
              control={control}
              name="typeOfBuyer"
              render={(props) => {
                console.log({
                  field: props.field,
                });
                return (
                  <UILogic.ParticipantTypeSelect
                    {...props.field}
                    onChange={(value) => {
                      props.field.onChange(value);
                    }}
                    placeholder={ProjectInfoFieldsDictionary.get('TYPE_OF_BUYER').placeholder}
                  />
                );
              }}
            />
            {errors.typeOfBuyer && <FormErrorMessage>{errors.typeOfBuyer.message}</FormErrorMessage>}
          </FormControl>

          <FormControl isRequired={isRequired('isNoLimit')}>
            <Controller
              control={control}
              name="isNoLimit"
              render={(props) => (
                <Checkbox checked={props.field.value} onChange={props.field.onChange}>
                  {ProjectInfoFieldsDictionary.get('IS_NO_LIMIT').title}
                </Checkbox>
              )}
            />
          </FormControl>
        </VStack>
      </UIKit.FormElement>

      <UIKit.FormElement
        label={ProjectInfoFieldsDictionary.get('WEBSITE').title}
        isRequired={isRequired('website')}
        w="full"
      >
        <FormControl isRequired={isRequired('website')} isInvalid={Boolean(errors.website)}>
          <Controller
            control={control}
            name="website"
            render={({ field }) => (
              <UIKit.InputWebsite
                w="full"
                placeholder={ProjectInfoFieldsDictionary.get('WEBSITE').placeholder}
                {...field}
              />
            )}
          />
          {errors.website && <FormErrorMessage>{errors.website.message}</FormErrorMessage>}
        </FormControl>
      </UIKit.FormElement>
    </VStack>
  );
});

export default ProjectInfoStep;
