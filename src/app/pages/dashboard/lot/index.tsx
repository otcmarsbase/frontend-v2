import React, { FC, useEffect } from 'react';

import { observer } from 'mobx-react-lite';

import * as Layouts from '@app/layouts';
import { ModalController } from '@app/logic';
// import { BIDSmock, LotViewProjectData, similarDealsMock } from '@app/pages/dashboard/lot/lotViewMock';
// import { LotViewSchema } from '@app/pages/dashboard/lot/schemas';
import { ChooseBidsModal } from '@app/modals';
import { Button, Grid, GridItem, Heading, HStack, VStack } from '@chakra-ui/react';
// import { ArrowLeft as Arrow } from '@shared/assets/ArrowLeft';
import { ArrowLeft } from '@shared/assets';
import { Common } from '@shared/types';
import { ExpandableText, useForm } from '@shared/ui-kit';

import {
  ContentContainer,
  LinksContainer,
  LotBasicInfo,
  LotViewMainChip,
  ProgressBar,
  RoundInfo,
  SidebarHeader,
  SimilarDeals,
} from './components';
import { LotViewDefaultValues } from './consts';
import { LotViewProjectData, similarDealsMock } from './lotViewMock';
import { LotViewSchema } from './schemas';
// import { ExpandableText } from '@shared/ui-kit/components/ExpandableText';
// import { ProgressBar } from '@shared/ui-kit/components/ProgressBar';

const UserState = {
  isOfferMaker: true,
  isBidder: true,
};

export const Lot: FC<{ lotId: number }> = observer(({ lotId }) => {
  const form = useForm({
    schema: LotViewSchema,
    defaultValues: LotViewDefaultValues,
  });

  const {
    name,
    description,
    id,
    direction,
    typeOfLot,
    userAvatar,
    userName,
    currentAmount,
    totalAmount,
    nameOfSeller,
    dataFieldsMain,
    roundInfoFields,
    analytics,
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
    const result: Common.Direction = await ModalController.create(ChooseBidsModal, {
      direction,
    });
    console.log('createBid', result);
  };
  const viewOrderHandler = () => {
    console.log('viewOrderHandler');
  };
  const handleEditLot = () => {
    console.log('handleEditLot');
  };
  const handleUnPublishLot = () => {
    console.log('handleUnpublishLot');
  };

  return (
    <VStack marginTop="2rem" alignItems="flex-start">
      <HStack w="100%" color="#888D9B" cursor="pointer">
        <ArrowLeft />
        <Heading variant="h5" fontSize="1.25rem" fontWeight={600}>
          Back to Dashboard
        </Heading>
      </HStack>
      <Grid templateColumns="28.5rem 1fr" columnGap="2rem" width="full">
        <GridItem position="sticky" display="flex" flexDirection="column" top={0} gap="0.75rem">
          <SidebarHeader Icon={Icon} name={name} analytics={analytics} />
          <ContentContainer
            title="Description"
            children={
              <ExpandableText noOfLines={3} gap="0.75rem">
                {description}
              </ExpandableText>
            }
          />
          <ContentContainer
            title="Official links"
            children={socialMediaLinks.map((props) => (
              <LinksContainer {...props} />
            ))}
          />
          <ContentContainer
            title="Social media"
            children={officialLinks.map((props) => (
              <LinksContainer {...props} />
            ))}
          />
          <ContentContainer
            title="Vertical"
            children={verticalItems.map((props) => (
              <LinksContainer {...props} />
            ))}
          />
        </GridItem>
        <GridItem>
          <VStack w="100%" h="fit-content" gap="1.5rem">
            <VStack position="sticky" top={0} bg="dark.950" w="100%" zIndex={1}>
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
                  <Heading textTransform="uppercase" variant="h3" fontSize="1rem">
                    My lot
                  </Heading>

                  <HStack gap="0.69rem">
                    <Button size="xs" padding="0.5rem 1.5rem" onClick={handleEditLot}>
                      Edit my lot
                    </Button>
                    <Button size="xs" variant="darkOutline" padding="0.5rem 1.5rem" onClick={handleUnPublishLot}>
                      Un publish
                    </Button>
                  </HStack>
                </HStack>
              ) : null}
              <LotBasicInfo
                lotInfoBasicData={{
                  id,
                  direction,
                  typeOfLot,
                  userAvatar,
                  userName,
                  nameOfSeller,
                  auctionEndDate,
                }}
              />
            </VStack>

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
                  <ProgressBar title={'Available'} currentAmount={currentAmount} totalAmount={totalAmount} />
                </VStack>
              </HStack>
              {direction === 'SELL' ? <RoundInfo roundInfoFields={roundInfoFields} /> : null}
            </VStack>
            {/* <Bids
              bids={BIDSmock}
              isBidder={UserState.isBidder}
              createBid={createBid}
              viewOrderHandler={viewOrderHandler}
            /> */}
          </VStack>
        </GridItem>
      </Grid>

      <SimilarDeals similarDeals={similarDealsMock} />
    </VStack>
  );
});

Lot.getLayout = ({ children }) => <Layouts.AppLayout>{children}</Layouts.AppLayout>;
export default Lot;
