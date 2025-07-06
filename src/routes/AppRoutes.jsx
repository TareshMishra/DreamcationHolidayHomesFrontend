import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Properties from "../pages/Properties";
import RealEstateBrokerage from "../pages/RealEstateBrokerage";
import Pmc from "../pages/Pmc";
import PrivacyPolicy from "../pages/PrivacyPolicy";
import Terms from "../pages/Terms";

const AppRoutes = ({ isLoggedIn, showGoogleSignIn }) => (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home showGoogleSignIn={showGoogleSignIn} />} />
            <Route path="/properties" element={<Properties showGoogleSignIn={showGoogleSignIn} />} />
            <Route path="/real-estate-brokerage" element={<RealEstateBrokerage />} />
            <Route path="/pmc" element={<Pmc />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms" element={<Terms />} />
        </Routes>
    </BrowserRouter>
);

export default AppRoutes;
