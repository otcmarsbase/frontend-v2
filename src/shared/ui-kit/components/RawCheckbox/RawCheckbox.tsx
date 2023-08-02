import { Checkbox, FormControl, HStack } from '@chakra-ui/react';
export interface IRawCheckboxProps<NameType extends string> {
  value: boolean | undefined;
  label: string;
  id: NameType;
  handleChange: (name: NameType, value: boolean) => void;
}

export const RawCheckbox = <NameType extends string = any>({
  value,
  label,
  id,
  handleChange,
}: IRawCheckboxProps<NameType>) => {
  return (
    <HStack>
      <FormControl>
        <Checkbox onChange={() => handleChange(id, !value)} isChecked={value}>
          {label}
        </Checkbox>
      </FormControl>
    </HStack>
  );
};
