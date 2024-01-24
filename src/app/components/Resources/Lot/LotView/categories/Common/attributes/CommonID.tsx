import { FC } from 'react';

import { HStack, Text } from '@chakra-ui/react';
import { CopyButton } from '@shared/ui-kit';

import { InfoElement } from '../../../_atoms';
import { useLotView } from '../../../useLotView';

export const CommonID: FC = () => {
  const { lot } = useLotView();

  return (
    <InfoElement label="ID">
      <HStack gap="0.25rem">
        <Text fontSize="sm" fontWeight="500" color="dark.50">
          {lot.id}
        </Text>
        <CopyButton value={lot.id.toString()} />
      </HStack>
    </InfoElement>
  );
};
