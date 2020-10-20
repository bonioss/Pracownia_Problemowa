import { api, ApiResponse } from 'api';
import { useMutation } from 'react-query';

export type Role = 'agency' | 'parent' | 'admin';

export interface LoginParams {
  email: string;
  password: string;
}

export interface AdminUser {
  agencyCode: string;
  email: string;
  firstName: string;
  lastName: string;
  role: 'admin';
  wallet: number;
}

export interface ParentUser {
  agencyCode: string;
  email: string;
  firstName: string;
  lastName: string;
  role: 'parent';
  wallet: number;
}

export type OrdersPeriod = 'day' | 'week' | 'month' | 'semestr';

export interface AgencyUser {
  role: 'agency';
  email: string;
  name: string;
  agencyCode: string;
  ordersPeriod: OrdersPeriod;
}

export type User = AgencyUser | ParentUser | AdminUser;

export const useLogin = () => useMutation(
  (data: LoginParams) => api.post<ApiResponse<User>>('/auth/login', data).then(res => res.data),
);
