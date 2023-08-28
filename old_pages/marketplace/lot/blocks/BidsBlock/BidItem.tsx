import { HStack } from '@chakra-ui/react';
import { Resource } from '@schema/api-gateway';

export interface BidItemProps {
  bid: Resource.Bid.Bid;
}

export function BidItem({ bid }: BidItemProps) {
  return <HStack>{bid.id}</HStack>;
}
