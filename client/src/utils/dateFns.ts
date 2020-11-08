import * as datefns from 'date-fns';
import { pl } from 'date-fns/locale';

type FormatFunction = typeof datefns.format;

export const format: FormatFunction = (date, dateFormat, options) => (
  datefns.format(date, dateFormat, { locale: pl, ...options })
);
