import { FC, useEffect } from 'react';

import { observer } from 'mobx-react-lite';

import * as Layouts from '@app/layouts';
import { ModalController } from '@app/logic';
import { ChooseBidsModal } from '@app/modals/CreateBidsModal';
import { Bids } from '@app/pages/dashboard/lotView/components/Bids';
import { ContentContainer } from '@app/pages/dashboard/lotView/components/ContentContainer';
import { LinksContainer } from '@app/pages/dashboard/lotView/components/LinkContainer';
import { LotBasicInfo } from '@app/pages/dashboard/lotView/components/LotBasicInfo';
import { LotViewMainChip } from '@app/pages/dashboard/lotView/components/LotViewMainChip';
import { RoundInfo } from '@app/pages/dashboard/lotView/components/RoundInfo';
import { SidebarHeader } from '@app/pages/dashboard/lotView/components/SidebarHeader';
import { SimilarDeals } from '@app/pages/dashboard/lotView/components/SimilarDeals';
import { LotViewDefaultValues } from '@app/pages/dashboard/lotView/consts';
import { LotViewSchema } from '@app/pages/dashboard/lotView/schemas';
import { ETypeOfDeal } from '@app/pages/offers/create/types';
import { Box, Button, Heading, HStack, VStack } from '@chakra-ui/react';
import { useForm } from '@shared/ui-kit';
import { ExpandableText } from '@shared/ui-kit/components/ExpandableText';
import { ProgressBar } from '@shared/ui-kit/components/ProgressBar';
import { StickyContainer } from '@shared/ui-kit/components/StickyContainer';

import { BIDSmock, LotViewProjectData, similarDealsMock } from './lotViewMock';

const UserState = {
  isOfferMaker: true,
  isBidder: true,
};

export const LotView: FC<{ lotId: number }> = observer(({ lotId }) => {
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
    Icon,
    socialMediaLinks,
    officialLinks,
    auctionEndDate,
    verticalItems,
  } = LotViewProjectData;

  const data = form.watch();

  useEffect(() => {
    console.log('data', data);
  }, [data]);

  const createBid = async () => {
    const result: ETypeOfDeal = await ModalController.create(ChooseBidsModal, {
      typeOfDeal,
    });
    console.log('createBid', result);
  };
  const viewOrderHandler = () => {
    console.log('viewOrderHandler');
  };
  const onPlaceBid = () => {
    console.log('onPlaceBid');
  };

  const handleEditLot = () => {
    console.log('handleEditLot');
  };
  const handleUnpublishLot = () => {
    console.log('handleUnpublishLot');
  };
  return (
    <>
      <StickyContainer
        sidebar={
          <Box
            position="sticky"
            display="flex"
            flexDirection="column"
            top={0}
            gap="0.75rem"
          >
            <SidebarHeader Icon={Icon} name={name} analitics={analitics} />
            {/*<Skeleton isLoaded={!loading} startColor='gray.900' endColor='dark.50' >*/}
            <ContentContainer
              title="Description"
              children={
                <ExpandableText noOfLines={3} gap="0.75rem">
                  {description}
                </ExpandableText>
              }
            />
            <ContentContainer
              title="OFFICAL LINKS"
              children={socialMediaLinks.map((props) => (
                <LinksContainer {...props} />
              ))}
            />
            <ContentContainer
              title="SOCIAL MEDIA"
              children={officialLinks.map((props) => (
                <LinksContainer {...props} />
              ))}
            />
            <ContentContainer
              title="VERTICAL"
              children={verticalItems.map((props) => (
                <LinksContainer {...props} />
              ))}
            />
          </Box>
        }
        head={
          <VStack position="sticky" top={0} bg="dark.950" w="100%" zIndex={999}>
            {UserState.isOfferMaker ? (
              <HStack
                bg="dark.900"
                w="100%"
                padding="1rem 1.25rem"
                borderRadius="0.75rem"
                gap="0.75rem"
                justifyContent="space-between"
              >
                {/*//todo add similar text variant*/}
                <Heading variant="h3" fontSize="1rem">
                  MY LOT
                </Heading>

                <HStack gap="0.69rem">
                  <Button
                    size="xs"
                    borderRadius="0.375rem"
                    padding="0.5rem 1.5rem"
                    onClick={handleEditLot}
                  >
                    <Heading variant="h4">Edit my lot</Heading>
                  </Button>
                  <Button
                    size="xs"
                    borderRadius="0.375rem"
                    padding="0.5rem 1.5rem"
                    onClick={handleUnpublishLot}
                  >
                    <Heading variant="h4">Unpublish</Heading>
                  </Button>
                </HStack>
              </HStack>
            ) : null}
            <LotBasicInfo
              LotInfoBasicData={{
                id,
                typeOfDeal,
                typeOfLot,
                userAvatar,
                userName,
                nameOfSeller,
                auctionEndDate,
              }}
            />
          </VStack>
        }
        main={
          <>
            <VStack w="100%" gap="0.75rem">
              <HStack gap="0.75rem" w="100%">
                {dataFieldsMain.map((field) => (
                  <LotViewMainChip field={field} />
                ))}
                <VStack
                  w="100%"
                  padding="0.75rem 1.25rem"
                  borderRadius="0.5rem"
                  alignItems="flex-start"
                  bg="dark.900"
                  color="white"
                  gap="0.25rem"
                  flex={2}
                >
                  <ProgressBar
                    title={'Available'}
                    currentAmount={currentAmount}
                    totalAmount={totalAmount}
                  />
                </VStack>
              </HStack>
              {typeOfDeal === ETypeOfDeal.SELL ? (
                <RoundInfo roundInfoFields={roundInfoFields} />
              ) : null}
            </VStack>
            <Bids
              bids={BIDSmock}
              isBidder={UserState.isBidder}
              createBid={createBid}
              viewOrderHandler={viewOrderHandler}
            />
          </>
        }
        footer={<SimilarDeals similarDeals={similarDealsMock} />}
      />
    </>
  );
});
LotView.getLayout = ({ children }) => (
  <Layouts.AppLayout>{children}</Layouts.AppLayout>
);
export default LotView;
