import {FC, useEffect, useState} from "react";
import {observer} from 'mobx-react-lite';
import * as Layouts from "@app/layouts";
import {LotViewDefaultValues} from "@app/pages/dashboard/lotView/consts";
import {LotViewSchema} from "@app/pages/dashboard/lotView/schemas";
import offersMock from "@app/pages/dashboard/offers/offersMock.json";
import {InvAccTypes} from "@app/pages/offers/create/components/ProjectInfo/types";
import {
    Box,
    Button, Checkbox,
    HStack, Input,
    Table,
    TableContainer,
    Tbody, Td,
    Th,
    Thead,
    Tr,
    VStack
} from "@chakra-ui/react";
import {Dashboard} from "@shared/types";
import {FormBlockElement, FormField, Select, useForm} from "@shared/ui-kit";
import {BIDS, dataFields, dataFieldsHeader, roundInfoFields} from './lotViewMock'

const offers = offersMock.offers as Dashboard.OfferItem[];

const LotViewHeaderChip = ({field}) => {
    return (
        <HStack>
            <Box>
                {field.id}
            </Box>
            <Box>
                {field.value}
            </Box>
        </HStack>
    )
}

const LotViewHeader = ({lotType, fields}) => {
    return (
        <HStack w={'100%'} justifyContent={'space-between'}>
            <HStack>
                <Box>
                    image
                </Box>
                <VStack>
                    <Box>
                        Name of asset
                    </Box>
                    <Box>
                        Description for asset (Max 200)
                    </Box>
                </VStack>
                <Box>
                    {lotType}
                </Box>
            </HStack>
            <VStack>
                <HStack>
                    {fields.map(field => <LotViewHeaderChip field={field}/>)}
                </HStack>
                <HStack>

                </HStack>
            </VStack>
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
        <HStack w={'100%'}>
            <Box>
                {LOT_VIEW_MAIN_CHIP_FIELDS[field.id]}
            </Box>
            <Box>
                {field.value}
            </Box>
        </HStack>
    )
}

const RoundInfoItem = ({field}) => {
    return (
        <HStack>
            <HStack>
                <Box>
                    {LOT_VIEW_MAIN_CHIP_FIELDS[field.id]}
                </Box>
                {
                    field.quest
                        ?
                        <Box>
                            {field.quest}
                        </Box>
                        :
                        null
                }

            </HStack>
            <Box>
                {field.value}
            </Box>
        </HStack>
    )
}
const RoundInfo = ({roundInfoFields}) => {
    return (
        <VStack>
            <HStack>
                <Box>
                    Round Info
                </Box>
                <Box>
                    <Button>Get analitics</Button>
                </Box>
            </HStack>
            {roundInfoFields.map(field => <RoundInfoItem field={field}/>)}
        </VStack>
    )
}
const ForSale = ({form, onPlaceBid, isActive}) => {
    const { register, getValues, formState, setValue, isRequired } = form;
    const { errors } = formState;
    return (
        <VStack>
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
        <VStack h={'100%'} overflow={'scroll'} >
            <HStack>
                <Box>
                    Bids
                </Box>
                <Box>
                    {bids.length}
                </Box>
            </HStack>
            <Box>
                <TableContainer>
                    <Table size='sm'>
                        <Thead>
                            <Tr>
                                <Th>ID</Th>
                                <Th>Amount</Th>
                                <Th>Value</Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            {bids.map(({id, amount, status}) => <Tr>
                                <Td>{id}</Td>
                                <Td>{amount}</Td>
                                <Td>{status}</Td>
                            </Tr>)
                            }

                        </Tbody>

                    </Table>
                </TableContainer>
            </Box>
        </VStack>
    )
}
const LotViewMain = ({dataFields, form, onPlaceBid, isActive}) => {

    return (
        <VStack w={'100%'} h={'600px'} justifyContent={'space-between'}>
            <HStack w={'100%'} justifyContent={'space-between'}>
                {
                    dataFields.map(field => <LotViewMainChip field={field}/>)
                }
            </HStack>
            <HStack w={'100%'} justifyContent={'space-between'}>
                <RoundInfo roundInfoFields={roundInfoFields}/>
                <ForSale form={form} onPlaceBid={onPlaceBid} isActive={isActive}/>
                <Bids bids={BIDS}/>
            </HStack>

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
    useEffect(()=>{
        console.log('data',data)
    },[data]);

    const onPlaceBid = () => {
        console.log('onPlaceBid')
    }
    return (
        <VStack>
            <LotViewHeader lotType={'SAFT'} fields={dataFieldsHeader}/>
            <LotViewMain form={form} dataFields={dataFields} onPlaceBid={onPlaceBid} isActive={isPlaceBidBtnActive}/>

            {JSON.stringify(offers.filter(item => item.id === lotId))}
        </VStack>
    );


});
LotView.getLayout = ({children}) => (
    <Layouts.AppLayout>
        {children}
    </Layouts.AppLayout>
);
export default LotView;
