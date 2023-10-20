import { useEffect, useMemo } from 'react';
import { Controller, useFormContext } from 'react-hook-form';

import { UILogic } from '@app/components';
import { VStack, FormControl, FormErrorMessage, HStack, Checkbox, Input } from '@chakra-ui/react';
import { UIKit, useIsRequired } from '@shared/ui-kit';

import { useLotWizard } from '../../../../_atoms';

import { ProjectInfoFieldsDictionary } from './const';
import { projectInfoSchema } from './schema';
import { ProjectInfoModel } from './types';

export function ProjectInfoFields() {
  const { setFormSchema } = useLotWizard();
  const { watch, formState, control, setValue } = useFormContext<ProjectInfoModel>();
  const isRequired = useIsRequired(projectInfoSchema);

  const isNoLimit = watch('isNoLimit');
  const isPermanent = watch('isPermanent');

  const errors = useMemo(() => formState.errors, [formState]);

  useEffect(() => {
    setFormSchema(projectInfoSchema);
  }, [setFormSchema]);

  return (
    <VStack p="2rem" gap="2rem" alignItems="start">
      <UIKit.FormElement
        label={ProjectInfoFieldsDictionary.get('OFFER_MAKER_TYPE').title}
        info={ProjectInfoFieldsDictionary.get('OFFER_MAKER_TYPE').tooltip}
        isRequired={isRequired('offerMakerType')}
        w="full"
      >
        <VStack gap="1rem">
          <FormControl isInvalid={Boolean(errors.offerMakerType)}>
            <Controller
              control={control}
              name="offerMakerType"
              render={(props) => (
                <UILogic.ParticipantTypeSelect
                  {...props.field}
                  onChange={(value) => {
                    props.field.onChange(value);
                  }}
                  placeholder={ProjectInfoFieldsDictionary.get('OFFER_MAKER_TYPE').placeholder}
                />
              )}
            />
            {errors.offerMakerType && <FormErrorMessage>{errors.offerMakerType.message}</FormErrorMessage>}
          </FormControl>

          <HStack w="full">
            <FormControl>
              <Controller
                control={control}
                name="isDirect"
                render={(props) => (
                  <Checkbox isChecked={!!props.field.value} onChange={props.field.onChange}>
                    {ProjectInfoFieldsDictionary.get('IS_DIRECT').title}
                  </Checkbox>
                )}
              />
            </FormControl>
            <FormControl>
              <Controller
                control={control}
                name="isReadyToSPV"
                render={(props) => (
                  <Checkbox isChecked={!!props.field.value} onChange={props.field.onChange}>
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
        info={ProjectInfoFieldsDictionary.get('TELEGRAM').tooltip}
        isRequired={isRequired('telegram')}
        w="full"
      >
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

      <UIKit.FormElement
        label={ProjectInfoFieldsDictionary.get('BIDDER_TYPE').title}
        info={ProjectInfoFieldsDictionary.get('BIDDER_TYPE').tooltip}
        isRequired={isRequired('bidderType')}
        w="full"
      >
        <VStack gap="1rem">
          <FormControl isInvalid={Boolean(errors.bidderType)}>
            <Controller
              control={control}
              name="bidderType"
              render={(props) => (
                <UILogic.ParticipantTypeSelect
                  {...props.field}
                  isDisabled={isNoLimit}
                  onChange={(value) => {
                    props.field.onChange(value);
                  }}
                  placeholder={ProjectInfoFieldsDictionary.get('BIDDER_TYPE').placeholder}
                  isMulti
                />
              )}
            />
            {errors.bidderType && <FormErrorMessage>{errors.bidderType.message}</FormErrorMessage>}
          </FormControl>

          <FormControl>
            <Controller
              control={control}
              name="isNoLimit"
              render={(props) => (
                <Checkbox
                  isChecked={!!props.field.value}
                  onChange={(e) => {
                    const checked = e.target.checked;
                    props.field.onChange(checked);
                    if (checked) {
                      setValue('bidderType', null);
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
        info={ProjectInfoFieldsDictionary.get('DEADLINE').tooltip}
        isRequired={isRequired('deadline')}
        w="full"
      >
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
                  isChecked={!!props.field.value}
                  onChange={(e) => {
                    const checked = e.target.checked;

                    if (checked) {
                      setValue('deadline', null);
                    }

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
