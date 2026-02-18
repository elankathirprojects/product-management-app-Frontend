import { useSelector, useDispatch } from 'react-redux';
import { login, logout, clearError } from '../store/authSlice';

export const useAuth = () => {
  const dispatch = useDispatch();
  const { user, token, loading, error } = useSelector(state => state.auth);

  const signIn = (credentials) => dispatch(login(credentials));
  const signOut = () => dispatch(logout());
  const clearAuthError = () => dispatch(clearError());

  return { user, token, loading, error, signIn, signOut, clearAuthError, isAuthenticated: !!token };
};
