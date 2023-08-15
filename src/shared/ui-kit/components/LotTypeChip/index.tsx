import {Box, Heading} from "@chakra-ui/react";
import {LotFlow} from "@shared/types";

export const getTypeOfDealChipColors = ({lotType}) => {
    switch (lotType) {
        case LotFlow.LotType.SAFE:
            return '#EF5DA8'
        case LotFlow.LotType.SAFT:
            return "#5D5FEF"
        case LotFlow.LotType.TOKEN_WARRANT:
            return "#FF5B37"
        default:
            return '#EF5DA8'
    }
}

//todo props
export const LotTypeChip = ({lotType, headingProps}) => {
    return (
        <Box
            textTransform='uppercase'
            padding='0.125rem 0.5rem'
            borderRadius='6.25rem'
            bg={getTypeOfDealChipColors({lotType})}
        >
            <Heading {...headingProps}>
                {lotType}
            </Heading>

        </Box>
    )
}
