import { FC } from 'react';
import Linkify from 'react-linkify';

import { Heading, VStack, Text } from '@chakra-ui/react';
import { ExpandableText } from '@shared/ui-kit';

import { useLotView } from '../../../useLotView';

export const AdditionalInfoBlock: FC = () => {
  const { lot } = useLotView();

  if (!lot.attributes.COMMON_ADDITIONAL_INFO) return <></>;

  return (
    <VStack p="1.25rem" w="full" alignItems="start" bg="dark.900" borderRadius="sm" gap="1.5rem">
      <Heading textTransform="uppercase" fontSize="md" color="white" fontWeight={700}>
        Additional info
      </Heading>
      <ExpandableText noOfLines={3} gap="0.75rem">
        <Linkify
          componentDecorator={(href, text, key) => (
            <Text
              key={key}
              as="a"
              href={href}
              color="orange.500"
              _hover={{ textDecoration: 'underline' }}
              target="_blank"
            >
              {text}
            </Text>
          )}
        >
          {lot.attributes.COMMON_ADDITIONAL_INFO}
        </Linkify>
      </ExpandableText>
    </VStack>
  );
};
