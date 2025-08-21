import React, { createContext, useContext, useReducer, useEffect } from 'react';
import { User, AuthContextType } from '../types/auth';
import { authApi } from '../services/authApi';

type AuthState = {
  user: User | null;
  loading: boolean;
};

type AuthAction =
  | { type: 'SET_LOADING'; payload: boolean }
  | { type: 'SET_USER'; payload: User | null }
  | { type: 'LOGOUT' };

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const authReducer = (state: AuthState, action: AuthAction): AuthState => {
  switch (action.type) {
    case 'SET_LOADING':
      return { ...state, loading: action.payload };
    case 'SET_USER':
      return { ...state, user: action.payload, loading: false };
    case 'LOGOUT':
      return { user: null, loading: false };
    default:
      return state;
  }
};

const initialState: AuthState = {
  user: null,
  loading: true,
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  const checkAuth = async () => {
    try {
      dispatch({ type: 'SET_LOADING', payload: true });
      const response = await authApi.getCurrentUser();
      if (response.success && response.data.user) {
        dispatch({ type: 'SET_USER', payload: response.data.user });
      } else {
        dispatch({ type: 'SET_USER', payload: null });
      }
    } catch (error) {
      dispatch({ type: 'SET_USER', payload: null });
    }
  };

  const generateOTP = async (email: string): Promise<string> => {
    try {
      const response = await authApi.generateOTP(email);
      if (response.success && response.data.requestId) {
        return response.data.requestId;
      }
      throw new Error(response.message || 'Failed to generate OTP');
    } catch (error) {
      throw error;
    }
  };

  const login = async (email: string, otp: string, requestId: string) => {
    try {
      dispatch({ type: 'SET_LOADING', payload: true });
      const response = await authApi.verifySignInOTP({ email, otp, requestId });
      if (response.success && response.data.user) {
        dispatch({ type: 'SET_USER', payload: response.data.user });
      } else {
        throw new Error(response.message || 'Login failed');
      }
    } catch (error) {
      dispatch({ type: 'SET_LOADING', payload: false });
      throw error;
    }
  };

  const signup = async (email: string, otp: string, requestId: string) => {
    try {
      dispatch({ type: 'SET_LOADING', payload: true });
      const response = await authApi.verifySignUpOTP({ email, otp, requestId });
      if (response.success && response.data.user) {
        dispatch({ type: 'SET_USER', payload: response.data.user });
      } else {
        throw new Error(response.message || 'Signup failed');
      }
    } catch (error) {
      dispatch({ type: 'SET_LOADING', payload: false });
      throw error;
    }
  };

  const logout = async () => {
    try {
      await authApi.logout();
      dispatch({ type: 'LOGOUT' });
    } catch (error) {
      // Even if logout fails on server, clear local state
      dispatch({ type: 'LOGOUT' });
    }
  };

  useEffect(() => {
    checkAuth();
  }, []);

  const value: AuthContextType = {
    user: state.user,
    loading: state.loading,
    login,
    signup,
    logout,
    generateOTP,
    checkAuth,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};