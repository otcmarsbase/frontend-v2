import { Button, HStack, Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import { UIIcons } from '@shared/ui-icons';
import { UIKit } from '@shared/ui-kit';

import { LotFilterSortByField, LotFilterSortByFieldDictionary } from './const';

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
      <UIKit.SelectSync<LotFilterSortByField>
        placeholder="Sort by"
        value="BY_ALPHABETIC"
        items={LotFilterSortByFieldDictionary.keys()}
        renderItem={(item) => LotFilterSortByFieldDictionary.get(item).title}
      />
      <Button variant="darkOutline">
        <UIIcons.Common.HotIcon />
        &nbsp; HOT!
      </Button>
    </HStack>
  );
}
