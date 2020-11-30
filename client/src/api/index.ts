/* eslint-disable no-param-reassign */
import axios from 'axios';
import { format, isValid, parseISO } from 'date-fns';

export interface ApiError {
  error: string;
  success: false;
}

export interface ApiResponse<T = undefined> {
  data: T;
  success: true;
}

export interface PaginatedApiResponse<T> {
  data: {
    next?: {
      page: number;
      limit: number;
    };
    prev?: {
      page: number;
      limit: number;
    };
    numberOfPages: number;
    results: T[];
  };
  success: true;
}

export interface AltPaginatedApiResponse<T> {
  data: {
    next?: {
      page: number;
      limit: number;
    };
    prev?: {
      page: number;
      limit: number;
    };
    numberOfPages: number;
    results: T;
  };
  success: true;
}

export const api = axios.create({
  baseURL: '/api/v1/',
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
});

api.interceptors.request.use(config => {
  if (config.params) {
    Object.keys(config.params).forEach(key => {
      const date = parseISO(config.params[key]);
      if (isValid(date)) config.params[key] = format(date, 'yyyy-MM-dd');
    });
  }
  if (config.data) {
    Object.keys(config.data).forEach(key => {
      const date = parseISO(config.data[key]);
      if (isValid(date)) config.data[key] = format(date, 'yyyy-MM-dd');
      if (config.data[key] instanceof Date) {
        config.data[key] = format(config.data[key], 'yyyy-MM-dd');
      }
    });
  }
  return config;
}, error => error);
