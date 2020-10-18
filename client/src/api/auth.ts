import { api, ApiResponse } from 'api';
import { useMutation } from 'react-query';

export interface LoginParams {
  email: string;
  password: string;
}

export interface User {
  agencyCode: string;
  email: string;
  firstName: string;
  lastName: string;
  role: 'admin' | 'parent';
  wallet: number;
}

export const useLogin = () => useMutation(
  (data: LoginParams) => api.post<ApiResponse<User>>('/auth/login', data).then(res => res.data),
);
