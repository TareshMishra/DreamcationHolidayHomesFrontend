import { useState } from "react";
import { GoogleOAuthProvider } from "@react-oauth/google";
import AppRoutes from "./routes/AppRoutes";
import GoogleOauth from "./components/GoogleOauth";
import { AnimatePresence } from "framer-motion";

function App() {
  const [showGoogleModal, setShowGoogleModal] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <GoogleOAuthProvider clientId="836304061213-bh64uuhun4gje8l4s2k1j47gq52hcec2.apps.googleusercontent.com">
      <AppRoutes
        isLoggedIn={isLoggedIn}
        showGoogleSignIn={() => setShowGoogleModal(true)}
      />
      
      {/* Google OAuth Modal */}
      <AnimatePresence>
        {showGoogleModal && (
          <GoogleOauth
            onClose={() => setShowGoogleModal(false)}
            setIsLoggedIn={setIsLoggedIn}
          />
        )}
      </AnimatePresence>
    </GoogleOAuthProvider>
  );
}

export default App;
