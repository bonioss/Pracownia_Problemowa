/* eslint-disable no-underscore-dangle */
import { OrdersPeriod } from 'api/auth';
import { MealType } from 'api/meal';
import {
  FoodVariant, Noodles, Pasta, Food, FoodCroissant, Tea,
} from 'mdi-material-ui';

/** Funkcja zwracająca etykietę dla danego okresu zamówienia */
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

/** Funkcja zwracająca etykietę i ikonę dla danego typu posiłku */
export const mealLabelAndIcon = (mealType: MealType) => {
  switch (mealType) {
    case 'breakfast': return { Icon: FoodVariant, label: 'Śniadanie' };
    case 'dinner': return { Icon: Food, label: 'Obiad' };
    case 'lunch': return { Icon: FoodCroissant, label: 'Drugie śniadanie' };
    case 'main dish': return { Icon: Pasta, label: 'Danie główne' };
    case 'soup': return { Icon: Noodles, label: 'Zupa' };
    case 'tea time': return { Icon: Tea, label: 'Podwieczorek' };

    default: {
      const _exhaustiveCheck: never = mealType;
      return _exhaustiveCheck;
    }
  }
};
