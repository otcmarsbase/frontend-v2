import { VStack } from '@chakra-ui/react';
import { DeskGatewaySchema } from '@schema/desk-gateway';

export interface BidItemCardProps {
  bid: DeskGatewaySchema.Bid;
  onClick: () => void;
}

export const BidItemCard: React.FC<BidItemCardProps> = ({ bid, onClick }) => {
  return <VStack layerStyle="card" onClick={onClick}></VStack>;
};
