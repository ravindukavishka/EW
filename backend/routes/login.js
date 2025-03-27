// const express = require("express");
// const router = express.Router();
// const bcrypt = require("bcrypt");
// const jwt = require("jsonwebtoken");
// const User = require("../models/users.model"); // Adjust path as needed

// // Secret key for JWT (store securely in a .env file in production)
// const JWT_SECRET = "your_jwt_secret_key";

// // Login route
// router.route("/login").post((req, res) => {
//   const { username, password } = req.body;

//   // Find the user by username
//   User.findOne({ username })
//     .then((user) => {
//       if (!user) {
//         // User not found
//         return res.status(404).json("User not found");
//       }

//       // Compare the entered password with the stored hashed password
//       bcrypt.compare(password, user.password, (err, isMatch) => {
//         if (err) {
//           return res.status(500).json("Error during password comparison");
//         }

//         if (isMatch) {
//           // Successful login - generate a JWT token
//           const token = jwt.sign({ userId: user._id }, JWT_SECRET, {
//             expiresIn: "1h",
//           });

//           res.json({
//             message: "Login successful",
//             token: token, // Send back the JWT token
//           });
//         } else {
//           // Invalid password
//           res.status(400).json("Invalid password");
//         }
//       });
//     })
//     .catch((err) => {
//       res.status(500).json("Error: " + err);
//     });
// });

// module.exports = router;
