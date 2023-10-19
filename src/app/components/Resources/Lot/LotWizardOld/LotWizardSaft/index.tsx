import { useMemo } from 'react';
import { useFormContext } from 'react-hook-form';

import { LotWizardSaftBuy } from './LotWizardSaftBuy';
import { LotWizardSaftSell } from './LotWizardSaftSell';

export function LotWizardSaft() {
  const { watch } = useFormContext();

  const direction = watch('direction');

  return useMemo(() => {
    switch (direction) {
      case 'BUY':
        return <LotWizardSaftBuy />;
      case 'SELL':
        return <LotWizardSaftSell />;
    }
  }, [direction]);
}
