import { FC, useState } from 'react';
import { useCopyToClipboard } from 'react-use';

import { Box, Text } from '@chakra-ui/react';
import { UIIcons } from '@shared/ui-icons';
import { Tooltip } from '@shared/ui-kit';

export interface CopyButtonProps {
  value: string;
}

export const CopyButton: FC<CopyButtonProps> = ({ value }) => {
  const [, copyToClipboard] = useCopyToClipboard();
  const [tooltipIsOpen, setTooltipIsOpen] = useState(false);

  const copy = () => {
    copyToClipboard(value);
    setTooltipIsOpen(true);
  };

  return (
    <Box cursor="pointer" onClick={copy}>
      <Tooltip
        hasArrow
        closeOnPointerDown
        isOpen={tooltipIsOpen}
        onClose={() => setTooltipIsOpen(false)}
        closeDelay={500}
        placement="bottom-start"
        offset={[-10, 10]}
        label={<Text fontSize="sm">ID Copied</Text>}
      >
        <UIIcons.Common.CopyIcon color="white" />
      </Tooltip>
    </Box>
  );
};
