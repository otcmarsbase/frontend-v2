import { LOT_VIEW_MAIN_CHIP_FIELDS } from '@app/pages/dashboard/lot/consts';
import { Box, Heading, HStack, Tooltip } from '@chakra-ui/react';
import { TooltipIcon } from '@shared/assets/TooltipIcon';
import { format } from 'date-fns';

export const RoundInfoItem = ({ field }) => {
  return (
    <HStack justifyContent={'space-between'}>
      <HStack alignItems="center" opacity="0.6">
        <Heading variant="h5" fontWeight="500">
          {LOT_VIEW_MAIN_CHIP_FIELDS[field.id]}
        </Heading>
        <Tooltip label="Hey, I'm here!" aria-label="A tooltip">
          <TooltipIcon w="1rem" h="1rem" />
        </Tooltip>
      </HStack>
      {formatView(field)}
    </HStack>
  );
};

const formatView = ({ id, value }) => {
  switch (id) {
    case 'investmentRound':
      return (
        <Heading
          variant="h5"
          padding="0 0.5rem"
          fontWeight="842"
          borderRadius="6.25rem"
          bg="orange.400"
        >
          {value}
        </Heading>
      );
    case 'estimateTGEdate':
      return (
        <Heading variant="h5" fontWeight="842">
          {format(value, 'dd.MM.yyyy')}
        </Heading>
      );
    case 'vestingCalendar':
    case 'lockupPeriod':
      return (
        <HStack>
          <Heading variant="h5" fontWeight="842">
            {value}
          </Heading>
          <Box color="dark.50">months</Box>
        </HStack>
      );
    case 'roundFDV':
    case 'roundTokenPrice':
      return (
        <HStack>
          <Heading variant="h5" fontWeight="842">
            {value.toLocaleString('en-US', { maximumFractionDigits: 0 })}
          </Heading>
          <Box color="dark.50">$</Box>
        </HStack>
      );

    default:
      return;
  }
};
