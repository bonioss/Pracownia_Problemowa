import {
  AltPaginatedApiResponse, api, ApiResponse, PaginatedApiResponse,
} from 'api';
import { TMPChild } from 'pages/PlaceOrderPage';
import {
  queryCache, useMutation, usePaginatedQuery, useQuery,
} from 'react-query';
import { FetchParams } from './agencies';
import { OrdersPeriod } from './auth';
import { Meal, MealType } from './meal';

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

export interface Order {
  paid: boolean;
  _id: string;
  agencyCode: string;
  kidCode: string;
  period: OrdersPeriod;
  price: number;
  comments: string;
  startDate: string;
  endDate: string;
}

export type OrderWithMeals = {
  meals: Omit<Meal, 'description'>[];
  kid: Omit<TMPChild, '_id'>;
} & Order;

export type OrdersFetchParams = {
  agencyCode?: string;
} & FetchParams;

export type OrderFetchParams = {
  id: string;
} & FetchParams;

export type KidOrdersFetchParams = {
  kidCode?: string;
} & FetchParams;

export interface RemoveMealParams {
  orderId: string;
  kidCode: string;
  mealId: string;
}

export type OrderMeal = Omit<Meal, 'description'>;
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

export const useGetAgencyOrders = (param: OrdersFetchParams) => (
  usePaginatedQuery(['orders', param], ({ agencyCode, ...params }: OrdersFetchParams) => (
    api.get<PaginatedApiResponse<Order>>(`/orders/agencyOrders/${agencyCode}`, { params }).then(res => res.data.data)
  ))
);

export const usePlaceOrder = () => useMutation(
  ({ kidCode, ...params }: OrderParams & {kidCode: string}) => (
    api.post<ApiResponse<number>>(`/orders/${kidCode}`, params).then(res => res.data)
  ),
);

export const usePayOrder = () => useMutation(
  (id: string) => api.post<ApiResponse>(`/orders/payment/${id}`).then(res => res.data),
  { onSuccess: () => queryCache.invalidateQueries('order') },
);

export const useOrder = (param: OrderFetchParams) => (
  usePaginatedQuery(['order', param], ({ id, ...params }: OrderFetchParams) => (
    api.get<AltPaginatedApiResponse<OrderWithMeals>>(`/orders/order/${id}`, { params }).then(res => res.data.data)
  ))
);

export const useKidOrders = (param: KidOrdersFetchParams) => (
  usePaginatedQuery(['orders', param], ({ kidCode, ...params }: KidOrdersFetchParams) => (
    api.get<PaginatedApiResponse<Order>>(`/orders/${kidCode}`, { params }).then(res => res.data.data)
  ))
);

export const useRemoveMeal = () => useMutation(
  ({ kidCode, mealId, orderId }: RemoveMealParams) => (
    api.delete<ApiResponse>(`/orders/order/${orderId}/kid/${kidCode}/meal/${mealId}`).then(res => res.data)
  ),
  { onSuccess: () => queryCache.invalidateQueries('order') },
);

export const useGetMyKid = () => (
  useQuery(['parent'], () => (
    api.get<ApiResponse<TMPChild[]>>('/parent/getMyKids').then(res => res.data.data)
  ))
);
