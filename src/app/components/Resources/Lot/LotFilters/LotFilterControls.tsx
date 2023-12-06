import { Button, HStack, Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import { UIIcons } from '@shared/ui-icons';

export interface LotFilterControlsProps {
  toggleButton?: {
    isSelected: boolean;
    onSelect?: (isSelected: boolean) => any;
  };
  search?: string;
  onChangeSearch?: (value: string) => any;
}

export function LotFilterControls({ toggleButton, search, onChangeSearch }: LotFilterControlsProps) {
  return (
    <HStack flexDirection={{ base: 'row-reverse', md: 'row' }}>
      <Button
        variant={toggleButton?.isSelected ? 'red' : 'darkOutline'}
        borderColor={toggleButton?.isSelected ? 'red.200' : 'dark.200'}
        leftIcon={<UIIcons.Common.FilterIcon />}
        onClick={() => toggleButton?.onSelect?.(!toggleButton?.isSelected)}
      >
        Filters
      </Button>
      <InputGroup flexShrink="1">
        <InputLeftElement>
          <UIIcons.Common.SearchIcon />
        </InputLeftElement>
        <Input placeholder="Search" value={search} onChange={(e) => onChangeSearch(e.target.value)} />
      </InputGroup>
      {/* <UIKit.SelectSync<LotFilterSortByField>
        placeholder="Sort by"
        value="BY_ALPHABETIC"
        items={LotFilterSortByFieldDictionary.keys()}
        renderItem={(item) => LotFilterSortByFieldDictionary.get(item).title}
      /> */}
    </HStack>
  );
}
