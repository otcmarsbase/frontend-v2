import { Common } from '@shared/types';
import { Filter, Select } from '@shared/ui-kit';

export const DirectionFilter: React.FC = () => {
  return (
    <Filter<Common.Direction[]>
      render={({ value, onChange }) => {
        return null;
        // return (
        //   <Select
        //     placeholder="Choose type"
        //     size="sm"
        //     isMulti
        //     value={getValues('typesOfBuyer')}
        //     onChange={(value) => onChange(value)}
        //     options={InvAccTypes.map((sellerType) => ({
        //       label: sellerType,
        //       value: sellerType,
        //     }))}
        //   />
        // );
      }}
    />
  );
};
