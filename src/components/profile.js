import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode"; // ✅ Correct import

export default function Profile() {
  const [userData, setUserData] = useState(null);
  const [requests, setRequests] = useState([]);
  const [error, setError] = useState("");
  const [showRescheduleModal, setShowRescheduleModal] = useState(false);
  const [selectedRequest, setSelectedRequest] = useState(null);
  const [newDate, setNewDate] = useState("");
  const [newTime, setNewTime] = useState("");
  const [newAddress, setNewAddress] = useState("");
  const navigate = useNavigate();

  // ✅ Function to check token validity
  const isTokenExpired = (token) => {
    if (!token) return true;
    try {
      const decoded = jwtDecode(token);
      return decoded.exp * 1000 < Date.now();
    } catch (error) {
      return true;
    }
  };

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token || isTokenExpired(token)) {
      localStorage.removeItem("token");
      navigate("/login");
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
        if (err.response?.status === 401) {
          localStorage.removeItem("token");
          navigate("/login");
        } else {
          setError("Unable to fetch user data. Please try again.");
        }
      }
    };

    fetchUserData();
  }, [navigate]);

  useEffect(() => {
    const fetchUserRequests = async () => {
      const token = localStorage.getItem("token");
      if (!token || isTokenExpired(token)) return;

      try {
        const response = await axios.get(
          "http://localhost:5000/requests/user",
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        setRequests(response.data);
      } catch (err) {
        if (err.response?.status === 401) {
          localStorage.removeItem("token");
          navigate("/login");
        } else {
          setError("Unable to fetch bin requests.");
        }
      }
    };

    fetchUserRequests();
  }, [userData]);

  // ✅ Open Reschedule Modal
  const openRescheduleModal = (request) => {
    setSelectedRequest(request);
    setNewDate(request.date.split("T")[0]); // Extract date
    setNewTime(request.timeSlot);
    setNewAddress(request.deliveryAddress);
    setShowRescheduleModal(true);
  };

  // ✅ Close Reschedule Modal
  const closeRescheduleModal = () => {
    setShowRescheduleModal(false);
    setSelectedRequest(null);
  };

  // ✅ Handle Reschedule Request
  const handleRescheduleRequest = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");

    if (!token) {
      setError("You must be logged in to reschedule a request.");
      return;
    }

    try {
      const response = await axios.put(
        `http://localhost:5000/requests/${selectedRequest._id}`,
        {
          date: newDate, // Send only the date in YYYY-MM-DD format
          timeSlot: newTime,
          deliveryAddress: newAddress,
        },
        { headers: { Authorization: `Bearer ${token}` } }
      );

      if (response.status === 200) {
        setRequests((prevRequests) =>
          prevRequests.map((request) =>
            request._id === selectedRequest._id
              ? {
                  ...request,
                  date: newDate,
                  timeSlot: newTime,
                  deliveryAddress: newAddress,
                }
              : request
          )
        );

        closeRescheduleModal();
      } else {
        setError("Unable to reschedule request. Please try again.");
      }
    } catch (err) {
      console.error(
        "Error rescheduling request:",
        err.response?.data || err.message
      );
      setError("Unable to reschedule request. Please try again.");
    }
  };

  const handleCancelRequest = async (requestId) => {
    const token = localStorage.getItem("token");

    if (!token) {
      setError("You must be logged in to cancel a request.");
      return;
    }

    try {
      const response = await axios.delete(
        `http://localhost:5000/requests/${requestId}`,
        { headers: { Authorization: `Bearer ${token}` } }
      );

      if (response.status === 200) {
        setRequests((prevRequests) =>
          prevRequests.filter((request) => request._id !== requestId)
        );
      } else {
        setError("Unable to cancel request. Please try again.");
      }
    } catch (err) {
      console.error(
        "Error canceling request:",
        err.response?.data || err.message
      );
      setError("Unable to cancel request. Please try again.");
    }
  };

  return (
    <div className="w-full min-h-screen bg-gray-100">
      {/* ✅ Navigation Bar */}
      <nav className="w-full py-4 px-8 flex items-center justify-between bg-white shadow-md fixed top-0 left-0 right-0 z-10">
        <h1 className="text-2xl font-bold text-green-600">EcoWaste</h1>

        <ul className="hidden md:flex space-x-8 text-gray-600 text-lg mx-auto">
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

        <button
          onClick={() => {
            localStorage.removeItem("token");
            navigate("/login");
          }}
          className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition"
        >
          Logout
        </button>
      </nav>
      {/* ✅ Profile Section */}
      <div className="max-w-7xl mx-auto bg-white p-8 rounded-lg shadow-md mt-24">
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center space-x-4">
            {/* ✅ Dummy Human Profile Image */}
            <img
              src="https://i.pravatar.cc/150?img=12" // Dummy human image from pravatar
              alt="Profile"
              className="w-24 h-24 rounded-full border border-gray-300 shadow-md"
            />

            <div>
              <h2 className="text-2xl font-semibold">
                {userData?.firstName} {userData?.lastName}{" "}
                {/* ✅ Display First & Last Name */}
              </h2>
              <p className="text-gray-500">{userData?.email}</p>{" "}
              {/* ✅ Display Email */}
              <p className="text-gray-500">{userData?.phone}</p>{" "}
              {/* ✅ Display Phone (Optional) */}
            </div>
          </div>

          {/* ✅ Edit Profile Button */}
          <button
            onClick={() => navigate("/edit-profile")}
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
          >
            Edit Profile
          </button>
        </div>
      </div>

      {/* ✅ Scheduled Collections */}
      <div className="max-w-7xl mx-auto bg-white p-8 rounded-lg shadow-md mt-24">
        <div className="flex justify-between items-center mb-4 flex space-x-2">
          <h3 className="text-xl font-semibold">My Scheduled Collections</h3>

          {/* ✅ New Request Button */}
          <button
            onClick={() => navigate("/requests")}
            className="px-6 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition"
          >
            + New Request
          </button>
          {/* ✅ New Request Button */}
          <button
            onClick={() => navigate("/ultrasonic-bin")}
            className="px-6 py-2 bg-yellow-500 text-white rounded-md hover:bg-yellow-600 transition"
          >
            Ultrasonic Bins Order
          </button>
        </div>

        <div className="mt-4 space-y-4">
          {requests.length > 0 ? (
            requests.map((request) => (
              <div key={request._id} className="border p-5 rounded-md">
                <p>
                  <strong>Bin Type:</strong> {request.binType}
                </p>
                <p>
                  <strong>Size:</strong> {request.binSize}
                </p>
                <p>
                  <strong>Pickup Date:</strong>{" "}
                  {new Date(request.date).toLocaleDateString()}
                </p>
                <p>
                  <strong>Address:</strong> {request.deliveryAddress}
                </p>
                <p>
                  <strong>Time Slot:</strong> {request.timeSlot}
                </p>
                <div className="flex justify-between items-center mt-4">
                  <button
                    onClick={() => openRescheduleModal(request)}
                    className="px-4 py-1 text-blue-500 border border-blue-500 rounded-md hover:bg-blue-100"
                  >
                    Reschedule
                  </button>
                  <button
                    onClick={() => handleCancelRequest(request._id)}
                    className="px-4 py-1 text-red-500 border border-red-500 rounded-md hover:bg-red-100"
                  >
                    Cancel request
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p>No scheduled bin requests.</p>
          )}
        </div>
      </div>

      {/* ✅ Reschedule Modal */}
      {showRescheduleModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-md w-96">
            <h2 className="text-lg font-semibold mb-4">
              Reschedule / Edit Address
            </h2>
            <form onSubmit={handleRescheduleRequest}>
              <label className="block mb-2">New Pickup Date:</label>
              <input
                type="date"
                value={newDate}
                min={new Date().toISOString().split("T")[0]} // ✅ Prevents past dates
                onChange={(e) => setNewDate(e.target.value)}
                className="w-full p-2 border rounded mb-4"
              />

              <label className="block mb-2">New Time Slot:</label>
              <select
                value={newTime}
                onChange={(e) => setNewTime(e.target.value)}
                className="w-full p-2 border rounded mb-4"
              >
                <option value="">Select a Time Slot</option>
                <option value="09:00-10:00">9 AM - 10 AM</option>
                <option value="10:00-11:00">10 AM - 11 AM</option>
                <option value="13:00-14:00">1 PM - 2 PM</option>
                <option value="14:00-15:00">2 PM - 3 PM</option>
              </select>
              <label className="block mb-2">New Address:</label>
              <input
                type="text"
                value={newAddress}
                onChange={(e) => setNewAddress(e.target.value)}
                className="w-full p-2 border rounded mb-4"
              />
              <button
                type="submit"
                className="px-4 py-2 bg-blue-500 text-white rounded-md"
              >
                Save
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
