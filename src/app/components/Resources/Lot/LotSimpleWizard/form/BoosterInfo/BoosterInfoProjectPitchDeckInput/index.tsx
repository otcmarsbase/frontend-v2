import { FC, useMemo } from 'react';
import { Controller } from 'react-hook-form';

import { useRpcSchemaClient, useRpcSchemaQuery } from '@app/components';
import { FormControl, FormErrorMessage, FormLabel, InputWithUpload, SuggestionIcon, Tooltip } from '@shared/ui-kit';

import { BaseInputProps } from '../../types';
import { useInput } from '../../useInput';

import { DescriptorDictionary } from './const';

const NAME = 'INVEST_DOC_ASSET';

export const BoosterInfoProjectPitchDeckInput: FC<BaseInputProps> = () => {
  const rpcSchema = useRpcSchemaClient();

  const { data: fileUploader } = useRpcSchemaQuery('lot.getUploadPitchDeckURL', {});


  const { isValid, error, watch, value, setValue } = useInput(NAME);

  const direction = watch('COMMON_DIRECTION');

  const descriptor = useMemo(() => DescriptorDictionary.get(direction), [direction]);

  const isDisabled = useMemo(() => !('pitchDeck' in value), [value])

  const inputValue = useMemo(() => {
    if ('pitchDeck' in value) {
      return value.pitchDeck
    }
    return null
  }, [value])

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if ('pitchDeck' in value) {
      setValue({...value, pitchDeck: e.target.value})
    }
  }

  const onUploadFile = async (id: string) => {
    const data = await rpcSchema.send('file.getById', { id })

    setValue({...value, pitchDeck: data.url})
  }

  return (
    <FormControl isInvalid={!isValid} isDisabled={isDisabled}>
      <FormLabel display="flex" gap="0.25rem" alignItems="center">
        {descriptor.label}
        {isDisabled && (
          <Tooltip label={descriptor.tooltip}>
            <SuggestionIcon />
          </Tooltip>
        )}
      </FormLabel>
      <Controller
        name={NAME}
        render={() => (
          <InputWithUpload
            value={inputValue}
            isDisabled={isDisabled}
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
