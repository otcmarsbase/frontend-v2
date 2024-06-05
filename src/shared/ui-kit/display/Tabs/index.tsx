import { useMemo, useCallback } from 'react';

import {
  Tabs as ChakraTabs,
  TabList as ChakraTabList,
  TabPanels as ChakraTabPanels,
  TabPanel as ChakraTabPanel,
  Tab as ChakraTab,
  TabsProps as ChakraTabsProps,
  Box,
} from '@chakra-ui/react';

export interface TabsProps<T> extends Omit<ChakraTabsProps, 'index' | 'onChange' | 'children'> {
  items: T[];
  renderKey?: (item: T, index: number, data: T[]) => React.Key;
  renderTab: (item: T, index: number, data: T[]) => React.ReactNode;
  children?: (item: T, index: number, data: T[]) => React.ReactNode;
  valueEquals?: (item1: T, item2: T) => boolean;
  rightElement?: React.ReactNode;
  value?: T;
  onChange?: (item: T, index: number) => void;
}

export function Tabs<T>({
  items = [],
  renderTab,
  value,
  renderKey = (value, index) => index,
  onChange,
  valueEquals = (item1, item2) => Object.is(item1, item2),
  children,
  rightElement,
  ...props
}: TabsProps<T>) {
  const index = useMemo(() => items.findIndex((m) => valueEquals(m, value)), [valueEquals, value, items]);
  const onChangeCallback = useCallback((index: number) => onChange && onChange(items[index], index), [items, onChange]);

  return (
    <ChakraTabs index={index} onChange={onChangeCallback} {...props}>
      <ChakraTabList alignItems="center">
        {items.map((item, index, arr) => (
          <ChakraTab key={renderKey(item, index, arr)}>{renderTab(item, index, arr)}</ChakraTab>
        ))}
        {rightElement && (
          <Box marginLeft="auto" pb={1}>
            {rightElement}
          </Box>
        )}
      </ChakraTabList>
      {children && (
        <ChakraTabPanels>
          {items.map((item, index, arr) => (
            <ChakraTabPanel key={renderKey(item, index, arr)}>{children(item, index, arr)}</ChakraTabPanel>
          ))}
        </ChakraTabPanels>
      )}
    </ChakraTabs>
  );
}
