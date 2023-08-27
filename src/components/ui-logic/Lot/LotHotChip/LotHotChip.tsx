import { Common } from '@components/icons';
import { Chip } from '@components/ui-kit';

export function LotHotChip() {
  return <Chip rightIcon={<Common.HotIcon w="0.75rem" h="0.75rem" />}>HOT!</Chip>;
}
