import { useRef } from 'react';

import { HStack, Grid, Text } from '@chakra-ui/react';

import { RequiredIcon } from '../../icons';

export interface FormBlockElementProps extends React.PropsWithChildren {
  label?: string;
  grid?: { cols: number; gap?: string };
  isRequired?: boolean;
}

const defaultFormElementGrid: FormBlockElementProps['grid'] = {
  cols: 1,
  gap: '1.5rem',
};

export const FormBlockElement = ({
  isRequired,
  label,
  children,
  grid: formGrid = defaultFormElementGrid,
}: FormBlockElementProps) => {
  const ref = useRef<HTMLDivElement>(null);

  const grid = {
    ...defaultFormElementGrid,
    ...formGrid,
  };

  const onTextClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const input = Array.from(ref.current.querySelectorAll('input')).filter(
      (elem) => !elem.value,
    )[0];
    if (input) input.focus();
    else ref.current.querySelector('input')?.focus();
  };

  return (
    <HStack width="full" justifyContent="space-between">
      <HStack flexShrink="0" alignSelf="flex-start" mt="0.75rem">
        <Text cursor="default" onClick={onTextClick}>
          {label}
        </Text>
        {isRequired && <RequiredIcon />}
      </HStack>
      <Grid
        maxW="33.5rem"
        width="full"
        templateColumns={`repeat(${grid.cols}, 1fr)`}
        gridGap={grid.gap}
        alignItems="center"
        ref={ref}
      >
        {children}
      </Grid>
    </HStack>
  );
};
