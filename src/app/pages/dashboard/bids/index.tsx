import {FC} from "react";
import {observer} from 'mobx-react-lite';
import * as Layouts from '@app/layouts';
import {AssetMock} from "@app/pages/dashboard/bids/mocks";
import {Box, Heading, HStack, SimpleGrid, Tab, TabList, TabPanel, TabPanels, Tabs, VStack} from "@chakra-ui/react";
import {ContentContainer} from "@shared/ui-kit/components/ContentContainer/ContentContainer";
import {LinksContainer} from "@shared/ui-kit/components/LinkContainer";
import {commaSeparatedNumber} from "@shared/utils";


interface IHeadingChip {
    icon: string,
    name: string,
    title: string
}

export const HeaderChip: FC<IHeadingChip> = ({icon, name, title}) => {
    return (
        <HStack w='100%' gap='1.5rem'>
            <HStack gap='0.5rem'>
                <Box>
                    {icon}
                </Box>

                <Heading variant='h2'>
                    {name}
                </Heading>
            </HStack>
            <Heading variant='h5' fontWeight='500'>
                Order analitics
            </Heading>
        </HStack>
    )
}

interface IHeaderItemChip {
    value: number
}


export const HeaderItemChip = ({param, value}) => {
    return (
        <VStack gap='0'>
            <HStack justifyContent='flex-start' w='100%'>
                <Heading variant='h5' fontWeight='500'>
                    {commaSeparatedNumber(value, 0)}
                </Heading>
                {(param === 'offersOnSell' || param === 'offersOnBuy') ? null :
                    <Heading variant='h5' fontWeight='500' color='dark.50'>$</Heading>}
            </HStack>
            <Heading variant='h5' fontWeight='600' color='dark.50'>
                {HEADER_FIELD_TITLES_BY_PARAM[param]}
            </Heading>
        </VStack>
    )
}



const HEADER_FIELD_TITLES_BY_PARAM = {
    averagePerPurchase: 'Average per purchase',
    averagBidsFDV: 'Average Bids FDV',
    averageLotFDV: 'Average Lot FDV',
    marketPrice: 'Market price',
    offersOnSell: 'Offers on sell',
    offersOnBuy: 'Offers on buy',
    lotValueOnSell: 'Lot value on sell',
    lotValueOnBuy: 'Lot value on buy'

}

export const LotsContainer = ()=>{
    return (
        <VStack>

        </VStack>
    )
}
export const MyBids: React.FC = observer(() => {
    const {icon, name, title, headerFields, description, officialLinks, verticalItems} = AssetMock;
    return (
        <VStack padding='2rem' gap='2rem'>
            <HeaderChip
                icon={icon}
                name={name}
                title={title}
            />
            <HStack w='100%' gap='2.75rem'>
                {headerFields.map(({param, value}) => <HeaderItemChip param={param} value={value}/>)}
            </HStack>
            <SimpleGrid gridTemplateColumns='1fr 2fr' gap='1.5rem' alignItems='flex-start'>
                <VStack>
                    <ContentContainer
                        title='PROJECT LINKS'
                        children={
                            officialLinks.map(props => <LinksContainer {...props}/>)
                        }
                    />
                    <ContentContainer
                        title='VERTICAL'
                        children={
                            verticalItems.map(props => <LinksContainer {...props}/>)
                        }

                    />
                </VStack>
                <VStack h='100%' bg='dark.900' padding='1.5rem 1.25rem' alignItems='flex-start' borderRadius='0.25rem' gap='1.5rem'>
                    <Heading variant='h3' fontSize='1rem' textTransform='uppercase'>
                        Description
                    </Heading>
                    <Heading w='80%' variant='h5' fontWeight='500' color='dark.50' whiteSpace='pre-line'>
                        {description}
                    </Heading>
                </VStack>
            </SimpleGrid>
            <Tabs>
                <TabList w='fit-content'>
                    <Tab>
                        <Heading variant='h3' fontSize='1rem' textTransform='uppercase'>
                            Lot's to buy
                        </Heading>
                    </Tab>
                    <Tab>
                        <Heading variant='h3' fontSize='1rem' textTransform='uppercase'>
                            Lot's to sell
                        </Heading>
                    </Tab>
                </TabList>

                <TabPanels>
                    <TabPanel>
                        <p>one!</p>
                    </TabPanel>
                    <TabPanel>
                        <p>two!</p>
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </VStack>

    )
});

MyBids.getLayout = ({children}) => (
    <Layouts.AppLayout>
        {children}
    </Layouts.AppLayout>
);

export default MyBids;
