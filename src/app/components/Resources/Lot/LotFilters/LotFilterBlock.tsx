import { UILogic } from '@app/components';
import { VStack, Text, Divider, FormControl, FormLabel, Checkbox } from '@chakra-ui/react';
import { UIKit } from '@shared/ui-kit';

export interface LotFilterBlockProps {}

export function LotFilterBlock(props: LotFilterBlockProps) {
  return (
    <VStack w="20rem" paddingTop="10px" gap="0.65rem" alignItems="flex-start">
      <Text display="flex" fontSize="lg" fontWeight={700} lineHeight="2rem">
        Filter
      </Text>

      <Divider color="rgba(255, 255, 255, 0.15)" />

      <VStack w="100%">
        <FormControl display="flex" justifyContent="space-between">
          <FormLabel>Re-assign</FormLabel>
          <Checkbox />
        </FormControl>
        {/* <FormControl display="flex" justifyContent="space-between">
          <FormLabel>Only validated offers</FormLabel>
          <Checkbox />
        </FormControl>
        <FormControl display="flex" justifyContent="space-between">
          <FormLabel>Only directly seller/buyer</FormLabel>
          <Checkbox />
        </FormControl> */}
      </VStack>

      <UIKit.KeyValueRowAccordion keyComponent="Lot type">
        <UILogic.LotTypeSelect placeholder="Choose lot type" />
      </UIKit.KeyValueRowAccordion>
      <UIKit.KeyValueRowAccordion keyComponent="Asset vertical">
        <UILogic.AssetVerticalSelect placeholder="Choose vertical" />
      </UIKit.KeyValueRowAccordion>
      <UIKit.KeyValueRowAccordion keyComponent="Size">
        <UIKit.RangeNumberSlider
          minMax={[0, 999999]}
          value={[10000, 343343]}
          formatValue={(value) => <UIKit.MoneyText value={value} abbreviated addon="$" />}
          step={20}
        />
      </UIKit.KeyValueRowAccordion>
    </VStack>
  );
}
