import {FC} from "react";

import {getTypeOfDealChipColors} from "@app/pages/dashboard/components";
import { Box, Heading } from '@chakra-ui/react';
import {LotFlow} from "@shared/types";


export const LotTypeChip:FC<{lotType: LotFlow.LotType}> = ({ lotType }) => {
  return (
    <Box
      textTransform="uppercase"
      padding="0.125rem 0.5rem"
      borderRadius="6.25rem"
      bg={getTypeOfDealChipColors({ lotType })}
    >
      <Heading variant="h6">{lotType}</Heading>
    </Box>
  );
};
