import { useGoogleLogin } from '@react-oauth/google';
import { useState } from 'react';
// No need for jwtDecode on the client side if you're primarily getting an access token

const Temp = ({ onClose }) => {
    const [accessToken, setAccessToken] = useState(null);
    const [userInfo, setUserInfo] = useState(null); // To store user info after fetching
    
    const scopes = [
        "https://www.googleapis.com/auth/user.addresses.read",
        "https://www.googleapis.com/auth/user.birthday.read",
        "https://www.googleapis.com/auth/user.emails.read",
        "https://www.googleapis.com/auth/user.phonenumbers.read",
        "https://www.googleapis.com/auth/userinfo.email",
        "https://www.googleapis.com/auth/userinfo.profile"
    ]

    const login = useGoogleLogin({
        onSuccess: async (codeResponse) => {
            console.log('CodeResponse', codeResponse);
            console.log('Authorization Code:', codeResponse.code);
            // The `codeResponse` here will contain an authorization code, not a token directly.
            // You need to send this code to your backend to exchange it for an access token.

            // --- Step 3: Send the authorization code to your backend ---
            try {
                const response = await fetch('http://localhost:10000/api/google-auth', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ code: codeResponse.code }),
                });

                if (!response.ok) {
                    throw new Error('Failed to exchange authorization code for tokens');
                }

                const data = await response.json();
                console.log('Tokens from backend:', data);
            } catch (error) {
                console.error('Error during token exchange:', error);
                // Handle error (e.g., show a message to the user)
            }
        },
        onError: () => {
            console.log('Login Failed');
            // Handle login error
        },
        flow: 'auth-code', // Crucial for getting an authorization code
        scope: scopes.join(' '), // Pass the desired scopes as a space-separated string
    });

    // const fetchUserInfo = async (token) => {
    //     try {
    //         const response = await fetch('https://www.googleapis.com/oauth2/v3/userinfo', {
    //             headers: {
    //                 'Authorization': `Bearer ${token}`
    //             }
    //         });
    //         if (!response.ok) {
    //             throw new Error('Failed to fetch user info');
    //         }
    //         const userData = await response.json();
    //         console.log("Fetched user info:", userData);
    //         setUserInfo(userData);
    //     } catch (error) {
    //         console.error('Error fetching user info:', error);
    //     }
    // };

    return (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-white bg-opacity-90 p-8 shadow-lg rounded">
            <div className="text-center">
                <h2 className="text-2xl font-display font-bold mb-4 text-[var(--rich-black)]">
                    Sign in with Google for Exclusive Offers 🎁
                </h2>
                <p className="mb-4">Hello</p>
                <button
                    onClick={() => login()} // Call the login function from the hook
                    className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 cursor-pointer"
                >
                    Sign in with Google
                </button>

                {accessToken && (
                    <p className="mt-4 text-green-600">Access Token obtained!</p>
                )}
                {userInfo && (
                    <div className="mt-4">
                        <h3 className="font-bold">User Information:</h3>
                        <p>Name: {userInfo.name}</p>
                        <p>Email: {userInfo.email}</p>
                        {/* Display other user info as needed */}
                    </div>
                )}

                <button
                    onClick={onClose}
                    className="mt-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 cursor-pointer"
                >
                    Close
                </button>
                {/* The "DATA" button would typically trigger API calls using the accessToken */}
                {accessToken && (
                    <button
                        onClick={() => console.log('Now you can use the access token to call Google APIs', accessToken)}
                        className="mt-2 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 cursor-pointer"
                    >
                        Use Access Token for API Calls
                    </button>
                )}
            </div>
        </div>
    );
};

export default Temp;