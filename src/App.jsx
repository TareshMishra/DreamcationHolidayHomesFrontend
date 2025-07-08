import { useEffect, useState } from "react";
import { GoogleOAuthProvider } from "@react-oauth/google";
import AppRoutes from "./routes/AppRoutes";
import GoogleOauth from "./components/GoogleOauth";
import { AnimatePresence } from "framer-motion";
import axios from "axios";

function App() {
  const [showGoogleModal, setShowGoogleModal] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const sendPing = async () => {
      const pingSent = localStorage.getItem("ping-sent");
      if (pingSent != null) {
        return;
      }

      try {
        const url = 'https://api.dreamcationholidayhomes.com/';
        const resp = await axios.get(url);
        console.log(resp);
        localStorage.setItem("ping-sent", "true"); // Don't forget to set it!
      } catch (error) {
        console.error("Ping failed:", error);
      }
    };

    console.log("sending ping request")
    sendPing();
  }, []);


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
