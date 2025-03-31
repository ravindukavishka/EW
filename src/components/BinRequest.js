import React, { useState } from "react";
import axios from "axios";

export default function BinRequestForm() {
  const [formData, setFormData] = useState({
    binType: "",
    binSize: "",
    deliveryAddress: "",
    date: "",
    timeSlot: "",
  });


  

  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  // Handle Input Change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle Form Submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setMessage("");

    const token = localStorage.getItem("token"); // ✅ Get token from localStorage

    if (!token) {
      setError("You must be logged in to submit a request.");
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:5000/requests", // ✅ Correct endpoint
        {
          binType: formData.binType,
          binSize: formData.binSize,
          deliveryAddress: formData.deliveryAddress,
          date: formData.date,
          timeSlot: formData.timeSlot,
        },
        {
          headers: { Authorization: `Bearer ${token}` }, // ✅ Send token
        }
      );

      setMessage("Request submitted successfully!");
    } catch (err) {
      setError(err.response?.data?.error || "Unauthorized access.");
    }
  };

  return (
    <div className="w-full min-h-screen bg-gray-100">
      {/* ✅ Navigation Bar */}
      <nav className="w-full py-4 px-8 flex items-center justify-between bg-white shadow-md fixed top-0 left-0 right-0 z-10">
        <h1 className="text-2xl font-bold text-green-600">EcoWaste</h1>
        <ul className="hidden md:flex space-x-8 text-gray-600 text-lg">
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
        <div className="hidden md:flex space-x-4">
          <a href="/login" className="font-bold text-black">
            LOGIN
          </a>
          <a href="/add" className="text-green-500 hover:underline">
            SIGN UP
          </a>
        </div>
      </nav>

      {/* ✅ Bin Request Form */}
      <div className="max-w-md mx-auto mt-24 p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center text-green-600">
          Bin Request Form
        </h2>

        {message && (
          <p className="text-green-500 text-center mt-3">{message}</p>
        )}
        {error && <p className="text-red-500 text-center mt-3">{error}</p>}

        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          <div>
            <label className="block text-gray-700">Bin Type:</label>
            <select
              name="binType"
              value={formData.binType}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            >
              <option value="">Select Bin Type</option>
              <option value="ultrasonic">Ultrasonic</option>
              <option value="standard">Standard</option>
            </select>
          </div>

          <div>
            <label className="block text-gray-700">Bin Size:</label>
            <select
              name="binSize"
              value={formData.binSize}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            >
              <option value="">Select Bin Size</option>
              <option value="small">Small</option>
              <option value="medium">Medium</option>
              <option value="large">Large</option>
            </select>
          </div>

          <div>
            <label className="block text-gray-700">Delivery Address:</label>
            <input
              type="text"
              name="deliveryAddress"
              value={formData.deliveryAddress}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              placeholder="Enter delivery address"
            />
          </div>

          <div>
            <label className="block text-gray-700">Date:</label>
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              min={new Date().toISOString().split("T")[0]} // ✅ Restrict past dates
            />
          </div>

          <div>
            <label className="block text-gray-700">Time Slot:</label>
            <select
              name="timeSlot"
              value={formData.timeSlot}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            >
              <option value="">Select a Time Slot</option>
              <option value="09:00-10:00">9 AM - 10 AM</option>
              <option value="10:00-11:00">10 AM - 11 AM</option>
              <option value="13:00-14:00">1 PM - 2 PM</option>
              <option value="14:00-15:00">2 PM - 3 PM</option>
            </select>
          </div>

          <button
            type="submit"
            className="w-full p-2 bg-green-500 text-white rounded hover:bg-green-600"
          >
            Submit Request
          </button>
        </form>
      </div>
    </div>
  );
}
