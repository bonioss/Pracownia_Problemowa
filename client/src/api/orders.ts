import {
  AltPaginatedApiResponse, api, ApiResponse, PaginatedApiResponse,
} from 'api';
import {
  queryCache, useMutation, usePaginatedQuery, useQuery,
} from 'react-query';
import { Agency, FetchParams } from './agencies';
import { OrdersPeriod } from './auth';
import { Kid } from './kid';
import { Meal, MealType } from './meal';

// #region types
export type OrderDay = 0 | 1 | 2 | 3 | 4 | 5 | 6;
export type DayMeals = Record<MealType, boolean>;
export type Meals = Record<OrderDay, DayMeals>;
export interface OrderParams {
  /** Data początkowa okresu */
  startDate: Date;
  /** Lista zamówień */
  orders: Array<{
    day: OrderDay;
    types: MealType[];
  }>;
  /** Uwagi do zamówienia */
  comments: string;
  /** Flaga Czy uwzględniać dni świąteczne */
  holidays: boolean;
}

export interface Order {
  /** Flaga czy zamówienie jest opłacone */
  paid: boolean;
  /** Id zamówienia */
  _id: string;
  /** Kod placówki */
  agencyCode: string;
  /** Kod dziecka */
  kidCode: string;
  /** Okres zamówieniowy */
  period: OrdersPeriod;
  /** Cena */
  price: number;
  /** Uwagi */
  comments: string;
  /** Data początkowa okresu */
  startDate: string;
  /** Data końcowa okresu */
  endDate: string;
}

export type OrderWithMeals = {
  /** Posiłki */
  meals: Omit<Meal, 'description'>[];
  /** Dziecko */
  kid: Omit<Kid, '_id'>;
} & Order;

export type OrdersFetchParams = {
  /** Kod placówki */
  agencyCode?: string;
} & FetchParams;

export type OrderFetchParams = {
  /** Id zamówienia */
  id: string;
} & FetchParams;

export type KidOrdersFetchParams = {
  /** Kod dziecka */
  kidCode?: string;
} & FetchParams;

export interface RemoveMealParams {
  /** Id zamówienia */
  orderId: string;
  /** Kod dziecka */
  kidCode: string;
  /** Id posiłku */
  mealId: string;
}

export type OrdersStats = {
  /** Placówka */
  agency: Agency['name'];
} & Record<Meal['type'], number>;

export interface OrderSummary {
  /** Cena zamówienia */
  price: number;
  /** Portfel */
  wallet: number;
}

export type OrderWithKid = {
  kid: Pick<Kid, 'firstName' | 'lastName' | 'kidCode'>;
} & Order;

export type OrderMeal = Omit<Meal, 'description'>;
// #endregion

/**
 * Hook do pobierania najwcześniejszą datę na ktorą może być utworzone zamówienie
 * @param kidCode Kod dziecka
 */
export const useEarliestOrderDate = (kidCode?: string) => (
  useQuery(['orderDate', kidCode], (code: string) => (
    api.get<ApiResponse<string>>(`/orders/date/${code}`).then(res => res.data.data)
  ), { enabled: kidCode })
);

/**
 * Hook do pobierania ceny zamówienia
 * @param kidCode Kod dziecka
 */
export const useGetOrderPrice = () => useMutation(
  ({ kidCode, ...params }: OrderParams & { kidCode: string }) => (
    api.post<ApiResponse<OrderSummary>>(`/orders/summary/${kidCode}`, params).then(res => res.data)
  ),
);

/**
 * Hook do pobierania listy zamówień danej placówki
 * @param param Parametry pagiancji
 */
export const useGetAgencyOrders = (param: OrdersFetchParams) => (
  usePaginatedQuery(['orders', param], ({ agencyCode, ...params }: OrdersFetchParams) => (
    api.get<PaginatedApiResponse<OrderWithKid>>(`/orders/agencyOrders/${agencyCode}`, { params }).then(res => res.data.data)
  ))
);

/**
 * Hook do tworzenia zamówienia
 * @param kidCode Kod dziecka
 */
export const usePlaceOrder = () => useMutation(
  ({ kidCode, ...params }: OrderParams & { kidCode: string }) => (
    api.post<ApiResponse<number>>(`/orders/${kidCode}`, params).then(res => res.data)
  ),
);

/**
 * Hook do opłacenia zamówienia
 * @param id Id zamówienia
 */
export const usePayOrder = () => useMutation(
  (id: string) => api.post<ApiResponse>(`/orders/payment/${id}`).then(res => res.data),
  { onSuccess: () => queryCache.invalidateQueries('order') },
);

/**
 * Hook do pobierania zamówienia
 * @param param Parametry pagiancji
 */
export const useOrder = (param: OrderFetchParams) => (
  usePaginatedQuery(['order', param], ({ id, ...params }: OrderFetchParams) => (
    api.get<AltPaginatedApiResponse<OrderWithMeals>>(`/orders/order/${id}`, { params }).then(res => res.data.data)
  ))
);

/**
 * Hook do pobierania zamówienia danego dziecka
 * @param param Parametry pagiancji
 */
export const useKidOrders = (param: KidOrdersFetchParams) => (
  usePaginatedQuery(['orders', param], ({ kidCode, ...params }: KidOrdersFetchParams) => (
    api.get<PaginatedApiResponse<Order>>(`/orders/${kidCode}`, { params }).then(res => res.data.data)
  ), { enabled: param.kidCode })
);

/**
 * Hook do usuwania dania z zamówienia
 * @param kidCode Kod dziecka
 * @param mealId Id posiłku
 * @param orderId Id zamówienia
 */
export const useRemoveMeal = () => useMutation(
  ({ kidCode, mealId, orderId }: RemoveMealParams) => (
    api.delete<ApiResponse>(`/orders/order/${orderId}/kid/${kidCode}/meal/${mealId}`).then(res => res.data)
  ),
  {
    onSuccess: () => {
      queryCache.invalidateQueries('order');
      queryCache.invalidateQueries('me');
    },
  },
);

/**
 * Hook do pobierania listy dzieci
 */
export const useAllKids = () => (
  useQuery(['kids'], () => (
    api.get<ApiResponse<Kid[]>>('/orders/create/kids').then(res => res.data.data)
  ))
);

/**
 * Hook do pobierania statystyk zamówień
 * @param statsDate Data
 */
export const useOrdersStats = (statsDate: Date) => (
  useQuery(['stats', statsDate], (date: Date) => (
    api.get<ApiResponse<OrdersStats[]>>('/orders/stats/summary', { params: { date } }).then(res => res.data.data)
  ))
);
