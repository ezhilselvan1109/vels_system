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

export interface AccountInfo {
  id: string;
  email: string;
  phoneNumber: string | null;
  firstName: string | null;
  lastName: string | null;
  gender: string | null;
}

export interface UpdatePersonalInfoRequest {
  firstName: string;
  lastName: string;
  gender: string;
}

export interface EmailUpdateRequest {
  newEmail: string;
}

export interface PhoneUpdateRequest {
  newPhoneNumber: string;
}

export interface OTPVerificationRequest {
  identifier: string;
  otp: string;
  requestId: string;
}

export interface ApiResponse<T = any> {
  message: string;
  data: T;
}

export const accountApi = {
  // Get account information
  getAccountInfo: async (): Promise<ApiResponse<AccountInfo>> => {
    return apiRequest('/account');
  },

  // Update personal information
  updatePersonalInfo: async (data: UpdatePersonalInfoRequest): Promise<ApiResponse<AccountInfo>> => {
    return apiRequest('/account/info', {
      method: 'PUT',
      body: JSON.stringify(data),
    });
  },

  // Request OTP for email update
  requestEmailOTP: async (data: EmailUpdateRequest): Promise<ApiResponse<any>> => {
    return apiRequest('/account/email/request-otp', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  },

  // Verify OTP for email update
  verifyEmailOTP: async (data: OTPVerificationRequest): Promise<ApiResponse<AccountInfo>> => {
    return apiRequest('/account/email/verify-otp', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  },

  // Request OTP for phone update
  requestPhoneOTP: async (data: PhoneUpdateRequest): Promise<ApiResponse<any>> => {
    return apiRequest('/account/phone/request-otp', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  },

  // Verify OTP for phone update
  verifyPhoneOTP: async (data: OTPVerificationRequest): Promise<ApiResponse<AccountInfo>> => {
    return apiRequest('/account/phone/verify-otp', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  },
};