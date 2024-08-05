import { useMemo } from 'react';

import { Flex, FlexProps } from '@chakra-ui/react';

interface LotCardBadgeProps extends FlexProps {
  type: string;
}

export function LotCardBadge({ type, ...flexProps }: LotCardBadgeProps) {
  const background = useMemo(() => {
    switch (type.toLowerCase()) {
      case 'vip':
        return 'linear-gradient(121deg, #CF8E16 12.55%, #DAB36C 51.61%, #CB8C16 90.67%)';
      case 'hot':
        return 'linear-gradient(266deg, #FF9B3F 10%, #FF3216 100%)';
      case 'promo':
        return 'linear-gradient(106deg, #4E7FFE -1.74%, #DA48FF 94.35%)';
    }
  }, [type]);

  return (
    <Flex
      {...flexProps}
      background={background}
      color="white"
      minW="3.75rem"
      minH="1.625rem"
      alignItems="center"
      justifyContent="center"
      borderBottomRadius="0.5rem"
    >
      {type}
    </Flex>
  );
}
