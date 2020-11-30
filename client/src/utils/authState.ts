import { User } from 'api/auth';
import { createState } from 'utils/state';

/** Stan uwierzytelnienia */
export interface AuthState {
  /** Obiekt użytkownika */
  user?: User;
}

const [AuthProvider, useAuth, useSetAuth] = createState<AuthState>({
  user: undefined,
}, 'pracownia_posilkow:auth');

export { AuthProvider, useAuth, useSetAuth };
