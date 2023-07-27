import { useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import Layouts from '@app/layouts';
import { useStore } from '@app/store';
import { HStack, VStack, Text, Heading, Badge, Box } from '@chakra-ui/react';
import { FormSection, FormWrapper, useForm } from '@shared/ui-kit';
import _ from 'lodash';
import { ProjectInfo, Summary, TokenInfo, TokenInfoSafe } from './components';
import { SellOfferSchema } from './schemas';
import { hasAllProperties } from './utils';

export const Create: React.FC = observer(() => {
  const { SellOfferStore } = useStore();
  const {
    setBasicInfo,
    setStepOneSuccess,
    setStepOneWasOnSuccess,
    stepOneWasOnSuccess,
    stepOneSuccess,
  } = SellOfferStore;

  const form = useForm({
    schema: SellOfferSchema,
    defaultValues: {
      typesOfBuyer: [],
      typesOfSeller: [],
    },
  });

  const data = form.watch();

  useEffect(() => {
    const hasAllFieldsDirty = hasAllProperties(form.formState.dirtyFields, [
      'projectName',
      'projectWebsite',
      'telegram',
    ]);
    if (hasAllFieldsDirty && _.isEmpty(form.formState.errors)) {
      setBasicInfo(data);
      setStepOneSuccess(true);
      setStepOneWasOnSuccess(true);
    } else {
      setBasicInfo({});
      setStepOneSuccess(false);
    }
  }, [data]);

  // const prevTargetFDV = usePrevious(target_fdv);
  // const prevPricePerEq = usePrevious(price_per_equity);
  //
  // useEffect(() => {
  //     if (target_fdv && price_per_equity) {
  //         if (prevTargetFDV !== target_fdv) {
  //             setValue('price_per_equity', (Number(target_fdv) + 1).toString())
  //         }
  //         if (prevPricePerEq !== price_per_equity) {
  //             setValue('target_fdv', (Number(price_per_equity) + 2).toString())
  //         }
  //     }
  // }, [data])

  return (
    <HStack justifyContent={'center'} mt={'20px'} gap="2rem">
      <FormWrapper width="100%">
        <VStack gap="0" alignItems="start" marginBottom="1.5rem">
          <Heading size="md" fontFamily="promo">
            Creating an offer
          </Heading>
          <Text color="dark.50" fontSize="sm">
            Set suitable conditions
          </Text>
        </VStack>

        <VStack gap="1.5rem">
          <FormSection>
            <HStack gap="0.5rem" marginBottom="2.5rem">
              <Badge>1 step</Badge>
              <Text fontSize="sm" fontWeight="bold">
                Project info
              </Text>
            </HStack>
            <ProjectInfo
              // @ts-ignore
              form={form}
            />
          </FormSection>

          {stepOneWasOnSuccess || stepOneSuccess ? (
            <>
              {data.lotType === 'SAFE' ? (
                <FormSection>
                  <HStack gap="0.5rem" marginBottom="2.5rem">
                    <Badge>2 step</Badge>
                    <Text fontSize="sm" fontWeight="bold">
                      Details about the token
                    </Text>
                  </HStack>
                  <TokenInfoSafe
                    // @ts-ignore
                    form={form}
                  />
                </FormSection>
              ) : (
                <FormSection>
                  <HStack gap="0.5rem" marginBottom="2.5rem">
                    <Badge>2 step</Badge>
                    <Text fontSize="sm" fontWeight="bold">
                      Details about the token
                    </Text>
                  </HStack>
                  <TokenInfo
                    // @ts-ignore
                    form={form}
                  />
                </FormSection>
              )}
            </>
          ) : null}
        </VStack>
      </FormWrapper>
      <Box position="sticky" top="0" right="0" alignSelf="start">
        <Summary onPublishLot={() => {}} />
      </Box>
    </HStack>
  );
});

Create.getLayout = ({ children }) => {
  return <Layouts.AppLayout>{children}</Layouts.AppLayout>;
};

export default Create;
