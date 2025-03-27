// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// export default function UltrasonicBinRequest() {
//   const [formData, setFormData] = useState({
//     fullName: "",
//     email: "",
//     phone: "",
//     binSize: "Small",
//     address: "",
//   });

//   const [message, setMessage] = useState("");
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchUserDetails = async () => {
//       const token = localStorage.getItem("token");

//       if (!token) {
//         navigate("/login");
//         return;
//       }

//       try {
//         const response = await axios.get(
//           "http://localhost:5000/users/profile",
//           {
//             headers: { Authorization: `Bearer ${token}` },
//           }
//         );

//         setFormData({
//           fullName: `${response.data.firstName} ${response.data.lastName}`,
//           email: response.data.email,
//           phone: response.data.phone || "",
//           binSize: "Small",
//           address: response.data.address || "",
//         });
//       } catch (error) {
//         console.error("Error fetching user data:", error);
//       }
//     };

//     fetchUserDetails();
//   }, [navigate]);

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//  const handleSubmit = async (e) => {
//    e.preventDefault();
//    const token = localStorage.getItem("token");

//    if (!token) {
//      alert("Unauthorized request! Please log in.");
//      navigate("/login");
//      return;
//    }

//    try {
//      const response = await axios.post(
//        "http://localhost:5000/api/ultrasonic-bin/request",
//        formData,
//        { headers: { Authorization: `Bearer ${token}` } }
//      );

//      setMessage(response.data.message);

//      // ✅ Redirect to Payment Page after successful submission
//      setTimeout(() => navigate("/payment"), 2000);
//    } catch (error) {
//      console.error("Error submitting request:", error);
//      setMessage("Failed to submit request. Try again.");
//    }
//  };

//   return (
//     <div className="w-full min-h-screen flex items-center justify-center bg-gray-100">
//       <div className="bg-white shadow-md rounded-lg p-8 max-w-lg w-full">
//         <h2 className="text-2xl font-bold text-green-600 text-center">
//           Request an Ultrasonic Bin
//         </h2>
//         {message && (
//           <p className="text-green-500 text-center mt-3">{message}</p>
//         )}

//         <form onSubmit={handleSubmit} className="mt-6 space-y-4">
//           <div>
//             <label className="block text-gray-700">Full Name</label>
//             <input
//               type="text"
//               name="fullName"
//               value={formData.fullName}
//               onChange={handleChange}
//               className="w-full p-2 border rounded"
//               readOnly
//             />
//           </div>

//           <div>
//             <label className="block text-gray-700">Email Address</label>
//             <input
//               type="email"
//               name="email"
//               value={formData.email}
//               onChange={handleChange}
//               className="w-full p-2 border rounded"
//               readOnly
//             />
//           </div>

//           <div>
//             <label className="block text-gray-700">Phone Number</label>
//             <input
//               type="text"
//               name="phone"
//               value={formData.phone}
//               onChange={handleChange}
//               className="w-full p-2 border rounded"
//               required
//             />
//           </div>

//           <div>
//             <label className="block text-gray-700">Bin Size</label>
//             <select
//               name="binSize"
//               value={formData.binSize}
//               onChange={handleChange}
//               className="w-full p-2 border rounded"
//             >
//               <option>Small</option>
//               <option>Medium</option>
//               <option>Large</option>
//             </select>
//           </div>

//           <div>
//             <label className="block text-gray-700">Address</label>
//             <input
//               type="text"
//               name="address"
//               value={formData.address}
//               onChange={handleChange}
//               className="w-full p-2 border rounded"
//               required
//             />
//           </div>

//           <button
//             type="submit"
//             className="w-full p-3 bg-green-500 text-white rounded-md hover:bg-green-600"
//           >
//             Submit Request
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }

import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { FaCheckCircle, FaBox, FaClock } from "react-icons/fa"; // Icons for "How It Works"
import binImage from "../img/p.jpg"; // ✅ Update path with actual bin image

export default function UltrasonicBinRequest() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    binSize: "Small",
    address: "",
  });

  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserDetails = async () => {
      const token = localStorage.getItem("token");

      if (!token) {
        navigate("/login");
        return;
      }

      try {
        const response = await axios.get(
          "http://localhost:5000/users/profile",
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );

        setFormData({
          fullName: `${response.data.firstName} ${response.data.lastName}`,
          email: response.data.email,
          phone: response.data.phone || "",
          binSize: "Small",
          address: response.data.address || "",
        });
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserDetails();
  }, [navigate]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");

    if (!token) {
      alert("Unauthorized request! Please log in.");
      navigate("/login");
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:5000/api/ultrasonic-bin/request",
        formData,
        { headers: { Authorization: `Bearer ${token}` } }
      );

      setMessage(response.data.message);

      // ✅ Redirect to Payment Page after successful submission
      setTimeout(() => navigate("/payment"), 2000);
    } catch (error) {
      console.error("Error submitting request:", error);
      setMessage("Failed to submit request. Try again.");
    }
  };

  return (
    <div className="w-full min-h-screen bg-gray-100">
      <nav className="w-full py-4 px-8 flex items-center justify-between bg-white shadow-md fixed top-0 left-0 right-0 z-10">
        <h1 className="text-2xl font-bold text-green-600">EcoWaste</h1>

        {/* Centered Navigation Links */}
        <ul className="flex-1 flex justify-center space-x-8 text-gray-600 text-lg">
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
      </nav>
      {/* ✅ Hero Section */}
      <section className="relative w-full flex flex-col md:flex-row items-center justify-between bg-white px-16 py-28">
        <div className="max-w-2xl">
          <h2 className="text-5xl font-bold text-gray-800 leading-tight">
            Upgrade Your Waste Collection <br /> with an Ultrasonic Bin!
          </h2>
          <p className="mt-6 text-lg text-gray-600 leading-relaxed">
            EcoWaste’s ultrasonic bin helps manage waste more efficiently by
            detecting fill levels and ensuring timely disposal.
          </p>
          <button className="mt-8 px-8 py-4 text-lg bg-green-500 text-white rounded-lg hover:bg-green-600 transition">
            Request Your Bin Now
          </button>
        </div>
        <div className="w-full md:w-1/2 flex justify-center mt-8 md:mt-0">
          <img
            src={binImage}
            alt="Ultrasonic Bin"
            className="w-[450px] h-auto"
          />
        </div>
      </section>
      {/* ✅ Key Features Section - Made Larger */}
      <section className="py-16 px-12 text-center bg-gray-50">
        <h3 className="text-3xl font-bold">Key Features</h3>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-10 shadow-lg rounded-xl">
            <h4 className="text-2xl font-semibold">Smart Waste Monitoring</h4>
            <p className="text-lg text-gray-600 mt-4">
              Uses ultrasonic sensors to detect bin fill levels accurately and
              efficiently.
            </p>
          </div>
          <div className="bg-white p-10 shadow-lg rounded-xl">
            <h4 className="text-2xl font-semibold">
              Durable & Practical Design
            </h4>
            <p className="text-lg text-gray-600 mt-4">
              Built with strong materials for long-lasting home use and
              reliability.
            </p>
          </div>
          <div className="bg-white p-10 shadow-lg rounded-xl">
            <h4 className="text-2xl font-semibold">Easy to Use</h4>
            <p className="text-lg text-gray-600 mt-4">
              Functions like a regular bin but with smart detection
              capabilities.
            </p>
          </div>
        </div>
      </section>
      {/* ✅ How It Works */}
      <section className="py-12 px-8 text-center">
        <h3 className="text-2xl font-bold">How It Works</h3>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 shadow-md rounded-lg flex flex-col items-center">
            <FaCheckCircle className="text-green-500 text-3xl" />
            <p className="mt-2 font-bold">Step 1</p>
            <p>Request your ultrasonic bin from EcoWaste.</p>
          </div>
          <div className="bg-white p-6 shadow-md rounded-lg flex flex-col items-center">
            <FaBox className="text-green-500 text-3xl" />
            <p className="mt-2 font-bold">Step 2</p>
            <p>Receive the bin and place it in your home.</p>
          </div>
          <div className="bg-white p-6 shadow-md rounded-lg flex flex-col items-center">
            <FaClock className="text-green-500 text-3xl" />
            <p className="mt-2 font-bold">Step 3</p>
            <p>Monitor waste levels and schedule timely collections.</p>
          </div>
        </div>
      </section>
      {/* ✅ Request Form */}
      <section className="py-12 px-8 text-center bg-gray-50">
        <h3 className="text-2xl font-bold">Request Your Bin</h3>
        <div className="max-w-lg mx-auto bg-white p-6 shadow-md rounded-lg mt-6">
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-gray-700">Full Name</label>
              <input
                type="text"
                className="w-full p-2 border rounded"
                value={formData.fullName}
                readOnly
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Email Address</label>
              <input
                type="email"
                className="w-full p-2 border rounded"
                value={formData.email}
                readOnly
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Phone Number</label>
              <input
                type="text"
                className="w-full p-2 border rounded"
                value={formData.phone}
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Bin Size</label>
              <select
                className="w-full p-2 border rounded"
                value={formData.binSize}
              >
                <option>Small</option>
                <option>Medium</option>
                <option>Large</option>
              </select>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Home Address</label>
              <input
                type="text"
                className="w-full p-2 border rounded"
                value={formData.address}
                required
              />
            </div>
            <button
              type="submit"
              className="w-full p-3 bg-green-500 text-white rounded-md hover:bg-green-600"
            >
              Submit Request
            </button>
          </form>
        </div>
      </section>
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
