import * as datefns from 'date-fns';
import { pl } from 'date-fns/locale';

type FormatFunction = typeof datefns.format;

/** Funkcja do formatowania dat z uwzględnieniem polskiej lokalizacji */
export const format: FormatFunction = (date, dateFormat, options) => (
  datefns.format(date, dateFormat, { locale: pl, ...options })
);
