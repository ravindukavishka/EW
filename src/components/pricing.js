import React from "react";
import { FaCcVisa, FaCcMastercard, FaCcPaypal } from "react-icons/fa";

export default function PricingPage() {
  return (
    <div className="w-full min-h-screen bg-gray-100 flex flex-col items-center">
      {/* ✅ Navigation Bar */}
      <nav className="w-full py-4 px-8 flex items-center justify-between bg-white shadow-md fixed top-0 left-0 right-0 z-10">
        <h1 className="text-2xl font-bold text-green-600">EcoWaste</h1>
        <ul className="flex space-x-6 text-gray-600 text-xl">
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
            <a href="/contact" className="hover:text-green-500">
              Contact Us
            </a>
          </li>
        </ul>
        <div className="space-x-4">
          <a href="/login" className="text-green-500 hover:underline">
            LOGIN
          </a>
          <a href="/add" className="font-bold text-black">
            SIGN UP
          </a>
        </div>
      </nav>

      {/* ✅ Hero Section */}
      <section className="relative w-full h-80 flex flex-col items-center justify-center text-center bg-green-500 text-white mt-16">
        <h2 className="text-4xl font-bold">Choose the Best Plan for You</h2>
        <p className="mt-2 text-lg">
          Affordable & sustainable waste collection solutions.
        </p>
      </section>

      {/* ✅ Pricing Cards */}
      <section className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 px-6">
        {/* ⭐ Basic Plan */}
        <div className="bg-white p-8 rounded-lg shadow-md text-center">
          <h3 className="text-2xl font-semibold text-gray-800">Basic</h3>
          <p className="text-gray-500 mt-2">For small households</p>
          <p className="text-4xl font-bold text-green-600 mt-4">
            $9.99<span className="text-lg">/month</span>
          </p>
          <ul className="mt-4 space-y-2 text-gray-600">
            <li>✔ Weekly waste collection</li>
            <li>✔ Standard bin included</li>
            <li>❌ No priority scheduling</li>
          </ul>
          <button className="mt-6 px-6 py-3 bg-green-500 text-white rounded-md hover:bg-green-600">
            Select Plan
          </button>
        </div>

        {/* 🌟 Standard Plan */}
        <div className="bg-white p-8 rounded-lg shadow-md text-center border-2 border-green-500">
          <h3 className="text-2xl font-semibold text-gray-800">Standard</h3>
          <p className="text-gray-500 mt-2">For medium households</p>
          <p className="text-4xl font-bold text-green-600 mt-4">
            $19.99<span className="text-lg">/month</span>
          </p>
          <ul className="mt-4 space-y-2 text-gray-600">
            <li>✔ Bi-weekly waste collection</li>
            <li>✔ Smart ultrasonic bin included</li>
            <li>✔ Priority scheduling</li>
          </ul>
          <button className="mt-6 px-6 py-3 bg-green-500 text-white rounded-md hover:bg-green-600">
            Select Plan
          </button>
        </div>

        {/* 🚀 Premium Plan */}
        <div className="bg-white p-8 rounded-lg shadow-md text-center">
          <h3 className="text-2xl font-semibold text-gray-800">Premium</h3>
          <p className="text-gray-500 mt-2">
            For large households & businesses
          </p>
          <p className="text-4xl font-bold text-green-600 mt-4">
            $29.99<span className="text-lg">/month</span>
          </p>
          <ul className="mt-4 space-y-2 text-gray-600">
            <li>✔ Weekly premium waste collection</li>
            <li>✔ Large smart bin with tracking</li>
            <li>✔ Priority & custom scheduling</li>
          </ul>
          <button className="mt-6 px-6 py-3 bg-green-500 text-white rounded-md hover:bg-green-600">
            Select Plan
          </button>
        </div>
      </section>

      {/* ✅ Payment Section */}
      <section className="w-full max-w-4xl bg-white p-8 rounded-lg shadow-md mt-12 text-center">
        <h3 className="text-2xl font-bold text-gray-800">
          Secure Payment Options
        </h3>
        <p className="text-gray-500 mt-2">
          We accept multiple payment methods.
        </p>
        <div className="flex justify-center space-x-6 text-4xl text-gray-600 mt-6">
          <FaCcVisa className="hover:text-blue-600 cursor-pointer" />
          <FaCcMastercard className="hover:text-red-600 cursor-pointer" />
          <FaCcPaypal className="hover:text-blue-400 cursor-pointer" />
        </div>
        <button className="mt-6 px-8 py-3 bg-green-500 text-white rounded-md hover:bg-green-600">
          Proceed to Payment
        </button>
      </section>

      {/* ✅ CTA Section */}
      <section className="bg-green-500 py-12 text-center text-white mt-16 w-full">
        <h3 className="text-2xl font-bold">Join EcoWaste Today!</h3>
        <p className="mt-2">Sustainable waste management starts here.</p>
        <button className="mt-4 px-6 py-3 bg-white text-green-500 rounded-md hover:bg-gray-200">
          Get Started
        </button>
      </section>

      {/* ✅ Footer */}
      <footer className="w-full bg-gray-900 text-white py-10 px-6 md:px-20 mt-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-9 max-w-6xl mx-auto">
          <div>
            <h3 className="text-lg font-semibold">EcoWaste</h3>
            <p className="text-gray-400">
              Sustainable waste solutions for a greener future.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="text-gray-400 space-y-2">
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Services</a>
              </li>
              <li>
                <a href="#">Projects</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Follow Us</h3>
            <div className="flex space-x-4 mt-2">
              <a href="#" className="text-gray-400">
                Facebook
              </a>
              <a href="#" className="text-gray-400">
                Twitter
              </a>
              <a href="#" className="text-gray-400">
                LinkedIn
              </a>
            </div>
          </div>
        </div>
        <p className="text-center text-gray-500 mt-6">
          © 2025 EcoWaste. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
