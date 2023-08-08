import {FC, PropsWithChildren, ReactNode, useEffect, useState} from "react";
import {observer} from 'mobx-react-lite';
import * as Layouts from "@app/layouts";
import {LotViewDefaultValues} from "@app/pages/dashboard/lotView/consts";
import {LotViewSchema} from "@app/pages/dashboard/lotView/schemas";
import {ISimilarDealitem} from "@app/pages/dashboard/lotView/types";
import offersMock from "@app/pages/dashboard/offers/offersMock.json";
import {InvAccTypes, TLotType} from "@app/pages/offers/create/components/ProjectInfo/types";
import {
    Box,
    Button, Checkbox,
    Heading,
    HStack, Image, Input,
    SimpleGrid,
    Table,
    Tbody, Td,
    Th,
    Thead, Tooltip,
    Tr,
    VStack
} from "@chakra-ui/react";
import {ArrowLeftSm} from "@shared/assets/arrowLeftSm";
import {DownloadSm} from "@shared/assets/downloadSm";
import {SortingIconSm} from "@shared/assets/sortingIconSm";
import {TooltipIcon} from "@shared/assets/tooltipIcon";
import {Dashboard} from "@shared/types";
import {FormBlockElement, FormField, Select, useForm} from "@shared/ui-kit";
import {StickyContainer} from "@shared/ui-kit/components/StickyContainer";
import Decimal from "decimal.js";
import MockPNG from './assets/MockPNG.png'
import MockIcon from './assets/mockProjectIcon.png'
import {BIDS, dataFields, dataFieldsHeader, roundInfoFields, similarDeals} from './lotViewMock'


const offers = offersMock.offers as Dashboard.OfferItem[];

function recountToUSD({amount}) {
    const usdtRate = 90
    return Number(new Decimal(amount).mul(usdtRate)).toLocaleString('en-US', {maximumFractionDigits: 2})
}


const LotViewHeaderChip = ({field}) => {
    return (
        <HStack fontSize={'sm'} color="dark.100">
            <Box>
                {field.id}
            </Box>
            <Box>
                {field.value}
            </Box>
        </HStack>
    )
}

const LotViewHeader = () => {
    return (
        <HStack w={'100%'} justifyContent={'space-between'} padding='0.75rem 1.25rem'>
            <HStack border={'2px solid orange'}>
                <Box>
                    <Image src={MockIcon} alt={'icon'}/>
                </Box>

                <Box fontSize={'xxl'} fontFamily="promo">
                    WorldCoin
                </Box>
                <Box
                    padding='0 0.625rem'
                    border='2px solid var(--ui-kit-white-10, rgba(255, 255, 255, 0.10))'
                    borderRadius='0.375'
                    fontFamily='Inter'
                    display='flex'
                    alignItems='center'
                >
                    <Box>
                        <DownloadSm/>
                    </Box>
                    <Box
                        fontSize='0.875rem'
                    >Get analitics</Box>
                </Box>
                {/*<Box*/}
                {/*    borderRadius={'1.875rem'}*/}
                {/*    background={'#621CBC'}*/}
                {/*    padding={'0.125rem 0.625rem'}*/}
                {/*>*/}
                {/*    {lotType}*/}
                {/*    <Tooltip label="Hey, I'm here!" aria-label='A tooltip'>*/}
                {/*        <TooltipIcon/>*/}
                {/*    </Tooltip>*/}
                {/*</Box>*/}

            </HStack>
            {/*<VStack border={'2px solid skyblue'}>*/}
            {/*    <HStack>*/}
            {/*        {fields.map(field => <LotViewHeaderChip field={field}/>)}*/}
            {/*    </HStack>*/}
            {/*    <HStack>*/}

            {/*    </HStack>*/}
            {/*</VStack>*/}
        </HStack>
    )
}
const LOT_VIEW_MAIN_CHIP_FIELDS = {
    availableSize: 'Available size',
    tokenPrice: 'Token price',
    lotFDV: 'Lot FDV',
    minBid: 'Min bid',
    investmentRound: 'Investment round',
    typeOfBider: 'Type of bider',
    typeOfTransfer: 'Type of transfer',
    estimateTGEdate: 'Estimated TGE date',
    loockupPeriod: 'Lockup period',

    vestingValendar: 'Vesting calendar',
    roundFDV: 'Round FDV'
}
const LotViewMainChip = ({field}) => {
    return (
        <VStack
            w='100%'
            h='4.3125rem'
            padding='0.75rem 1.25rem'
            justifyContent='space-between'
            borderRadius='0.5rem'
            alignItems='flex-start'
            bg='var(--ui-kit-dark-900, #0B0B0B)'
            color='white'
            gap='0'
        >
            <Heading
                variant='h5'
                fontWeight='842'
            >
                {LOT_VIEW_MAIN_CHIP_FIELDS[field.id]}
            </Heading>
            <Heading variant='h5' fontWeight='842'>
                {field.value.toLocaleString('en-US', {maximumFractionDigits: 0})} $
            </Heading>
        </VStack>
    )
}

const RoundInfoItem = ({field}) => {
    return (
        <HStack justifyContent={'space-between'}>
            <HStack
                alignItems='center'
                opacity='0.6'
            >
                <Heading variant='h5'>
                    {LOT_VIEW_MAIN_CHIP_FIELDS[field.id]}
                </Heading>
                <Tooltip label="Hey, I'm here!" aria-label='A tooltip'>
                    <TooltipIcon w='0.625rem' h='0.625rem'/>
                </Tooltip>
            </HStack>
            <Box>
                {field.value}
            </Box>
        </HStack>
    )
}
const RoundInfo = ({roundInfoFields}) => {
    return (
        <VStack bg={'rgba(78, 127, 254, 0.1)'} gap='0.75rem' borderRadius={'0.5rem'}
                w='100%'>
            <HStack h='1.75rem' w='100%' justifyContent='flex-start'>
                <Heading variant='h3'>
                    Round Info
                </Heading>


            </HStack>
            <SimpleGrid
                columns={4}
                spacing={10}
                w='100%'
                fontFamily='promo'
            >
                {
                    dataFields.map(field => <LotViewMainChip field={field}/>)
                }
            </SimpleGrid>
            <SimpleGrid borderRadius='0.75rem' background='var(--ui-kit-dark-900, #0B0B0B)' padding='1.25rem'
                        columns={1} w='100%' gap={'1.06rem'} spacing={10}>
                {roundInfoFields.map(field => <RoundInfoItem field={field}/>)}
            </SimpleGrid>
        </VStack>
    )
}


const ForSale = ({form, onPlaceBid, isActive}) => {
    const {register, getValues, formState, setValue, isRequired} = form;
    const {errors} = formState;
    return (
        <VStack layerStyle='brandGradientBordered' h={'100%'}>
            <Box>
                For sale
            </Box>
            <HStack>
                <FormBlockElement
                    label={'I want to buy'}
                    // isRequired={isRequired('lockupPeriod')}
                >
                    <FormField
                        register={register}
                        errors={errors}
                        name={"amountToBuy"}
                        value={getValues('amountToBuy')}
                        component={
                            <Input
                                type="number"
                                placeholder={'Amount'}
                            />
                        }
                    />
                </FormBlockElement>
                <FormBlockElement
                    label={'I give funds'}
                    // isRequired={isRequired('lockupPeriod')}
                >
                    <FormField
                        register={register}
                        errors={errors}
                        name={"giveFunds"}
                        value={getValues('giveFunds')}
                        component={
                            <Input
                                type="number"
                                placeholder={'Amount'}
                            />
                        }
                    />
                </FormBlockElement>

            </HStack>
            <FormBlockElement
                label={'Who are you?'}
                // isRequired={isRequired('lockupPeriod')}
            >
                <Select
                    placeholder="Choose type"
                    size="sm"
                    isMulti
                    value={getValues('typeOfUser')}
                    onChange={(value) => setValue('typeOfUser', value)}
                    options={InvAccTypes.map((sellerType) => ({
                        label: sellerType,
                        value: sellerType,
                    }))}
                />
                <FormField
                    register={register}
                    name={"isUserDirectBuyer"}
                    value={getValues('isUserDirectBuyer')}
                    component={<Checkbox>{'I’m the direct buyer'}</Checkbox>}
                />
            </FormBlockElement>

            <SimpleGrid columns={2} w='100%' gridTemplateColumns='auto auto' borderRadius='0.5rem'
                        bg='var(--linear, linear-gradient(140deg, #FF6639 0%, #7E25B5 100%))' padding='0.5rem 0.75rem'
                        marginTop='1.06rem'>
                <VStack alignItems='flex-start' gap='0.19rem' padding='0.44rem 1.19rem'>
                    <HStack opacity='0.6'>
                        <Heading variant='h5'>
                            I want to buy
                        </Heading>
                        <Tooltip label="Hey, I'm here!" aria-label='A tooltip' size='sm'>
                            <TooltipIcon w='0.625rem' h='0.625rem'/>
                        </Tooltip>
                    </HStack>

                    <Box>
                        1.000
                    </Box>
                </VStack>
                <VStack gap='0.19rem' alignItems='flex-start' borderRadius='0.5rem'
                        bg='var(--linear, linear-gradient(140deg, #FF6639 0%, #7E25B5 100%))' zIndex='999999'
                        padding='0.44rem 1.19rem'>
                    <HStack opacity='0.6'>
                        <Heading variant='h5'>
                            I give funds
                        </Heading>
                        <Tooltip label="Hey, I'm here!" aria-label='A tooltip' size='sm'>
                            <TooltipIcon w='0.625rem' h='0.625rem'/>
                        </Tooltip>
                    </HStack>

                    <HStack>
                        <Heading variant='h5'>
                            14.031.00 USDT
                        </Heading>
                        <HStack borderRadius='0.52rem' bg='#621CBC' fontSize='0.75rem' padding='0 0.38rem'>
                            <Box>
                                Lot FDV
                            </Box>
                            <Box>
                                10,350.03
                            </Box>
                        </HStack>
                    </HStack>
                </VStack>
            </SimpleGrid>

            <Button
                onClick={onPlaceBid}
                w="full"
                isDisabled={!isActive}
                layerStyle="brandLinearGradient"
                size="xl"
            >
                Place bid
            </Button>
        </VStack>
    )
}
const Bids = ({bids}) => {
    return (
        <VStack h='100%'
                w={'100%'}
            // overflow='scroll'
                padding='1.5rem 1.25rem'
                bg='rgba(27, 27, 28, 0.6)'
                borderRadius='0.5rem'>
            {/*<StickyBox>*/}
            <HStack justifyContent={'space-between'} fontWeight={'700'} lineHeight={'1.5rem'}
                    textTransform={'uppercase'} w={'100%'}>
                <HStack>
                    <Heading variant='h3'>
                        Bids
                    </Heading>

                    <Box padding={'0px 0.25rem'} bg={'orange.500'} borderRadius='1.6875rem'>
                        <Box fontSize={'0.8125rem'}>{bids.length}</Box>
                    </Box>
                </HStack>
                <Button>
                    Create Bid
                </Button>
            </HStack>
            {/*</StickyBox>*/}
            <Box overflowY="auto" h="100%">
                <Table>
                    <Thead>
                        <Tr>
                            <Th>
                                <HStack gap='none'>
                                    <Box fontWeight='400' opacity={'0.3'} lineHeight={'1.2rem'} fontSize={'sm'}>№</Box>
                                    <SortingIconSm/>
                                </HStack
                                ></Th>
                            <Th>
                                <HStack gap='none'>
                                    <Box fontWeight='400' opacity={'0.3'} lineHeight={'1.2rem'} fontSize={'sm'}
                                         textTransform={'capitalize'}>User</Box>
                                    <SortingIconSm/>
                                </HStack>
                            </Th>
                            <Th>
                                <HStack gap='none'>
                                    <Box fontWeight='400' opacity={'0.3'} lineHeight={'1.2rem'} fontSize={'sm'}
                                         textTransform={'capitalize'}>Bid FDV</Box>
                                    <SortingIconSm/>
                                </HStack>
                            </Th>
                            <Th>
                                <HStack gap='none'>
                                    <Box fontWeight='400' opacity={'0.3'} lineHeight={'1.2rem'} fontSize={'sm'}
                                         textTransform={'capitalize'}>Location</Box>
                                    <SortingIconSm/>
                                </HStack>
                            </Th>
                            <Th>
                                <HStack gap='none'>
                                    <Box fontWeight='400' opacity={'0.3'} lineHeight={'1.2rem'} fontSize={'sm'}
                                         textTransform={'capitalize'}>Bidder Type</Box>
                                    <SortingIconSm/>
                                </HStack>
                            </Th>
                            <Th>
                                <HStack gap='none'>
                                    <Box fontWeight='400' opacity={'0.3'} lineHeight={'1.2rem'} fontSize={'sm'}
                                         textTransform={'capitalize'}>Ready for KYC</Box>
                                    <SortingIconSm/>
                                </HStack>
                            </Th>
                            <Th>
                                <HStack gap='none'>
                                    <Box fontWeight='400' opacity={'0.3'} lineHeight={'1.2rem'} fontSize={'sm'}
                                         textTransform={'capitalize'}>Deadline</Box>
                                    <SortingIconSm/>
                                </HStack>
                            </Th>
                            <Th>
                                <HStack gap='none'>
                                    <Box fontWeight='400' opacity={'0.3'} lineHeight={'1.2rem'} fontSize={'sm'}
                                         textTransform={'capitalize'}>Status</Box>
                                    <SortingIconSm/>
                                </HStack>
                            </Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {bids.map(({id, userName, bid, location, readyForKYC, deadline, status, bidderType}) => (
                            <Tr>
                                {/*{id: 1, bid: 1000000, userName: 'test user', location: "LA", bidderType:'Family Office', deadline:'12/12/2012', status: 'active'},*/}

                                <Td border={'none'}>{id}</Td>
                                <Td border={'none'}>{userName}</Td>
                                <Td border={'none'}>
                                    <VStack gap={'none'} alignItems={'flexStart'}>
                                        <Box fontWeight={'842'} lineHeight={'1.5rem'} fontSize={'sm'}>
                                            {Number(bid).toLocaleString('en-US', {maximumFractionDigits: 2})} $
                                        </Box>
                                        {/*<Box fontSize={'3xs'}>*/}
                                        {/*    ~{recountToUSD({amount})} $*/}
                                        {/*</Box>*/}
                                    </VStack>
                                </Td>
                                <Td border={'none'}>{location}</Td>
                                <Td border={'none'}>{bidderType}</Td>
                                <Td border={'none'}>{readyForKYC ? 'TRUE' : 'FALSE'}</Td>
                                <Td border={'none'}>{deadline}</Td>
                                <Td border={'none'}>{status}</Td>
                                {/*<Td fontWeight={'842'}*/}
                                {/*    lineHeight={'1.5rem'} border={'none'}><Box padding={'0.125rem 0.75rem'}*/}
                                {/*                                               borderRadius={'1.5rem'}*/}
                                {/*                                               background={'rgba(78, 209, 250, 0.15)'}*/}
                                {/*                                               color={'#4ED1FA'} fontSize={'sm'}>*/}
                                {/*    {status}*/}
                                {/*</Box>*/}
                                {/*</Td>*/}
                            </Tr>
                        ))}
                    </Tbody>
                </Table>
            </Box>
        </VStack>
    )
}
const LotViewMain = ({dataFields, form, onPlaceBid, isActive}) => {

    return (
        <VStack
            w='100%'
            marginTop='2.5rem'
            h='37.625rem'
            justifyContent='space-between'
            padding='1.94rem 1.5rem 2.44rem'
            borderRadius='0.625rem'
            layerStyle="darkLinearGradientBg"
        >

            <SimpleGrid columns={3} w={'100%'} h={'100%'} spacing='1.5rem' gridTemplateColumns='24rem auto 24rem'>
                <RoundInfo roundInfoFields={roundInfoFields}/>
                <ForSale form={form} onPlaceBid={onPlaceBid} isActive={isActive}/>
                <Bids bids={BIDS}/>
            </SimpleGrid>

        </VStack>
    )
}

const SimilarDealsItem: FC<{ item: ISimilarDealitem }> = ({item}) => {
    const {lotType, nameOfAsset, description, icon, value, tokenSymbol} = item
    return (
        <VStack borderRadius='0.5rem'
                opacity='0.4'
                bg='dark.800'
                padding='1.25rem 1.25rem 1.94rem 1.25rem'
                color='white'

        >
            <HStack
                width='100%'
                justifyContent='space-between'
            >
                <Box>
                    {icon}
                </Box>
                <Box
                    borderRadius='1.875rem'
                    background='#621CBC'
                    padding='0.125rem 0.625rem'
                    display='flex'
                    alignItems='center'
                    gap='0.3rem'
                >
                    <Heading variant='h4'>
                        {lotType}
                    </Heading>

                    <Tooltip label="Hey, I'm here!" aria-label='A tooltip' size='sm'>
                        <TooltipIcon w='0.625rem' h='0.625rem'/>
                    </Tooltip>
                </Box>
            </HStack>
            <VStack
                width='100%'
                alignItems='flexStart'
            >
                <Heading
                    variant='h5'
                    fontWeight='842'
                >
                    {nameOfAsset}
                </Heading>
                <Box
                    color="dark.100"
                >
                    {description}
                </Box>
                <HStack>
                    <Box>
                        {value.toLocaleString('en-US', {maximumFractionDigits: 0})}
                    </Box>
                    <Box>
                        {tokenSymbol}
                    </Box>
                </HStack>
            </VStack>

        </VStack>
    )
}
const SimilarDeals: FC<{ similarDeals: ISimilarDealitem[] }> = ({similarDeals}) => {
    return (
        <VStack
            w='100%'
            padding='1.94rem 1.5rem 2.44rem'
            borderRadius='0.625rem'
            background='linear-gradient(180deg, #170901 0%, rgba(15, 6, 0, 0.00) 100%)'
        >
            <VStack alignItems='flex-start' w='100%'>
                <Heading variant='h3'>
                    Similar deals
                </Heading>
                <Box>
                    Set the parameters you need to suggest the best trading conditions
                </Box>
            </VStack>

            <SimpleGrid
                columns={4}
                spacing={10}
                w='100%'
                fontFamily='promo'
                marginTop={'1.5rem'}
            >
                {similarDeals.map(item =>
                    <SimilarDealsItem
                        item={item}
                    />
                )}
            </SimpleGrid>
        </VStack>
    )
}

interface IContentContaineProps {
    title: string
}
const ContentContainer: FC<PropsWithChildren<IContentContaineProps>> = ({title, children}) => {
    return (
        <VStack color="dark.100" padding='1.5rem 1.25rem'>
            <Heading variant='h4'>
                {title}
            </Heading>
            {children}
        </VStack>
    )
}
export const LotView: FC<{ lotId: number }> = observer(({lotId}) => {
    const form = useForm({
        schema: LotViewSchema,
        defaultValues: LotViewDefaultValues,
    });
    const [isPlaceBidBtnActive, setPlaceBidBtnActive] = useState(false);

    const data = form.watch();
    useEffect(() => {
        console.log('data', data)
    }, [data]);

    const onPlaceBid = () => {
        console.log('onPlaceBid')
    }
    // useEffect(()=>{
    //     let scrollTop = window.scrollY;
    //     let viewportHeight = window.innerHeight;
    //     let sidebarTop = sidebar.getBoundingClientRect().top + window.pageYOffset;
    //     let contentHeight = sidebar_content.getBoundingClientRect().height;
    //
    //     if( scrollTop >= contentHeight - viewportHeight + sidebarTop) {
    //         sidebar_content.style.transform = `translateY(-${(contentHeight - viewportHeight + sidebarTop)}px)`;
    //         sidebar_content.style.position  = "fixed";
    //     }
    //     else {
    //         sidebar_content.style.transform = "";
    //         sidebar_content.style.position  = "";
    //     }
    // },[])
    return (
        <>
            <HStack w={'100%'} color={'#888D9B'}>

                <ArrowLeftSm/>

                <Box>

                    Back to OTC Desk

                </Box>

            </HStack>
            <StickyContainer
                sidebar={
                    <Box position={'sticky'} top={0} w={'500px'} bg={'orange'} gap='0.75'>
                        <LotViewHeader />

                        <ContentContainer
                            title='Description'
                            children={<Box>Scroll aims to build an EVM-compatible zk-Rollup with a strong proving network. Dec 2019 -' +
                                '                            Seed - $2.7M raised - $30M FDV - Animoca Brands, Huobi Ventures, IOSG, LongHash Ventures,' +
                                '                            Galaxy Interactive, Redbeard Ventures...</Box>}
                        />

                        <Box overflow={'scroll'} h={'100vh'}>
                            <Box w={'400px'} bg={'red'} h={'100px'}>
                                Scrolled
                            </Box>
                            <Box w={'400px'} bg={'red'} h={'100px'}>
                                Scrolled
                            </Box>
                            <Box w={'400px'} bg={'red'} h={'100px'}>
                                Scrolled
                            </Box>
                            <Box w={'400px'} bg={'red'} h={'100px'}>
                                Scrolled
                            </Box>
                            <Box w={'400px'} bg={'red'} h={'100px'}>
                                Scrolled
                            </Box>
                            <Box w={'400px'} bg={'red'} h={'100px'}>
                                Scrolled
                            </Box>
                            <Box w={'400px'} bg={'red'} h={'100px'}>
                                Scrolled
                            </Box>
                            <Box w={'400px'} bg={'red'} h={'100px'}>
                                Scrolled
                            </Box>
                            <Box w={'400px'} bg={'red'} h={'100px'}>
                                Scrolled
                            </Box>
                            <Box w={'400px'} bg={'red'} h={'100px'}>
                                Scrolled
                            </Box>
                            <Box w={'400px'} bg={'red'} h={'100px'}>
                                Scrolled
                            </Box>
                            <Box w={'400px'} bg={'red'} h={'100px'}>
                                Scrolled
                            </Box>
                            <Box w={'400px'} bg={'red'} h={'100px'}>
                                Scrolled
                            </Box>
                            <Box w={'400px'} bg={'red'} h={'100px'}>
                                Scrolled
                            </Box>
                            <Box w={'400px'} bg={'red'} h={'100px'}>
                                Scrolled
                            </Box>
                            <Box w={'400px'} bg={'red'} h={'100px'}>
                                Scrolled
                            </Box>
                            <Box w={'400px'} bg={'red'} h={'100px'}>
                                Scrolled
                            </Box>
                            <Box w={'400px'} bg={'red'} h={'100px'}>
                                Scrolled
                            </Box>
                            <Box w={'400px'} bg={'red'} h={'100px'}>
                                Scrolled
                            </Box>
                            <Box w={'400px'} bg={'red'} h={'100px'}>
                                Scrolled
                            </Box>
                            <Box w={'400px'} bg={'red'} h={'100px'}>
                                Scrolled
                            </Box>
                            <Box w={'400px'} bg={'red'} h={'100px'}>
                                Scrolled
                            </Box>
                            <Box w={'400px'} bg={'red'} h={'100px'}>
                                Scrolled
                            </Box>
                            <Box w={'400px'} bg={'red'} h={'100px'}>
                                Scrolled
                            </Box>
                            <Box w={'400px'} bg={'red'} h={'100px'}>
                                Scrolled
                            </Box>
                        </Box>

                    </Box>
                }
                head={
                    <Box position={'sticky'} top={0} w={'100%'} h={'200px'} bg={'orangered'} zIndex={999999}>
                        User info
                    </Box>
                }
                main={
                    <>
                        <RoundInfo roundInfoFields={roundInfoFields}/>
                        <Bids bids={BIDS}/>
                    </>
                }
                footer={<SimilarDeals similarDeals={similarDeals}/>}
            />
        </>

    )
        ;


});
LotView.getLayout = ({children}) => (
    <Layouts.AppLayout>
        {children}
    </Layouts.AppLayout>
);
export default LotView;
