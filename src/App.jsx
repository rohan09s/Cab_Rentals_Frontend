import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
  Navigate,
} from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Results from "./pages/Results";
import Booking from "./pages/Booking";
import Success from "./pages/Sucess";
import Admin from "./pages/Admin";
import AdminLogin from "./pages/AdminLogin";

const NavbarWrapper = () => {
  const location = useLocation();
  const showFullNavbar = location.pathname === "/";

  return <Navbar showFull={showFullNavbar} />;
};

const ProtectedAdminRoute = () => {
  const token = sessionStorage.getItem("adminToken");
  return token ? <Admin /> : <Navigate to="/admin-login" replace />;
};

function App() {
  return (
    <BrowserRouter>
      <NavbarWrapper />
      <Toaster position="top-center" />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/results" element={<Results />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/success" element={<Success />} />
        <Route path="/admin-login" element={<AdminLogin />} />
        <Route path="/admin" element={<ProtectedAdminRoute />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;