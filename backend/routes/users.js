// const express = require("express");
// const jwt = require("jsonwebtoken");
// const User = require("../models/users.model");
// const router = express.Router();

// // Secret key for JWT (you should keep this secret and secure)
// const secretKey = "your-secret-key";

// // Add a new user
// router.post("/add", async (req, res) => {
//   try {
//     const { firstName, lastName, username, email, password, phone, address } =
//       req.body;

//     // Check if required fields exist
//     if (
//       !firstName ||
//       !lastName ||
//       !username ||
//       !email ||
//       !password ||
//       !phone || 
//       !address 
//     ) {
//       return res.status(400).json({ error: "All fields are required!" });
//     }

//     //  Check if user already exists (Username or Email must be unique)
//     const existingUser = await User.findOne({ $or: [{ username }, { email }] });
//     if (existingUser) {
//       return res
//         .status(400)
//         .json({ error: "Username or Email already exists!" });
//     }

//     //  Create new user (Password is stored in plain text)
//     const newUser = new User({
//       firstName,
//       lastName,
//       username,
//       email,
//       password, //  WARNING: Storing password in plain text (Not recommended)
//       phone,
//       address,
//     });

//     //  Save user to database
//     await newUser.save();

//     res.status(201).json({ message: "User registered successfully!" });
//   } catch (error) {
//     console.error("Error creating user:", error.message);
//     res.status(500).json({ error: "Server error. Please try again." });
//   }
// });

// // Login route
// router.route("/login").post(async (req, res) => {
//   const { username, password } = req.body;

//   try {
//     const user = await User.findOne({ username });

//     if (!user || user.password !== password) {
//       return res.status(400).json({ message: "Invalid username or password." });
//     }

//     // Generate token (JWT)
//     const token = jwt.sign({ id: user._id }, secretKey, {
//       expiresIn: "1h",
//     });

//     // Return the token and user info (excluding password)
//     res.json({
//       message: "Login successful",
//       token,
//       user: { ...user._doc, password: undefined },
//     });
//   } catch (err) {
//     res.status(500).json({ message: "Error occurred during login." });
//   }
// });

// //Profile route
// router.route("/profile").get(async (req, res) => {
//   const token = req.header("Authorization")?.split(" ")[1]; // Extract token from the header

//   if (!token) {
//     return res
//       .status(401)
//       .json({ message: "Access denied. No token provided." });
//   }

//   try {
//     // Verify the token
//     const decoded = jwt.verify(token, secretKey);
//     const user = await User.findById(decoded.id).select("-password"); // Exclude password from user data

//     if (!user) {
//       return res.status(404).json({ message: "User not found." });
//     }

//     res.json(user);
//   } catch (err) {
//     res.status(403).json({ message: "Invalid or expired token." });
//   }
// });

// // Get all users (if needed)
// router.route("/").get((req, res) => {
//   User.find()
//     .then((users) => res.json(users))
//     .catch((err) => res.status(400).json("Error: " + err));
// });

// //Export the routes
// module.exports = router;

const express = require("express");
const jwt = require("jsonwebtoken");
const User = require("../models/users.model");
const router = express.Router();

// ✅ Use Environment Variables
const secretKey = process.env.JWT_SECRET || "your-secret-key";

// ✅ Middleware to Authenticate User
const authMiddleware = (req, res, next) => {
  const token = req.header("Authorization");

  if (!token) {
    console.log("❌ No token provided");
    return res.status(401).json({ error: "Access denied. No token provided." });
  }

  try {
    const tokenParts = token.split(" ");
    if (tokenParts.length !== 2 || tokenParts[0] !== "Bearer") {
      console.log("❌ Invalid token format:", token);
      return res.status(401).json({ error: "Invalid token format." });
    }

    const decoded = jwt.verify(tokenParts[1], secretKey);
    req.user = decoded; // Attach user data to request
    console.log("✅ Token Verified:", decoded);
    next();
  } catch (error) {
    console.log("❌ Token verification failed:", error.message);
    res.status(403).json({ error: "Invalid or expired token." });
  }
};

// ✅ User Registration (POST /users/add)
router.post("/add", async (req, res) => {
  try {
    const { firstName, lastName, username, email, password, phone, address } =
      req.body;

    if (
      !firstName ||
      !lastName ||
      !username ||
      !email ||
      !password ||
      !phone ||
      !address
    ) {
      return res.status(400).json({ error: "All fields are required!" });
    }

    const existingUser = await User.findOne({ $or: [{ username }, { email }] });
    if (existingUser) {
      return res
        .status(400)
        .json({ error: "Username or Email already exists!" });
    }

    const newUser = new User({
      firstName,
      lastName,
      username,
      email,
      password, // ⚠️ Warning: Storing password in plain text (Hashing should be used)
      phone,
      address,
    });

    await newUser.save();
    res.status(201).json({ message: "User registered successfully!" });
  } catch (error) {
    console.error("Error creating user:", error.message);
    res.status(500).json({ error: "Server error. Please try again." });
  }
});

// ✅ User Login (POST /users/login)
router.post("/login", async (req, res) => {
  try {
    const { username, password } = req.body;

    // ✅ Find the user by username or email
    const user = await User.findOne({
      $or: [{ username }, { email: username }],
    });

    if (!user || user.password !== password) {
      return res.status(400).json({ error: "Invalid username or password." });
    }

    // ✅ Generate JWT Token
    const token = jwt.sign({ id: user._id }, secretKey, { expiresIn: "1h" });

    res.json({
      message: "Login successful!",
      token,
      user: { ...user._doc, password: undefined }, // Exclude password from response
    });
  } catch (err) {
    res.status(500).json({ error: "Error occurred during login." });
  }
});

// ✅ Get Logged-in User Profile (GET /users/profile)
router.get("/profile", authMiddleware, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select("-password"); // Find user by ID
    if (!user) {
      return res.status(404).json({ error: "User not found." });
    }
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: "Error fetching user profile." });
  }
});

// ✅ Get All Users (GET /users/)
router.get("/", async (req, res) => {
  try {
    const users = await User.find().select("-password"); // Exclude passwords
    res.json(users);
  } catch (err) {
    res.status(400).json({ error: "Error fetching users." });
  }
});

// ✅ Export the Routes


router.put("/edit", authMiddleware, async (req, res) => {
  try {
    const { firstName, lastName, phone, address, password } = req.body;

    let updateFields = { firstName, lastName, phone, address };

    // ✅ Update Password if Provided (WARNING: Stored in plain text)
    if (password) {
      updateFields.password = password; // ⚠️ Password stored in plain text (Not Secure)
    }

    // ✅ Find user by ID & Update
    const updatedUser = await User.findByIdAndUpdate(
      req.user.id,
      updateFields,
      { new: true, select: "-password" } // Exclude password from response
    );

    if (!updatedUser) {
      return res.status(404).json({ error: "User not found." });
    }

    res.json({ message: "Profile updated successfully!", user: updatedUser });
  } catch (error) {
    res.status(500).json({ error: "Error updating profile." });
  }
});
module.exports = router;
