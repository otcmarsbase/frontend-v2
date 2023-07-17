import { Image } from '@chakra-ui/react';
import LogoPng from './logo.png';

export const Logo = () => {
  return <Image width="8rem" src={LogoPng} alt="MarsBase logotype" />;
};
