import { Flex, FlexProps } from '@chakra-ui/react';

export interface CountdownItemProps extends FlexProps {
  value: string;
  isTransparent?: boolean;
}

export const CountdownItem: React.FC<CountdownItemProps> = ({ value, isTransparent, ...flexProps }) => {
  return (
    <Flex
      alignItems="center"
      justifyContent="center"
      padding="0.25rem"
      bg={isTransparent ? '' : 'dark.800'}
      fontWeight="700"
      rounded="micro"
      lineHeight="1"
      width="1.25rem"
      height="1.7rem"
      {...flexProps}
    >
      {value}
    </Flex>
  );
};
