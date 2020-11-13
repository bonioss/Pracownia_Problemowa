import { api, ApiResponse } from 'api';
import { useMutation, useQuery } from 'react-query';
import { MealType } from './meal';

// #region types
export type OrderDay = 0 | 1 | 2 | 3 | 4 | 5 | 6;
export type DayMeals = Record<MealType, boolean>;
export type Meals = Record<OrderDay, DayMeals>;
export interface OrderParams {
  startDate: Date;
  orders: Array<{
    day: OrderDay;
    types: MealType[];
  }>;
  comments: string;
  holidays: boolean;
}
// #endregion

export const useEarliestOrderDate = (kidCode?: string) => (
  useQuery(['orderDate', kidCode], (code: string) => (
    api.get<ApiResponse<string>>(`/orders/date/${code}`).then(res => res.data.data)
  ), { enabled: kidCode })
);

export const useGetOrderPrice = () => useMutation(
  ({ kidCode, ...params }: OrderParams & {kidCode: string}) => (
    api.post<ApiResponse<number>>(`/orders/summary/${kidCode}`, params).then(res => res.data)
  ),
);

export const usePlaceOrder = () => useMutation(
  ({ kidCode, ...params }: OrderParams & {kidCode: string}) => (
    api.post<ApiResponse<number>>(`/orders/${kidCode}`, params).then(res => res.data)
  ),
);
