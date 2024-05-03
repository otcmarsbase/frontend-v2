import { FC, useMemo } from 'react';
import { Controller } from 'react-hook-form';

import { useRpcSchemaClient, useRpcSchemaQuery } from '@app/components';
import { FormControl, FormErrorMessage, FormLabel, InputWithUpload } from '@shared/ui-kit';

import { BaseInputProps } from '../../types';
import { useInput } from '../../useInput';

import { DescriptorDictionary } from './const';

const NAME = 'INVEST_DOC_ASSET';

export const BoosterInfoProjectTokenomicsInput: FC<BaseInputProps> = () => {
  const rpcSchema = useRpcSchemaClient();

  const { data: fileUploader } = useRpcSchemaQuery('lot.getUploadTokenomicsURL', {});

  const { isValid, error, watch, value, setValue } = useInput(NAME);

  const direction = watch('COMMON_DIRECTION');

  const descriptor = useMemo(() => DescriptorDictionary.get(direction), [direction]);

  const isDisabled = useMemo(() => !('tokenomics' in value), [value])

  const inputValue = useMemo(() => {
    if ('tokenomics' in value) {
      return value.tokenomics
    }
    return null
  }, [value])

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if ('tokenomics' in value) {
      setValue({...value, tokenomics: e.target.value})
    }
  }

  const onUploadFile = async (id: string) => {
    const data = await rpcSchema.send('file.getById', { id })

    setValue({...value, tokenomics: data.url})
  }

  return (
    <FormControl isInvalid={!isValid} isDisabled={isDisabled}>
      <FormLabel display="flex" gap="0.25rem" alignItems="center">
        {descriptor.label}
      </FormLabel>
      <Controller
        name={NAME}
        render={() => (
          <InputWithUpload
            value={inputValue}
            uploadLink={fileUploader}
            onUpload={onUploadFile}
            onChange={onChangeInput}
          />
        )}
      />
      {error && <FormErrorMessage>{error.message}</FormErrorMessage>}
    </FormControl>
  )
}
