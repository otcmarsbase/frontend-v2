import React, {memo, useCallback, useEffect, useState} from 'react';

import {LotViewDefaultValues} from "@app/pages/dashboard/lotView/consts";
import {LotViewSchema} from "@app/pages/dashboard/lotView/schemas";
import {ILotView, TLotModalFields} from "@app/pages/dashboard/lotView/types";
import {InvAccTypes} from "@app/pages/offers/create/components/ProjectInfo/types";
import {ETypeOfDeal} from "@app/pages/offers/create/types";
import {
    VStack,
    Text,
    HStack,
    Box,
    Input,
    Checkbox,
    Heading,
    Tooltip,
    Button,
    InputGroup, InputRightElement
} from '@chakra-ui/react';
import {PortalProps} from '@packages/react-portal';
import {PercentsIcon} from "@shared/assets/PercentsIcon";
import {TooltipIcon} from "@shared/assets/TooltipIcon";
import {FormBlockElement, FormField, Modal, RadioButtons, Select, useForm} from '@shared/ui-kit';

export interface ChooseOfferTypeModalProps extends PortalProps {
    typeOfDeal: ETypeOfDeal
}

//todo
const LOCATIONS = [
    'Maycop', 'LS', 'LA'
]

const BID_MODAL_FIELDS_BY_TYPE_OF_DEAL: Record<ETypeOfDeal, any> = {
    [ETypeOfDeal.SELL]: [
        {
            label: "I Want to Sell",
            fieldName: 'amountToSell' as TLotModalFields
        },
        {
            label: "I Want to Recive",
            fieldName: 'getFunds' as TLotModalFields
        }
    ],
    [ETypeOfDeal.BUY]: [
        {
            label: "I Want to Buy",
            fieldName: 'amountToBuy' as TLotModalFields
        },
        {
            label: "I Take funds",
            fieldName: 'giveFunds' as TLotModalFields
        }
    ]

}
export const ChooseBidsModal: React.FC<ChooseOfferTypeModalProps> = memo(
    ({portal, typeOfDeal}) => {
console.log('typeOfDeal',typeOfDeal, BID_MODAL_FIELDS_BY_TYPE_OF_DEAL[typeOfDeal])
        const form = useForm({
            schema: LotViewSchema,
            defaultValues: LotViewDefaultValues,
        });
        const [isValid, setIsValid] = useState(false);

        const data = form.watch();
        useEffect(() => {
            const {dirtyFields} = form.formState;
            const validFrom = dirtyFields.hasOwnProperty('giveFunds') && dirtyFields.hasOwnProperty('amountToSell')
            setIsValid(validFrom)
        }, [data]);


        const {register, getValues, formState, setValue, isRequired} = form;
        const {errors} = formState;
        const onClose = useCallback(() => {
            if (portal && portal.resolve) portal.resolve(null);
        }, [portal]);

        const onSubmit = useCallback(
            (field) => {
                if (portal && portal.resolve) portal.resolve(field);
                form.reset()
            },
            [portal],
        );

        const onPlaceBid = () => {
            //todo request + close modal
            onSubmit('some field')

        }

        const [forSaleModel, serForSaleModel] = useState('Entity')

        function setForSaleModel(model: any) {
            serForSaleModel(model)
            // sellOfferStore.setTypeOfPricingModel(btnId)
        }

        return (
            <Modal
                title={
                    <Text
                        fontWeight={700}
                        fontFamily="promo"
                        fontSize="2md"
                        textTransform="uppercase"
                        color="white"
                    >
                        For sale
                    </Text>
                }
                onClose={onClose}
                size="2xl"
                isCentered
                maxW="30rem"
            >

                <VStack layerStyle='brandGradientBordered' padding='none' gap='1.5rem' h='100%'>
                    <VStack gap='0.75rem' w='100%'>
                        <HStack w='100%'>
                            <FormBlockElement
                                label={
                                    <HStack>
                                        <Heading variant='h5'>{BID_MODAL_FIELDS_BY_TYPE_OF_DEAL[typeOfDeal][0].label}</Heading>
                                        <Tooltip label={BID_MODAL_FIELDS_BY_TYPE_OF_DEAL[typeOfDeal][0].label} aria-label='A tooltip'>
                                            <TooltipIcon opacity='0.6' w='0.52081rem' h='0.52081rem'/>
                                        </Tooltip>
                                    </HStack>}
                                // isRequired={isRequired('lockupPeriod')}
                            >
                                <InputGroup>
                                    <FormField
                                        register={register}
                                        errors={errors}
                                        name={BID_MODAL_FIELDS_BY_TYPE_OF_DEAL[typeOfDeal][0].fieldName}
                                        value={getValues(BID_MODAL_FIELDS_BY_TYPE_OF_DEAL[typeOfDeal][0].fieldName)}
                                        component={
                                            <Input
                                                type="number"
                                                placeholder={'Amount'}
                                            />
                                        }
                                    />
                                    <InputRightElement>
                                        <PercentsIcon w='1.25rem' h='1.25rem' fill='orange.500'/>
                                    </InputRightElement>
                                </InputGroup>
                            </FormBlockElement>

                            <FormBlockElement
                                label={
                                    <HStack>
                                        <Heading variant='h5'>{BID_MODAL_FIELDS_BY_TYPE_OF_DEAL[typeOfDeal][1].label}</Heading>
                                        <Tooltip label={BID_MODAL_FIELDS_BY_TYPE_OF_DEAL[typeOfDeal][1].label} aria-label='A tooltip'>
                                            <TooltipIcon opacity='0.6' w='0.52081rem' h='0.52081rem'/>
                                        </Tooltip>
                                    </HStack>
                                }
                                // isRequired={isRequired('lockupPeriod')}
                            >
                                <InputGroup>
                                    <FormField
                                        register={register}
                                        errors={errors}
                                        name={BID_MODAL_FIELDS_BY_TYPE_OF_DEAL[typeOfDeal][1].fieldName}
                                        value={getValues(BID_MODAL_FIELDS_BY_TYPE_OF_DEAL[typeOfDeal][1].fieldName)}
                                        component={
                                            <Input
                                                type="number"
                                                placeholder={'Amount'}
                                            />
                                        }
                                    />
                                    <InputRightElement>
                                        <Box color='orange.500'>$</Box>
                                    </InputRightElement>
                                </InputGroup>
                            </FormBlockElement>

                        </HStack>
                        <FormBlockElement
                            label={'Who are you?'}
                            grid={{cols: 1, gap: '0.5rem'}}
                            // isRequired={isRequired('lockupPeriod')}
                        >
                            <Select
                                placeholder="Type"
                                size="sm"
                                isDisabled={data.isUserDirectBuyer}
                                value={getValues('typeOfUser')}
                                // @ts-ignore
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
                                component={<Checkbox>{'I’m the direct seller'}</Checkbox>}
                            />
                        </FormBlockElement>

                        <FormBlockElement
                            label={'Locate'}
                            grid={{cols: 1, gap: '0.5rem'}}
                            // isRequired={isRequired('lockupPeriod')}
                        >
                            <Select
                                placeholder="Type"
                                size="sm"
                                value={getValues('location')}
                                // @ts-ignore
                                onChange={(value) => setValue('location', value)}
                                options={LOCATIONS.map((location) => ({
                                    label: location,
                                    value: location,
                                }))}
                            />
                            <FormField
                                register={register}
                                name={"readyForKYC"}
                                value={getValues('readyForKYC')}
                                component={<Checkbox>{'Ready for KYC&KYB'}</Checkbox>}
                            />
                            {/*<Tooltip label="Ready for KYC&KYB" aria-label='A tooltip'>*/}
                            {/*    <TooltipIcon opacity='0.6' w='1rem' h='1rem'/>*/}
                            {/*</Tooltip>*/}
                        </FormBlockElement>
                        <HStack w={'100%'}>
                            <RadioButtons
                                w={"100%"}
                                value={forSaleModel}
                                items={[
                                    {value: 'Entity', label: 'Entity'},
                                    {value: 'Individual', label: 'Individual'},
                                ]}
                                onChange={setForSaleModel}
                            />
                        </HStack>
                    </VStack>
                    <Button
                        onClick={onPlaceBid}
                        w="full"
                        isDisabled={!isValid}
                        layerStyle="brandLinearGradient"
                        size="xl"
                    >
                        Place bid
                    </Button>
                </VStack>

            </Modal>
        );
    },
);
