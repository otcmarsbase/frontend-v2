import { useMemo } from 'react';
import { useFormContext } from 'react-hook-form';

import { LotWizardSafe } from './LotWizardSafe';
import { LotWizardSaft } from './LotWizardSaft';
import { LotWizardTokenWarrant } from './LotWizardTokenWarrant';

export function LotWizardType() {
  const { watch } = useFormContext();
  const type = watch('type');

  return useMemo(() => {
    switch (type) {
      case 'SAFE':
        return <LotWizardSafe />;
      case 'SAFT':
        return <LotWizardSaft />;
      case 'TOKEN_WARRANT':
        return <LotWizardTokenWarrant />;
    }
  }, [type]);
}
