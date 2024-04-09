import { useBreakpointDevice } from '@app/hooks';
import { HStack, Text, Flex, Button } from '@chakra-ui/react';

export interface LotAnalyticsProps {
  onEdit: () => void,
  onDelete: () => void
}

export const LotAnalytics: React.FC<LotAnalyticsProps> = ({ onEdit, onDelete }) => {
  const { isMobile } = useBreakpointDevice();

  return (
    <HStack
      bg="dark.900"
      w="full"
      borderRadius="0.75rem"
      justifyContent="space-between"
      padding={{ base: '0.75rem', md: '1rem 1.25rem' }}
    >
      <Text fontSize="sm" whiteSpace="nowrap" color="dark.50" fontWeight="600">
        MY LOT ANALYTICS
      </Text>
      <HStack marginLeft="auto">
        <Button
          size={isMobile ? 'xs' : 'sm'}
          minW="7rem"
          variant="orange"
          onClick={onEdit}
        >
          Edit my lot
        </Button>
        <Button
          size={isMobile ? 'xs' : 'sm'}
          variant="darkOutline"
          onClick={onDelete}
        >
          Delete
        </Button>
      </HStack>
    </HStack>
  )
}
