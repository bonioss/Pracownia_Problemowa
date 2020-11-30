import { api, ApiResponse } from 'api';
import { Kid } from 'api/kid';
import {
  queryCache, useMutation, useQuery,
} from 'react-query';

export interface Parent {
  /** Kod dziecka */
  kidCode: string;
}

/**
 * Hook do dodawania dziecka
 * @param data Dane rodzica
 */
export const useAddKid = () => useMutation(
  (data: Parent) => api.post<ApiResponse>(`/parent/addKid/${data.kidCode}`, data).then(res => res.data),
  { onSuccess: () => queryCache.invalidateQueries('parent') },
);

/**
 * Hook do pobierania listy dzieci danego rodzica
 */
export const useGetMyKid = () => (
  useQuery(['parent'], () => (
    api.get<ApiResponse<Kid[]>>('/parent/getMyKids').then(res => res.data)
  ))
);
