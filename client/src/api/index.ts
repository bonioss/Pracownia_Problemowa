/* eslint-disable no-param-reassign */
import axios from 'axios';
import { format, isValid, parseISO } from 'date-fns';

export interface ApiError {
  /** Wiadomość błędu */
  error: string;
  /** Flaga success w przypadku błędu */
  success: false;
}

export interface ApiResponse<T = undefined> {
  /** Obiekt z pobranymi danymi */
  data: T;
  /** Flaga sukcesu */
  success: true;
}

export interface PaginatedApiResponse<T> {
  /** Obiekt z pobranymi danymi */
  data: {
    /** Dane paginacji kolejnej strony */
    next?: {
      /** Numer kolejnej strony */
      page: number;
      /** Limit elementów na stronie */
      limit: number;
    };
    /** Dane paginacji poprzedniej strony */
    prev?: {
      /** Numer strony */
      page: number;
      /** Limit elementów na stronie */
      limit: number;
    };
    /** Liczba stron */
    numberOfPages: number;
    /** Dane */
    results: T[];
  };
  /** Flaga sukcesu */
  success: true;
}

export interface AltPaginatedApiResponse<T> {
  /** Obiekt z pobranymi danymi */
  data: {
    /** Dane paginacji kolejnej strony */
    next?: {
      /** Numer kolejnej strony */
      page: number;
      /** Limit elementów na stronie */
      limit: number;
    };
    /** Dane paginacji poprzedniej strony */
    prev?: {
      /** Numer strony */
      page: number;
      /** Limit elementów na stronie */
      limit: number;
    };
    /** Liczba stron */
    numberOfPages: number;
    /** Dane */
    results: T;
  };
  /** Flaga sukcesu */
  success: true;
}

/** Klient API */
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
