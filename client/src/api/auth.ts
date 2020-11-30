import { api, ApiResponse } from 'api';
import { useMutation, useQuery } from 'react-query';

// #region types
export type Role = 'agency' | 'parent' | 'admin';

export interface LoginParams {
  /** Adres email użytkownika */
  email: string;
  /** hasło użytkownika */
  password: string;
}

export interface RegisterParams {
  /** Adres email użytkownika */
  email: string;
  /** Imię użytkownika */
  firstName: string;
  /** Nazwisko użytkownika */
  lastName: string;
  /** Hasło użytkownika */
  password: string;
  /** Hasło użytkownika */
  passwordConfirm: string;
  /** Kod placówki */
  agencyCode: string;
}

export interface AdminUser {
  /** Kod placówki */
  agencyCode: string;
  /** Email przedstawiciela placówki */
  email: string;
  /** Imię przedstawiciela placówki */
  firstName: string;
  /** Nazwisko przedstawiciela placówki */
  lastName: string;
  /** Rola użytkownika */
  role: 'admin';
  /** Portfel użytkownika */
  wallet: number;
}

export interface ParentUser {
  /** Kod placówki */
  agencyCode: string;
  /** Adres email użytkownika */
  email: string;
  /** Imię użytkownika */
  firstName: string;
  /** Nazwisko użytkownika */
  lastName: string;
  /** Rola użytkownika */
  role: 'parent';
  /** Portfel użytkownika */
  wallet: number;
}

export type OrdersPeriod = 'day' | 'week' | 'month' | 'semestr';
export const ORDERS_PERIODS = ['day', 'week', 'month', 'semestr'] as const;

export interface AgencyUser {
  /** Rola  */
  role: 'agency';
  /** Email użytkownika */
  email: string;
  /** Nazwa użytkownika */
  name: string;
  /** Kod placówki */
  agencyCode: string;
  /** Okres zamówienia */
  ordersPeriod: OrdersPeriod;
  /** Zakończenie semstru zimowego */
  winterTermEnd: Date;
  /** Zakończenie semestru letniego */
  summerTermEnd: Date;
}

export type User = AgencyUser | ParentUser | AdminUser;

export interface NewAgency {
  /** Email przedstawiciela placówki */
  email: string;
  /** Nazwa placówki */
  name: string;
  /** Okres zamówienia */
  ordersPeriod: OrdersPeriod;
  /** Zakończenie semstru zimowego */
  winterTermEnd: Date;
  /** Zakończenie semestru letniego */
  summerTermEnd: Date;
}

export interface NewKid {
  /** Imię dziecka */
  firstName: string;
  /** Nazwisko dziecka */
  lastName: string;
  /** Kod placówki */
  agencyCode: string;
}
// #endregion

/**
 * Hook do logowania użytkownika
 * @param data Dane logowania
 */
export const useLogin = () => useMutation(
  (data: LoginParams) => api.post<ApiResponse<User>>('/auth/login', data).then(res => res.data),
);

/**
 * Hook do rejestracji użytkownika
 * @param data Dane rejestracji
 */
export const useRegister = () => useMutation(
  (data: RegisterParams) => api.post<ApiResponse<User>>('/auth/register', data).then(res => res.data),
);

/**
 * Hook do rejestracji placówki
 * @param data Dane rejestracji
 */
export const useAddAgency = () => useMutation(
  (data: NewAgency) => api.post<ApiResponse<AgencyUser>>('/auth/addAgency', data).then(res => res.data),
);

/**
 * Hook do rejestracji dziecka
 * @param data Dane rejestracji
 */
export const useAddKid = () => useMutation(
  (data: NewKid) => api.post<ApiResponse<AgencyUser>>('/kid/agencyAddKid', data).then(res => res.data),
);

/**
 * Hook do pobrania danych użytkownika
 */
export const useMe = () => useQuery(
  ['me'], () => api.get<ApiResponse<User>>('/auth/me').then(res => res.data), {
    refetchOnWindowFocus: false,
  },
);
