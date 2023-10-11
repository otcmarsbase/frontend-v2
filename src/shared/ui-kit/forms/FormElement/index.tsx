import { useRef } from 'react';

import { HStack, Text, Box, SimpleGrid, Tooltip, SimpleGridProps } from '@chakra-ui/react';
import { UIIcons } from '@shared/ui-icons';

export interface FormElementProps extends React.PropsWithChildren<SimpleGridProps> {
  label: string;
  isRequired?: boolean;
  info?: string;
}

export const FormElement: React.FC<FormElementProps> = ({ label, info, isRequired = true, children, ...gridProps }) => {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <SimpleGrid gridTemplateColumns="10rem 2fr" gridColumnGap="3rem" w="full" {...gridProps}>
      <HStack gap="0.25rem" alignSelf="start" mt="0.7rem">
        <Text fontSize="md" color="white" cursor="default">
          {label}
        </Text>
        {isRequired && <UIIcons.Common.RequiredIcon />}
        {info ? (
          <Tooltip hasArrow label={info}>
            <UIIcons.Common.InfoIcon color="dark.50" />
          </Tooltip>
        ) : null}
      </HStack>

      <Box ref={ref}>{children}</Box>
    </SimpleGrid>
  );
};
