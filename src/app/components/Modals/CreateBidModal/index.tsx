import { useCallback, useMemo } from 'react';
import { Controller } from 'react-hook-form';

import { UILogic, useRpcSchemaClient } from '@app/components';
import { useToastInnerCallback } from '@app/hooks';
import { Button, FormControl, FormLabel, HStack, InputGroup, InputRightElement, Text, VStack } from '@chakra-ui/react';
import { PortalProps } from '@packages/berish-react-portal';
import { DeskGatewaySchema } from '@schema/desk-gateway';
import { InputNumber, Modal, UIKit, useForm, useIsRequired } from '@shared/ui-kit';
import { useQueryClient } from '@tanstack/react-query';

import { CreateBidModalTitleDictionary, PriceDescriptorDictionary, CommonFieldsDictionary } from './const';
import { formatNumberProps } from './formatNumberProps';
import { BidCreateSchema, CreateBidModel } from './schema';
import { useDefaultValues } from './useDefaultValues';
import { useFormContext } from './useFormContext';

export interface CreateBidModalProps extends PortalProps<DeskGatewaySchema.Bid> {
  lot: DeskGatewaySchema.Lot;
}

export const CreateBidModal: React.FC<CreateBidModalProps> = ({ portal, lot }) => {
  const defaultValues = useDefaultValues(lot);
  const context = useFormContext(lot);
  const queryClient = useQueryClient();

  const rpcSchema = useRpcSchemaClient();
  const formMethods = useForm<CreateBidModel>({
    mode: 'onTouched',
    schema: BidCreateSchema,
    defaultValues,
    context,
  });
  const {
    control,
    getValues,
    formState: { errors, isSubmitting },
    handleSubmit,
  } = formMethods;

  const isRequired = useIsRequired(BidCreateSchema, getValues);
  const isShowPrice = useMemo(() => ['UNLOCKED_TOKENS', 'EQUITY'].includes(lot.type), [lot.type])

  const onClose = useCallback(() => {
    if (portal && portal.resolve) portal.resolve(null);
  }, [portal]);

  const createBid = useCallback(
    async (values: CreateBidModel) => {
      const bid = await rpcSchema.send('bid.create', {
        lotId: values.lotId,
        bidMakerType: values.bidMakerType,
        location: values.location,
        readyForVerification: values.readyForVerification,
        telegram: values.telegram,
        isDirect: !values.isBroker,
        summary: String(values.summary),
        units: String(values.units),
        price: String(values.price),
        fdv: String(values.fdv),
      });

      await queryClient.invalidateQueries({
        predicate: ({ queryKey }) => queryKey[0]?.toString()?.includes('bid'),
      });

      if (portal && portal.resolve) portal.resolve(bid);
    },
    [portal, queryClient, rpcSchema],
  );

  const onSubmit = useToastInnerCallback(createBid, {});

  return (
    <Modal
      title={
        <Text fontWeight={700} fontFamily="promo" fontSize="2md" textTransform="uppercase" color="white">
          {CreateBidModalTitleDictionary.get(lot.attributes.COMMON_DIRECTION)}
        </Text>
      }
      onClose={onClose}
      size="2xl"
      isCentered
      maxW="36rem"
      variant="brand"
    >
      <VStack spacing="1rem" width="full">
        <HStack spacing="1rem" width="full">
          <FormControl isRequired={isRequired('summary')} isInvalid={Boolean(errors.summary)}>
            <FormLabel>{CommonFieldsDictionary.get('SUMMARY').label}</FormLabel>
            <Controller
              control={control}
              name="summary"
              render={(props) => (
                <InputGroup>
                  <InputNumber
                    {...props.field}
                    placeholder={CommonFieldsDictionary.get('SUMMARY').placeholder}
                    {...formatNumberProps()}
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
          <FormControl isRequired={isRequired('fdv')} isInvalid={Boolean(errors.fdv)}>
            <FormLabel>{CommonFieldsDictionary.get('FDV').label}</FormLabel>
            <Controller
              control={control}
              name="fdv"
              render={(props) => (
                <InputGroup>
                  <InputNumber
                    {...props.field}
                    placeholder={CommonFieldsDictionary.get('FDV').placeholder}
                    {...formatNumberProps()}
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
        </HStack>
        <VStack spacing="1em" width="full">
          {isShowPrice && (
            <FormControl isInvalid={Boolean(errors.price)}>
              <FormLabel>{PriceDescriptorDictionary.get(lot.type).label}</FormLabel>
              <Controller
                control={control}
                name="price"
                render={(props) => (
                  <InputGroup>
                    <InputNumber
                      {...props.field}
                      placeholder={PriceDescriptorDictionary.get(lot.type).placeholder}
                      {...formatNumberProps()}
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
          )}
          <VStack alignItems="start" width="full">
            <FormControl isRequired={isRequired('bidMakerType')}>
              <FormLabel>{CommonFieldsDictionary.get('BID_MAKER_TYPE').label}</FormLabel>
              <Controller
                control={control}
                name="bidMakerType"
                render={(props) => (
                  <UILogic.ParticipantTypeSelect
                    {...props.field}
                    showOnlyTypes={lot.attributes.COMMON_BID_MAKER_TYPES}
                    isInvalid={Boolean(props.fieldState.invalid)}
                    placeholder={CommonFieldsDictionary.get('BID_MAKER_TYPE').placeholder}
                  />
                )}
              />
            </FormControl>
            <Controller
              control={control}
              name="isBroker"
              render={({ field }) => (
                <UIKit.Checkbox checked={field.value} onChange={field.onChange}>
                  {CommonFieldsDictionary.get('IS_BROKER').label}
                </UIKit.Checkbox>
              )}
            />
          </VStack>
          <VStack alignItems="start" width="full">
            <FormControl isRequired={isRequired('location')} isInvalid={Boolean(errors.bidMakerType)}>
              <FormLabel>{CommonFieldsDictionary.get('LOCATION').label}</FormLabel>
              <Controller
                control={control}
                name="location"
                render={(props) => (
                  <UILogic.LocationSelect
                    {...props.field}
                    isInvalid={Boolean(props.fieldState.invalid)}
                    placeholder={CommonFieldsDictionary.get('LOCATION').placeholder}
                  />
                )}
              />
            </FormControl>
            <Controller
              control={control}
              name="readyForVerification"
              render={({ field }) => (
                <UIKit.Checkbox checked={field.value} onChange={field.onChange}>
                  {CommonFieldsDictionary.get('READY_FOR_VERIFICATION').label}
                </UIKit.Checkbox>
              )}
            />
          </VStack>
          <FormControl isInvalid={Boolean(errors.telegram)}>
            <FormLabel>{CommonFieldsDictionary.get('TELEGRAM').label}</FormLabel>
            <Controller
              control={control}
              name="telegram"
              render={(props) => <UIKit.InputTelegram {...props.field} placeholder="@nickname" />}
            />
          </FormControl>
          <Button w="full" size="lg" isLoading={isSubmitting} onClick={handleSubmit(onSubmit)}>
            Place bid
          </Button>
        </VStack>
      </VStack>
    </Modal>
  );
};
