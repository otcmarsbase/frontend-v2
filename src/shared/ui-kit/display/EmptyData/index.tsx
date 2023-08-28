import { Button, Circle, VStack, Image, Text } from '@chakra-ui/react';

import WorriedEmojiPng from './assets/worried-emoji.png';

export interface EmptyDataProps {
  onCreate: () => void;
  createButtonLabel: string;
}

export const EmptyData: React.FC<EmptyDataProps> = ({ createButtonLabel, onCreate }) => {
  return (
    <VStack
      width="full"
      border="1px solid"
      borderColor="dark.500"
      borderRadius="1rem"
      paddingTop="11rem"
      paddingBottom="8.5rem"
    >
      <Circle size="4rem" bg="dark.600">
        <Image src={WorriedEmojiPng} w="1.5rem" h="1.5rem" />
      </Circle>
      <Text fontWeight={700} color="gray" fontFamily="promo" lineHeight="1.5rem">
        Sorry, no deals.
      </Text>
      <Text textAlign="center" fontSize="sm" color="gray" mb="1rem">
        Unfortunately, there is no data on the transactions.
        <br />
        You can create your own deal
      </Text>
      <Button onClick={onCreate} w="15rem">
        {createButtonLabel}
      </Button>
    </VStack>
  );
};
