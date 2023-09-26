import { forwardRef, useCallback, useImperativeHandle } from 'react';
import { Controller } from 'react-hook-form';

import { UILogic } from '@app/components';
import { Checkbox, FormControl, FormErrorMessage, HStack, Input } from '@chakra-ui/react';
import { Resource } from '@schema/api-gateway';
import { UIKit, VStack, useForm } from '@shared/ui-kit';

import { FormInvalidError } from '../../_const';
import { StepRef } from '../../types';

import { ProjectInfoFieldsDictionary } from './const';
import { projectInfoSchema } from './schema';

export interface ProjectInfoStepProps {
  lot: Resource.Lot.Lot;
  active: boolean;
}

export type ProjectInfoModel = {
  isDirect: boolean;
  isReadyToSPV: boolean;
  isNoLimit: boolean;
  isPermanent: boolean;
  typeOfSeller: Resource.Common.Enums.InvestorType;
  typeOfBuyer: Resource.Common.Enums.InvestorType | null;
  telegram: string;
  deadline: Date;
};

export type ProjectInfoStepRef = StepRef<ProjectInfoModel>;

export const ProjectInfoStep = forwardRef<ProjectInfoStepRef, ProjectInfoStepProps>(({ lot, active }, ref) => {
  const {
    control,
    isRequired,
    handleSubmit,
    formState: { errors },
    getValues,
    watch,
    setValue,
  } = useForm({ schema: projectInfoSchema, defaultValues: {} });

  const isNoLimit = watch('isNoLimit');

  const onSubmit = useCallback(async () => {
    const validatePromise = new Promise<ProjectInfoModel>((resolve, reject) => {
      handleSubmit(resolve, (err) => {
        console.log('validationError', { err });
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
      schema: projectInfoSchema,
    }),
    [onSubmit, getValues, isRequired],
  );

  console.log({ lot });

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
            {!lot.type.includes('TOKEN_WARRANT') && (
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
            )}
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
                return (
                  <UILogic.ParticipantTypeSelect
                    {...props.field}
                    isDisabled={isNoLimit}
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
                <Checkbox
                  checked={props.field.value}
                  onChange={(e) => {
                    const checked = e.target.checked;
                    props.field.onChange(checked);
                    if (checked) {
                      setValue('typeOfBuyer', null);
                    }
                  }}
                >
                  {ProjectInfoFieldsDictionary.get('IS_NO_LIMIT').title}
                </Checkbox>
              )}
            />
          </FormControl>
        </VStack>
      </UIKit.FormElement>

      <UIKit.FormElement
        label={ProjectInfoFieldsDictionary.get('DEADLINE').title}
        isRequired={isRequired('deadline')}
        w="full"
      >
        <VStack gap="1.5rem">
          <FormControl isRequired={isRequired('deadline')} isInvalid={Boolean(errors.deadline)}>
            <Controller
              control={control}
              name="deadline"
              render={({ field }) => (
                <UIKit.DatePicker
                  w="full"
                  placeholder={ProjectInfoFieldsDictionary.get('DEADLINE').placeholder}
                  {...field}
                />
              )}
            />
            {errors.deadline && <FormErrorMessage>{errors.deadline.message}</FormErrorMessage>}
          </FormControl>

          <FormControl isRequired={isRequired('isPermanent')}>
            <Controller
              control={control}
              name="isPermanent"
              render={(props) => (
                <Checkbox
                  checked={props.field.value}
                  onChange={(e) => {
                    const checked = e.target.checked;
                    props.field.onChange(checked);
                  }}
                >
                  {ProjectInfoFieldsDictionary.get('IS_PERMANENT').title}
                </Checkbox>
              )}
            />
          </FormControl>
        </VStack>
      </UIKit.FormElement>
    </VStack>
  );
});

export default ProjectInfoStep;
