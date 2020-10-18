import { User } from 'api/auth';
import { createState } from 'utils/state';

export interface AuthState {
  user?: User;
}

const [AuthProvider, useAuth, useSetAuth] = createState<AuthState>({
  user: undefined,
}, 'pracownia_posilkow:auth');

export { AuthProvider, useAuth, useSetAuth };
