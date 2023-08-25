import { ComponentWithAs, IconProps } from '@chakra-ui/react';

export interface ILotViewLinks {
  icon: ComponentWithAs<'svg', IconProps>;
  text: string;
  href: string;
}
