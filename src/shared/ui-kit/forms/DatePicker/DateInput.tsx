import { Input, InputGroup, InputLeftElement, InputProps, forwardRef } from '@chakra-ui/react';
import { UIIcons } from '@shared/ui-icons';

export const DateInput = forwardRef<InputProps, 'input'>((props, ref) => (
  <InputGroup>
    <InputLeftElement>
      <UIIcons.Common.CalendarIcon />
    </InputLeftElement>
    <Input {...props} ref={ref} />
  </InputGroup>
));
