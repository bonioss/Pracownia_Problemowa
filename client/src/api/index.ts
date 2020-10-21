import axios from 'axios';

export interface ApiError {
  error: string;
  success: false;
}

export interface ApiResponse<T = undefined> {
  data: T;
  success: true;
}

export const api = axios.create({
  baseURL: process.env.REACT_APP_SERVER_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
});
