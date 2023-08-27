import { format } from 'date-fns';

export type FormatDateType = 'ONLY_DATE';

export function formatDate(date: number | Date, type: FormatDateType) {
  const formatType = type === 'ONLY_DATE' ? 'dd/MM/yyyy' : void 0;
  return format(date, formatType);
}
