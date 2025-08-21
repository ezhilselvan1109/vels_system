import { AuthResponse, OTPRequest, OTPVerification } from '../types/auth';
import { apiRequest } from './api';

export const authApi = {
  // Generate OTP
  generateOTP: async (email: string): Promise<AuthResponse> => {
    return apiRequest('/auth/otp/generate', {
      method: 'POST',
      body: JSON.stringify({ email }),
    });
  },

  // Verify OTP for Sign In
  verifySignInOTP: async (data: OTPVerification): Promise<AuthResponse> => {
    return apiRequest('/auth/user/sign-in/verify-otp', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  },

  // Verify OTP for Sign Up
  verifySignUpOTP: async (data: OTPVerification): Promise<AuthResponse> => {
    return apiRequest('/auth/user/sign-up/verify-otp', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  },

  // Get current user
  getCurrentUser: async (): Promise<AuthResponse> => {
    return apiRequest('/auth/me');
  },

  // Logout
  logout: async (): Promise<AuthResponse> => {
    return apiRequest('/auth/logout', {
      method: 'POST',
    });
  },
};