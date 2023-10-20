import { Center, Circle, Icon, SquareProps, Text } from '@chakra-ui/react';
import { HiCheck } from 'react-icons/hi';

interface RadioCircleProps extends SquareProps {
  index: number;
  isCompleted: boolean;
  isActive: boolean;
}

export const StepCircle = (props: RadioCircleProps) => {
  const { index, isCompleted, isActive, ...squareProps } = props;
  return (
    <Circle
      size="8"
      bg={isCompleted ? 'orange.500' : 'inherit'}
      borderWidth={isCompleted ? '0' : '2px'}
      borderColor={isActive ? 'orange.500' : 'dark.300'}
      {...squareProps}
    >
      <Center>
        {isCompleted ? (
          <Icon as={HiCheck} color="white" boxSize="5" />
        ) : (
          <Text color={isActive ? 'orange.500' : 'dark.300'}>{index + 1}</Text>
        )}
      </Center>
    </Circle>
  );
};
