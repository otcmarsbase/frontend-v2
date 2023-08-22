import React, {useCallback, useState} from "react";

import {observer} from 'mobx-react-lite';

import * as Layouts from '@app/layouts';
import {AssetsSchema} from "@app/pages/dashboard/asset/constants";
import {HeaderItemChip} from "@app/pages/dashboard/asset/HeaderItemChip";
import {HeaderTitleChip} from "@app/pages/dashboard/asset/HeaderTitleChip";
import {AssetMock} from "@app/pages/dashboard/asset/mocks";
import {useViewControl} from "@app/pages/dashboard/asset/useViewControl";
import lotsMock from "@app/pages/otcDesk/home/lotsMock.json";
import {
    Box, Button, Checkbox, FormControl, FormLabel,
    Heading,
    HStack, Input,
    InputGroup, InputLeftElement,
    SimpleGrid,
    Tab,
    TabList,
    TabPanel,
    TabPanels,
    Tabs, VStack
} from "@chakra-ui/react";
import {ArrowLeft as Arrow} from "@shared/assets/ArrowLeft";
import {Dropdown, HotIcon, LeftIcon, SearchIcon, Select} from "@shared/ui-kit";
import {ContentContainer} from "@shared/ui-kit/components/ContentContainer/ContentContainer";
import {LinksContainer} from "@shared/ui-kit/components/LinkContainer";
import {Pagination} from "@shared/ui-logic";
import {LotItem, LotItemProps} from "@shared/ui-molecules";
import {motion} from "framer-motion";

const lots = lotsMock.lots as LotItemProps[];

interface IMyDibsPageParams {
    lot: number
}

const {icon, name, assetResearch, headerFields, description, officialLinks, verticalItems} = AssetMock;

//todo decompose filters
export const Asset: React.FC<IMyDibsPageParams> = observer(({lot}) => {
    const [columnsCount, setColumnsCount] = useState(4);

    const {
        data,
        loading,
        error,
        form
    } = useViewControl({schema: AssetsSchema, defaultValues: {sortBy: 'byAlphabetic'}});

    console.log('data', data, loading)
    const toggleColumnsCount = () => {
        setColumnsCount((count) => (count === 3 ? 4 : 3));
    };
    const [paginationOptions] = useState({
        page: 1,
        limit: 25,
    });
    const [events] = useState({
        total: 30,
        items: [],
    });

    const onChangePage = useCallback(async (page: number, limit: number) => {
    }, []);

    return (
        <VStack padding='2rem' gap='2rem'>
            <HStack w="100%" color="#888D9B" cursor="pointer">
                <Arrow />
                <Heading variant='h5' fontWeight={600}>Back to OTC Desk</Heading>
            </HStack>
            <HeaderTitleChip
                icon={icon}
                name={name}
                assetResearch={assetResearch}
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
                        <SimpleGrid columns={columnsCount === 4 ? 1 : 2}
                                    gridTemplateColumns={columnsCount === 4 ? null : '1fr 3fr'} spacing="0.75rem">
                            {columnsCount === 3 && (
                                <VStack w="20rem" paddingTop='10px' gap='1.25rem' alignItems='flex-start'>
                                    <HStack w='100%'>
                                        <Heading display='flex' variant='h3m'>FILTER</Heading>
                                    </HStack>
                                    <VStack w='100%'>
                                        <FormControl display='flex' justifyContent='space-between'
                                                     isInvalid={Boolean(form.formState.errors['onlyReAssigned'])}>
                                            <FormLabel>Re-assign</FormLabel>
                                            <Checkbox {...form.register('onlyReAssigned')}/>
                                        </FormControl>
                                        <FormControl display='flex' justifyContent='space-between'
                                                     isInvalid={Boolean(form.formState.errors['onlyValidated'])}>
                                            <FormLabel>Only validated offers</FormLabel>
                                            <Checkbox {...form.register('onlyValidated')}/>
                                        </FormControl>
                                        <FormControl display='flex' justifyContent='space-between'
                                                     isInvalid={Boolean(form.formState.errors['directlyByDealType'])}>
                                            <FormLabel>Only directly seller/buyer</FormLabel>
                                            <Checkbox {...form.register('directlyByDealType')}/>
                                        </FormControl>
                                    </VStack>
                                    <Dropdown items={[]}>
                                        <HStack w='100%'>
                                            <Heading variant='h4m'>Minimal Bid Size</Heading>
                                        </HStack>
                                    </Dropdown>
                                    <Dropdown items={[]} width='100%'>
                                        <HStack w='100%'>
                                            <Heading variant='h4m'>Deadline</Heading>
                                        </HStack>
                                    </Dropdown>
                                    <Dropdown items={[]} width='100%'>
                                        <HStack w='100%'>
                                            <Heading variant='h4m'>Lot type</Heading>
                                        </HStack>
                                    </Dropdown>
                                    <Dropdown items={[]} width='100%'>
                                        <HStack w='100%'>
                                            <Heading variant='h4m'>Asset vertical</Heading>
                                        </HStack>
                                    </Dropdown>
                                    <Dropdown items={[]} width='100%'>
                                        <HStack w='100%'>
                                            <Heading variant='h4m'>Seller/Buyer Type</Heading>
                                        </HStack>
                                    </Dropdown>
                                </VStack>
                            )}
                            <VStack gap="1.5rem" w="full">
                                <HStack w='100%'>
                                    <motion.div layout>
                                <SimpleGrid
                                    maxWidth='40.375rem'
                                    alignSelf='baseline'
                                    columns={4}
                                    spacing="0.75rem"
                                    gridTemplateColumns='1fr 2fr 2fr 1fr'
                                >

                                        <Button
                                            w='100%'
                                            onClick={toggleColumnsCount}
                                        >
                                            Filters
                                        </Button>
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
                            </motion.div>
                                </HStack>
                                <VStack>
                                    {loading ? <Box w='1232px' h='1500px'>Loading...</Box> :
                                        <SimpleGrid w="full" columns={columnsCount} spacing="2rem">
                                            {lots.map((lot) => (
                                                <motion.div layout key={lot.id}>
                                                    <LotItem {...lot} />
                                                </motion.div>
                                            ))}
                                        </SimpleGrid>
                                    }
                                    <Pagination
                                        total={events.total}
                                        pageSize={paginationOptions.limit}
                                        page={paginationOptions.page}
                                        onChange={onChangePage}
                                    />
                                </VStack>
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

Asset.getLayout = ({children}) => (
    <Layouts.AppLayout>
        {children}
    </Layouts.AppLayout>
);

export default Asset;
