import { api, ApiResponse } from 'api';
import { Kid } from 'api/kid';
import {
  queryCache, useMutation, useQuery,
} from 'react-query';

export interface Parent {
  kidCode: string;
}

export const useAddKid = () => useMutation(
  (data: Parent) => api.post<ApiResponse>(`/parent/addKid/${data.kidCode}`, data).then(res => res.data),
  { onSuccess: () => queryCache.invalidateQueries('parent') },
);

export const useGetMyKid = () => (
  useQuery(['parent'], () => (
    api.get<ApiResponse<Kid[]>>('/parent/getMyKids').then(res => res.data)
  ))
);
