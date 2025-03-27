import React, { useState } from "react";
import axios from "axios";

export default function ContactUs() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    message: "",
  });

  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:5000/api/contact/submit",
        formData
      );
      setSuccessMessage(response.data.message);
      setErrorMessage("");
      setFormData({ fullName: "", email: "", message: "" }); // Reset form
    } catch (error) {
      setSuccessMessage("");
      setErrorMessage("Error submitting the message. Try again.");
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
            <a href="/contactUs" className="hover:text-green-500">
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

      {/* ✅ Contact Section */}
      <div className="w-full min-h-screen flex items-center justify-center px-6 pt-24">
        <div className="bg-white shadow-md rounded-lg p-10 max-w-5xl w-full flex flex-col md:flex-row gap-8">
          {/* ✅ Contact Form (Left Side) */}
          <div className="w-full md:w-2/3">
            <h2 className="text-3xl font-bold text-green-600">Contact Us</h2>
            <p className="text-gray-600 mt-2">
              Have any questions? Reach out to us, and we'll get back to you
              shortly.
            </p>

            {/* ✅ Success & Error Messages */}
            {successMessage && (
              <p className="text-green-500 mt-3">{successMessage}</p>
            )}
            {errorMessage && (
              <p className="text-red-500 mt-3">{errorMessage}</p>
            )}

            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              <div>
                <label className="block text-gray-700 font-medium">
                  Full Name
                </label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  className="w-full p-3 border rounded-md mt-1"
                  placeholder="Enter your name"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-3 border rounded-md mt-1"
                  placeholder="Enter your email"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  className="w-full p-3 border rounded-md mt-1"
                  placeholder="Write your message..."
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-green-500 text-white py-3 rounded-md hover:bg-green-600 text-lg font-semibold"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* ✅ Contact Information Card (Right Side) */}
          <div className="w-full md:w-1/3 bg-gray-50 p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Our Contact Information
            </h3>
            <div className="space-y-4 text-gray-700">
              <p>
                <strong>📍 Address:</strong> 123 Eco Street, Green Valley, SC
                12345
              </p>
              <p>
                <strong>📞 Phone:</strong> +1 (555) 123-4567
              </p>
              <p>
                <strong>✉️ Email:</strong> support@ecowastehub.com
              </p>
              <p>
                <strong>🕒 Business Hours:</strong> Mon-Fri: 9AM - 6PM | Sat:
                10AM - 4PM
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
