import { api, ApiResponse, PaginatedApiResponse } from 'api';
import {
  queryCache, useMutation, usePaginatedQuery, useQuery,
} from 'react-query';
import { FetchParams } from './agencies';

import { AgencyUser } from './auth';

export interface Kid {
  firstName: string;
  lastName: string;
  agencyCode: string;
  kidCode: string;
}

export const useKids = (param?: FetchParams) => (
  usePaginatedQuery(['kid', param], (params: FetchParams) => (
    api.get<PaginatedApiResponse<Kid>>('/kid/agencyGetKids', { params }).then(res => res.data.data)
  ))
);

export const useAddKid = () => useMutation(
  (data: Kid) => api.post<ApiResponse>('/kid/agencyAddKid', data).then(res => res.data),
  { onSuccess: () => queryCache.invalidateQueries('kid') },
);

export const useDeleteKid = () => useMutation(
  (code: string) => api.delete<ApiResponse>(`/kid/${code}`).then(res => res.data),
  {
    onSuccess: () => {
      queryCache.invalidateQueries('kid');
    },
  },
);
