import { useEffect, useState } from 'react';
import { useGoogleLogin } from '@react-oauth/google';
import { motion } from 'framer-motion';
import { IoClose } from 'react-icons/io5';

const GoogleOauth = ({ onClose, setIsLoggedIn }) => {

  const scopes = [
    "https://www.googleapis.com/auth/user.addresses.read",
    "https://www.googleapis.com/auth/user.birthday.read",
    "https://www.googleapis.com/auth/user.emails.read",
    "https://www.googleapis.com/auth/user.phonenumbers.read",
    "https://www.googleapis.com/auth/userinfo.email",
    "https://www.googleapis.com/auth/userinfo.profile"
  ]

  const [loading, setLoading] = useState(false);
  const url = "https://api.dreamcationholidayhomes.com/api/google-auth";

  useEffect(() => {
    if (localStorage.getItem("user-data") !== null) {
      onClose();
    }
  }, []);

  const login = useGoogleLogin({
    
    onSuccess: async (codeResponse) => {
      console.log(codeResponse)
      setLoading(true);
      try {
        const response = await fetch(url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ code: codeResponse.code }),
        });

        if (!response.ok) throw new Error('Failed to exchange authorization code');

        const data = await response.json();
        localStorage.setItem("user-data", JSON.stringify(data));
        setIsLoggedIn(true);
      } catch (error) {
        console.error('Error during token exchange:', error);
      } finally {
        setLoading(false);
        onClose();
      }
    },
    onError: () => {
      setLoading(false);
      localStorage.setItem("user-data", "failed");
      console.log('Login Failed');
    },

    flow: 'auth-code', // Crucial for getting an authorization code
    scope: scopes.join(' '), // Pass the desired scopes as a space-separated string
  });

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center">
      <div className="absolute inset-0 bg-white/40 backdrop-blur-sm"></div>

      <motion.div
        className="relative z-10 bg-white border border-gold rounded-lg shadow-lg p-8 max-w-md w-full text-center"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
      >
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-[var(--rich-black)] hover:text-[var(--gold)] transition cursor-pointer"
          aria-label="Close"
        >
          <IoClose size={24} />
        </button>

        <h2 className="text-2xl font-display font-bold mb-4 text-[var(--rich-black)]">
          Sign in with Google for Exclusive Offers 🎁
        </h2>

        <p className="text-sm text-gray-600 mb-6">
          Get access to members-only discounts and premium services.
        </p>

        {/* Google-style sign-in button */}
        <button
          onClick={() => !loading && login()}
          className="w-full flex items-center justify-center gap-3 border border-gray-300 rounded-md py-2 px-4 bg-white hover:bg-gray-100 shadow-sm transition cursor-pointer disabled:opacity-60"
          disabled={loading}
          style={{ boxShadow: '0 1px 2px rgb(0 0 0 / 0.05)' }}
        >
          {loading ? (
            <svg className="animate-spin h-5 w-5 text-gray-600" viewBox="0 0 24 24">
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
                fill="none"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
              />
            </svg>
          ) : (
            <>
              <svg
                className="w-6 h-6"
                viewBox="0 0 533.5 544.3"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="xMidYMid"
              >
                {/* [Google Logo Paths] */}
                <path
                  d="M533.5 278.4c0-17.8-1.6-35-4.7-51.7H272v97.9h146.9c-6.3 34-25.3 62.9-54 82v67h87.4c51-47 80.2-116.1 80.2-195.2z"
                  fill="#4285F4"
                />
                <path
                  d="M272 544.3c73.4 0 135.1-24.3 180.1-65.8l-87.4-67c-24.3 16.3-55.4 26-92.7 26-71 0-131.2-47.8-152.8-112.4h-89.6v70.8c44.5 87.2 136.3 148.4 242.4 148.4z"
                  fill="#34A853"
                />
                <path
                  d="M119.2 324.3c-10.3-30.7-10.3-63.7 0-94.4v-70.8h-89.6c-38.4 75.1-38.4 164.6 0 239.7l89.6-74.5z"
                  fill="#FBBC05"
                />
                <path
                  d="M272 107.7c39.9-.6 77 13.8 105.6 40.8l79.1-79.1C406.5 24.3 344.8 0 272 0 165.9 0 74.1 61.2 29.6 148.4l89.6 70.8C140.8 155.5 201 107.7 272 107.7z"
                  fill="#EA4335"
                />
              </svg>
              <span className="text-sm font-medium text-[#3c4043]">
                Sign in with Google
              </span>
            </>
          )}
        </button>


        {/* Continue without signing in below button */}
        <button
          onClick={onClose}
          className="mt-4 text-sm text-[var(--gold)] underline hover:text-[var(--gold-dark)] transition cursor-pointer"
        >
          Continue without signing in
        </button>
      </motion.div>
    </div>
  );
};

export default GoogleOauth;