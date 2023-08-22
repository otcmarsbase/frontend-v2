import { TagProps, Tag } from '@chakra-ui/react';
import { Resource } from '@schema/api-gateway';

export interface DealTypeProps extends Omit<TagProps, 'variant' | 'invert'> {
  value: Resource.Common.TradeDirection;
  invert?: boolean;
}

export const DealType: React.FC<DealTypeProps> = ({
  value,
  invert,
  ...props
}) => {
  return (
    <Tag
      variant="petal"
      bg={
        value === 'BUY' ? 'rgba(52, 168, 83, 0.30)' : 'rgba(232, 42, 54, 0.30)'
      }
      color={value === 'BUY' ? '#34A853' : '#E82A36'}
      padding={'0.1rem 1rem'}
      borderRadius={invert ? '0rem 0.75rem' : '0.75rem 0rem'}
      textTransform="uppercase"
      fontSize="sm"
      fontWeight={600}
      {...props}
    >
      {value}
    </Tag>
  );
};
