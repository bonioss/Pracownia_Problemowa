import { UseFormMethods } from 'react-hook-form';

/** Typ komponentu pozwalającego na zmiane styli */
export interface Stylable {
  className?: string;
}

/** Typ formularza z właściwościami */
export interface FormProps<T> {
  /** Funkcja uruchamiana po zatwierdzeniu */
  onSubmit: (data: T) => void;
  /** Błąd formularza */
  error?: string;
  /** Obiekt formularza */
  form: UseFormMethods<T>;
}
