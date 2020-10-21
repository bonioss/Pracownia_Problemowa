import { api, ApiResponse, PaginatedApiResponse } from 'api';
import {
  queryCache, useMutation, usePaginatedQuery, useQuery,
} from 'react-query';
import { AgencyUser, OrdersPeriod } from './auth';

// #region types
export interface FetchParams {
  page?: number;
  limit?: number;
}

export interface Agency {
  email: string;
  name: string;
  agencyCode: string;
  ordersPeriod: OrdersPeriod;
}
// #endregion

export const useAgencies = (param?: FetchParams) => (
  usePaginatedQuery(['agencies', param], (params: FetchParams) => (
    api.get<PaginatedApiResponse<Agency>>('/agencies', { params }).then(res => res.data.data)
  ))
);

export const useAgency = (code: string) => (
  useQuery(['agencies', code], (agencyCode: string) => (
    api.get<ApiResponse<AgencyUser>>(`/agencies/${agencyCode}`).then(res => res.data.data)
  ))
);

export const useDeleteAgency = () => useMutation(
  (code: string) => api.delete<ApiResponse>(`/agencies/${code}`).then(res => res.data),
  {
    onSuccess: () => {
      queryCache.invalidateQueries('agencies');
    },
  },
);
