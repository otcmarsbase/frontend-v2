import { useMemo, useState } from 'react';

import { LocationDictionary } from '@app/dictionary';
import { CommonSchema } from '@schema/common';
import { UIKit } from '@shared/ui-kit';

export type LocationSelectProps = Omit<
  React.ComponentProps<typeof UIKit.SelectSync<CommonSchema.Country>>,
  'items' | 'renderItem'
>;

export const LocationSelect: React.FC<LocationSelectProps> = (props) => {
  const [search, setSearch] = useState('');
  const items = useMemo(
    () =>
      LocationDictionary.entries()
        .filter(([, value]) => (search ? value.name.toLowerCase().includes(search.toLowerCase()) : true))
        .map(([key]) => key),
    [search],
  );

  return (
    <UIKit.SelectSync<CommonSchema.Country>
      {...props}
      onSearch={setSearch}
      renderItem={(item) => LocationDictionary.get(item).name}
      items={items}
    />
  );
};
