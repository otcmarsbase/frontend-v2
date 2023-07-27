import { observer } from 'mobx-react-lite';
import { useStore } from '@app/store';
import { Box, Button, VStack, Heading, Text } from '@chakra-ui/react';
import { SummaryStep } from '@shared/ui-kit';
import { StepLabels, StepTypes, StepsText } from './constants';

interface IStepWrapperProps {
  isSuccessFilled: boolean;
  step: StepTypes;
  data: any;
}

const StepWrapper = ({ isSuccessFilled, step, data }: IStepWrapperProps) => {
  const fields = Object.entries(StepsText[step]).reduce(
    (acc, curValue) => [
      ...acc,
      {
        name: curValue[1],
        value: data[curValue[0]],
      },
    ],
    [] as { name: string; value: any }[],
  );

  return (
    <SummaryStep
      isSuccessFilled={isSuccessFilled}
      stepData={{
        id: StepLabels[step].index,
        label: StepLabels[step].label,
      }}
      fields={fields}
    />
  );
};

export interface SummaryProps {
  onPublishLot: () => void;
}

export const Summary = observer(({ onPublishLot }: SummaryProps) => {
  const { SellOfferStore } = useStore();

  return (
    <VStack layerStyle="darkGradientBordered" alignSelf="start">
      <Box alignSelf="start" mb="1.5rem">
        <Heading size="md" fontFamily="promo">
          Final selection
        </Heading>
        <Text fontSize="sm" color="dark.50">
          Set suitable conditions
        </Text>
      </Box>
      <StepWrapper
        isSuccessFilled={SellOfferStore.stepOneSuccess}
        step={StepTypes.FIRST_STEP}
        data={SellOfferStore.basicInfo}
      />
      <StepWrapper
        isSuccessFilled={false}
        step={StepTypes.SECOND_STEP}
        data={{}}
      />
      <StepWrapper
        isSuccessFilled={false}
        step={StepTypes.THIRD_STEP}
        data={{}}
      />
      <Button onClick={onPublishLot}>Publish Lot</Button>
    </VStack>
  );
});
