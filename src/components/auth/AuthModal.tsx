import React, { useState } from 'react';
import { X, Mail, Shield, ArrowLeft } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
}

type AuthStep = 'choice' | 'email' | 'otp';
type AuthMode = 'signin' | 'signup';

const AuthModal = React.memo(({ isOpen, onClose }: AuthModalProps) => {
  const { generateOTP, login, signup, loading } = useAuth();
  const [step, setStep] = useState<AuthStep>('choice');
  const [mode, setMode] = useState<AuthMode>('signin');
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');
  const [requestId, setRequestId] = useState('');
  const [error, setError] = useState('');
  const [otpSent, setOtpSent] = useState(false);

  const resetForm = () => {
    setStep('choice');
    setMode('signin');
    setEmail('');
    setOtp('');
    setRequestId('');
    setError('');
    setOtpSent(false);
  };

  const handleClose = () => {
    resetForm();
    onClose();
  };

  const handleModeSelect = (selectedMode: AuthMode) => {
    setMode(selectedMode);
    setStep('email');
    setError('');
  };

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) {
      setError('Please enter your email address');
      return;
    }

    try {
      setError('');
      const id = await generateOTP(email);
      setRequestId(id);
      setOtpSent(true);
      setStep('otp');
    } catch (error) {
      setError(error instanceof Error ? error.message : 'Failed to send OTP');
    }
  };

  const handleOTPSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!otp.trim()) {
      setError('Please enter the OTP');
      return;
    }

    try {
      setError('');
      if (mode === 'signin') {
        await login(email, otp, requestId);
      } else {
        await signup(email, otp, requestId);
      }
      handleClose();
    } catch (error) {
      setError(error instanceof Error ? error.message : 'Authentication failed');
    }
  };

  const handleBack = () => {
    if (step === 'otp') {
      setStep('email');
      setOtpSent(false);
    } else if (step === 'email') {
      setStep('choice');
    }
    setError('');
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-xl max-w-md w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b">
          <div className="flex items-center space-x-2">
            {step !== 'choice' && (
              <button
                onClick={handleBack}
                className="p-1 hover:bg-gray-100 rounded-full transition-colors"
              >
                <ArrowLeft size={20} className="text-gray-600" />
              </button>
            )}
            <h2 className="text-xl font-semibold text-gray-900">
              {step === 'choice' ? 'Welcome' : step === 'email' ? 'Enter Email' : 'Verify OTP'}
            </h2>
          </div>
          <button
            onClick={handleClose}
            className="p-1 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X size={20} className="text-gray-600" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {error && (
            <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg">
              <p className="text-sm text-red-600">{error}</p>
            </div>
          )}

          {step === 'choice' && (
            <div className="space-y-4">
              <p className="text-gray-600 text-center mb-6">
                Choose how you'd like to continue
              </p>
              <button
                onClick={() => handleModeSelect('signin')}
                className="w-full flex items-center justify-center space-x-3 p-4 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <Shield size={20} className="text-blue-600" />
                <span className="font-medium">Sign In</span>
              </button>
              <button
                onClick={() => handleModeSelect('signup')}
                className="w-full flex items-center justify-center space-x-3 p-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                <Mail size={20} />
                <span className="font-medium">Create Account</span>
              </button>
            </div>
          )}

          {step === 'email' && (
            <form onSubmit={handleEmailSubmit} className="space-y-4">
              <div>
                <p className="text-gray-600 mb-4">
                  {mode === 'signin' 
                    ? 'Enter your email to sign in' 
                    : 'Enter your email to create an account'
                  }
                </p>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter your email"
                  required
                />
              </div>
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white font-semibold py-3 px-4 rounded-lg transition-colors"
              >
                {loading ? 'Sending OTP...' : 'Send OTP'}
              </button>
            </form>
          )}

          {step === 'otp' && (
            <form onSubmit={handleOTPSubmit} className="space-y-4">
              <div>
                <p className="text-gray-600 mb-4">
                  We've sent a verification code to <strong>{email}</strong>
                </p>
                <label htmlFor="otp" className="block text-sm font-medium text-gray-700 mb-2">
                  Verification Code
                </label>
                <input
                  type="text"
                  id="otp"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-center text-lg tracking-widest"
                  placeholder="Enter 6-digit code"
                  maxLength={6}
                  required
                />
              </div>
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white font-semibold py-3 px-4 rounded-lg transition-colors"
              >
                {loading ? 'Verifying...' : 'Verify & Continue'}
              </button>
              <button
                type="button"
                onClick={() => handleEmailSubmit({ preventDefault: () => {} } as React.FormEvent)}
                className="w-full text-blue-600 hover:text-blue-700 font-medium py-2 transition-colors"
              >
                Resend OTP
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
});

AuthModal.displayName = 'AuthModal';

export default AuthModal;