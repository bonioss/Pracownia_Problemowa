import { api } from 'api';
import { useMutation } from 'react-query';

export interface LoginParams {
  email: string;
  password: string;
}

// FIXME: Change to real user schema
export interface User {
  email: string;
  name: string;
}

export const useLogin = () => useMutation(
  (data: LoginParams) => api.post<User>('/auth/login', data).then(res => res.data),
);
