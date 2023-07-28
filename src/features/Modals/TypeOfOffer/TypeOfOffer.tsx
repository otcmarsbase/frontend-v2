import { memo, useCallback, useRef } from 'react';
import { Box, Button, Stack, VStack } from '@chakra-ui/react';
import { Modal } from '@shared/ui-kit/components/Modal';

export interface PortalProps {
  portal?: any;
}

export interface FormCreatorEditorModalProps extends PortalProps {}

export const TypeOfOffer: React.FC<FormCreatorEditorModalProps> = memo(
  ({ portal }) => {
    const onClose = useCallback(() => {
      if (portal && portal.resolve) portal.resolve(null);
    }, [portal]);

    const onSubmit = useCallback(
      (field) => {
        if (portal && portal.resolve) portal.resolve(field);
      },
      [portal],
    );

    return (
      <Modal
        header={'Choose type of offer'}
        onClose={onClose}
        size="2xl"
        footer={
          <VStack>
            <Box>Choose whether you want to buy or sell your funds</Box>
            <Button
              flex={1}
              variant="primary"
              id={'Buy'}
              onClick={() => onSubmit('Buy')}
            >
              Offer to buy
            </Button>
            <Button flex={1} id={'Sell'} onClick={() => onSubmit('Sell')}>
              Offer to sell
            </Button>
          </VStack>
        }
      >
        aaaa
      </Modal>
    );
  },
);
