import {
  Grid,
  GridItem,
  HStack,
  StackProps,
  Text,
  VStack,
} from '@chakra-ui/react';
import {
  Icons,
  HotIcon,
  LotStatus,
  KebabMenuIcon,
  Dropdown,
} from '@shared/ui-kit';

export type LotOfferType = 'buy' | 'sell';

export interface OfferRowProps extends StackProps {
  lotId: number;
  lotName: string;
  type: 'buy' | 'sell';
  isHot: boolean;
  lotIconName: keyof typeof Icons.ProjectsIcons;
  status: React.ReactElement<typeof LotStatus>;
  fields: { label: string; value: React.ReactNode }[];
}

const listItemTexts = {
  type: {
    buy: 'Buy',
    sell: 'Sell',
  } as Record<LotOfferType, string>,
};

export const OfferRow: React.FC<OfferRowProps> = ({
  lotId,
  lotName,
  isHot,
  type,
  lotIconName,
  status,
  fields,
  ...stackProps
}) => {
  const LotIcon = Icons[lotIconName];

  return (
    <HStack
      bg="dark.900"
      borderRadius="0.75rem"
      width="full"
      padding="1.5rem"
      paddingRight="6rem"
      justifyContent="space-between"
      position="relative"
      transition="all 0.3s"
      cursor="pointer"
      _hover={{
        bg: 'dark.800',
      }}
      alignItems="start"
      {...stackProps}
    >
      <Text
        // TODO: Уточнить у дизайнеров почему цвета не из той палитры
        bg={
          type === 'buy' ? 'rgba(52, 168, 83, 0.40)' : 'rgba(232, 42, 54, 0.30)'
        }
        padding="0.1rem 1rem"
        borderRadius="0.75rem 0rem"
        color={type === 'buy' ? '#34A853' : '#E82A36'}
        textTransform="uppercase"
        fontSize="sm"
        fontWeight={600}
        position="absolute"
        left={0}
        top={0}
      >
        {listItemTexts.type[type]}
      </Text>
      <VStack gap="1rem" marginTop="1rem" alignItems="start">
        <HStack gap="0.7rem">
          <Text color="dark.200">#{lotId}</Text>
          {isHot && (
            <HStack
              borderRadius="0.25rem"
              bg="rgba(207, 79, 41, 0.40)"
              padding="0.12rem 0.5rem"
              alignItems="center"
              gap="0.12rem"
              justifyContent="center"
            >
              <Text fontWeight="semibold" fontSize="2xs">
                HOT!
              </Text>
              <HotIcon w="0.75rem" h="0.75rem" />
            </HStack>
          )}
        </HStack>
        <HStack gap="0.5rem" alignItems="center" my="1.25rem">
          <LotIcon w="1.875rem" h="1.875rem" />
          <Text fontWeight="semibold">{lotName}</Text>
        </HStack>
        {status}
      </VStack>
      <HStack>
        <Grid templateColumns="repeat(4, 13rem)" gridRowGap="1.5rem">
          {fields.map((field, index) => (
            <GridItem
              w="100%"
              key={index}
              borderBottom="1px solid"
              borderColor="dark.400"
              marginRight="8rem"
              pb="0.75rem"
              __css={{
                [`:nth-last-child(-n+3)`]: {
                  marginRight: 'none',
                  borderColor: 'transparent',
                },
              }}
            >
              <VStack alignItems="start" maxW="8rem" w="full">
                <Text fontWeight={600} color="dark.50">
                  {field.label}
                </Text>
                <Text fontWeight={600}>{field.value}</Text>
              </VStack>
            </GridItem>
          ))}
        </Grid>
        <Dropdown
          items={[
            { children: 'Edit' },
            { children: 'Duplicate' },
            { children: 'Delete' },
          ]}
        >
          <KebabMenuIcon
            position="absolute"
            top="1.5rem"
            right="2rem"
            w="2rem"
            color="dark.200"
            transition="all 0.3s"
            _hover={{ color: 'orange.500' }}
            h="2rem"
          />
        </Dropdown>
      </HStack>
    </HStack>
  );
};
