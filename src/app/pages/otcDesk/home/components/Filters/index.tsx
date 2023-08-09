import {
  Button,
  HStack,
  Input,
  InputGroup,
  InputLeftElement,
  SimpleGrid,
  IconButton,
  VStack,
} from '@chakra-ui/react';
import { HotIcon, SearchIcon, Select, UsdtIcon } from '@shared/ui-kit';

export interface OTCFiltersProps {}

export const OTCFilters: React.FC<OTCFiltersProps> = () => {
  return (
    <VStack w="full">
      <SimpleGrid w="full" columns={20} spacing="0.5rem">
        {new Array(20).fill(0).map(() => (
          <IconButton
            aria-label="USDT Asset"
            variant="darkOutline"
            size="lg"
            w="full"
            icon={<UsdtIcon />}
          ></IconButton>
        ))}
      </SimpleGrid>
      <HStack my="1rem" justifyContent="space-between" w="full">
        <HStack gap="0.75rem">
          <SimpleGrid columns={2} spacing="0.75rem">
            <InputGroup>
              <InputLeftElement>
                <SearchIcon />
              </InputLeftElement>
              <Input placeholder="Search" />
            </InputGroup>
            <Select
              isClearable
              placeholder="Sort by"
              options={[
                { label: 'From A to Z', value: 'byAlphabetic' },
                { label: 'Last added', value: 'byLast' },
                { label: 'Popularity', value: 'byPopularity' },
              ]}
            />
          </SimpleGrid>
          <Button variant="darkOutline">
            <HotIcon />
            &nbsp; HOT!
          </Button>
        </HStack>
      </HStack>
    </VStack>
  );
};
