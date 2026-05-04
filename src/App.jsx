import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
  Navigate,
} from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Navbar from "./components/Navbar";
import FloatingCallButton from "./components/FloatingCallButton";
import FloatingWhatsApp from "./components/FloatingWhatsapp";
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

const FloatingCallWrapper = () => {
  const { pathname } = useLocation();
  if (pathname !== "/") return null;
  return <FloatingCallButton />;
};

const FloatingWhatsAppWrapper = () => {
  const { pathname } = useLocation();
  if (pathname !== "/") return null;
  return <FloatingWhatsApp />;
};

const ProtectedAdminRoute = () => {
  const token = sessionStorage.getItem("adminToken");
  return token ? <Admin /> : <Navigate to="/admin-login" replace />;
};

function App() {
  return (
    <BrowserRouter>
      <NavbarWrapper />
      <FloatingCallWrapper />
      <FloatingWhatsAppWrapper />
      <Toaster position="top-center" />
      <main className="pb-24 md:pb-28">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/results" element={<Results />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/success" element={<Success />} />
          <Route path="/admin-login" element={<AdminLogin />} />
          <Route path="/admin" element={<ProtectedAdminRoute />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;