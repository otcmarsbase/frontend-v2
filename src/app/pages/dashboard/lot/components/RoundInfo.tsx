import { RoundInfoItem } from '@app/pages/dashboard/lot/components/RoundInfoItem';
import { Heading, SimpleGrid, VStack } from '@chakra-ui/react';

export const RoundInfo = ({ roundInfoFields }) => {
  return (
    <VStack
      bg="dark.900"
      padding="1.25rem"
      gap="1.5rem"
      borderRadius="0.5rem"
      w="100%"
    >
      <Heading variant="h3" w="100%">
        Round Info
      </Heading>

      <SimpleGrid
        borderRadius="0.75rem"
        bg="dark.900"
        gridColumnGap="6.5rem"
        columns={2}
        w="100%"
        gap="1.06rem"
        spacing={10}
      >
        {roundInfoFields.map((field) => (
          <RoundInfoItem field={field} />
        ))}
      </SimpleGrid>
    </VStack>
  );
};
