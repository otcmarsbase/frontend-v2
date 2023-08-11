import React, {memo, useCallback, useEffect, useState} from 'react';
import {LotViewDefaultValues} from "@app/pages/dashboard/lotView/consts";
import {LotViewSchema} from "@app/pages/dashboard/lotView/schemas";
import {InvAccTypes} from "@app/pages/offers/create/components/ProjectInfo/types";
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

}
//todo
const LOCATIONS = [
    'Maycop', 'LS', 'LA'
]

export const ChooseBidsModal: React.FC<ChooseOfferTypeModalProps> = memo(
    ({portal}) => {

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
            },
            [portal],
        );

        const onPlaceBid = ()=>{
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
                                        <Heading variant='h5'>I want to sell</Heading>
                                        <Tooltip label="I want to sell" aria-label='A tooltip'>
                                            <TooltipIcon opacity='0.6' w='0.52081rem' h='0.52081rem'/>
                                        </Tooltip>
                                    </HStack>}
                                // isRequired={isRequired('lockupPeriod')}
                            >
                                <InputGroup>
                                    <FormField
                                        register={register}
                                        errors={errors}
                                        name={"amountToSell"}
                                        value={getValues('amountToSell')}
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
                                        <Heading variant='h5'>I take funds</Heading>
                                        <Tooltip label="I take funds" aria-label='A tooltip'>
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
                                        name={"giveFunds"}
                                        value={getValues('giveFunds')}
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
