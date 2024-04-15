import { AuthAction } from '@app/components';
import { HStack, Text, VStack } from '@chakra-ui/react';
import { UIIcons } from '@shared/ui-icons';

export interface BottomMenuProps {
  items: { label: string; icon: keyof typeof UIIcons.Common; onClick: () => void; needAuth?: boolean }[];
}

export const BottomMenu: React.FC<BottomMenuProps> = ({ items }) => {
  return (
    <HStack
      bg="dark.950"
      p="1rem"
      h="5rem"
      borderTop="0.0625rem solid"
      borderColor="dark.700"
      boxSizing="border-box"
      display={{ base: 'flex', md: 'none' }}
      zIndex="sticky"
      justifyContent="center"
      position="fixed"
      bottom="0"
      w="full"
      gap="0.75rem"
    >
      {items.map((item, key) => {
        const Icon = UIIcons.Common[item.icon];

        const content = (
          <VStack flexShrink="1" w="3.75rem" gap="0.25rem" onClick={item.onClick} alignItems="center" key={key}>
            <Icon w="1.5rem" h="1.5rem" />
            <Text fontSize="3xs">{item.label}</Text>
          </VStack>
        );

        return item.needAuth ? <AuthAction key={key}>{content}</AuthAction> : content;
      })}
    </HStack>
  );
};
