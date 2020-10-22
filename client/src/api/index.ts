import axios from 'axios';

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

export const api = axios.create({
  baseURL: '/api/v1/',
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
});
