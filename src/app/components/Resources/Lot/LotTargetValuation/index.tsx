import { memo } from 'react';

import { Text } from '@chakra-ui/react';
import { TypographyProps } from '@chakra-ui/styled-system';
import { UIKit } from '@shared/ui-kit';

export interface LotTargetValuationProps {
  value: string;
  fontSize?: TypographyProps['fontSize']
}

export const LotTargetValuation = memo<LotTargetValuationProps>(({ value, fontSize }) => {
  const TargetValuationComponent = (
    <UIKit.MoneyText
      value={value}
      currencyPlacement='end'
      fontSize={fontSize}
      currencyTextProps={{
        color: 'dark.50',
      }}
    />
  )
  const NegotiableComponent = <Text fontSize={fontSize} whiteSpace='nowrap'>Negotiable</Text>

  return <>{Number(value) ? TargetValuationComponent : NegotiableComponent}</>
})
