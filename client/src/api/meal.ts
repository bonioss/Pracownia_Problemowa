import { api, ApiResponse, PaginatedApiResponse } from 'api';
import { queryCache, useMutation, usePaginatedQuery } from 'react-query';
import { FetchParams } from './agencies';

interface MealsParams {
  date: Date;
}

export type MealType = 'breakfast' | 'lunch' | 'soup' | 'main dish' | 'dinner' | 'teatime';
export const MEAL_TYPES = ['breakfast', 'lunch', 'soup', 'main dish', 'dinner', 'teatime'] as const;
export interface Meal {
  _id: string;
  type: MealType;
  description: string;
  date: Date;
  price: number;
}

export type NewMeal = Omit<Meal, '_id'>;

export const useMeals = (param: FetchParams & MealsParams) => (
  usePaginatedQuery(['meals', param], (params: FetchParams) => (
    api.get<PaginatedApiResponse<Meal>>('/meal/myMeals', { params }).then(res => res.data.data)
  ))
);

export const useAddMeal = () => useMutation(
  (data: NewMeal) => api.post<ApiResponse>('/meal/addMeal', data).then(res => res.data),
  { onSuccess: () => queryCache.invalidateQueries('meals') },
);

export const useDeleteMeal = () => useMutation(
  (mealId: string) => api.delete<ApiResponse>(`/meal/${mealId}`).then(res => res.data),
  { onSuccess: () => queryCache.invalidateQueries('meals') },
);
