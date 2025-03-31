import React from "react";
import { Link } from "react-router-dom";



export default function Home() {
  return (
    <div className="w-full min-h-screen overflow-hidden">
      {/*  Navigation Bar */}
      <nav className="w-full py-4 px-8 flex items-center justify-between bg-white shadow-md fixed top-0 left-0 right-0 z-10">
        <h1 className="text-2xl font-bold text-green-600">EcoWaste</h1>
        <ul className="hidden md:flex space-x-8 text-gray-600 text-lg">
          <li>
            <a href="/Home" className="ho   ver:text-green-500">
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
      {/*  Hero Section - Full Width & Responsive */}
      <section className="w-full h-[50vh] flex items-center justify-center bg-gradient-to-r from-green-700 to-green-500 px-6 md:px-10">
        <div className="max-w-3xl text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold">
            Smart Waste Management Solutions
          </h1>
          <p className="mt-4 text-lg md:text-xl">
            Revolutionizing waste management with innovative technology and
            sustainable practices for a cleaner future.
          </p>
        </div>
      </section>
      {/*  Services Section - Responsive Grid */}
      <section className="w-full bg-gray-100 py-14 px-6 md:px-20">
        <h2 className="text-center text-4xl font-semibold mb-10">
          Our Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto">
          <div className="p-6 bg-white shadow-md rounded-lg">
            <h3 className="text-xl font-semibold">Real-Time Bin Monitoring</h3>
            <p className="mt-2 text-gray-600">
              Uses ultrasonic sensors to track waste levels and alert collectors
              when bins are full.
            </p>
          </div>
          <div className="p-6 bg-white shadow-md rounded-lg">
            <h3 className="text-xl font-semibold">Smart Waste Scheduling</h3>
            <p className="mt-2 text-gray-600">
              Schedule waste pickups based on your availability with our
              user-friendly system.
            </p>
          </div>
          <div className="p-6 bg-white shadow-md rounded-lg">
            <h3 className="text-xl font-semibold">Automated Email Reminders</h3>
            <p className="mt-2 text-gray-600">
              Never miss a collection with our automated email notification
              system.
            </p>
          </div>
          <div className="p-6 bg-white shadow-md rounded-lg">
            <h3 className="text-xl font-semibold">
              Eco-Friendly Waste Management
            </h3>
            <p className="mt-2 text-gray-600">
              Promote sustainability with responsible waste disposal practices.
            </p>
          </div>
        </div>
      </section>
      {/*  Call-To-Action Section */}
      <section className="w-full bg-green-700 text-white py-12 md:py-15 text-center">
        <h2 className="text-3xl font-bold">
          Ready to Transform Your Waste Management?
        </h2>
        <p className="mt-4 text-lg">
          Join thousands of satisfied customers who have revolutionized their
          waste management with EcoWaste's smart solutions.
        </p>
        <button className="mt-6 bg-white text-green-600 font-semibold px-6 py-2 rounded-lg hover:bg-gray-100">
          <Link to="/add">Sign Up Now</Link>
        </button>
      </section>
      {/*  Footer Section - Full Width & Responsive */}
      <footer className="w-full bg-gray-900 text-white py-10 px-6 md:px-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-9 max-w-8xl mx-auto">
          <div>
            <h3 className="text-lg font-semibold">EcoWaste</h3>
            <p className="text-gray-400">
              Leading the way in sustainable waste management solutions for a
              cleaner future.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="text-gray-400 space-y-5">
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
            <div className="flex space-x-7 mt-2">
              <a href="#" className="text-gray-400">
                Facebook
              </a>
              <a href="#" className="text-gray-400">
                Twitter
              </a>
              <a href="#" className="text-gray-400">
                LinkedIn
              </a>
              <a href="#" className="text-gray-400">
                Instagram
              </a>
            </div>
          </div>
        </div>
        <p className="text-center text-gray-500 mt-6">
          © 2025 EcoWaste Hub. All rights reserved.
        </p>
      </footer>{" "}
     
    </div>
  );
}
