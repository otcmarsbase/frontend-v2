import { useCallback } from 'react';
import { useLocation } from 'react-use';

import { useRpcSchemaClient } from '@app/components';
import { Text } from '@chakra-ui/react';
import { PortalProps } from '@packages/berish-react-portal';
import { UIKit } from '@shared/ui-kit';

import { FeedbackForm } from './FeedbackForm';
import { FeedbackCreateModel } from './schema';

export interface FeedbackModalProps extends PortalProps<void> {}

export const FeedbackModal = ({ portal }: FeedbackModalProps) => {
  const location = useLocation();
  const rpcSchema = useRpcSchemaClient();

  const createFeedback = useCallback(
    async (payload: FeedbackCreateModel) => {
      await rpcSchema.send('feedback.create', {
        text: payload.text,
        page: `${location.host}${location.pathname}`,
        rating: payload.rating,
      });
      portal.resolve();
    },
    [location.host, location.pathname, portal, rpcSchema],
  );

  return (
    <UIKit.Modal
      title={
        <Text fontSize="2md" color="white" fontFamily="promo">
          Feedback
        </Text>
      }
      onClose={() => portal.resolve()}
      size="2xl"
      isCentered
      variant="brand"
      maxW="30rem"
    >
      <FeedbackForm onSubmit={createFeedback} />
    </UIKit.Modal>
  );
};
