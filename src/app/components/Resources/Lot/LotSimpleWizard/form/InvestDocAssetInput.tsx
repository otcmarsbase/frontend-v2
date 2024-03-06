import { FC, useMemo } from 'react';
import { Controller } from 'react-hook-form';

import { UILogic } from '@app/components';
import { FormControl, FormErrorMessage, FormLabel, Tooltip } from '@chakra-ui/react';
import { Common } from '@shared/ui-icons';
import { SuggestionIcon } from '@shared/ui-kit';

import { BaseInputProps } from './types';
import { useInput } from './useInput';

const NAME = 'INVEST_DOC_ASSET';

export const InvestDocAssetInput: FC<BaseInputProps> = () => {
  const { value, isRequired, error, control } = useInput(NAME);
  const innerError = useMemo(() => {
    if (!(error && error instanceof Object)) return;

    if ('title' in error || 'root' in error) {
      return error.title || error.root;
    }

    if ('message' in error) {
      return error;
    }
  }, [error]);

  return (
    <FormControl isInvalid={Boolean(innerError)} isRequired={isRequired} w="full">
      <FormLabel display="flex" gap="0.25rem" alignItems="center">
        Project Name
        <Tooltip label="Please provide the project name">
          <SuggestionIcon />
        </Tooltip>
      </FormLabel>
      <Controller
        name={NAME}
        control={control}
        render={({ field }) => (
          <UILogic.AssetCreateSelect
            isInvalid={Boolean(innerError)}
            placeholder={<Common.SearchIcon />}
            {...field}
            value={value ? ('title' in value ? value.title : (value as any)) : void 0}
            onChange={(value) => {
              if (typeof value === 'string') {
                return field.onChange({ title: value, website: '' });
              }

              field.onChange(value);
            }}
          />
        )}
      />
      {innerError && <FormErrorMessage>{innerError.message}</FormErrorMessage>}
    </FormControl>
  );
};
