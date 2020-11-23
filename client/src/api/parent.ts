import { api, ApiResponse, PaginatedApiResponse } from 'api';
import {
  queryCache, useMutation, usePaginatedQuery, useQuery,
} from 'react-query';
import { ParentUser } from './auth';

export interface Parent{
  kidCode: string;
}

export const useAddKid = () => useMutation(
  (data: Parent) => api.post<ApiResponse>('/parent/addKid', data).then(res => res.data),
  { onSuccess: () => queryCache.invalidateQueries('kid') },
);

// getMykids