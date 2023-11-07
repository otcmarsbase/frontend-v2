import { useCallback } from 'react';
import ReactInputMask, { Props as ReactInputMaskProps } from 'react-input-mask';

import { Input, InputProps } from '@chakra-ui/react';

export interface InputMaskProps extends InputProps, Omit<ReactInputMaskProps, 'color' | 'size' | 'height' | 'width'> {
  toUnmaskedValue?: (maskedValue: string) => string;
}

export const InputMask: React.FC<InputMaskProps> = ({
  mask,
  maskChar,
  maskPlaceholder,
  alwaysShowMask,
  inputRef,
  beforeMaskedStateChange,
  toUnmaskedValue,
  formatChars,
  ...props
}) => {
  const onChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = toUnmaskedValue ? toUnmaskedValue(e.target.value) : e.target.value;

      if (props.onChange) {
        props.onChange({
          ...e,
          target: {
            ...e.target,
            value,
          },
        });
      }
    },
    [props, toUnmaskedValue],
  );

  return (
    <ReactInputMask
      mask={mask}
      maskChar={maskChar}
      maskPlaceholder={maskPlaceholder}
      alwaysShowMask={alwaysShowMask}
      beforeMaskedStateChange={beforeMaskedStateChange}
      value={props.value}
      onChange={onChange}
      formatChars={formatChars}
    >
      {/*@ts-ignore broken types in `react-input-mask` */}
      {(inputProps) => <Input {...inputProps} />}
    </ReactInputMask>
  );
};
