import { VStack, Heading, Divider, FormControl, FormLabel, Checkbox } from '@chakra-ui/react';
import { UIKit } from '@shared/ui-kit';

export interface LotFilterBlockProps {}

export function LotFilterBlock({}: LotFilterBlockProps) {
  return (
    <VStack w="20rem" paddingTop="10px" gap="1.25rem" alignItems="flex-start">
      <Heading display="flex" variant="h3m">
        Filter
      </Heading>

      <Divider />

      <VStack w="100%">
        <FormControl display="flex" justifyContent="space-between">
          <FormLabel>Re-assign</FormLabel>
          <Checkbox />
        </FormControl>
        <FormControl display="flex" justifyContent="space-between">
          <FormLabel>Only validated offers</FormLabel>
          <Checkbox />
        </FormControl>
        <FormControl display="flex" justifyContent="space-between">
          <FormLabel>Only directly seller/buyer</FormLabel>
          <Checkbox />
        </FormControl>
      </VStack>

      <UIKit.KeyValueRow keyComponent="Minimal Bid Size">Filter</UIKit.KeyValueRow>
      <UIKit.KeyValueRow keyComponent="Deadline">Filter</UIKit.KeyValueRow>
      <UIKit.KeyValueRow keyComponent="Lot type">Filter</UIKit.KeyValueRow>
      <UIKit.KeyValueRow keyComponent="Asset vertical">Filter</UIKit.KeyValueRow>
      <UIKit.KeyValueRow keyComponent="Seller/Buyer type">Filter</UIKit.KeyValueRow>
    </VStack>
  );
}
