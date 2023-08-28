import { Button, HStack, Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import { UIIcons } from '@shared/ui-icons';
import { UIKit } from '@shared/ui-kit';

export interface LotFilterControlsProps {
  toggleButton?: {
    isSelected: boolean;
    onSelect?: (isSelected: boolean) => any;
  };
}

export function LotFilterControls({ toggleButton }: LotFilterControlsProps) {
  return (
    <HStack>
      <Button
        w="full"
        variant={toggleButton?.isSelected ? 'darkSolid' : 'darkOutline'}
        onClick={() => toggleButton?.onSelect?.(!toggleButton?.isSelected)}
      >
        Filters
      </Button>
      <InputGroup>
        <InputLeftElement>
          <UIIcons.Common.SearchIcon />
        </InputLeftElement>
        <Input placeholder="Search" />
      </InputGroup>
      <UIKit.Select
        isClearable
        placeholder="Sort by"
        value={'byAlphabetic'}
        options={[
          { label: 'From A to Z', value: 'byAlphabetic' },
          { label: 'Last added', value: 'byLast' },
          { label: 'Popularity', value: 'byPopularity' },
        ]}
      />
      <Button variant="darkOutline">
        <UIIcons.Common.HotIcon />
        &nbsp; HOT!
      </Button>
    </HStack>
  );
}
