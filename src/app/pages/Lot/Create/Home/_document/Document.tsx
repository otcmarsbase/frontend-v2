import { useMemo } from 'react';
import { useFormContext } from 'react-hook-form';

import { DocumentSafe } from './Safe';
import { DocumentSaft } from './Saft';
import { DocumentTokenWarrant } from './TokenWarrant';

export function Document() {
  const { watch } = useFormContext();
  const type = watch('type');

  return useMemo(() => {
    switch (type) {
      case 'SAFE':
        return <DocumentSafe />;
      case 'SAFT':
        return <DocumentSaft />;
      case 'TOKEN_WARRANT':
        return <DocumentTokenWarrant />;
    }
  }, [type]);
}
