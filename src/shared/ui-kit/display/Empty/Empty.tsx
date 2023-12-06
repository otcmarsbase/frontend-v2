import { PropsWithChildren } from 'react';

import { Circle, Image, StackProps, Text, VStack } from '@chakra-ui/react';

import WorriedEmojiPng from './assets/worried-emoji.png';

export interface EmptyProps extends Omit<StackProps, 'title'> {
  title?: React.ReactNode;
  description?: React.ReactNode;
  image?: string | React.ReactNode;
  size?: 'md' | 'lg';
  createButton?: React.ReactNode;
}

export const Empty: React.FC<PropsWithChildren<EmptyProps>> = ({
  title = 'Sorry, no data',
  description = (
    <>
      Unfortunately, there is no data on the transactions.
      <br />
      You can create your own deal
    </>
  ),
  size = 'md',
  image = <Image src={WorriedEmojiPng} w="1.5rem" h="1.5rem" />,
  children,
  createButton,
  ...stackProps
}) => {
  return (
    <VStack
      width="full"
      border="1px solid"
      borderColor="dark.500"
      borderRadius="1rem"
      paddingTop="11rem"
      paddingBottom="8.5rem"
      px="2.5rem"
    >
      <Circle size="4rem" bg="dark.600">
        {image}
      </Circle>
      <Text fontWeight={700} color="gray" fontFamily="promo" lineHeight="1.5rem">
        {title}
      </Text>
      <Text textAlign="center" fontSize="sm" color="gray" mb="1rem">
        {description}
      </Text>
      {createButton}
    </VStack>
  );
};
