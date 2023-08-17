import {FC, useState} from "react";
import {observer} from 'mobx-react-lite';
import * as Layouts from '@app/layouts';
import {AssetMock} from "@app/pages/dashboard/bids/mocks";
import {useViewControl} from "@app/pages/dashboard/bids/useViewControl";
import lotsMock from "@app/pages/otcDesk/home/lotsMock.json";
import {
    Box, Button, Checkbox,
    Heading,
    HStack, Input,
    InputGroup, InputLeftElement,
    SimpleGrid,
    Tab,
    TabList,
    TabPanel,
    TabPanels,
    Tabs, Text,
    VStack
} from "@chakra-ui/react";
import {Dropdown, FormField, HotIcon, SearchIcon, Select, useForm} from "@shared/ui-kit";
import {ContentContainer} from "@shared/ui-kit/components/ContentContainer/ContentContainer";
import {LinksContainer} from "@shared/ui-kit/components/LinkContainer";
import {LotItem, LotItemProps} from "@shared/ui-molecules";
import {commaSeparatedNumber} from "@shared/utils";
import * as yup from "yup";


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

                <Heading variant='h2' fontWeight='500'>
                    {name}
                </Heading>
            </HStack>
            <Heading variant='h5' fontWeight='500'>
                Download asset research
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

export const LotsContainer = () => {
    return (
        <VStack>

        </VStack>
    )
}
export const AssetsSchema = yup.object().shape({
    sortBy: yup.string(),
});
const lots = lotsMock.lots as LotItemProps[];
export const MyBids: React.FC = observer(() => {
    const {icon, name, title, headerFields, description, officialLinks, verticalItems} = AssetMock;

    const [columnsCount, setColumnsCount] = useState(4);

    const {
        data,
        loading,
        error,
        form
    } = useViewControl({schema:AssetsSchema, defaultValues: {sortBy: 'byAlphabetic'} });

console.log('data', data, loading)
    const toggleColumnsCount = () => {
        setColumnsCount((count) => (count === 3 ? 4 : 3));
    };



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
                <VStack h='100%' bg='dark.900' padding='1.5rem 1.25rem' alignItems='flex-start' borderRadius='0.25rem'
                        gap='1.5rem'>
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
                        <SimpleGrid columns={columnsCount === 4 ? 1 : 2} gridTemplateColumns={columnsCount === 4 ? null : '1fr 3fr'} spacing="0.75rem">
                            {columnsCount === 3 && (
                                <VStack w="20rem">
                                    <Heading variant='h3m'>FILTER</Heading>
                                    <VStack>
                                        {/*<FormField*/}
                                        {/*    register={register}*/}
                                        {/*    name="isReAssigned"*/}
                                        {/*    value={getValues('isReAssigned')}*/}
                                        {/*    component={<Checkbox>{ProjectInfoFields.IS_RE_ASSIGNED}</Checkbox>}*/}
                                        {/*/>*/}
                                    </VStack>
                                    <Dropdown items={[]}><Heading variant='h4m'>Minimal Bid Size</Heading></Dropdown>
                                    <Dropdown items={[]}><Heading variant='h4m'>Deadline</Heading></Dropdown>
                                    <Dropdown items={[]}><Heading variant='h4m'>Lot type</Heading></Dropdown>
                                    <Dropdown items={[]}><Heading variant='h4m'>Asset vertical</Heading></Dropdown>
                                    <Dropdown items={[]}><Heading variant='h4m'>Seller/Buyer Type</Heading></Dropdown>
                                </VStack>
                            )}
                            <VStack gap="1.5rem" w="full">
                            <SimpleGrid maxWidth='40.375rem' alignSelf='baseline' columns={4} spacing="0.75rem"
                                        gridTemplateColumns='1fr 2fr 2fr 1fr'>
                                <Button onClick={toggleColumnsCount}>Filters</Button>
                                <InputGroup>
                                    <InputLeftElement>
                                        <SearchIcon/>
                                    </InputLeftElement>
                                    <Input placeholder="Search"/>
                                </InputGroup>

                                    <Select
                                        isClearable
                                        placeholder="Sort by"
                                        value={form.getValues('sortBy')}
                                        onChange={(value) => form.setValue('sortBy', value)}
                                        options={[
                                            {label: 'From A to Z', value: 'byAlphabetic'},
                                            {label: 'Last added', value: 'byLast'},
                                            {label: 'Popularity', value: 'byPopularity'},
                                        ]}
                                    />
                                <Button variant="darkOutline">
                                    <HotIcon/>
                                    &nbsp; HOT!
                                </Button>
                            </SimpleGrid>
                            <HStack>
                                {loading ? <Box w='1232px' h='1500px'>Loading...</Box> :
                                    <VStack>
                                        {    // @ts-ignore
                                            data.map((lot) => (
                                                <Box>{lot.login}</Box>
                                            ))}
                                    </VStack>
                            }
                            </HStack>
                        </VStack>
                        </SimpleGrid>
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
