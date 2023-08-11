import {Box, Heading, HStack, Progress, VStack} from "@chakra-ui/react";

export const ProgressBar = ({title, currentAmount, totalAmount}) => {
    return (
        <VStack w='100%' gap='0.31rem'>
            <HStack w='100%' justifyContent='space-between'>
                <Heading
                    variant='h5'
                    color='dark.50'
                    fontWeight='600'
                >
                    {title}
                </Heading>
                <Heading display='flex' variant='h5' fontWeight='500' color='white'>
                    {currentAmount.toLocaleString('en-US', {maximumFractionDigits: 0})}
                    <Box color='dark.50'>$</Box>
                    &nbsp;
                    /
                    &nbsp;
                    {totalAmount.toLocaleString('en-US', {maximumFractionDigits: 0})}
                    <Box color='dark.50'>$</Box>
                </Heading>

            </HStack>
            <Progress h='1rem' w='100%' value={currentAmount} max={totalAmount}/>
        </VStack>

    )
}
