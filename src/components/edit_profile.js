import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function EditProfile() {
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    password: "",
  });
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      navigate("/login"); // Redirect to login if no token
      return;
    }

    const fetchUserData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/users/profile",
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        setUserData(response.data);
      } catch (err) {
        setError("Unable to fetch user data.");
      }
    };

    fetchUserData();
  }, [navigate]);

  // ✅ Handle Input Change
  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  // ✅ Handle Profile Update
const handleSubmit = async (e) => {
  e.preventDefault();
  setError("");
  setMessage("");

  const token = localStorage.getItem("token");

  if (!token) {
    setError("Unauthorized access.");
    return;
  }

  try {
    const response = await axios.put(
      "http://localhost:5000/users/edit", // ✅ FIXED ENDPOINT
      userData,
      {
        headers: { Authorization: `Bearer ${token}` }, // ✅ Ensure Authorization Header
      }
    );

    setMessage(response.data.message || "Profile updated successfully!");
    setTimeout(() => navigate("/profile"), 2000); // Redirect after update
  } catch (err) {
    setError(
      err.response?.data?.error || "Unable to update profile. Please try again."
    );
  }
};

  return (
    <div className="w-full min-h-screen bg-gray-100">
      {/* ✅ Navigation Bar */}
      <nav className="w-full py-4 px-8 flex items-center justify-between bg-white shadow-md fixed top-0 left-0 right-0 z-10">
        <h1 className="text-2xl font-bold text-green-600">EcoWaste</h1>
        <ul className="hidden md:flex space-x-8 text-gray-600 text-lg">
          <li>
            <a href="/home" className="hover:text-green-500">
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
            <a href="/contactus" className="hover:text-green-500">
              Contact Us
            </a>
          </li>
        </ul>
        <div className="hidden md:flex space-x-4">
          <a href="/profile" className="font-bold text-black">
            Profile
          </a>
          <a href="/Home" className="text-red-500 hover:underline">
            Logout
          </a>
        </div>
      </nav>

      {/* ✅ Edit Profile Form */}
      <div className="max-w-2xl mx-auto mt-24 p-8 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center text-green-600">
          Edit Profile
        </h2>

        {message && (
          <p className="text-green-500 text-center mt-3">{message}</p>
        )}
        {error && <p className="text-red-500 text-center mt-3">{error}</p>}

        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          <div>
            <label className="block text-gray-700">First Name:</label>
            <input
              type="text"
              name="firstName"
              value={userData.firstName}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700">Last Name:</label>
            <input
              type="text"
              name="lastName"
              value={userData.lastName}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700">Email:</label>
            <input
              type="email"
              name="email"
              value={userData.email}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700">Phone:</label>
            <input
              type="text"
              name="phone"
              value={userData.phone}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700">Address:</label>
            <input
              type="text"
              name="address"
              value={userData.address}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700">
              New Password (Optional):
            </label>
            <input
              type="password"
              name="password"
              value={userData.password}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            />
          </div>

          <button
            type="submit"
            className="mt-3 w-full bg-green-500 text-white py-2 rounded hover:bg-green-600"
          >
            Update Profile
          </button>
        </form>
      </div>
    </div>
  );
}
