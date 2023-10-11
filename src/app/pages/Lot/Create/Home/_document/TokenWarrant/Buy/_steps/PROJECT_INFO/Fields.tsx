import { useEffect, useMemo } from 'react';
import { Controller, useFormContext } from 'react-hook-form';

import { UILogic } from '@app/components';
import { VStack, FormControl, FormErrorMessage, HStack, Checkbox, Input } from '@chakra-ui/react';
import { UIKit } from '@shared/ui-kit';

import { useCreateLotContext } from '../../../../../_atoms';

import { ProjectInfoFieldsDictionary } from './const';
import { projectInfoSchema } from './schema';
import { ProjectInfoModel } from './types';

export function ProjectInfoFields() {
  const { setFormSchema } = useCreateLotContext();
  const { watch, formState, control, setValue } = useFormContext<ProjectInfoModel>();

  // @ts-ignore
  const withTokenWarrant = watch('withTokenWarrant');
  const isNoLimit = watch('isNoLimit');
  const isPermanent = watch('isPermanent');

  const errors = useMemo(() => formState.errors, [formState]);

  useEffect(() => {
    setFormSchema(projectInfoSchema);
  }, [setFormSchema]);

  return (
    <VStack p="2rem" gap="2rem" alignItems="start">
      <UIKit.FormElement label={ProjectInfoFieldsDictionary.get('TYPE_OF_BUYER').title} w="full">
        <VStack gap="1rem">
          <FormControl isInvalid={Boolean(errors.typeOfBuyer)}>
            <Controller
              control={control}
              name="typeOfBuyer"
              render={(props) => (
                <UILogic.ParticipantTypeSelect
                  {...props.field}
                  onChange={(value) => {
                    props.field.onChange(value);
                  }}
                  placeholder={ProjectInfoFieldsDictionary.get('TYPE_OF_BUYER').placeholder}
                />
              )}
            />
            {errors.typeOfBuyer && <FormErrorMessage>{errors.typeOfBuyer.message}</FormErrorMessage>}
          </FormControl>

          <HStack w="full">
            <FormControl>
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
            {withTokenWarrant && (
              <FormControl>
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

      <UIKit.FormElement label={ProjectInfoFieldsDictionary.get('TELEGRAM').title} w="full">
        <FormControl isInvalid={Boolean(errors.telegram)}>
          <Controller
            control={control}
            name="telegram"
            render={({ field }) => (
              <Input w="full" placeholder={ProjectInfoFieldsDictionary.get('TELEGRAM').placeholder} {...field} />
            )}
          />
          {errors.telegram && <FormErrorMessage>{errors.telegram.message}</FormErrorMessage>}
        </FormControl>
      </UIKit.FormElement>

      <UIKit.FormElement label={ProjectInfoFieldsDictionary.get('TYPE_OF_SELLER').title} w="full">
        <VStack gap="1rem">
          <FormControl isInvalid={Boolean(errors.typeOfSeller)}>
            <Controller
              control={control}
              name="typeOfSeller"
              render={(props) => (
                <UILogic.ParticipantTypeSelect
                  {...props.field}
                  isDisabled={isNoLimit}
                  onChange={(value) => {
                    props.field.onChange(value);
                  }}
                  placeholder={ProjectInfoFieldsDictionary.get('TYPE_OF_SELLER').placeholder}
                />
              )}
            />
            {errors.typeOfSeller && <FormErrorMessage>{errors.typeOfSeller.message}</FormErrorMessage>}
          </FormControl>

          <FormControl>
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
                      setValue('typeOfSeller', null);
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

      <UIKit.FormElement label={ProjectInfoFieldsDictionary.get('DEADLINE').title} w="full">
        <VStack gap="1rem">
          <FormControl isDisabled={isPermanent} isInvalid={Boolean(errors.deadline)}>
            <Controller
              control={control}
              name="deadline"
              render={({ field }) => (
                <UIKit.DatePicker placeholder={ProjectInfoFieldsDictionary.get('DEADLINE').placeholder} {...field} />
              )}
            />
            {errors.deadline && <FormErrorMessage>{errors.deadline.message}</FormErrorMessage>}
          </FormControl>

          <FormControl>
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
}
