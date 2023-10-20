import { Common } from '@shared/ui-icons';
import { Chip } from '@shared/ui-kit';

export function LotHotChip() {
  return <Chip rightIcon={<Common.HotIcon w="0.75rem" h="0.75rem" />}>HOT!</Chip>;
}
