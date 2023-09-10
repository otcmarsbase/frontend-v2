import { useCallback } from 'react';

import { Stack, VStack } from '@chakra-ui/react';

import { Step } from './step';

export interface StepsProps<T> {
  value?: T;
  items?: T[];
  renderKey?: (item: T, index: number) => React.Key;
  renderTitle?: (item: T, index: number) => React.ReactNode;
  equalsItems?: (item1: T, item2: T) => boolean;
  canClickItem?: (item: T) => boolean;
  onChange?: (item: T) => void;
}

export function Steps<T>({
  items = [],
  value,
  renderKey = defaultRenderKey,
  renderTitle = defaultRenderTitle,
  equalsItems = defaultEqualsItems,
  canClickItem = defaultCanClickItem,
  onChange,
}: StepsProps<T>) {
  const findIndexValue = useCallback(
    (value: T) => items.findIndex((item) => equalsItems(item, value)),
    [equalsItems, items],
  );

  const handleChange = useCallback(
    (item: T) => {
      if (!canClickItem(item)) return void 0;
      onChange?.(item);
    },
    [onChange, canClickItem],
  );

  return (
    <VStack alignItems="start" spacing="0" w="full" gap="0.15rem">
      {items.map((item, index) => (
        <Step
          index={index}
          key={renderKey(item, index)}
          canClick={canClickItem(item)}
          onClick={() => handleChange(item)}
          title={renderTitle(item, index)}
          isActive={equalsItems(value, item)}
          isCompleted={findIndexValue(value) > index}
          isFirstStep={index === 0}
          isLastStep={items.length === index + 1}
        />
      ))}
    </VStack>
  );
}

const defaultRenderKey: StepsProps<any>['renderKey'] = (_, index) => index;
const defaultRenderTitle: StepsProps<any>['renderTitle'] = (item) => String(item);
const defaultEqualsItems: StepsProps<any>['equalsItems'] = (item1, item2) => Object.is(item1, item2);
const defaultCanClickItem: StepsProps<any>['canClickItem'] = () => true;
