import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Properties from "../pages/Properties";

const AppRoutes = () => (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home/>} />
            {/* <Route path="/properties" element={<Properties/>}/> */}
        </Routes>
    </BrowserRouter>
);

export default AppRoutes;
