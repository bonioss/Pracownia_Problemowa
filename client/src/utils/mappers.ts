/* eslint-disable no-underscore-dangle */
import { OrdersPeriod } from 'api/auth';

export const periodLabel = (period: OrdersPeriod) => {
  switch (period) {
    case 'day': return 'codziennie';
    case 'month': return 'co miesiąc';
    case 'semestr': return 'co semestr';
    case 'week': return 'co tydzień';

    default: {
      const _exhaustiveCheck: never = period;
      return _exhaustiveCheck;
    }
  }
};
