import { FC, useMemo, useState, MouseEvent } from 'react';

import { useAuth, useRpcSchemaClient } from '@app/components';
import { useToastOuterCallback } from '@app/hooks';
import { Button, HStack } from '@chakra-ui/react';
import { Resource } from '@schema/desk-gateway';

export interface OfferMakerActions {
  bid: Resource.Bid.Bid;
  isOfferMaker: boolean;
  refreshBids: () => Promise<void>;
}

export const OfferMakerActions: FC<OfferMakerActions> = ({ bid, isOfferMaker, refreshBids }) => {
  const rpcSchema = useRpcSchemaClient();
  const { account } = useAuth();
  const toastCallback = useToastOuterCallback({ showWhenOk: true });
  const [acceptIsLoading, setAcceptIsLoading] = useState(false);
  const [rejectIsLoading, setRejectIsLoading] = useState(false);

  const canAccept = useMemo(() => isOfferMaker && bid.status === 'ACTIVE', [isOfferMaker, bid.status]);
  const canReject = useMemo(
    () => isOfferMaker && ['ON_MODERATION', 'ACTIVE'].includes(bid.status),
    [isOfferMaker, bid.status],
  );

  const accept = (e: MouseEvent) => {
    e.stopPropagation();

    toastCallback(async () => {
      try {
        setAcceptIsLoading(true);
        await rpcSchema.send('bid.accept', { id: bid.id, userId: account.id });
        refreshBids();
      } catch (e) {
        throw e;
      } finally {
        setAcceptIsLoading(false);
      }
    });
  };

  const reject = (e: MouseEvent) => {
    e.stopPropagation();

    toastCallback(async () => {
      try {
        setRejectIsLoading(true);
        await rpcSchema.send('bid.reject', { id: bid.id, reason: 'reason' });
        refreshBids();
      } catch (e) {
        throw e;
      } finally {
        setRejectIsLoading(false);
      }
    });
  };

  if (!(canAccept || canReject)) return <></>;

  return (
    <HStack
      position="absolute"
      inset="0"
      opacity="0"
      transition="opacity 0.4s"
      justifyContent="flex-end"
      bgGradient="linear-gradient(270deg, #0B0B0B 21.4%, rgba(0, 0, 0, 0) 87.13%);"
      _groupHover={{ opacity: 1 }}
      px="1rem"
    >
      {canAccept && (
        <Button
          size="xs"
          variant="orange"
          onClickCapture={accept}
          isLoading={acceptIsLoading}
          isDisabled={rejectIsLoading}
        >
          Accept
        </Button>
      )}
      {canReject && (
        <Button
          size="xs"
          variant="darkOutline"
          onClickCapture={reject}
          isLoading={rejectIsLoading}
          isDisabled={acceptIsLoading}
        >
          Reject
        </Button>
      )}
    </HStack>
  );
};
