import { UseFormMethods } from 'react-hook-form';

export interface Stylable {
  className: string;
}

export interface FormProps<T> {
  onSubmit: (data: T) => void;
  error?: string;
  form: UseFormMethods<T>;
}
