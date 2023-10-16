import { useCallback, useMemo } from 'react';
import { Controller } from 'react-hook-form';

import { UILogic, useRpcSchemaClient } from '@app/components';
import { useToastInnerCallback } from '@app/hooks';
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
import { Resource } from '@schema/otc-desk-gateway';
import { InputNumber, Modal, UIKit, useForm, useIsRequired } from '@shared/ui-kit';
import Decimal from 'decimal.js';

import {
  ContractValueUnitDictionary,
  CreateBidBuyFieldDictionary,
  CreateBidSellFieldDictionary,
  CreateBidModalTitleDictionary,
} from './const';
import { BidCreateSchema, CreateBidModel } from './schema';

export interface CreateBidModalProps extends PortalProps<Resource.Bid.Bid> {
  lot: Resource.Lot.Lot;
}

export const CreateBidModal: React.FC<CreateBidModalProps> = ({ portal, lot }) => {
  const rpcSchema = useRpcSchemaClient();
  const {
    control,
    handleSubmit,
    getValues,
    formState: { errors, isSubmitting },
    setValue,
    trigger,
  } = useForm({
    mode: 'onTouched',
    schema: BidCreateSchema,
    defaultValues: { lot: lot.id },
    context: {
      minContractValue: lot.minimumDealSize.unitQuantity.value,
      minFundsCount: lot.minimumDealSize.stablecoinQuantity.value,
    },
  });

  const isRequired = useIsRequired(BidCreateSchema, getValues);

  const onClose = useCallback(() => {
    if (portal && portal.resolve) portal.resolve(null);
  }, [portal]);

  const createBid = useCallback(
    async (values: CreateBidModel) => {
      const payload = { ...values, deadline: values.deadline.valueOf() };
      const bid = await rpcSchema.send('bid.create', payload);
      if (portal && portal.resolve) portal.resolve(bid);
    },
    [portal, rpcSchema],
  );

  const onSubmit = useToastInnerCallback(createBid, {});

  const price = useMemo(() => new Decimal(lot.contractSize.price.value).toNumber(), [lot]);

  const handleContractValue = useCallback(
    (value: number) => {
      setValue('contractValue', value);
      setValue('fundsCount', value ? price * value : undefined);
      trigger('fundsCount');
    },
    [price, setValue, trigger],
  );

  const handleFundsCount = useCallback(
    (value: number) => {
      setValue('fundsCount', value);
      setValue('contractValue', value ? value / price : undefined);
      trigger('contractValue');
    },
    [price, setValue, trigger],
  );

  const fieldDictionary = useMemo(() => {
    switch (lot.direction) {
      case 'BUY':
        return CreateBidSellFieldDictionary;
      case 'SELL':
        return CreateBidBuyFieldDictionary;
    }
  }, [lot]);

  return (
    <Modal
      title={
        <Text fontWeight={700} fontFamily="promo" fontSize="2md" textTransform="uppercase" color="white">
          {CreateBidModalTitleDictionary.get(lot.direction)}
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
          <FormControl isRequired={isRequired('contractValue')} isInvalid={Boolean(errors.contractValue)}>
            <FormLabel>{fieldDictionary.get('CONTRACT_VALUE').title}</FormLabel>
            <Controller
              control={control}
              name="contractValue"
              render={(props) => (
                <InputGroup>
                  <InputNumber
                    {...props.field}
                    placeholder={fieldDictionary.get('CONTRACT_VALUE').placeholder}
                    onChange={handleContractValue}
                  />
                  <InputRightElement>
                    <Text color="orange.500" fontSize="sm">
                      {ContractValueUnitDictionary.get(lot.type)}
                    </Text>
                  </InputRightElement>
                </InputGroup>
              )}
            />
          </FormControl>
        </GridItem>
        <GridItem>
          <FormControl isRequired={isRequired('fundsCount')} isInvalid={Boolean(errors.fundsCount)}>
            <FormLabel>{fieldDictionary.get('FUNDS_COUNT').title}</FormLabel>
            <Controller
              control={control}
              name="fundsCount"
              render={(props) => (
                <InputGroup>
                  <InputNumber
                    {...props.field}
                    placeholder={fieldDictionary.get('FUNDS_COUNT').placeholder}
                    onChange={handleFundsCount}
                  />
                  <InputRightElement>
                    <Text color="orange.500" fontSize="sm">
                      $
                    </Text>
                  </InputRightElement>
                </InputGroup>
              )}
            />
          </FormControl>
        </GridItem>
        <GridItem colSpan={2}>
          <FormControl isRequired={isRequired('deadline')} isInvalid={Boolean(errors.deadline)}>
            <FormLabel>{fieldDictionary.get('DEADLINE').title}</FormLabel>
            <Controller control={control} name="deadline" render={(props) => <UIKit.DatePicker {...props.field} />} />
          </FormControl>
        </GridItem>
        <GridItem colSpan={2}>
          <VStack alignItems="start">
            <FormControl isRequired={isRequired('bidMakerType')}>
              <FormLabel>{fieldDictionary.get('BID_MAKER_TYPE').title}</FormLabel>
              <Controller
                control={control}
                name="bidMakerType"
                render={(props) => (
                  <UILogic.ParticipantTypeSelect
                    {...props.field}
                    isInvalid={Boolean(props.fieldState.invalid)}
                    placeholder={fieldDictionary.get('BID_MAKER_TYPE').placeholder}
                  />
                )}
              />
            </FormControl>
            <Controller
              control={control}
              name="isDirect"
              render={({ field }) => (
                <UIKit.Checkbox checked={field.value} onChange={field.onChange}>
                  {fieldDictionary.get('DIRECT').title}
                </UIKit.Checkbox>
              )}
            />
          </VStack>
        </GridItem>
        <GridItem colSpan={2}>
          <VStack alignItems="start">
            <FormControl isRequired={isRequired('location')} isInvalid={Boolean(errors.bidMakerType)}>
              <FormLabel>{fieldDictionary.get('LOCATION').title}</FormLabel>
              <Controller
                control={control}
                name="location"
                render={(props) => (
                  <UILogic.LocationSelect
                    {...props.field}
                    isInvalid={Boolean(props.fieldState.invalid)}
                    placeholder={fieldDictionary.get('LOCATION').placeholder}
                  />
                )}
              />
            </FormControl>
            <Controller
              control={control}
              name="readyForVerification"
              render={({ field }) => (
                <UIKit.Checkbox checked={field.value} onChange={field.onChange}>
                  {fieldDictionary.get('READY_FOR_VERIFICATION').title}
                </UIKit.Checkbox>
              )}
            />
          </VStack>
        </GridItem>
        <GridItem colSpan={2}>
          <FormControl isInvalid={Boolean(errors.telegram)}>
            <FormLabel>{fieldDictionary.get('TELEGRAM').title}</FormLabel>
            <Controller
              control={control}
              name="telegram"
              render={(props) => <Input {...props.field} placeholder={fieldDictionary.get('TELEGRAM').placeholder} />}
            />
          </FormControl>
        </GridItem>
        <GridItem colSpan={2}>
          <Button w="full" size="lg" isLoading={isSubmitting} onClick={handleSubmit(onSubmit)}>
            Place bid
          </Button>
        </GridItem>
      </SimpleGrid>
    </Modal>
  );
};
