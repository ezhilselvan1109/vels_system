export interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  role: string;
  createdAt: string;
  updatedAt: string;
}

export interface AuthResponse {
  success: boolean;
  message: string;
  data: {
    user?: User;
    requestId?: string;
    token?: string;
  };
}

export interface OTPRequest {
  email: string;
}

export interface OTPVerification {
  email: string;
  otp: string;
  requestId: string;
}

export interface AuthContextType {
  user: User | null;
  loading: boolean;
  login: (email: string, otp: string, requestId: string) => Promise<void>;
  signup: (email: string, otp: string, requestId: string) => Promise<void>;
  logout: () => Promise<void>;
  generateOTP: (email: string) => Promise<string>;
  checkAuth: () => Promise<void>;
}