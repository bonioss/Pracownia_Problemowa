import { api, ApiResponse, PaginatedApiResponse } from 'api';
import {
  queryCache, useMutation, usePaginatedQuery, useQuery,
} from 'react-query';
import { AgencyUser, OrdersPeriod } from './auth';

// #region types
export interface FetchParams {
  /** Strona wyników */
  page?: number;
  /** Limit wyników na stronę */
  limit?: number;
}

export interface Agency {
  /** Adres email przedstawiciela placówki */
  email: string;
  /** Nazwa placówki */
  name: string;
  /** Kod placówki */
  agencyCode: string;
  /** Okres zamówienia */
  ordersPeriod: OrdersPeriod;
}
// #endregion

/**
 * Hook do pobierania listy placówek
 * @param param Parametry pagiancji
 */
export const useAgencies = (param?: FetchParams) => (
  usePaginatedQuery(['agencies', param], (params: FetchParams) => (
    api.get<PaginatedApiResponse<Agency>>('/agencies', { params }).then(res => res.data.data)
  ))
);

/**
 * Hook do pobierania informacji o placówce
 * @param code Kod placówki
 */
export const useAgency = (code: string) => (
  useQuery(['agencies', code], (agencyCode: string) => (
    api.get<ApiResponse<AgencyUser>>(`/agencies/${agencyCode}`).then(res => res.data.data)
  ))
);

/**
 * Hook do usuwania placówki
 * @param code Kod placówki
 */
export const useDeleteAgency = () => useMutation(
  (code: string) => api.delete<ApiResponse>(`/agencies/${code}`).then(res => res.data),
  {
    onSuccess: () => {
      queryCache.invalidateQueries('agencies');
    },
  },
);
