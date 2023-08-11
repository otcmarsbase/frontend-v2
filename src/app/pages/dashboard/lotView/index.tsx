import {FC, useEffect} from "react";
import {observer} from 'mobx-react-lite';
import * as Layouts from "@app/layouts";
import {ModalController} from "@app/logic";
import {ChooseBidsModal} from "@app/modals/CreateBidsModal";
import {Bids} from "@app/pages/dashboard/lotView/components/Bids";
import {ContentContainer} from "@app/pages/dashboard/lotView/components/ContentContainer";
import {LinksContainer} from "@app/pages/dashboard/lotView/components/LinkContainer";
import {LotBasicInfo} from "@app/pages/dashboard/lotView/components/LotBasicInfo";
import {LotViewMainChip} from "@app/pages/dashboard/lotView/components/LotViewMainChip";
import {RoundInfo} from "@app/pages/dashboard/lotView/components/RoundInfo";
import {SidebarHeader} from "@app/pages/dashboard/lotView/components/SidebarHeader";
import {SimilarDeals} from "@app/pages/dashboard/lotView/components/SimilarDeals";
import {LotViewDefaultValues} from "@app/pages/dashboard/lotView/consts";
import {LotViewSchema} from "@app/pages/dashboard/lotView/schemas";
import {ETypeOfDeal} from "@app/pages/offers/create/types";
import {
    Box,
    HStack,
    VStack
} from "@chakra-ui/react";
import {useForm} from "@shared/ui-kit";
import {ExpandableText} from "@shared/ui-kit/components/ExpandableText";
import {ProgressBar} from "@shared/ui-kit/components/ProgressBar";
import {StickyContainer} from "@shared/ui-kit/components/StickyContainer";
import {
    BIDSmock,
    LotViewProjectData,
    similarDealsMock
} from './lotViewMock'

export const LotView: FC<{ lotId: number }> = observer(({lotId}) => {
    const form = useForm({
        schema: LotViewSchema,
        defaultValues: LotViewDefaultValues,
    });

    const {
        name,
        description,
        id,
        typeOfDeal,
        typeOfLot,
        userAvatar,
        userName,
        currentAmount,
        totalAmount,
        nameOfSeller,
        dataFieldsMain,
        roundInfoFields,
        analitics,
        icon,
        socialMediaLinks,
        officialLinks,
        verticalItems
    } = LotViewProjectData;

    const data = form.watch();

    useEffect(() => {
        console.log('data', data)
    }, [data]);

    const createBid = async () => {
        const typeOfDeal: ETypeOfDeal = await ModalController.create(
            ChooseBidsModal,
            {onPlaceBid},
        );
        console.log('createBid')
    }
    const viewOrderHandler = () => {
        console.log('viewOrderHandler')
    }
    const onPlaceBid = () => {
        console.log('onPlaceBid')
    }

    return (
        <>
            <StickyContainer
                sidebar={
                    <Box position={'sticky'} display='flex' flexDirection='column' top={0} gap='0.75rem'>
                        <SidebarHeader
                            icon={icon}
                            name={name}
                            analitics={analitics}
                        />
                        {/*<Skeleton isLoaded={!loading} startColor='gray.900' endColor='dark.50' >*/}
                        <ContentContainer
                            title='Description'
                            children={
                            <ExpandableText noOfLines={3} gap='0.75rem'>
                                {description}
                            </ExpandableText>
                            }
                        />
                        <ContentContainer
                            title='OFFICAL LINKS'
                            children={
                                socialMediaLinks.map(props => <LinksContainer {...props}/>)
                            }
                        />
                        <ContentContainer
                            title='SOCIAL MEDIA'
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
                    </Box>
                }
                head={
                    <HStack
                        position='sticky'
                        top={0}
                        w='100%'
                        justifyContent='space-between'
                        padding='1rem 1.25rem'
                        bg='dark.900'
                        borderRadius='0.75rem'
                        zIndex={999}
                    >
                        <LotBasicInfo
                            LotInfoBasicData={{
                                id,
                                typeOfDeal,
                                typeOfLot,
                                userAvatar,
                                userName,
                                nameOfSeller
                            }}
                        />
                    </HStack>
                }
                main={
                    <>
                        <VStack w='100%' gap='0.75rem'>


                            <HStack
                                // columns={5}
                                // spacing={10}
                                gap='0.75rem'
                                w='100%'
                            >
                                {
                                    dataFieldsMain.map(field => <LotViewMainChip field={field}/>)
                                }
                                <VStack
                                    w='100%'
                                    padding='0.75rem 1.25rem'
                                    borderRadius='0.5rem'
                                    alignItems='flex-start'
                                    bg='dark.900'
                                    color='white'
                                    gap='0.25rem'
                                    flex={2}
                                >
                                    <ProgressBar
                                        title={'Available'}
                                        currentAmount={currentAmount}
                                        totalAmount={totalAmount}
                                    />

                                </VStack>
                            </HStack>
                            <RoundInfo roundInfoFields={roundInfoFields}/>
                        </VStack>
                        <Bids
                            bids={BIDSmock}
                            createBid={createBid}
                            viewOrderHandler={viewOrderHandler}
                        />
                    </>
                }
                footer={<SimilarDeals similarDeals={similarDealsMock}/>}
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
