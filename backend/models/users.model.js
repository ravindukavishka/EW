// const mongoose = require("mongoose");
// const Schema = mongoose.Schema;

// // Define the user schema
// const userSchema = new Schema(
//   {
//     firstName: {
//       type: String,
//       required: true,
//     },
//     lastName: {
//       type: String,
//       required: true,
//     },
//     username: {
//       type: String,
//       required: true,
//       unique: true, // Ensure unique usernames
//     },
//     email: {
//       type: String,
//       required: true,
//       unique: true, // Ensure unique email addresses
//       match: /.+\@.+\..+/,
//     },
//     password: {
//       type: String,
//       required: true, // Password is required
//     },
//     phone: {
//       type: String,
//       required: true,
//     },
//     address: {
//       type: String,
//       required: true,
//     },
//   },
//   {
//     timestamps: true, // Automatically manage createdAt and updatedAt fields
//   }
// );

// // Export the User model
// module.exports = mongoose.model("User", userSchema);




const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const { v4: uuidv4 } = require("uuid"); // Import UUID for unique user IDs

// Define the user schema
const userSchema = new Schema(
  {
    userId: {
      type: String,
      default: uuidv4, // Automatically generate a unique user ID
      unique: true,
    },
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      required: true,
      unique: true, // Ensure unique usernames
    },
    email: {
      type: String,
      required: true,
      unique: true, // Ensure unique email addresses
      match: /.+\@.+\..+/,
    },
    password: {
      type: String,
      required: true, // Password is required
    },
    phone: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true, // Automatically manage createdAt and updatedAt fields
  }
);

// Export the User model
module.exports = mongoose.model("User", userSchema);
