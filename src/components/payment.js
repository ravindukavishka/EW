import React, { useState } from "react";
import { FaCcVisa, FaCcMastercard, FaCcPaypal, FaLock } from "react-icons/fa"; // ✅ Import Tailwind Icons

export default function PaymentPage() {
  const [paymentMethod, setPaymentMethod] = useState("credit");

  const [formData, setFormData] = useState({
    name: "",
    cardNumber: "",
    expiry: "",
    cvv: "",
    address: "",
    zipCode: "",
    country: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Payment Processed Successfully!");
  };

  return (
    <div className="w-full min-h-screen bg-gray-100 flex flex-col items-center pt-24">
      {/* ✅ Navigation Bar */}
      <nav className="w-full py-4 px-8 flex items-center justify-between bg-white shadow-md fixed top-0 left-0 right-0 z-10">
        <h1 className="text-2xl font-bold text-green-600">EcoWaste</h1>

        {/* ✅ Center-aligning navigation links */}
        <ul className="md:flex space-x-8 text-gray-600 text-lg mx-auto hidden">
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

        {/* Empty div to balance alignment */}
        <div className="w-32"></div>
      </nav>

      {/* ✅ Payment Form Section */}
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-xl w-full mt-10">
        <h2 className="text-2xl font-bold text-gray-800 text-center">
          Payment Method
        </h2>
        <p className="text-gray-600 text-center mt-2">
          Choose your preferred payment method
        </p>

        {/* ✅ Payment Method Selection */}
        <div className="flex justify-center mt-4">
          <button
            className={`px-6 py-3 rounded-md w-1/2 text-lg ${
              paymentMethod === "credit"
                ? "bg-green-500 text-white"
                : "bg-gray-200 text-gray-600"
            }`}
            onClick={() => setPaymentMethod("credit")}
          >
            Credit Card
          </button>
          <button
            className={`px-6 py-3 rounded-md w-1/2 text-lg ${
              paymentMethod === "paypal"
                ? "bg-green-500 text-white"
                : "bg-gray-200 text-gray-600"
            }`}
            onClick={() => setPaymentMethod("paypal")}
          >
            PayPal
          </button>
        </div>

        {/* ✅ Payment Form */}
        {paymentMethod === "credit" ? (
          <form onSubmit={handleSubmit} className="mt-6 space-y-4">
            <div>
              <label className="block text-gray-700">Name on Card</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-2 border rounded"
                placeholder="John Doe"
                required
              />
            </div>

            <div>
              <label className="block text-gray-700">Card Number</label>
              <input
                type="text"
                name="cardNumber"
                value={formData.cardNumber}
                onChange={handleChange}
                className="w-full p-2 border rounded"
                placeholder="**** **** **** ****"
                required
              />
            </div>

            <div className="flex space-x-4">
              <div className="w-1/2">
                <label className="block text-gray-700">Expiration Date</label>
                <input
                  type="text"
                  name="expiry"
                  value={formData.expiry}
                  onChange={handleChange}
                  className="w-full p-2 border rounded"
                  placeholder="MM/YY"
                  required
                />
              </div>
              <div className="w-1/2">
                <label className="block text-gray-700">CVV</label>
                <input
                  type="text"
                  name="cvv"
                  value={formData.cvv}
                  onChange={handleChange}
                  className="w-full p-2 border rounded"
                  placeholder="***"
                  required
                />
              </div>
            </div>

            {/* ✅ Payment Icons */}
            <div className="flex justify-start space-x-4 mt-3">
              <FaCcVisa className="text-blue-600 text-3xl" title="Visa" />
              <FaCcMastercard
                className="text-red-600 text-3xl"
                title="MasterCard"
              />
              <FaCcPaypal className="text-yellow-500 text-3xl" title="PayPal" />
            </div>

            {/* ✅ Billing Information */}
            <h3 className="text-xl font-semibold text-gray-700 mt-6">
              Billing Information
            </h3>
            <div className="flex items-center space-x-2">
              <input type="checkbox" id="billingAddress" className="w-4 h-4" />
              <label htmlFor="billingAddress" className="text-gray-600">
                Use same address as billing info
              </label>
            </div>

            <div>
              <label className="block text-gray-700">Address</label>
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                className="w-full p-2 border rounded"
                placeholder="Enter your address"
                required
              />
            </div>

            <div className="flex space-x-4">
              <div className="w-1/2">
                <label className="block text-gray-700">Zip/Postal Code</label>
                <input
                  type="text"
                  name="zipCode"
                  value={formData.zipCode}
                  onChange={handleChange}
                  className="w-full p-2 border rounded"
                  placeholder="Enter zip code"
                  required
                />
              </div>
              <div className="w-1/2">
                <label className="block text-gray-700">Country/Region</label>
                <select
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  className="w-full p-2 border rounded"
                >
                  <option>Select country</option>
                  <option>United States</option>
                  <option>United Kingdom</option>
                  <option>Canada</option>
                  <option>Australia</option>
                </select>
              </div>
            </div>

            {/* ✅ Secure Transaction */}
            <div className="flex items-center text-gray-600 mt-4">
              <FaLock className="text-gray-500 text-xl mr-2" />
              <p className="text-sm">Secure Transaction • SSL Encrypted</p>
            </div>

            <button
              type="submit"
              className="w-full p-3 bg-green-500 text-white rounded-md hover:bg-green-600 mt-4"
            >
              Save Information
            </button>
          </form>
        ) : (
          <div className="text-center mt-6">
            <p className="text-gray-600">
              You will be redirected to PayPal for payment.
            </p>
            <button className="w-full p-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 mt-4">
              Pay with PayPal
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
