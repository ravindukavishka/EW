import React from "react";
import www from "../img/www.jpg"; // ✅ Import the hero background image

export default function HomePage() {
  return (
    <div className="w-full min-h-screen">
      {/* Navigation Bar */}
      <nav className="w-full py-4 px-8 flex items-center justify-between bg-white shadow-md fixed top-0 left-0 right-0 z-10">
        <h1 className="text-2xl font-bold text-green-600">EcoWaste</h1>
        <ul className="hidden md:flex space-x-8 text-gray-600 text-lg">
          <li>
            <a href="/home" className="hover:text-green-500">
              Home
            </a>
          </li>
          <li>
            <a href="/services" className="hover:text-green-500">
              Pricing
            </a>
          </li>
          <li>
            <a href="#services" className="hover:text-green-500">
              Services
            </a>
          </li>
          <li>
            <a href="/ContactUs" className="hover:text-green-500">
              Contact Us
            </a>
          </li>
        </ul>
        <button className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600">
          Get Started
        </button>
      </nav>

      {/* ✅ Fixed Hero Section */}
      <section
        className="relative w-full h-[90vh] bg-cover bg-center flex items-center justify-center text-center text-white"
        style={{ backgroundImage: `url(${www})` }} // ✅ Use imported image dynamically
      >
        <div className="bg-black bg-opacity-50 p-10 rounded-lg max-w-3xl">
          <h2 className="text-5xl font-bold">
            Revolutionizing Waste Management for a Greener Future
          </h2>
          <p className="mt-4 text-lg">
            Smart, sustainable, and efficient waste solutions for a cleaner
            environment.
          </p>
          <button className="mt-6 px-8 py-4 bg-green-500 text-lg rounded-md hover:bg-green-600">
            Learn More
          </button>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-20 px-8 grid grid-cols-1 md:grid-cols-2 gap-10 text-center">
        <div className="bg-white p-10 shadow-lg rounded-xl h-56 flex flex-col justify-center">
          <h3 className="text-3xl font-semibold">Our Mission</h3>
          <p className="text-gray-600 text-lg mt-4">
            EcoWaste aims to reduce environmental waste through smart bin
            technology and efficient waste collection services.
          </p>
        </div>
        <div className="bg-white p-10 shadow-lg rounded-xl h-56 flex flex-col justify-center">
          <h3 className="text-3xl font-semibold">Our Vision</h3>
          <p className="text-gray-600 text-lg mt-4">
            Our vision is to attain minimal waste and maximum sustainability
            through innovation and technology.
          </p>
        </div>
      </section>

      {/* Services & Impact */}
      <section id="services" className="py-20 text-center">
        <h3 className="text-4xl font-bold">Our Services & Impact</h3>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-10 px-8">
          <div className="bg-white p-10 shadow-lg rounded-xl h-56 flex flex-col items-center justify-center text-2xl font-semibold">
            Smart Bin Technology
          </div>
          <div className="bg-white p-10 shadow-lg rounded-xl h-56 flex flex-col items-center justify-center text-2xl font-semibold">
            Scheduled Waste Collection
          </div>
          <div className="bg-white p-10 shadow-lg rounded-xl h-56 flex flex-col items-center justify-center text-2xl font-semibold">
            Eco-Friendly Recycling
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-8 text-center">
        <h3 className="text-4xl font-bold">Why Choose Us?</h3>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="bg-white p-10 shadow-lg rounded-xl h-56 flex flex-col justify-center text-lg">
            <h4 className="text-2xl font-semibold text-green-600">
              Real-time Monitoring
            </h4>
            <p className="text-gray-600 mt-3">
              Track waste levels and collection logs in real-time.
            </p>
          </div>
          <div className="bg-white p-10 shadow-lg rounded-xl h-56 flex flex-col justify-center text-lg">
            <h4 className="text-2xl font-semibold text-green-600">
              AI-Driven Management
            </h4>
            <p className="text-gray-600 mt-3">
              Intelligent algorithms optimize collection routes and schedules.
            </p>
          </div>
          <div className="bg-white p-10 shadow-lg rounded-xl h-56 flex flex-col justify-center text-lg">
            <h4 className="text-2xl font-semibold text-green-600">
              Community-Driven
            </h4>
            <p className="text-gray-600 mt-3">
              Working together with communities for a cleaner future.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-green-500 py-20 text-center text-white">
        <h3 className="text-4xl font-bold">
          Join us in creating a sustainable future
        </h3>
        <p className="mt-4 text-lg">Reduce. Reuse. Recycle.</p>
        <button className="mt-6 px-8 py-4 bg-white text-green-500 text-lg rounded-md hover:bg-gray-200">
          Get In Touch
        </button>
      </section>

      {/* Footer */}
      <footer className="w-full bg-gray-900 text-white py-14 px-8 md:px-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-7xl mx-auto">
          <div>
            <h3 className="text-2xl font-semibold">EcoWaste</h3>
            <p className="text-gray-400 mt-2">
              Leading the way in sustainable waste management solutions for a
              cleaner future.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-semibold">Quick Links</h3>
            <ul className="text-gray-400 space-y-3 mt-3">
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
            <h3 className="text-2xl font-semibold">Follow Us</h3>
            <div className="flex space-x-6 mt-4">
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
      </footer>
    </div>
  );
}
