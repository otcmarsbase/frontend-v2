import {useEffect, useState} from "react";
import {Box, Heading, HStack, Progress, VStack} from "@chakra-ui/react";

export const ProgressBar = ({title, currentAmount, totalAmount}) => {

    const [value, setValue] = useState(0);

    useEffect(() => {
        let step = currentAmount / 10;
        let timeout = setTimeout(() => {
            if (value <= currentAmount) {
                console.log(value, currentAmount)
                setValue(prev=> prev += step)
            }

        }, 0);
        return () => clearTimeout(timeout)
    }, [value])

    return (
        <VStack w='100%' gap='0.31rem'>
            <HStack w='100%' justifyContent='space-between' onClick={()=>console.log('value',value)}>
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
            <Progress h='1rem' w='100%' value={value} max={totalAmount}/>
        </VStack>

    )
}
