import {FC} from "react";
import {LotTypeChip} from "@app/pages/dashboard/lotView/components/LotTypeChip";
import {TypeOfDealChip} from "@app/pages/dashboard/lotView/components/TypeOfDealChip";
import {ISimilarDealItem} from "@app/pages/dashboard/lotView/types";
import {Box, Heading, HStack, VStack} from "@chakra-ui/react";
import {HotChip} from "@shared/ui-kit/components/HotChip/HotChip";
import {ProgressBar} from "@shared/ui-kit/components/ProgressBar";

export const SimilarDealsItem: FC<{ item: ISimilarDealItem }> = ({item}) => {
    const {dealID, lotType, typeOfDeal, isHot, icon, nameOfAsset, currentAmount, totalAmount} = item
    return (
        <VStack borderRadius='0.5rem'
                bg='dark.800'
                padding='1.5rem 1.25rem'
                color='white'
                position='relative'
                gap='1.25rem'
                key={dealID}
        >
            <TypeOfDealChip typeOfDeal={typeOfDeal}/>
            <VStack gap='0.75rem' w='100%'>
                <HStack w='100%' alignItems='center'>
                    <Heading
                        variant='h5'
                        fontWeight='500'
                        color='dark.200'
                    >
                        #{dealID}
                    </Heading>
                    <LotTypeChip
                        lotType={lotType}
                    />
                    {isHot ? <HotChip/> : null}
                </HStack>
                <HStack w='100%' alignItems='flex-start'>
                    <Box>
                        {icon}
                    </Box>
                    <Heading variant='h2' letterSpacing='-0.0125rem' textTransform='capitalize'>
                        {nameOfAsset}
                    </Heading>
                </HStack>
            </VStack>
            <ProgressBar
                title={'Available'}
                currentAmount={currentAmount}
                totalAmount={totalAmount}
            />
        </VStack>
    )
}
