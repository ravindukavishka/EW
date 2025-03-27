import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

// Import your components
import CreateUser from "./components/create-user.components";
import Login from "./components/user.login";
import Profile from "./components/profile";
import Home from "./components/Home";
import ContactUs from "./components/ContactUs";
import BinRequest from "./components/BinRequest";
import EditProfile from "./components/edit_profile";
import HomePage from "./components/services";
import UltrasonicBinRequest from "./components/Ultrasonic-bin-home";
import PaymentPage from "./components/payment";
import PricingPage  from "./components/pricing";
function App() {
  return (
    <Router>
      {" "}
      {/* ✅ Wrapped everything inside Router */}
      <div className="container mt-4">
        <h2 className="text-center mb-4">User Management App</h2>
        <Routes>
          <Route path="/add" element={<CreateUser />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/home" element={<Home />} />
          <Route path="/ContactUs" element={<ContactUs />} />
          <Route path="/requests" element={<BinRequest />} />
          <Route path="/services" element={<HomePage />} />
          <Route path="/payment" element={<PaymentPage />} />
          <Route path="/ultrasonic-bin" element={<UltrasonicBinRequest />} />
          <Route path="/edit-profile" element={<EditProfile />} />{" "}
          {/* ✅ Fixed Syntax Error */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
