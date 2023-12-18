import { useRef } from 'react';

import { HStack, Text, Box, SimpleGrid, SimpleGridProps } from '@chakra-ui/react';
import { UIIcons } from '@shared/ui-icons';
import { SuggestionIcon, Tooltip } from '@shared/ui-kit';

export interface FormElementProps extends React.PropsWithChildren<SimpleGridProps> {
  label: string;
  isRequired?: boolean;
  info?: string;
}

export const FormElement: React.FC<FormElementProps> = ({ label, info, isRequired = true, children, ...gridProps }) => {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <SimpleGrid gridTemplateColumns={{ base: '1fr', md: '10rem 2fr' }} gridColumnGap="3rem" w="full" {...gridProps}>
      <HStack gap="0.25rem" alignSelf="start" mt="0.7rem" w="full">
        <Text fontSize="md" color="white" cursor="default">
          {label}
        </Text>
        {isRequired && <UIIcons.Common.RequiredIcon fontSize="0.6rem" />}
        {info ? (
          <Tooltip label={info}>
            <SuggestionIcon />
          </Tooltip>
        ) : null}
      </HStack>

      <Box ref={ref}>{children}</Box>
    </SimpleGrid>
  );
};
