import { useMemo } from 'react';

import { formatAddress } from '@app/utils';
import { Circle, HStack, StackProps, Text } from '@chakra-ui/react';

import defaultAvatar from './images/defaultAvatar.png';

export interface AccountAvatarProps extends StackProps {
  avatarUrl?: string;
  nickname: string;
  shortNickname?: boolean;
  nicknameMaxLength?: number;
}

export const AccountAvatar: React.FC<AccountAvatarProps> = ({
  avatarUrl = defaultAvatar,
  nickname,
  fontSize = 'sm',
  shortNickname,
  nicknameMaxLength = 10,
  ...stackProps
}) => {
  const preparedNickname = useMemo(() => {
    if (nickname.startsWith('0x')) return formatAddress(nickname, 4, 4);
    if (shortNickname && nickname.length > nicknameMaxLength) return `${nickname.slice(0, nicknameMaxLength)}...`;
    return nickname;
  }, [nickname, nicknameMaxLength, shortNickname]);

  return (
    <HStack {...stackProps}>
      <Circle bg={`url(${avatarUrl})`} bgSize="contain" size="1.5rem" />
      <Text color="white" fontSize={fontSize}>
        {preparedNickname}
      </Text>
    </HStack>
  );
};
