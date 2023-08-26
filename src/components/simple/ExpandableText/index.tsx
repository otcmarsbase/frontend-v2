import React, { forwardRef, useState } from 'react';

import type { BoxProps } from '@chakra-ui/react';
import { Box, Button, Text } from '@chakra-ui/react';

interface Props extends BoxProps {
  children: React.ReactNode;
  noOfLines: number;
}

export const ExpandableText = forwardRef<HTMLDivElement, Props>(
  ({ children, noOfLines, ...boxProps }, ref) => {
    const [expandedCount, setExpandedCount] = useState<number | undefined>(
      noOfLines,
    );
    const [isClicked, setIsClicked] = useState(false);
    const handleToggle = () => {
      setIsClicked(true);
      setExpandedCount(expandedCount ? undefined : noOfLines);
    };

    const inputRef = React.useRef<HTMLInputElement>(null);

    const isTextClamped =
      (inputRef.current?.scrollHeight as number) >
        (inputRef.current?.clientHeight as number) || isClicked;

    return (
      <Box ref={ref} {...boxProps}>
        <Text fontSize="sm" ref={inputRef} noOfLines={expandedCount}>
          {children}
        </Text>
        <Button
          display={isTextClamped ? 'block' : 'none'}
          size="sm"
          variant="link"
          onClick={handleToggle}
        >
          <Text color="orange.400" textDecorationLine="underline">
            {!expandedCount ? 'Show less' : 'Read all'}
          </Text>
        </Button>
      </Box>
    );
  },
);

ExpandableText.displayName = 'ExpandableText';
