import {useState, useEffect} from 'react';
import {Box, Container, defineStyle, Heading, HStack, Text} from "@chakra-ui/react";

interface iCountdownProps {
    endDate: Date
}

interface iCountdownState {
    days: string,
    hours: string
    minutes: string,
    seconds: string,
}

export const Countdown = ({endDate}: iCountdownProps) => {
    const [state, setState] = useState<iCountdownState>({
        days: '0',
        hours: '00',
        minutes: '00',
        seconds: '00',
    });

    useEffect(() => {
        const intervalID = setInterval(() => setNewTime(), 1000);
        return () => clearInterval(intervalID)
    }, []);

    const setNewTime = () => {
        const countdownDate = endDate.getTime()
        if (countdownDate) {
            const currentTime = new Date().getTime();

            const distanceToDate = endDate.getTime() - currentTime;

            let days = (Math.floor(distanceToDate / (1000 * 60 * 60 * 24))).toString();
            let hours = (Math.floor((distanceToDate % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))).toString();
            let minutes = (Math.floor((distanceToDate % (1000 * 60 * 60)) / (1000 * 60))).toString();
            let seconds = (Math.floor((distanceToDate % (1000 * 60)) / 1000)).toString();

            const numbersToAddZeroTo = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
//todo check if 01:00 for exmple
            days = `${days}`;
            if (numbersToAddZeroTo.includes(hours)) {
                hours = `0${hours}`;
            } else if (numbersToAddZeroTo.includes(minutes)) {
                minutes = `0${minutes}`;
            } else if (numbersToAddZeroTo.includes(seconds)) {
                seconds = `0${seconds}`;
            }

            setState({days: days, hours: hours, minutes, seconds});
        }
    };

    return (
        <HStack gap='0.19rem' h='2rem' justifyContent='end'>
            {state.days !== '0'
                ?
                <>
                    {state.days.split('').map(num => {
                        return <Box
                            padding='0.25rem'
                            bg='dark.800'
                            display='flex'
                            justifyContent='center'
                            alignItems='center'
                            height='100%'
                            minWidth='1.3625rem'
                        >
                            <Heading variant='h2' fontWeight='700' lineHeight='1.5rem'>{num || '00'}</Heading>
                        </Box>
                    })}
                    <Box
                        padding='0.25rem'
                        bg='dark.800'
                        display='flex'
                        justifyContent='center'
                        alignItems='center'
                        height='100%'
                        maxWidth='0.9375rem'
                    >
                        <Heading variant='h2' fontWeight='700' lineHeight='1.5rem' color='orange.400'>:</Heading>
                    </Box>
                </>
                :
                null
            }
            {state.hours.split('').map(num => {
                return <Box
                    padding='0.25rem'
                    bg='dark.800'
                    display='flex'
                    justifyContent='center'
                    alignItems='center'
                    height='100%'
                    minWidth='1.3625rem'
                >
                    <Heading variant='h2' fontWeight='700' lineHeight='1.5rem'>{num || '00'}</Heading>
                </Box>
            })}
            <Box
                padding='0.25rem'
                bg='dark.800'
                display='flex'
                justifyContent='center'
                alignItems='center'
                height='100%'
                maxWidth='0.9375rem'
            >
                <Heading variant='h2' fontWeight='700' lineHeight='1.5rem' color='orange.400'>:</Heading>
            </Box>
            {state.minutes.split('').map(num => {
                return <Box
                    padding='0.25rem'
                    bg='dark.800'
                    display='flex'
                    justifyContent='center'
                    alignItems='center'
                    height='100%'
                    minWidth='1.3625rem'
                >
                    <Heading variant='h2' fontWeight='700' lineHeight='1.5rem'>{num || '00'}</Heading>
                </Box>
            })}
            <Box
                padding='0.25rem'
                bg='dark.800'
                display='flex'
                justifyContent='center'
                alignItems='center'
                height='100%'
                maxWidth='0.9375rem'
            >
                <Heading variant='h2' fontWeight='700' lineHeight='1.5rem' color='orange.400'>:</Heading>
            </Box>
            {state.seconds.split('').map(num => {
                return <Box
                    padding='0.25rem'
                    bg='dark.800'
                    display='flex'
                    justifyContent='center'
                    alignItems='center'
                    height='100%'
                    minWidth='1.3625rem'
                >
                    <Heading variant='h2' fontWeight='700' lineHeight='1.5rem'>{num || '00'}</Heading>
                </Box>
            })}
        </HStack>
    );
};


