import {ReactNode, useCallback, useState} from "react";
import {observer} from 'mobx-react-lite';
import {useCreateOfferModal} from '@app/hooks';
import * as Layouts from '@app/layouts';
import {router} from '@app/logic';
import {bidsMock} from "@app/pages/dashboard/bids/bidsMock";
import {DashboardListType} from '@app/store';
import {Box, Heading, HStack, Text} from "@chakra-ui/react";
import {Dashboard, LotFlow, Paginate} from "@shared/types";
import {EmptyData, Icons, LotRow, LotStatus, LotTypeChip, UserDataChip} from '@shared/ui-kit';
import {Pagination} from "@shared/ui-logic";
import {format} from "date-fns";
import MyOffers from '../offers';

export interface IBidItem {
    id: number;
    offerType: Dashboard.OfferType;
    lotType: LotFlow.LotType;
    isHot: boolean;
    publishedAt: Date;
    fdv: number;
    offerMaker: 'Some user',
    offerMakerIcon: ReactNode,
    isDirectSeller: boolean,
    location: string,
    lotName: string;
    lotIconName: keyof typeof Icons.ProjectsIcons;
    bidSize: number;
    status: Dashboard.OfferStatus;
}

const BidsArr = bidsMock as unknown as IBidItem[]

const MyBids: React.FC = observer(() => {
    const openCreateOfferModal = useCreateOfferModal();

    const [paginationOptions] = useState<Paginate.PaginationOptions>({
        page: 1,
        limit: 25,
    });
    const [events] = useState<Paginate.PaginationItems<Dashboard.OfferItem>>({
        total: 30,
        items: [],
    });

    const onChangePage = useCallback(async (page: number, limit: number) => {
        },
        []);

    if (!BidsArr.length)
        return (
            <EmptyData
                onCreate={openCreateOfferModal}
                createButtonLabel="Create offers"
            />
        );

    return (
        <>
            {BidsArr.map(bid => {
                const {
                    id,
                    lotName,
                    fdv,
                    bidSize,
                    offerMaker,
                    isDirectSeller,
                    lotIconName,
                    offerType,
                    isHot,
                    status,
                    lotType,
                    publishedAt,
                    location,
                    offerMakerIcon
                } = bid;

                return (
                    <LotRow
                        key={id}
                        lotId={id}
                        lotName={lotName}
                        lotIconName={lotIconName}
                        type={offerType}
                        isHot={isHot}
                        status={<LotStatus value={status}/>}
                        fields={[
                            {label: 'Lot Type', value: <LotTypeChip headingProps={{variant:'h6'}} lotType={lotType}/>},
                            {label: 'Published at', value: format(publishedAt, 'dd.MM.yyyy')},
                            {label: 'Bid FDV', value:
                                    <HStack fontWeight={600}>
                                        <Text whiteSpace='nowrap'>
                                            {fdv.toLocaleString('en-US', {maximumFractionDigits: 0})}
                                        </Text>
                                        <Text whiteSpace='nowrap' color="dark.50">
                                            $
                                        </Text>
                                    </HStack>},
                            {label: 'Bid size', value:
                                    <HStack fontWeight={600}>
                                        <Text whiteSpace='nowrap'>
                                            {bidSize}
                                        </Text>
                                        <Text whiteSpace='nowrap' color="dark.50">
                                        %
                                        </Text>
                                    </HStack>},
                            {label: 'Offer Maker', value: <UserDataChip offerMaker={offerMaker} offerMakerIcon={offerMakerIcon} />},
                            {label: 'Direct Seller/Or not', value: isDirectSeller ? 'yes' : 'nope'},
                            {label: 'Location', value: <Heading fontSize='1rem' fontWeight='500' lineHeight='1.5rem'>{location}</Heading>},
                        ]}
                    />
                );
            })}
            <Pagination
                total={events.total}
                pageSize={paginationOptions.limit}
                page={paginationOptions.page}
                onChange={onChangePage}
            />
        </>
    );
});

MyBids.getLayout = ({children}) => (
    <Layouts.DashboardLayout
        onChangeListType={(listType) => {
            if (listType === DashboardListType.ORDERS)
                router.navigateComponent(MyOffers, {});
        }}
        listType={DashboardListType.BIDS}
    >
        {children}
    </Layouts.DashboardLayout>
);

export default MyBids;
