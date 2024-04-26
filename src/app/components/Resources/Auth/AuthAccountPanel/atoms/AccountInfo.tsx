import { useMemo } from 'react';

import { IAuthConnectorInfo } from '@app/components';
import { formatAddress } from '@app/utils';
import { HStack, Circle, Image, Text } from '@chakra-ui/react';

export interface AccountInfoProps {
  connectorInfo: IAuthConnectorInfo;
  nickname: string;
}

export function AccountInfo({ connectorInfo, nickname }: AccountInfoProps) {
  const formattedNickname = useMemo(() => nickname && formatAddress(nickname, 8, 4), [nickname]);

  return (
    <HStack>
      <Circle size="1.125rem">
        <Image w="1.05rem" src={connectorInfo.logoUrl} alt={connectorInfo.title} />
      </Circle>
      <Text fontSize="sm" color="#C8CDD0">
        {formattedNickname}
      </Text>
    </HStack>
  );
}
