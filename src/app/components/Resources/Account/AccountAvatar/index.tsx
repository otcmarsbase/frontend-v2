import { useMemo } from 'react';

import { Circle, HStack, StackProps, Text } from '@chakra-ui/react';

export interface AccountAvatarProps extends StackProps {
  avatarUrl: string;
  nickname: string;
  nicknameMaxLength?: number;
}

export const AccountAvatar: React.FC<AccountAvatarProps> = ({
  avatarUrl,
  nickname,
  fontSize = 'sm',
  nicknameMaxLength = 10,
  ...stackProps
}) => {
  const preparedNickname = useMemo(() => {
    if (nickname.length > nicknameMaxLength) return `${nickname.slice(0, nicknameMaxLength)}...`;
    return nickname;
  }, [nickname, nicknameMaxLength]);

  return (
    <HStack {...stackProps}>
      <Circle bg={`url(${avatarUrl})`} bgSize="contain" size="1.5rem" />
      <Text color="white" fontSize={fontSize}>
        {preparedNickname}
      </Text>
    </HStack>
  );
};
