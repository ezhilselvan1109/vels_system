import { AuthResponse, OTPVerification } from '../types/auth';

const API_BASE_URL = 'http://localhost:8080/api';

// Generic API response handler
const handleResponse = async (response: Response) => {
  if (!response.ok) {
    const error = await response.json().catch(() => ({ message: 'Network error' }));
    throw new Error(error.message || `HTTP error! status: ${response.status}`);
  }
  return response.json();
};

// Generic API request function
const apiRequest = async (endpoint: string, options: RequestInit = {}) => {
  const url = `${API_BASE_URL}${endpoint}`;
  const config: RequestInit = {
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
      ...options.headers,
    },
    ...options,
  };

  const response = await fetch(url, config);
  return handleResponse(response);
};

export const authApi = {
  // Generate OTP
  generateOTP: async (email: string): Promise<AuthResponse> => {
    return apiRequest('/auth/otp/generate', {
      method: 'POST',
      body: JSON.stringify({ email }),
    });
  },

  // Verify OTP for User
  verifyUserOTP: async (data: OTPVerification): Promise<AuthResponse> => {
    return apiRequest('/auth/user/verify-otp', {
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