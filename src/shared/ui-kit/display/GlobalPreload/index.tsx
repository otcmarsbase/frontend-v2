import { Box, chakra, shouldForwardProp } from '@chakra-ui/react';
import { Logo } from '@shared/ui-kit';
import { motion, isValidMotionProp } from 'framer-motion';

import { Loader } from './Loader';

export interface GlobalPreloadProps {}

export const GlobalPreload: React.FC<GlobalPreloadProps> = () => {
  return (
    <Box display="grid" alignItems="center" justifyContent="center" position="fixed" inset="0" zIndex="100">
      <MotionBox
        width="16rem"
        height="16rem"
        animate={{ scale: [0.75, 1, 0.75, 1, 0.75], rotate: [90, 450] }}
        // @ts-ignore
        transition={{
          scale: { duration: 6, repeat: Infinity, ease: 'linear' },
          rotate: { duration: 3, repeat: Infinity, ease: 'linear' },
        }}
        gridColumnStart="1"
        gridRowStart="1"
      >
        <Loader w="full" h="full" color="orange.500" />
      </MotionBox>
      <Logo width="16rem" gridColumnStart="1" gridRowStart="1" position="relative" zIndex="10" />
    </Box>
  );
};

const MotionBox = chakra(motion.div, {
  shouldForwardProp: (prop) => isValidMotionProp(prop) || shouldForwardProp(prop),
});
