import { useCallback } from 'react';

import { useToast, ToastPosition } from '@chakra-ui/react';

export interface UseToastCallbackOptions {
  showWhenOk?: boolean;
  showWhenError?: boolean;
  position?: ToastPosition;

  okText?: string;
  errorText?: string;
}

export function useToastOuterCallback({
  showWhenError = true,
  showWhenOk = false,
  position = 'top-right',
  okText = 'Success',
  errorText,
}: UseToastCallbackOptions) {
  const toast = useToast();

  const _onSuccessCallback = useCallback(() => {
    if (showWhenOk) {
      toast({ description: okText, status: 'success', position });
    }
  }, [toast, showWhenOk, okText, position]);

  const _onErrorCallback = useCallback(
    (err) => {
      if (showWhenError) {
        const message =
          typeof errorText === 'string'
            ? errorText
            : typeof err === 'string'
            ? err
            : 'message' in err
            ? err.message
            : JSON.stringify(err);
        toast({ description: message, status: 'error', position });
      }
    },
    [showWhenError, errorText, toast, position],
  );

  const _onCallback = useCallback<(callback: () => any) => Promise<void>>(
    async (callback) => {
      try {
        await callback();

        _onSuccessCallback();
      } catch (err) {
        _onErrorCallback(err);
      }
    },
    [_onSuccessCallback, _onErrorCallback],
  );

  return _onCallback;
}

export function useToastInnerCallback<T extends (...args: any[]) => any>(
  callback: T,
  props: UseToastCallbackOptions,
): (...args: Parameters<T>) => Promise<void> {
  const toastCallback = useToastOuterCallback(props);

  const argsCallback = useCallback(
    (...args: any[]) =>
      () =>
        callback(...args),
    [callback],
  );
  const _callback = useCallback(
    (...args: any[]) => toastCallback(argsCallback(...args)),
    [toastCallback, argsCallback],
  );
  return _callback;
}
