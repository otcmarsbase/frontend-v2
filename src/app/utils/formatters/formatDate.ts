import { format } from 'date-fns';

export type FormatDateType = 'ONLY_DATE' | 'DATE_AND_TIME';

const formats: Record<FormatDateType, string> = {
  ONLY_DATE: 'dd/MM/yyyy',
  DATE_AND_TIME: 'dd/MM/yyyy hh:mm',
};

export function formatDate(date: number | Date, type: FormatDateType) {
  return format(date, formats[type]);
}
