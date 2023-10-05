import {
  Box,
  Text,
  RangeSlider,
  RangeSliderFilledTrack,
  RangeSliderThumb,
  RangeSliderTrack,
  VStack,
} from '@chakra-ui/react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

export type MinMax = [number, number];

export interface RangeNumberSliderProps {
  minMax: MinMax;
  value: MinMax;
  step?: number;
  defaultValue?: MinMax;
  formatValue?: (value: number) => React.ReactNode;
  onChange?: (range: MinMax) => void;
}

export const RangeNumberSlider: React.FC<RangeNumberSliderProps> = ({
  minMax,
  value = [minMax[0]/2, minMax[1]/2],
  defaultValue,
  step = 0,
  onChange,
  formatValue,
}) => {
  return (
    <VStack w="full" alignItems="start" gap="0.15rem">
      <RangeSlider
        defaultValue={defaultValue}
        value={value}
        min={minMax[0]}
        max={minMax[1]}
        step={step}
        onChange={onChange}
      >
        <RangeSliderTrack bg="dark.500">
          <RangeSliderFilledTrack bg="orange.600" />
        </RangeSliderTrack>
        <RangeSliderThumb
          boxShadow="none"
          zIndex={0}
          boxSize={5}
          display="flex"
          alignItems="center"
          justifyContent="center"
          index={0}
        >
          <Box as={FiChevronLeft} color="orange.500" w="1rem" h="1rem" />
          <Text position="absolute" fontSize="3xs" bottom="-1.5rem">
            {formatValue ? formatValue(value[0]) : value[0]}
          </Text>
        </RangeSliderThumb>
        <RangeSliderThumb boxShadow="none" zIndex={0} boxSize={5} index={1}>
          <VStack position="relative">
            <Box as={FiChevronRight} color="orange.500" w="1rem" h="1rem" />
            <Text position="absolute" fontSize="3xs" bottom="-1.5rem">
              {formatValue ? formatValue(value[1]) : value[1]}
            </Text>
          </VStack>
        </RangeSliderThumb>
      </RangeSlider>
    </VStack>
  );
};
