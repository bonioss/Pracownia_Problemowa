import { api, ApiResponse, PaginatedApiResponse } from 'api';
import { useMutation, usePaginatedQuery } from 'react-query';
import { FetchParams } from './agencies';

interface MealsParams {
  date: Date;
}

export type MealType = 'breakfast' | 'lunch' | 'soup' | 'main dish' | 'dinner' | 'teatime';
export const MEAL_TYPES = ['breakfast', 'lunch', 'soup', 'main dish', 'dinner', 'teatime'] as const;
export interface Meal {
  type: MealType;
  description: string;
  date: Date;
  price: number;
}

export const useMeals = (param: FetchParams & MealsParams) => (
  usePaginatedQuery(['meals', param], (params: FetchParams) => (
    api.get<PaginatedApiResponse<Meal>>('/meal/myMeals', { params }).then(res => res.data.data)
  ))
);

export const useAddMeal = () => useMutation(
  (data: Meal) => api.post<ApiResponse>('/meal/addMeal', data).then(res => res.data),
);
