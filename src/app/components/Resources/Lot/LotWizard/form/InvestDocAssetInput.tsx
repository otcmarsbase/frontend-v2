import { FC, useMemo } from 'react';
import { Controller } from 'react-hook-form';

import { UILogic } from '@app/components';
import { FormControl, FormErrorMessage, HStack } from '@chakra-ui/react';
import { Resource } from '@schema/otc-desk-gateway';
import { FormElement, InputWebsite } from '@shared/ui-kit';

import { BaseInputProps } from './types';
import { useInput } from './useInput';

const NAME = 'INVEST_DOC_ASSET';

export const InvestDocAssetInput: FC<BaseInputProps> = () => {
  const { value, isRequired, error } = useInput(NAME);

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
    <FormElement label="Project info" info="Please provide the project name." isRequired={isRequired} w="full">
      <HStack spacing="1.25rem" alignItems="flex-start">
        <FormControl isInvalid={Boolean(innerError)}>
          <Controller
            name={NAME}
            render={({ field }) => (
              <UILogic.AssetCreateSelect
                isInvalid={Boolean(innerError)}
                placeholder="Project info"
                {...field}
                onChange={(value) => {
                  if (typeof value === 'string') {
                    return field.onChange({ title: value });
                  }

                  field.onChange(value);
                }}
              />
            )}
          />
          {innerError && <FormErrorMessage>{innerError.message}</FormErrorMessage>}
        </FormControl>
        {value instanceof Object && 'title' in value && <WebsiteInput />}
      </HStack>
    </FormElement>
  );
};

const WebsiteInput: FC = () => {
  const { isValid, isRequired, error } = useInput('INVEST_DOC_ASSET.website');

  return (
    <FormControl isInvalid={!isValid} isRequired={isRequired}>
      <Controller
        name="INVEST_DOC_ASSET.website"
        render={({ field }) => <InputWebsite w="full" placeholder="Enter URL" {...field} />}
      />
      {error && <FormErrorMessage>{error.message}</FormErrorMessage>}
    </FormControl>
  );
};
