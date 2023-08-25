import React, { memo, useCallback, useEffect, useState } from 'react';

// import { LotViewDefaultValues } from '@app/pages/dashboard/lot/consts';
// import { LotViewSchema } from '@app/pages/dashboard/lot/schemas';
// import { TLotModalFields } from '@app/pages/dashboard/lot/types';
// import {
//   AccountTypes,
//   AccountTypesKeys,
// } from '@app/pages/offers/create/components/ProjectInfo/types';
import {
  VStack,
  Text,
  HStack,
  Box,
  Input,
  Checkbox,
  Heading,
  Tooltip,
  Button,
  InputGroup,
  InputRightElement,
} from '@chakra-ui/react';
import { PortalProps } from '@packages/react-portal';
import { Common } from '@shared/types';
import { FormBlockElement, FormField, InfoIcon, Modal, RadioButtons, Select, useForm } from '@shared/ui-kit';
import { LotViewDefaultValues } from 'src/app/pages/dashboard/lot/consts';
import { LotViewSchema } from 'src/app/pages/dashboard/lot/schemas';
import { TLotModalFields } from 'src/app/pages/dashboard/lot/types';
import { AccountTypes, AccountTypesKeys } from 'src/app/pages/offers/create/components/ProjectInfo/types';

export interface ChooseOfferTypeModalProps extends PortalProps {
  direction: Common.Direction;
}

//todo
const LOCATIONS = ['Maycop', 'LS', 'LA'];

const BID_MODAL_FIELDS_BY_TYPE_OF_DEAL: Record<Common.Direction, any> = {
  SELL: [
    {
      label: 'I Want to Sell',
      fieldName: 'amountToSell' as TLotModalFields,
    },
    {
      label: 'I Want to Recive',
      fieldName: 'getFunds' as TLotModalFields,
    },
  ],
  BUY: [
    {
      label: 'I Want to Buy',
      fieldName: 'amountToBuy' as TLotModalFields,
    },
    {
      label: 'I Take funds',
      fieldName: 'giveFunds' as TLotModalFields,
    },
  ],
};
export const ChooseBidsModal: React.FC<ChooseOfferTypeModalProps> = memo(({ portal, direction }) => {
  console.log('direction', direction, BID_MODAL_FIELDS_BY_TYPE_OF_DEAL[direction]);
  const form = useForm({
    schema: LotViewSchema,
    defaultValues: LotViewDefaultValues,
  });
  const [isValid, setIsValid] = useState(false);

  const data = form.watch();
  useEffect(() => {
    const { dirtyFields } = form.formState;
    const validFrom = dirtyFields.hasOwnProperty('giveFunds') && dirtyFields.hasOwnProperty('amountToSell');
    setIsValid(validFrom);
  }, [data, form.formState]);

  const { register, getValues, formState, setValue } = form;
  const { errors } = formState;
  const onClose = useCallback(() => {
    if (portal && portal.resolve) portal.resolve(null);
  }, [portal]);

  const onSubmit = useCallback(
    (field) => {
      if (portal && portal.resolve) portal.resolve(field);
      form.reset();
    },
    [form, portal],
  );

  const onPlaceBid = () => {
    //todo request + close modal
    onSubmit('some field');
  };

  const [forSaleModel, serForSaleModel] = useState('Entity');

  function setForSaleModel(model: any) {
    serForSaleModel(model);
    // sellOfferStore.setTypeOfPricingModel(btnId)
  }

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
      maxW="30rem"
      variant="brand"
    >
      <VStack padding="none" gap="1.5rem" h="100%">
        <VStack gap="0.75rem" w="100%">
          <HStack w="100%">
            <FormBlockElement
              label={
                <HStack>
                  <Heading variant="h5">{BID_MODAL_FIELDS_BY_TYPE_OF_DEAL[direction][0].label}</Heading>
                  <Tooltip label={BID_MODAL_FIELDS_BY_TYPE_OF_DEAL[direction][0].label} aria-label="A tooltip">
                    <InfoIcon bg="dark.50" w="0.52081rem" h="0.52081rem" />
                  </Tooltip>
                </HStack>
              }
              // isRequired={isRequired('lockupPeriod')}
            >
              <InputGroup>
                <FormField
                  register={register}
                  errors={errors}
                  name={BID_MODAL_FIELDS_BY_TYPE_OF_DEAL[direction][0].fieldName}
                  value={getValues(BID_MODAL_FIELDS_BY_TYPE_OF_DEAL[direction][0].fieldName)}
                  component={<Input type="number" placeholder={'Amount'} />}
                />
                <InputRightElement>
                  <Text color="orange.500">$</Text>
                </InputRightElement>
              </InputGroup>
            </FormBlockElement>

            <FormBlockElement
              label={
                <HStack>
                  <Heading variant="h5">{BID_MODAL_FIELDS_BY_TYPE_OF_DEAL[direction][1].label}</Heading>
                  <Tooltip label={BID_MODAL_FIELDS_BY_TYPE_OF_DEAL[direction][1].label} aria-label="A tooltip">
                    <InfoIcon bg="dark.50" w="0.52081rem" h="0.52081rem" />
                  </Tooltip>
                </HStack>
              }
              // isRequired={isRequired('lockupPeriod')}
            >
              <InputGroup>
                <FormField
                  register={register}
                  errors={errors}
                  name={BID_MODAL_FIELDS_BY_TYPE_OF_DEAL[direction][1].fieldName}
                  value={getValues(BID_MODAL_FIELDS_BY_TYPE_OF_DEAL[direction][1].fieldName)}
                  component={<Input type="number" placeholder={'Amount'} />}
                />
                <InputRightElement>
                  <Box color="orange.500">$</Box>
                </InputRightElement>
              </InputGroup>
            </FormBlockElement>
          </HStack>
          <FormBlockElement
            label={'Who are you?'}
            grid={{ cols: 1, gap: '0.5rem' }}
            // isRequired={isRequired('lockupPeriod')}
          >
            <Select
              placeholder="Type"
              size="sm"
              isDisabled={data.isUserDirectBuyer}
              value={getValues('typeOfUser')}
              // @ts-ignore
              onChange={(value) => setValue('typeOfUser', value)}
              options={AccountTypesKeys.map((sellerType) => ({
                label: AccountTypes[sellerType],
                value: sellerType,
              }))}
            />
            <FormField
              register={register}
              name={'isUserDirectBuyer'}
              value={getValues('isUserDirectBuyer')}
              component={<Checkbox>{'I’m the direct seller'}</Checkbox>}
            />
          </FormBlockElement>

          <FormBlockElement
            label={'Locate'}
            grid={{ cols: 1, gap: '0.5rem' }}
            // isRequired={isRequired('lockupPeriod')}
          >
            <Select
              placeholder="Type"
              size="sm"
              value={getValues('location')}
              // @ts-ignore
              onChange={(value) => setValue('location', value)}
              options={LOCATIONS.map((location) => ({
                label: location,
                value: location,
              }))}
            />
            <FormField
              register={register}
              name={'readyForKYC'}
              value={getValues('readyForKYC')}
              component={<Checkbox>{'Ready for KYC&KYB'}</Checkbox>}
            />
            {/*<Tooltip label="Ready for KYC&KYB" aria-label='A tooltip'>*/}
            {/*    <InfoIcon opacity='0.6' w='1rem' h='1rem'/>*/}
            {/*</Tooltip>*/}
          </FormBlockElement>
          <HStack w={'100%'}>
            <RadioButtons
              w={'100%'}
              value={forSaleModel}
              items={[
                { value: 'Entity', label: 'Entity' },
                { value: 'Individual', label: 'Individual' },
              ]}
              onChange={setForSaleModel}
            />
          </HStack>
        </VStack>
        <Button onClick={onPlaceBid} w="full" isDisabled={!isValid} layerStyle="brandLinearGradient" size="xl">
          Place bid
        </Button>
      </VStack>
    </Modal>
  );
});
