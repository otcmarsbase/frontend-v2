import { useEffect, useState } from 'react';

import { HStack, Progress, VStack, Text } from '@chakra-ui/react';

export const ProgressBar = ({ title, currentAmount, totalAmount }) => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    let step = currentAmount / 10;
    let timeout = setTimeout(() => {
      if (value <= currentAmount) {
        console.log(value, currentAmount);
        setValue((prev) => (prev += step));
      }
    }, 0);
    return () => clearTimeout(timeout);
  }, [currentAmount, value]);

  return (
    <VStack w="100%" gap="0.31rem">
      <HStack
        w="100%"
        justifyContent="space-between"
        onClick={() => console.log('value', value)}
      >
        <Text fontSize="sm" variant="h5" color="dark.50" fontWeight="600">
          {title}
        </Text>
        <Text
          fontSize="sm"
          display="flex"
          variant="h5"
          fontWeight="500"
          color="white"
        >
          {currentAmount.toLocaleString('en-US', { maximumFractionDigits: 0 })}
          <Text fontSize="sm" as="span" color="dark.50">
            $
          </Text>
          &nbsp; / &nbsp;
          {totalAmount.toLocaleString('en-US', { maximumFractionDigits: 0 })}
          <Text fontSize="sm" as="span" color="dark.50">
            $
          </Text>
        </Text>
      </HStack>
      <Progress h="1rem" w="100%" value={value} max={totalAmount} />
    </VStack>
  );
};
