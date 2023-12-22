import { VStack, Text, HStack } from '@chakra-ui/react';

export interface InfoBlockProps {
  title: string;
  fields: { label: string; value: React.ReactNode }[];
}

export const InfoBlock: React.FC<InfoBlockProps> = ({ title, fields }) => {
  return (
    <VStack w="full" alignItems="start" layerStyle="card">
      <Text fontWeight="700" textTransform="uppercase" lineHeight="1.5" fontSize="md" fontFamily="promo">
        {title}
      </Text>
      <VStack w="full" gap="0.75rem">
        {fields.map((field, index) => (
          <HStack w="full" alignItems="start" justifyContent="space-between" key={index}>
            <Text fontSize="sm" color="dark.50">
              {field.label}
            </Text>
            {field.value}
          </HStack>
        ))}
      </VStack>
    </VStack>
  );
};
