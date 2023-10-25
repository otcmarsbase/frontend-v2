import { useIMask, IMaskInputProps } from 'react-imask';

import { Input, InputProps } from '@chakra-ui/react';

export interface InputMaskProps extends InputProps {
  mask: string | RegExp;
}

export const InputMask: React.FC<InputMaskProps> = ({ mask, ...props }) => {
  const { ref, setValue } = useIMask({ mask: mask as any });

  return <Input ref={ref} {...props} />;
};
