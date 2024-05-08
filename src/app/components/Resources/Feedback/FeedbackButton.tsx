import { ModalController } from '@app/logic';
import { Button, ButtonProps, Text } from '@chakra-ui/react';

import { FeedbackIcon } from '../../../../shared/ui-icons/common/FeedbackIcon';

import { FeedbackModal } from './FeedbackModal';

export interface FeedbackButtonProps extends ButtonProps {}

export const FeedbackButton = ({ ...rest }: FeedbackButtonProps) => {
  const createModal = () => {
    ModalController.create(FeedbackModal, {})
  }

  return (
    <Button
      position="fixed"
      bottom="0"
      left="0.5rem"
      paddingY="0.5rem"
      paddingX="0.75rem"
      borderRadius="0.75rem 0.75rem 0 0"
      borderBottom="none"
      alignItems="center"
      cursor="pointer"
      size="sm"
      variant="orange"
      _hover={{
        background: 'orange.500'
      }}
      onClick={createModal}
      {...rest}
    >
      <FeedbackIcon marginRight="0.5rem"/>
      <Text fontSize="xs">
        Feedback about the site
      </Text>
    </Button>
  )
}
