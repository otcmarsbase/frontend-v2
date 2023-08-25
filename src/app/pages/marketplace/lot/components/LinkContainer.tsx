import { FC } from 'react';

import { Button } from '@chakra-ui/react';

import { ILotViewLinks } from '../types';

export const LinksContainer: FC<ILotViewLinks> = ({ icon, text, href }) => {
  return (
    <Button variant="darkSolid" size="sm" leftIcon={<>{icon}</>}>
      {text}
    </Button>
  );
};
