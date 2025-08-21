import React, { createContext, useContext, useReducer, useEffect } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
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
  const queryClient = useQueryClient();

  // Check authentication status
  const { data: authData, isLoading: authLoading } = useQuery({
    queryKey: ['auth', 'me'],
    queryFn: authApi.getCurrentUser,
    retry: false,
    refetchOnMount: true,
    refetchOnWindowFocus: false,
  });

  // Update user state when auth data changes
  useEffect(() => {
    if (authData?.success && authData.data?.data) {
      dispatch({ type: 'SET_USER', payload: authData.data.data });
    } else {
      dispatch({ type: 'SET_USER', payload: null });
    }
  }, [authData]);

  // Update loading state
  useEffect(() => {
    dispatch({ type: 'SET_LOADING', payload: authLoading });
  }, [authLoading]);

  // Generate OTP mutation
  const generateOTPMutation = useMutation({
    mutationFn: authApi.generateOTP,
    onError: (error) => {
      console.error('Generate OTP failed:', error);
    },
  });

  // Verify OTP mutation
  const verifyOTPMutation = useMutation({
    mutationFn: authApi.verifyUserOTP,
    onSuccess: (response) => {
      if (response.success) {
        // Refetch user data after successful verification
        queryClient.invalidateQueries({ queryKey: ['auth', 'me'] });
      }
    },
    onError: (error) => {
      console.error('Verify OTP failed:', error);
    },
  });

  // Logout mutation
  const logoutMutation = useMutation({
    mutationFn: authApi.logout,
    onSuccess: () => {
      dispatch({ type: 'LOGOUT' });
      queryClient.clear();
    },
    onError: () => {
      // Even if logout fails on server, clear local state
      dispatch({ type: 'LOGOUT' });
      queryClient.clear();
    },
  });

  const generateOTP = async (email: string): Promise<string> => {
    try {
      const response = await generateOTPMutation.mutateAsync(email);
      if (response.success && response.data?.data?.otpIdentifierInfo?.[0]?.requestId) {
        return response.data.data.otpIdentifierInfo[0].requestId;
      }
      throw new Error(response.message || 'Failed to generate OTP');
    } catch (error) {
      throw error;
    }
  };

  const login = async (email: string, otp: string, requestId: string) => {
    try {
      const response = await verifyOTPMutation.mutateAsync({ email, otp, requestId });
      if (!response.success) {
        throw new Error(response.message || 'Login failed');
      }
    } catch (error) {
      throw error;
    }
  };

  const signup = async (email: string, otp: string, requestId: string) => {
    // For this API, signup and login use the same endpoint
    return login(email, otp, requestId);
  };

  const logout = async () => {
    await logoutMutation.mutateAsync();
  };

  const checkAuth = async () => {
    queryClient.invalidateQueries({ queryKey: ['auth', 'me'] });
  };

  const value: AuthContextType = {
    user: state.user,
    loading: state.loading || generateOTPMutation.isPending || verifyOTPMutation.isPending,
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