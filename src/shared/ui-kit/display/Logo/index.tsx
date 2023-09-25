import { Image, ImageProps } from '@chakra-ui/react';

import LogoPng from './assets/logo.png';

export const Logo: React.FC<ImageProps> = (props) => {
  return <Image width="8rem" src={LogoPng} alt="MarsBase logotype" {...props} />;
};
