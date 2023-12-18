import { VStack } from '@chakra-ui/react';
import { Resource } from '@schema/desk-gateway';

export interface BidItemCardProps {
  bid: Resource.Bid.Bid;
  onClick: () => void;
}

export const BidItemCard: React.FC<BidItemCardProps> = ({ bid, onClick }) => {
  return <VStack layerStyle="card" onClick={onClick}></VStack>;
};
