import {memo, useCallback} from 'react';
import {Box, Button, HStack, VStack} from '@chakra-ui/react';
import {Modal} from '@shared/ui-kit/components/Modal';
import {CloseModalIcon} from "@shared/ui-kit/icons/CloseModalIcon";

export interface PortalProps {
    portal?: any;
}

export interface FormCreatorEditorModalProps extends PortalProps {
}

export const TypeOfOfferModal: React.FC<FormCreatorEditorModalProps> = memo(
    ({portal}) => {
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
                header={
                    <HStack>
                        <VStack>
                            <Box>
                                'Choose type of offer'
                            </Box>
                            <Box>
                                Choose whether you want to buy or sell your funds
                            </Box>
                        </VStack>
                        <CloseModalIcon/>
                    </HStack>}
                onClose={onClose}
                size="2xl"
                isCentered={true}
            >
                <VStack bg={'orange'}>

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
            </Modal>
        );
    },
);
