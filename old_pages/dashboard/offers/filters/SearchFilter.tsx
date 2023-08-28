import { InputGroup, InputLeftElement, Input } from '@chakra-ui/react';
import { Filter, SearchIcon } from '@shared/ui-kit';

export const SearchFilter: React.FC = () => {
  return (
    <Filter<string>
      render={({ value, onChange }) => (
        <InputGroup size="xs">
          <InputLeftElement pointerEvents="none">
            <SearchIcon color="orange.500" />
          </InputLeftElement>
          <Input
            variant="ghost"
            size="xs"
            maxW="17rem"
            placeholder="Search"
            value={value}
            onChange={(e) => onChange(e.currentTarget.value)}
          />
        </InputGroup>
      )}
    />
  );
};
