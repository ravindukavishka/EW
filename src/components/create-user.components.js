// import React, { useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// export default function CreateUser() {
//   const navigate = useNavigate();
//   const [formData, setFormData] = useState({
//     firstName: "",
//     lastName: "",
//     username: "",
//     email: "",
//     password: "",
//     phone: "",
//     address: "", // Store address as an object
//   });

//   const [error, setError] = useState("");
//   const [successMessage, setSuccessMessage] = useState("");

//   // Handle Input Change
//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   // Handle Form Submit
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post(
//         "http://localhost:5000/users/add",
//         formData
//       );
//       if (response.data) {
//         setSuccessMessage("User created successfully!");
//         setFormData({
//           firstName: "",
//           lastName: "",
//           username: "",
//           email: "",
//           password: "",
//           phone: "",
//           address: "",
//         });
//       }
//     } catch (err) {
//       setError("Error creating user. Please try again.");
//     }
//   };

//   return (
//     <div className="h-screen w-full flex flex-col">
//       {/* Navigation Bar */}
//       <nav className="w-full py-4 px-8 flex items-center justify-between bg-white shadow-md fixed top-0 left-0 right-0 z-10">
//         <h1 className="text-2xl font-bold text-green-600">EcoWaste</h1>
//         <ul className="flex space-x-6 text-gray-600 text-xl">
//           <li>
//             <a href="/home" className="hover:text-green-500">
//               Home
//             </a>
//           </li>
//           <li>
//             <a href="/pricing" className="hover:text-green-500">
//               Pricing
//             </a>
//           </li>
//           <li>
//             <a href="/services" className="hover:text-green-500">
//               Services
//             </a>
//           </li>
//           <li>
//             <a href="/contact" className="hover:text-green-500">
//               Contact Us
//             </a>
//           </li>
//         </ul>
//         <div className="space-x-4">
//           <a href="/login" className="text-green-500 hover:underline">
//             LOGIN
//           </a>
//           <a href="/add" className="font-bold text-black">
//             SIGN UP
//           </a>
//         </div>
//       </nav>

//       {/* Main Content */}
//       <div className="flex flex-grow mt-16">
//         {/* Left Section - User Form */}
//         <div className="lg:w-1/2 w-full flex items-center justify-center bg-white p-8">
//           <div className="w-full max-w-md bg-gray-100 p-8 rounded-lg shadow-lg">
//             <h2 className="text-2xl font-bold text-center text-green-600">
//               Create New User
//             </h2>
//             <p className="text-gray-500 text-center mb-6">
//               Fill in the details below.
//             </p>

//             <form onSubmit={handleSubmit} className="space-y-4">
//               <div className="flex space-x-2">
//                 <div className="w-1/2">
//                   <label className="text-gray-700">First Name:</label>
//                   <input
//                     type="text"
//                     name="firstName"
//                     value={formData.firstName}
//                     onChange={handleChange}
//                     required
//                     className="w-full p-2 border rounded-md"
//                   />
//                 </div>
//                 <div className="w-1/2">
//                   <label className="text-gray-700">Last Name:</label>
//                   <input
//                     type="text"
//                     name="lastName"
//                     value={formData.lastName}
//                     onChange={handleChange}
//                     required
//                     className="w-full p-2 border rounded-md"
//                   />
//                 </div>
//               </div>

//               <div>
//                 <label className="text-gray-700">Username:</label>
//                 <input
//                   type="text"
//                   name="username"
//                   value={formData.username}
//                   onChange={handleChange}
//                   required
//                   className="w-full p-2 border rounded-md"
//                 />
//               </div>

//               <div>
//                 <label className="text-gray-700">Email:</label>
//                 <input
//                   type="email"
//                   name="email"
//                   value={formData.email}
//                   onChange={handleChange}
//                   required
//                   className="w-full p-2 border rounded-md"
//                 />
//               </div>

//               <div>
//                 <label className="text-gray-700">Password:</label>
//                 <input
//                   type="password"
//                   name="password"
//                   value={formData.password}
//                   onChange={handleChange}
//                   required
//                   className="w-full p-2 border rounded-md"
//                 />
//               </div>

//               <div>
//                 <label className="text-gray-700">Phone:</label>
//                 <input
//                   type="text"
//                   name="phone"
//                   value={formData.phone}
//                   onChange={handleChange}
//                   required
//                   className="w-full p-2 border rounded-md"
//                 />
//               </div>

//               {/* Address Section */}
//               <div>
//                 <label className="text-gray-700">Street Address:</label>
//                 <input
//                   type="text"
//                   name="address"
//                   value={formData.address}
//                   onChange={handleChange}
//                   required
//                   className="w-full p-2 border rounded-md"
//                 />
//               </div>

//               {successMessage && (
//                 <p className="text-green-500 text-sm">{successMessage}</p>
//               )}
//               {error && <p className="text-red-500 text-sm">{error}</p>}

//               <button
//                 type="submit"
//                 className="w-full bg-green-500 text-white py-2 rounded-md hover:bg-green-600 transition duration-200"
//               >
//                 Create User
//               </button>
//             </form>
//           </div>
//         </div>

//         {/* Right Section */}
//         <div className="lg:w-1/2 w-full bg-green-500 flex items-center justify-center text-white text-center p-8">
//           <div>
//             <h2 className="text-3xl font-bold">Manage Users Easily</h2>
//             <p className="mt-4 text-lg">Add and manage users with ease.</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }



import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function CreateUser() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    password: "",
    phone: "",
    address: "", // ✅ Single address field
  });

  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  // Handle Input Change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle Form Submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccessMessage("");

    try {
      const response = await axios.post(
        "http://localhost:5000/users/add",
        formData
      );

      if (response.data) {
        setSuccessMessage("User created successfully!");
        setFormData({
          firstName: "",
          lastName: "",
          username: "",
          email: "",
          password: "",
          phone: "",
          address: "", // ✅ Reset the single address field
        });

        // ✅ Redirect user to login after signup
        setTimeout(() => {
          navigate("/login");
        }, 2000);
      }
    } catch (err) {
      setError(
        err.response?.data?.error || "Error creating user. Please try again."
      );
    }
  };

  return (
    <div className="h-screen w-full flex flex-col">
      {/* Navigation Bar */}
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

      {/* Main Content */}
      <div className="flex flex-grow mt-16">
        {/* Left Section - User Form */}
        <div className="lg:w-1/2 w-full flex items-center justify-center bg-white p-8">
          <div className="w-full max-w-md bg-gray-100 p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-center text-green-600">
              Create New User
            </h2>
            <p className="text-gray-500 text-center mb-6">
              Fill in the details below.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="flex space-x-2">
                <div className="w-1/2">
                  <label className="text-gray-700">First Name:</label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    className="w-full p-2 border rounded-md"
                  />
                </div>
                <div className="w-1/2">
                  <label className="text-gray-700">Last Name:</label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                    className="w-full p-2 border rounded-md"
                  />
                </div>
              </div>

              <div>
                <label className="text-gray-700">Username:</label>
                <input
                  type="text"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                  required
                  className="w-full p-2 border rounded-md"
                />
              </div>

              <div>
                <label className="text-gray-700">Email:</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full p-2 border rounded-md"
                />
              </div>

              <div>
                <label className="text-gray-700">Password:</label>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  className="w-full p-2 border rounded-md"
                />
              </div>

              <div>
                <label className="text-gray-700">Phone:</label>
                <input
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full p-2 border rounded-md"
                />
              </div>

              {/* ✅ Single Address Field */}
              <div>
                <label className="text-gray-700">Address:</label>
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  required
                  className="w-full p-2 border rounded-md"
                />
              </div>

              {successMessage && (
                <p className="text-green-500 text-sm">{successMessage}</p>
              )}
              {error && <p className="text-red-500 text-sm">{error}</p>}

              <button
                type="submit"
                className="w-full bg-green-500 text-white py-2 rounded-md hover:bg-green-600 transition duration-200"
              >
                Create User
              </button>
            </form>
          </div>
        </div>

        {/* Right Section */}
        <div className="lg:w-1/2 w-full bg-green-500 flex items-center justify-center text-white text-center p-8">
          <div>
            <h2 className="text-3xl font-bold">Manage Users Easily</h2>
            <p className="mt-4 text-lg">Add and manage users with ease.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
