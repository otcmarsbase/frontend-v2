import {Box, Button, Grid, GridItem, HStack, Input, VStack} from "@chakra-ui/react";
import {observer} from "mobx-react-lite";
import {ICreateOffer} from "@app/pages/offers/create/types";
import {RawCheckbox} from "@shared/ui-kit/components/RawCheckbox/RawCheckbox";
import {DashboardEditBtn} from "@app/pages/dashboard/assets/DashboardEditBtn";

const DashboardItemSum = () => {
    return (
        <VStack>
            <VStack>
                <HStack>
                    <Box>
                        #32679
                    </Box>
                    <Box>
                        HOTI
                    </Box>
                </HStack>
                <HStack>
                    <Box>
                        icn
                    </Box>
                    <Box>
                        USDT
                    </Box>
                </HStack>
                <HStack>
                    <Box>
                        *
                    </Box>
                    <Box>
                        Active
                    </Box>
                </HStack>
            </VStack>
        </VStack>
    )
}

const DashboardItemOfferData = () => {
    return (
        <Grid templateColumns='repeat(4, 1fr)' templateRows='repeat(2, 1fr)' gap={6}>
            <GridItem w='100%' h='56px' bg='blue.500'>
                <VStack>
                    <Box>
                        LotType
                    </Box>
                    <Box>
                        Token Warrant
                    </Box>
                </VStack>


            </GridItem>

            <GridItem w='100%' h='56px' bg='blue.500'>
                <VStack>
                    <Box>
                        Published at
                    </Box>
                    <Box>
                        24/12/2023
                    </Box>
                </VStack>


            </GridItem>
            <GridItem w='100%' h='56px' bg='blue.500'>
                <VStack>
                    <Box>
                        FDV
                    </Box>
                    <Box>
                        124,783 $
                    </Box>
                </VStack>


            </GridItem>
            <GridItem w='100%' h='56px' bg='blue.500'>
                <VStack>
                    <Box>
                        Lot value
                    </Box>
                    <Box>
                        82,763USDC
                    </Box>
                </VStack>


            </GridItem>
            <GridItem w='100%' h='56px' bg='blue.500'>
                <VStack>
                    <Box>
                        Vertical
                    </Box>
                    <Box>
                        some data
                    </Box>
                </VStack>


            </GridItem>
            <GridItem w='100%' h='56px' bg='blue.500'>
                <VStack>
                    <Box>
                        Finished at
                    </Box>
                    <Box>
                        24/12/2023
                    </Box>
                </VStack>


            </GridItem>
            <GridItem w='100%' h='56px' bg='blue.500'>
                <VStack>
                    <Box>
                        Total Bids Place
                    </Box>
                    <Box>
                        100
                    </Box>
                </VStack>


            </GridItem>


        </Grid>
    )
}
const DashboardItem = () => {
    return (
        <VStack border={'2px solid orange'}>
            <Button>
                Sell\Buy
            </Button>

            <HStack>
                <DashboardItemSum/>
                <DashboardItemOfferData/>
                <DashboardEditBtn/>
            </HStack>
        </VStack>
    )
}
export const Dashboard = observer(({typeOfDeal}: ICreateOffer) => {


    function handleChangeFilter() {

    }

    return (
        <VStack
            bg={'skyblue'}
            padding={'50px'}
        >
            <Box>
                Dashboard
            </Box>
            <HStack>
                <HStack>
                    <Button>
                        My Offers
                    </Button>
                    <Button>
                        My Bid
                    </Button>
                    <Input placeholder={'Search'}/>
                </HStack>

                <HStack>
                    <RawCheckbox value={true} label={'All'} id={'all'} handleChange={handleChangeFilter}/>
                    <RawCheckbox value={true} label={'Active'} id={'active'} handleChange={handleChangeFilter}/>
                    <RawCheckbox value={true} label={'Moderated'} id={'moderated'} handleChange={handleChangeFilter}/>
                </HStack>
            </HStack>
            <DashboardItem/>
        </VStack>
    )
})


