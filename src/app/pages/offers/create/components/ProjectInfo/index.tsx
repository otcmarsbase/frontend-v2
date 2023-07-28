import { FC } from 'react';
import { VStack } from '@chakra-ui/react';
import {
  FormBlockElement,
  FormField,
  RadioButtons,
  Select,
  UseFormReturn,
} from '@shared/ui-kit';
import { RawCheckbox } from '@shared/ui-kit/components/RawCheckbox/RawCheckbox';
import _ from 'lodash';
import { ProjectInfoFields } from './consts';
import { InvAccTypes, LotTypes, LotTypesTexts } from './types';

export const ProjectInfo: FC<{ form: UseFormReturn }> = (props) => {
  const { register, getValues, formState, setValue, isRequired } = props.form;
  const { errors } = formState;

  return (
    <VStack gap="2.25rem">
      <FormBlockElement
        label="Project info"
        isRequired={isRequired('projectName') || isRequired('projectWebsite')}
        grid={{ cols: 2 }}
      >
        <FormField
          register={{ ...register('projectName') }}
          errors={errors}
          id={'projectName'}
          value={getValues('projectName')}
          w="100%"
          placeholder={ProjectInfoFields.PROJECT_NAME}
        />
        <FormField
          register={{ ...register('projectWebsite') }}
          errors={errors}
          w="100%"
          id={'projectWebsite'}
          value={getValues('projectWebsite')}
          placeholder={ProjectInfoFields.PROJECT_WEBSITE}
        />
      </FormBlockElement>

      <FormBlockElement
        label={ProjectInfoFields.LOT_TYPE}
        isRequired={isRequired('lotType')}
      >
        <RadioButtons
          items={LotTypes.map((lotType) => ({
            value: lotType,
            label: LotTypesTexts[lotType],
          }))}
          value={getValues('lotType')}
          onChange={(value) => setValue('lotType', value)}
        />
      </FormBlockElement>

      <FormBlockElement
        label={ProjectInfoFields.TYPES_OF_SELLER}
        isRequired={isRequired('typesOfSeller')}
      >
        <Select
          placeholder="Choose type"
          size="sm"
          isMulti
          value={getValues('typesOfSeller')}
          onChange={(value) => setValue('typesOfSeller', value)}
          options={InvAccTypes.map((sellerType) => ({
            label: sellerType,
            value: sellerType,
          }))}
        />
        <RawCheckbox
          handleChange={(id, value) => setValue(id, value)}
          id={'isDirectSeller'}
          value={getValues('isDirectSeller')}
          label={ProjectInfoFields.IS_DIRECT_SELLER}
        />
      </FormBlockElement>

      <FormBlockElement
        label={ProjectInfoFields.TELEGRAM}
        isRequired={isRequired('telegram')}
      >
        <FormField
          register={{ ...register('telegram') }}
          errors={errors}
          id={'telegram'}
          value={getValues('telegram')}
          placeholder="@nickname"
        />
      </FormBlockElement>

      <FormBlockElement>
        <RawCheckbox
          handleChange={(id, value) => setValue(id, value)}
          id={'isReAssigned'}
          value={getValues('isReAssigned')}
          label={ProjectInfoFields.IS_RE_ASSIGNED}
        />
      </FormBlockElement>

      <FormBlockElement
        label={ProjectInfoFields.TYPES_OF_BUYER}
        isRequired={isRequired('typesOfBuyer')}
      >
        <Select
          placeholder="Choose type"
          size="sm"
          value={getValues('typesOfBuyer')}
          onChange={(value) => setValue('typesOfBuyer', value)}
          options={InvAccTypes.map((sellerType) => ({
            label: sellerType,
            value: sellerType,
          }))}
        />
      </FormBlockElement>

      <FormBlockElement>
        <RawCheckbox
          value={getValues('isAdmToBuy')}
          handleChange={(id, value) => setValue(id, value)}
          id={'isAdmToBuy'}
          label={ProjectInfoFields.IS_ADM_TO_BUY}
        />
        <RawCheckbox
          handleChange={(id, value) => setValue(id, value)}
          id={'isDataPickerDisabled'}
          value={getValues('isDataPickerDisabled')}
          label={ProjectInfoFields.IS_DATE_PICKER_DISABLED}
        />
      </FormBlockElement>
    </VStack>
  );
};
