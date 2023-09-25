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
        w="12rem"
        border="0.125rem solid"
        borderColor={toggleButton?.isSelected ? 'red.200' : 'dark.200'}
        leftIcon={<UIIcons.Common.FilterIcon />}
        bg={toggleButton?.isSelected && 'red.300'}
        color={toggleButton?.isSelected && 'white'}
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
    </HStack>
  );
}
