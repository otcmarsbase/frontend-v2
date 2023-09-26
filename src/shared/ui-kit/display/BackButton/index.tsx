import { Button, ButtonProps } from '@chakra-ui/react';
import { UIIcons } from '@shared/ui-icons';

export interface BackButtonProps extends ButtonProps {}

export const BackButton: React.FC<BackButtonProps> = ({ ...buttonProps }) => {
  return <Button leftIcon={<UIIcons.Common.ArrowLeft />} variant="ghost" color="dark.50" {...buttonProps} />;
};
