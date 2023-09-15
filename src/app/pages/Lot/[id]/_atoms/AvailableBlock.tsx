import { Text, Image, Box } from '@chakra-ui/react';
import { Resource } from '@schema/api-gateway';
import { HStack, MoneyText, VStack } from '@shared/ui-kit';

import { Chart } from './Chart';
import AvailableGraphicSvg from './images/available_graphic.svg';

interface AvailableBlockProps {
  lot: Resource.Lot.Lot;
}

export const AvailableBlock: React.FC<AvailableBlockProps> = ({ lot }) => {
  return (
    <VStack bg="dark.900" p="1.25rem" borderRadius="sm">
      <HStack w="full" justifyContent="space-between">
        <Text fontFamily="promo" fontSize="md" textTransform="uppercase">
          Available
        </Text>
        <HStack>
          <MoneyText
            fontSize="sm"
            value={lot.execution_quantity_info.available.quote}
            abbreviated
            addon={<Text color="dark.50">$</Text>}
          />
          <Text fontSize="sm">/</Text>
          <MoneyText
            fontSize="sm"
            value={lot.execution_quantity_info.total.quote}
            abbreviated
            addon={<Text color="dark.50">$</Text>}
          />
        </HStack>
      </HStack>
      <Box>
        <Chart />
      </Box>
      <Image src={AvailableGraphicSvg} />
    </VStack>
  );
};
