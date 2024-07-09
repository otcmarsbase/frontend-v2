import { useCallback, useMemo, useState } from 'react';
import { Controller, FieldPath, useFormContext, get, ControllerProps } from 'react-hook-form';

import { useAuth, useRpcSchemaClient } from '@app/components';
import { useBreakpointDevice, useToastInnerCallback } from '@app/hooks';
import { HStack, FormControl, FormErrorMessage, Button, Show } from '@chakra-ui/react';
import { FormElement, useIsRequired } from '@shared/ui-kit';

import { ProfileModel, ProfileSchema } from '../schema';

export interface ProfileInputProps<T extends FieldPath<ProfileModel>> {
  name: T;
  label: string;
  render: ControllerProps<ProfileModel, T>['render'];
}

export const ProfileInput = <T extends FieldPath<ProfileModel>>({ name, label, render }: ProfileInputProps<T>) => {
  const rpcSchema = useRpcSchemaClient();
  const { updateAccount } = useAuth();
  const [isLoading, setIsLoading] = useState(false);

  const { isMobile } = useBreakpointDevice();

  const { control, formState, watch } = useFormContext<ProfileModel>();
  const error = useMemo(() => get(formState.errors, name), [formState, name]);
  const isValid = useMemo(() => !error, [error]);
  const value = watch(name);

  const isRequired = useIsRequired(ProfileSchema);

  const save = useCallback(async () => {
    if (!isValid) return;

    try {
      setIsLoading(true);
      await rpcSchema.send('user.updateProfile', { [name]: value });
      const account = await rpcSchema.send('account.me', {});
      updateAccount(account);
    } finally {
      setIsLoading(false);
    }
  }, [rpcSchema, name, value, updateAccount, isValid]);

  const onSave = useToastInnerCallback(save, {});

  const onFocus = () => {
    if (isMobile) {
      document.body.style.overflow = 'hidden';
    }
  };

  const onBlur = () => {
    document.body.style.overflow = 'auto';
  };

  return (
    <FormElement label={label} isRequired={isRequired(name)} w="full" onFocus={onFocus} onBlur={onBlur}>
      <HStack role="group" alignItems="flex-start">
        <FormControl isInvalid={!isValid}>
          <Controller control={control} name={name} render={render} />
          {error && <FormErrorMessage>{error.message}</FormErrorMessage>}
        </FormControl>
        <Show above="md">
          <Button
            _groupFocusWithin={{
              opacity: 1,
              minW: '10rem',
              visibility: 'visible',
              pos: 'relative',
            }}
            _loading={{
              opacity: 1,
              minW: '10rem',
              visibility: 'visible',
              pos: 'relative',
            }}
            opacity="0"
            visibility="hidden"
            pos="absolute"
            onClick={onSave}
            isLoading={isLoading}
            isDisabled={!isValid}
          >
            Save
          </Button>
        </Show>
        <Show below="md">
          <Button
            _groupFocusWithin={{
              opacity: 1,
              minW: '10rem',
              visibility: 'visible',
              pos: 'fixed',
              zIndex: '9999',
            }}
            _loading={{
              opacity: 1,
              minW: '10rem',
              visibility: 'visible',
              pos: 'fixed',
              zIndex: '9999',
            }}
            width="calc(100% - 2rem)"
            opacity="0"
            visibility="hidden"
            pos="absolute"
            top="calc(100dvh - 2rem)"
            left="50%"
            transform="translate(-50%,-50%)"
            onClick={onSave}
            isLoading={isLoading}
            isDisabled={!isValid}
          >
            Save
          </Button>
        </Show>
      </HStack>
    </FormElement>
  );
};
