export interface Stylable {
  className: string;
}

export interface FormProps<T> {
  onSubmit: (data: T) => void;
  error?: string;
}
