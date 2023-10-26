import { useCallback, useMemo } from 'react';
import { Controller } from 'react-hook-form';

import { UILogic, useRpcSchemaClient } from '@app/components';
import { useLotMultiplicatorValue, useToastInnerCallback } from '@app/hooks';
import {
  Button,
  FormControl,
  FormLabel,
  HStack,
  Input,
  InputGroup,
  InputRightElement,
  Text,
  VStack,
} from '@chakra-ui/react';
import { PortalProps } from '@packages/berish-react-portal';
import { Resource } from '@schema/desk-gateway';
import { InputNumber, Modal, UIKit, useForm, useIsRequired } from '@shared/ui-kit';
import Decimal from 'decimal.js';

import {
  UnitsDescriptorDictionary,
  UnitsDictionary,
  SummaryDescriptorDictionary,
  CreateBidModalTitleDictionary,
  PriceDescriptorDictionary,
  CommonFieldsDictionary,
} from './const';
import { formatNumberProps } from './formatNumberProps';
import { BidCreateSchema, CreateBidModel } from './schema';
import { useFdvChange } from './useFdvChange';
import { usePriceChange } from './usePriceChange';
import { useSummaryChange } from './useSummaryChange';
import { useUnitsChange } from './useUnitsChange';

export interface CreateBidModalProps extends PortalProps<Resource.Bid.Bid> {
  lot: Resource.Lot.Lot;
}

export const CreateBidModal: React.FC<CreateBidModalProps> = ({ portal, lot }) => {
  const defaultValues = useMemo(
    () => ({
      lotId: lot.id,
      fdv: new Decimal(lot.attributes.INVEST_DOC_FDV).toNumber(),
      price: new Decimal(lot.attributes.COMMON_PRICE).toNumber(),
    }),
    [lot],
  );

  const rpcSchema = useRpcSchemaClient();
  const formMethods = useForm<CreateBidModel>({
    mode: 'onTouched',
    schema: BidCreateSchema,
    defaultValues,
    context: {
      minUnits: new Decimal(lot.attributes.COMMON_MIN_FILTER_UNITS).toNumber(),
      maxUnits: new Decimal(lot.attributes.COMMON_UNITS).toNumber(),
      minSummary: new Decimal(lot.attributes.COMMON_MIN_FILTER_SUMMARY).toNumber(),
      maxSummary: new Decimal(lot.attributes.COMMON_SUMMARY).toNumber(),
    },
  });
  const {
    control,
    getValues,
    formState: { errors, isSubmitting },
    handleSubmit,
  } = formMethods;

  const isRequired = useIsRequired(BidCreateSchema, getValues);

  const { serializeValue, deserializeValue } = useLotMultiplicatorValue(lot.type);

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
        isDirect: values.isDirect,
        deadline: values.deadline?.valueOf(),
        summary: String(values.summary),
        units: String(values.units),
        price: String(values.price),
        fdv: values.fdv ? String(values.fdv) : undefined,
      });

      if (portal && portal.resolve) portal.resolve(bid);
    },
    [portal, rpcSchema],
  );

  const onSubmit = useToastInnerCallback(createBid, {});

  const handleUnitsChange = useUnitsChange(formMethods);
  const handleSummaryChange = useSummaryChange(formMethods);
  const handlePriceChange = usePriceChange(formMethods, lot.type);
  const handleFdvChange = useFdvChange(formMethods, lot.type);

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
          <FormControl isRequired={isRequired('units')} isInvalid={Boolean(errors.summary)}>
            <FormLabel>{UnitsDescriptorDictionary.get(lot.attributes.COMMON_DIRECTION).label}</FormLabel>
            <Controller
              control={control}
              name="units"
              render={(props) => (
                <InputGroup>
                  <InputNumber
                    {...props.field}
                    placeholder={UnitsDescriptorDictionary.get(lot.attributes.COMMON_DIRECTION).placeholder}
                    onChange={(value) => {
                      const newValue = deserializeValue(value);
                      props.field.onChange(newValue);
                      handleUnitsChange(newValue);
                    }}
                    value={serializeValue(props.field.value)}
                    {...formatNumberProps()}
                  />
                  <InputRightElement>
                    <Text color="orange.500" fontSize="sm">
                      {UnitsDictionary.get(lot.type)}
                    </Text>
                  </InputRightElement>
                </InputGroup>
              )}
            />
          </FormControl>
          <FormControl isRequired={isRequired('summary')} isInvalid={Boolean(errors.units)}>
            <FormLabel>{SummaryDescriptorDictionary.get(lot.attributes.COMMON_DIRECTION).label}</FormLabel>
            <Controller
              control={control}
              name="summary"
              render={(props) => (
                <InputGroup>
                  <InputNumber
                    {...props.field}
                    placeholder={SummaryDescriptorDictionary.get(lot.attributes.COMMON_DIRECTION).placeholder}
                    onChange={(value) => {
                      props.field.onChange(value);
                      handleSummaryChange(value);
                    }}
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
        <HStack spacing="1rem" width="full">
          {lot.type !== 'SAFT' && (
            <FormControl isRequired={isRequired('fdv')} isInvalid={Boolean(errors.price)}>
              <FormLabel>{CommonFieldsDictionary.get('FDV').label}</FormLabel>
              <Controller
                control={control}
                name="fdv"
                render={(props) => (
                  <InputGroup>
                    <InputNumber
                      {...props.field}
                      placeholder={CommonFieldsDictionary.get('FDV').placeholder}
                      onChange={(value) => {
                        props.field.onChange(value);
                        handleFdvChange(value);
                      }}
                      isDisabled={Boolean(defaultValues.price)}
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
          <FormControl isRequired={isRequired('price')} isInvalid={Boolean(errors.price)}>
            <FormLabel>{PriceDescriptorDictionary.get(lot.type).label}</FormLabel>
            <Controller
              control={control}
              name="price"
              render={(props) => (
                <InputGroup>
                  <InputNumber
                    {...props.field}
                    placeholder={PriceDescriptorDictionary.get(lot.type).placeholder}
                    onChange={(value) => {
                      props.field.onChange(value);
                      handlePriceChange(value);
                    }}
                    isDisabled={Boolean(defaultValues.price)}
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
          <FormControl isRequired={isRequired('deadline')} isInvalid={Boolean(errors.deadline)}>
            <FormLabel>{CommonFieldsDictionary.get('DEADLINE').label}</FormLabel>
            <Controller
              control={control}
              name="deadline"
              render={(props) => <UIKit.DatePicker minDate={new Date()} {...props.field} />}
            />
          </FormControl>
          <VStack alignItems="start" width="full">
            <FormControl isRequired={isRequired('bidMakerType')}>
              <FormLabel>{CommonFieldsDictionary.get('BID_MAKER_TYPE').placeholder}</FormLabel>
              <Controller
                control={control}
                name="bidMakerType"
                render={(props) => (
                  <UILogic.ParticipantTypeSelect
                    {...props.field}
                    isInvalid={Boolean(props.fieldState.invalid)}
                    placeholder={CommonFieldsDictionary.get('BID_MAKER_TYPE').placeholder}
                  />
                )}
              />
            </FormControl>
            <Controller
              control={control}
              name="isDirect"
              render={({ field }) => (
                <UIKit.Checkbox checked={field.value} onChange={field.onChange}>
                  {CommonFieldsDictionary.get('DIRECT').label}
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
              render={(props) => <Input {...props.field} placeholder={CommonFieldsDictionary.get('TELEGRAM').label} />}
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
