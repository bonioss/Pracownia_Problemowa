import { api, ApiResponse, PaginatedApiResponse } from 'api';
import {
  queryCache, useMutation, usePaginatedQuery,
} from 'react-query';
import { FetchParams } from './agencies';

export interface Kid {
  /** Id dziecka */
  _id: string;
  /** Imię dziecka */
  firstName: string;
  /** Nazwisko dziecka */
  lastName: string;
  /** Kod placówki */
  agencyCode: string;
  /** Kod dziecka */
  kidCode: string;
}

/**
 * Hook do pobierania listy dzieci
 * @param param Parametry pagiancji
 */
export const useKids = (param?: FetchParams) => (
  usePaginatedQuery(['kid', param], (params: FetchParams) => (
    api.get<PaginatedApiResponse<Kid>>('/kid/agencyGetKids', { params }).then(res => res.data.data)
  ))
);

/**
 * Hook do dodawania dziecka
 * @param data Dane dziecka
 */
export const useAddKid = () => useMutation(
  (data: Kid) => api.post<ApiResponse>('/kid/agencyAddKid', data).then(res => res.data),
  { onSuccess: () => queryCache.invalidateQueries('kid') },
);

/**
 * Hook do usuwania dziecka
 * @param code Kod dziecka
 */
export const useDeleteKid = () => useMutation(
  (code: string) => api.delete<ApiResponse>(`/kid/${code}`).then(res => res.data),
  {
    onSuccess: () => {
      queryCache.invalidateQueries('kid');
    },
  },
);
