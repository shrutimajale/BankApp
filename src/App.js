import React from "react";
import "./App.css";
import Login from "./components/jsfiles/login";
import Navbar from "./components/jsfiles/navbar";
import Register from "./components/jsfiles/register";
import Home from "./components/jsfiles/home";
import About from "./components/jsfiles/about";
import Welcome from "./components/jsfiles/welcome";
import Admin from "./components/jsfiles/admin";
import ForgotPassword from "./components/jsfiles/forgotPassword";
import VerifyOtp from "./components/jsfiles/verifyOtp";
import ContactUs from "./components/jsfiles/ContactUs";
import Trial from "./components/jsfiles/Trial";
import ResetPassword from "./components/jsfiles/ResetPassword";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import ProtectedRoute from "./components/jsfiles/ProtectedRoute";

function App() {
  const location = useLocation();
  const noNavbarPaths = ["/welcome", "/resetPassword", "trial"];
  return (
    <div>
      {!noNavbarPaths.includes(location.pathname) && <Navbar />}

      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/about" element={<About />} />
<<<<<<< HEAD
=======
          <Route path="/ContactUs" element={<ContactUs />} />
>>>>>>> master
          <Route
            path="/welcome"
            element={
              <ProtectedRoute>
                <Welcome />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin"
            element={
              <ProtectedRoute>
                <Admin />
              </ProtectedRoute>
            }
          />
<<<<<<< HEAD
          <Route path="/ContactUs" element={<ContactUs />} />
=======

>>>>>>> master
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/resetPassword" element={<ResetPassword />} />
          <Route path="/verify-otp" element={<VerifyOtp />} />
          <Route path="/trial" element={<Trial />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
