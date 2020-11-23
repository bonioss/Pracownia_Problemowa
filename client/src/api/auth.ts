import { api, ApiResponse } from 'api';
import { useMutation } from 'react-query';

// #region types
export type Role = 'agency' | 'parent' | 'admin';

export interface LoginParams {
  email: string;
  password: string;
}

export interface RegisterParams {
  email: string;
  firstName: string;
  lastName: string;
  password: string;
  passwordConfirm: string;
  agencyCode: string;
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
export const ORDERS_PERIODS = ['day', 'week', 'month', 'semestr'] as const;

export interface AgencyUser {
  role: 'agency';
  email: string;
  name: string;
  agencyCode: string;
  ordersPeriod: OrdersPeriod;
}

export type User = AgencyUser | ParentUser | AdminUser;

export interface NewAgency {
  email: string;
  name: string;
  ordersPeriod: OrdersPeriod;
}

export interface NewKid {
  firstName: string;
  lastName: string;
  agencyCode: string;
}
// #endregion

export const useLogin = () => useMutation(
  (data: LoginParams) => api.post<ApiResponse<User>>('/auth/login', data).then(res => res.data),
);

export const useRegister = () => useMutation(
  (data: RegisterParams) => api.post<ApiResponse<User>>('/auth/register', data).then(res => res.data),
);

export const useAddAgency = () => useMutation(
  (data: NewAgency) => api.post<ApiResponse<AgencyUser>>('/auth/addAgency', data).then(res => res.data),
);

export const useAddKid = () => useMutation(
  (data: NewKid) => api.post<ApiResponse<AgencyUser>>('/kid/agencyAddKid', data).then(res => res.data),
);
