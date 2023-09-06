import { Circle, HStack, StackProps, Text } from '@chakra-ui/react';

export interface AccountAvatarProps extends StackProps {
  avatarUrl: string;
  nickname: string;
}

export const AccountAvatar: React.FC<AccountAvatarProps> = ({
  avatarUrl,
  nickname,
  fontSize = 'sm',
  ...stackProps
}) => {
  return (
    <HStack {...stackProps}>
      <Circle bg={`url(${avatarUrl})`} bgSize="contain" size="1.5rem" />
      <Text color="white" fontSize={fontSize}>
        {nickname}
      </Text>
    </HStack>
  );
};
