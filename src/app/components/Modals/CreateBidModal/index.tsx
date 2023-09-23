import { useCallback } from 'react';
import { Controller } from 'react-hook-form';

import { UILogic } from '@app/components';
import {
  Button,
  FormControl,
  FormLabel,
  GridItem,
  Input,
  InputGroup,
  InputRightElement,
  SimpleGrid,
  Text,
  VStack,
} from '@chakra-ui/react';
import { PortalProps } from '@packages/berish-react-portal';
import { Resource } from '@schema/api-gateway';
import { InputNumber, Modal, UIKit, useForm } from '@shared/ui-kit';
import { isEmpty } from 'lodash';

import { CreateBidFieldDictionary } from './const';
import { createBidSchema } from './schema';

export type CreateBidModel = {
  toSellCount: number;
  fundsCount: number;
  deadline: Date;
  bidderType: Resource.Common.ParticipantType;
  isDirect: boolean;
  location: Resource.Common.Location;
  isReadyForKYC: boolean;
  telegram: string;
};

export interface CreateBidModalProps extends PortalProps<CreateBidModel> {}

export const CreateBidModal: React.FC<CreateBidModalProps> = ({ portal }) => {
  const {
    control,
    handleSubmit,
    formState: { errors, isDirty },
  } = useForm({
    schema: createBidSchema,
  });

  const onClose = useCallback(() => {
    if (portal && portal.resolve) portal.resolve(null);
  }, [portal]);

  const onSubmit = useCallback(
    (values: CreateBidModel) => {
      if (portal && portal.resolve) portal.resolve(values);
    },
    [portal],
  );

  return (
    <Modal
      title={
        <Text fontWeight={700} fontFamily="promo" fontSize="2md" textTransform="uppercase" color="white">
          For sale
        </Text>
      }
      onClose={onClose}
      size="2xl"
      isCentered
      maxW="36rem"
      variant="brand"
    >
      <SimpleGrid columns={2} gap="1rem">
        <GridItem>
          <FormControl isInvalid={Boolean(errors.toSellCount)}>
            <FormLabel>{CreateBidFieldDictionary.get('SELL_COUNT').title}</FormLabel>
            <Controller
              control={control}
              name="toSellCount"
              render={(props) => (
                <InputGroup>
                  <InputNumber {...props.field} placeholder={CreateBidFieldDictionary.get('SELL_COUNT').placeholder} />
                  <InputRightElement>
                    <Text color="orange.500">%</Text>
                  </InputRightElement>
                </InputGroup>
              )}
            />
          </FormControl>
        </GridItem>
        <GridItem>
          <FormControl isInvalid={Boolean(errors.fundsCount)}>
            <FormLabel>{CreateBidFieldDictionary.get('FUNDS_COUNT').title}</FormLabel>
            <Controller
              control={control}
              name="fundsCount"
              render={(props) => (
                <InputGroup>
                  <InputNumber {...props.field} placeholder={CreateBidFieldDictionary.get('FUNDS_COUNT').placeholder} />
                  <InputRightElement>
                    <Text color="orange.500">$</Text>
                  </InputRightElement>
                </InputGroup>
              )}
            />
          </FormControl>
        </GridItem>
        <GridItem colSpan={2}>
          <FormControl isInvalid={Boolean(errors.deadline)}>
            <FormLabel>{CreateBidFieldDictionary.get('DEADLINE').title}</FormLabel>
            <Controller control={control} name="deadline" render={(props) => <UIKit.DatePicker {...props.field} />} />
          </FormControl>
        </GridItem>
        <GridItem colSpan={2}>
          <VStack alignItems="start">
            <FormControl isInvalid={Boolean(errors.bidderType)}>
              <FormLabel>{CreateBidFieldDictionary.get('BIDDER_TYPE').title}</FormLabel>
              <Controller
                control={control}
                name="bidderType"
                render={(props) => (
                  <UILogic.ParticipantTypeSelect
                    {...props.field}
                    placeholder={CreateBidFieldDictionary.get('BIDDER_TYPE').placeholder}
                  />
                )}
              />
            </FormControl>
            <Controller
              control={control}
              name="isDirect"
              render={({ field }) => (
                <UIKit.Checkbox checked={field.value} onChange={field.onChange}>
                  {CreateBidFieldDictionary.get('DIRECT').title}
                </UIKit.Checkbox>
              )}
            />
          </VStack>
        </GridItem>
        <GridItem colSpan={2}>
          <VStack alignItems="start">
            <FormControl isInvalid={Boolean(errors.bidderType)}>
              <FormLabel>{CreateBidFieldDictionary.get('LOCATION').title}</FormLabel>
              <Controller
                control={control}
                name="location"
                render={(props) => (
                  <UILogic.LocationSelect
                    {...props.field}
                    placeholder={CreateBidFieldDictionary.get('LOCATION').placeholder}
                  />
                )}
              />
            </FormControl>
            <Controller
              control={control}
              name="isReadyForKYC"
              render={({ field }) => (
                <UIKit.Checkbox checked={field.value} onChange={field.onChange}>
                  {CreateBidFieldDictionary.get('READY_FOR_KYC').title}
                </UIKit.Checkbox>
              )}
            />
          </VStack>
        </GridItem>
        <GridItem colSpan={2}>
          <FormControl isInvalid={Boolean(errors.telegram)}>
            <FormLabel>{CreateBidFieldDictionary.get('TELEGRAM').title}</FormLabel>
            <Controller
              control={control}
              name="telegram"
              render={(props) => (
                <Input {...props.field} placeholder={CreateBidFieldDictionary.get('TELEGRAM').placeholder} />
              )}
            />
          </FormControl>
        </GridItem>
        <GridItem colSpan={2}>
          <Button w="full" size="lg" isDisabled={!isEmpty(errors) || !isDirty} onClick={handleSubmit(onSubmit)}>
            Place bid
          </Button>
        </GridItem>
      </SimpleGrid>
    </Modal>
  );
};
