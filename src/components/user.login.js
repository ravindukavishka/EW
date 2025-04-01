import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
//import { FcGoogle } from "react-icons/fc";
import { FaUser, FaLock } from "react-icons/fa";
import { jwtDecode } from "jwt-decode";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const navigate = useNavigate();

  const handleUsernameChange = (e) => setUsername(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);

  //  const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   setError("");
  //   setSuccessMessage("");

  //   try {
  //     const response = await axios.post("http://localhost:5000/users/login", {
  //       username,
  //       password,
  //     });

  //     if (response.data.token) {
  //       setSuccessMessage("Login successful! Redirecting...");
  //       localStorage.setItem("token", response.data.token);

  //       const decoded = jwtDecode(response.data.token);

  //       // 👇 Check role from token and redirect accordingly
  //       if (decoded.role === "admin") {
  //         setTimeout(() => navigate("/admin-dashboard"), 1000);
  //       } else {
  //         setTimeout(() => navigate("/profile"), 1000);
  //       }
  //     } else {
  //       setError("Invalid username or password.");
  //     }
  //   } catch (err) {
  //     setError(err.response?.data?.error || "Login failed. Please try again.");
  //   }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccessMessage("");

    try {
      const response = await axios.post("http://localhost:5000/users/login", {
        username,
        password,
      });

      if (response.data.token) {
        setSuccessMessage("Login successful! Redirecting...");
        localStorage.setItem("token", response.data.token);

        // 👉 Hardcoded admin login check
        if (username === "zzzzz" && password === "12345") {
          setTimeout(() => navigate("/admin"), 1000);
        } else {
          setTimeout(() => navigate("/profile"), 1000);
        }
      } else {
        setError("Invalid username or password.");
      }
    } catch (err) {
      setError(err.response?.data?.error || "Login failed. Please try again.");
    }
  };

  return (
    <div className="h-screen w-full flex flex-col">
      {/* Navigation Bar - Fixed to Top */}
      <nav className="w-full py-4 px-8 flex items-center justify-between bg-white shadow-md fixed top-0 left-0 right-0 z-10 h-[64px]">
        <h1 className="text-2xl font-bold text-green-600">EcoWaste</h1>
        <ul className="flex space-x-6 text-gray-600 text-xl">
          <li>
            <a href="/Home" className="hover:text-green-500">
              Home
            </a>
          </li>
          <li>
            <a href="/pricing" className="hover:text-green-500">
              Pricing
            </a>
          </li>
          <li>
            <a href="/services" className="hover:text-green-500">
              Services
            </a>
          </li>
          <li>
            <a href="/ContactUs" className="hover:text-green-500">
              Contact Us
            </a>
          </li>
        </ul>
        <div className="space-x-4">
          <a href="/login" className="font-bold text-black">
            LOGIN
          </a>
          <a href="/add" className="text-green-500 hover:underline">
            SIGN UP
          </a>
        </div>
      </nav>

      {/* Main Content - Adjusted for No Gap */}
      <div className="flex flex-grow w-full lg:flex-row flex-col pt-[64px]">
        {/* Left Section - Taller Login Form */}
        <div className="lg:w-1/2 w-full flex items-center justify-center bg-gradient-to-r from-[#E0F2F1] to-[#E0F7FA] p-8">
          <div className="bg-white p-10 rounded-lg shadow-lg w-full max-w-md min-h-[550px] flex flex-col justify-between">
            <div>
              <h2 className="text-2xl font-bold text-gray-800 text-center flex items-center justify-center">
                EcoWaste
              </h2>
              <p className="text-gray-500 text-center mb-6">
                Sustainable Waste Management Solution
              </p>
              <h3 className="text-lg font-semibold text-gray-700 text-center mb-6">
                Welcome Back
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-gray-700">Email or Phone:</label>
                  <div className="flex items-center border rounded-md px-3 py-3">
                    <FaUser className="text-gray-400 mr-2" />
                    <input
                      type="text"
                      className="w-full outline-none"
                      placeholder="Enter your email or phone"
                      value={username}
                      onChange={handleUsernameChange}
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-gray-700">Password:</label>
                  <div className="flex items-center border rounded-md px-3 py-3">
                    <FaLock className="text-gray-400 mr-2" />
                    <input
                      type="password"
                      className="w-full outline-none"
                      placeholder="Enter your password"
                      value={password}
                      onChange={handlePasswordChange}
                      required
                    />
                  </div>
                </div>

                <div className="flex items-center justify-between text-sm">
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    Remember me
                  </label>
                  <a href="#" className="text-green-500 hover:underline">
                    Forgot password?
                  </a>
                </div>

                {successMessage && (
                  <p className="text-green-500 text-sm">{successMessage}</p>
                )}
                {error && <p className="text-red-500 text-sm">{error}</p>}

                <button
                  type="submit"
                  className="w-full bg-green-500 text-white py-3 rounded-md hover:bg-green-600 transition duration-200 text-lg font-semibold"
                >
                  Sign In
                </button>
              </form>
            </div>

            {/* <div className="mt-6 text-center">
              <p className="text-gray-500 text-sm">Or continue with</p>
              <button className="mt-2 w-full flex items-center justify-center border py-3 rounded-md hover:bg-gray-100 text-lg">
                <FcGoogle className="text-2xl mr-2" />
                Sign in with Google
              </button>
            </div> */}

            <p className="text-sm text-gray-500 text-center mt-6">
              Don't have an account?{" "}
              <a href="/add" className="text-green-500 hover:underline">
                Sign up
              </a>
            </p>
          </div>
        </div>

        {/* Right Section - Gradient Background */}
        <div className="lg:w-1/2 w-full bg-gradient-to-r from-[#6EE7B7] to-[#3B82F6] flex items-center justify-center p-8">
          <div className="text-white text-center px-8">
            <div className="flex items-center justify-center mb-4">
              <div className="bg-white bg-opacity-10 p-6 rounded-lg">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/93/93616.png"
                  alt="Recycle Icon"
                  className="w-16 h-16 mx-auto"
                />
              </div>
            </div>
            <h2 className="text-3xl font-bold">Manage Waste Efficiently</h2>
            <p className="mt-4 text-lg">
              Join thousands of organizations making a difference with smart
              waste management solutions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
