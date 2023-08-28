import { FC } from 'react';

import { Checkbox, Input, VStack } from '@chakra-ui/react';
import { Common } from '@shared/types';
import {
  FormBlockElement,
  FormField,
  RadioButtons,
  Select,
  UseFormReturn,
} from '@shared/ui-kit';

import { ProjectInfoFields } from './constants';
import {
  AccountTypes,
  AccountTypesKeys,
  LotTypesKeys,
  LotTypes,
} from './types';

export const ProjectInfo: FC<{
  form: UseFormReturn;
  direction: Common.Direction;
}> = (props) => {
  const { form, direction } = props;
  const { register, getValues, formState, setValue, isRequired } = form;
  const { errors } = formState;

  const accountTypesOptions = AccountTypesKeys.map((sellerType) => ({
    label: AccountTypes[sellerType],
    value: sellerType,
  }));

  const lotTypesOptions = LotTypesKeys.map((lotType) => ({
    label: LotTypes[lotType],
    value: lotType,
  }));

  return (
    <VStack gap="2.25rem">
      <FormBlockElement
        label="Project info"
        isRequired={isRequired('projectName') || isRequired('projectWebsite')}
        grid={{ cols: 2 }}
      >
        <FormField
          register={register}
          errors={errors}
          name={'projectName'}
          value={getValues('projectName')}
          w="100%"
          component={<Input placeholder={ProjectInfoFields.PROJECT_NAME} />}
        />
        <FormField
          register={register}
          errors={errors}
          w="100%"
          name={'projectWebsite'}
          value={getValues('projectWebsite')}
          component={<Input placeholder={ProjectInfoFields.PROJECT_WEBSITE} />}
        />
      </FormBlockElement>

      <FormBlockElement
        label={ProjectInfoFields.LOT_TYPE}
        isRequired={isRequired('lotType')}
      >
        <RadioButtons
          items={lotTypesOptions}
          value={getValues('lotType')}
          onChange={(value) => setValue('lotType', value)}
        />
      </FormBlockElement>

      <FormBlockElement grid={{ cols: 2 }}>
        <FormField
          register={register}
          name={'isReAssigned'}
          value={getValues('isReAssigned')}
          component={<Checkbox>{ProjectInfoFields.IS_RE_ASSIGNED}</Checkbox>}
        />
        {getValues('lotType') === 'SAFE' ? (
          <FormField
            register={register}
            name={'isTokenWarrant'}
            value={getValues('isTokenWarrant')}
            component={
              <Checkbox>{ProjectInfoFields.IS_TOKEN_WARRANT}</Checkbox>
            }
          />
        ) : null}
      </FormBlockElement>

      {direction === 'SELL' ? (
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
            options={accountTypesOptions}
          />
          <FormField
            register={register}
            name={'isDirectSeller'}
            value={getValues('isDirectSeller')}
            component={
              <Checkbox>{ProjectInfoFields.IS_DIRECT_SELLER}</Checkbox>
            }
          />
        </FormBlockElement>
      ) : (
        <FormBlockElement
          label={ProjectInfoFields.TYPES_OF_BUYER}
          isRequired={isRequired('typesOfBuyer')}
        >
          <Select
            placeholder="Choose type"
            size="sm"
            isMulti
            value={getValues('typesOfBuyer')}
            onChange={(value) => setValue('typesOfBuyer', value)}
            options={accountTypesOptions}
          />
          <FormField
            register={register}
            name={'noLimitation'}
            value={getValues('noLimitation')}
            component={<Checkbox>{ProjectInfoFields.NO_LIMITATION}</Checkbox>}
          />
        </FormBlockElement>
      )}

      <FormBlockElement
        label={ProjectInfoFields.TELEGRAM}
        isRequired={isRequired('telegram')}
      >
        <FormField
          register={register}
          errors={errors}
          name={'telegram'}
          component={<Input placeholder="@nickname" />}
          value={getValues('telegram')}
        />
      </FormBlockElement>

      {direction === 'SELL' ? (
        <FormBlockElement
          label={ProjectInfoFields.TYPES_OF_BUYER}
          isRequired={isRequired('typesOfBuyer')}
        >
          <FormField
            register={register}
            errors={errors}
            value={getValues('typesOfBuyer')}
            name="typesOfBuyer"
            component={
              <Select
                placeholder="Choose type"
                size="sm"
                isMulti
                options={accountTypesOptions}
              />
            }
          />
          <FormField
            register={register}
            name={'noLimitation'}
            value={getValues('noLimitation')}
            component={<Checkbox>{ProjectInfoFields.NO_LIMITATION}</Checkbox>}
          />
        </FormBlockElement>
      ) : (
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
            options={accountTypesOptions}
          />
          <FormField
            register={register}
            name={'isDirectSeller'}
            value={getValues('isDirectSeller')}
            component={
              <Checkbox>{ProjectInfoFields.IS_DIRECT_SELLER}</Checkbox>
            }
          />
        </FormBlockElement>
      )}

      <FormBlockElement label={ProjectInfoFields.DEADLINE_DATE}>
        {/* TODO fix this */}
        {/*<DatePickerComp*/}
        {/*    handleGetDate={(date) =>*/}
        {/*        setValue('deadlineDate', date.toLocaleDateString())*/}
        {/*    }*/}
        {/*    isDatePickerDisabled={getValues('isPermanent')}*/}
        {/*/>*/}

        <FormField
          register={register}
          name="isPermanent"
          value={getValues('isPermanent')}
          component={<Checkbox>{ProjectInfoFields.IS_PERMANENT}</Checkbox>}
        />
      </FormBlockElement>
    </VStack>
  );
};
