import { api, ApiResponse, PaginatedApiResponse } from 'api';
import { queryCache, useMutation, usePaginatedQuery } from 'react-query';
import { FetchParams } from './agencies';

interface MealsParams {
  date: Date;
}

export type MealType = 'breakfast' | 'lunch' | 'soup' | 'main dish' | 'dinner' | 'tea time';
export const MEAL_TYPES = ['breakfast', 'lunch', 'soup', 'main dish', 'dinner', 'tea time'] as const;
export interface Meal {
  /** Id posiłku */
  _id: string;
  /** Typ posiłku */
  type: MealType;
  /** Nazwa posiłku */
  description: string;
  /** Data */
  date: Date;
  /** Cena */
  price: number;
}

export type NewMeal = Omit<Meal, '_id' | 'price'>;

/**
 * Hook do pobierania listy posiłków
 * @param param Parametry pagiancji
 */
export const useMeals = (param: FetchParams & MealsParams) => (
  usePaginatedQuery(['meals', param], (params: FetchParams) => (
    api.get<PaginatedApiResponse<Meal>>('/meal/myMeals', { params }).then(res => res.data.data)
  ))
);

/**
 * Hook do dodawania posiłku
 * @param data Dane posiłku
 */
export const useAddMeal = () => useMutation(
  (data: NewMeal) => api.post<ApiResponse>('/meal/addMeal', data).then(res => res.data),
  { onSuccess: () => queryCache.invalidateQueries('meals') },
);

/**
 * Hook do usunięcia posiłku
 * @param mealId Id posiłku
 */
export const useDeleteMeal = () => useMutation(
  (mealId: string) => api.delete<ApiResponse>(`/meal/${mealId}`).then(res => res.data),
  { onSuccess: () => queryCache.invalidateQueries('meals') },
);
