import { ApiError } from 'api';
import { AxiosError } from 'axios';

export const errorHandler = (
  err: unknown,
  mapper: (message?: string) => string,
) => {
  const error = err as AxiosError<ApiError>;
  if (error.response) return mapper(error.response.data.error);
  return mapper();
};
