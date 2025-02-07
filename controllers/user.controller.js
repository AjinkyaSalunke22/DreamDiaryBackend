const User = require("../models/user.model");
const { standardResponse } = require("../utils/standardResponse.util");
const { standardError } = require("../utils/standardError.util");
const { validateEmail, validatePassword } = require("../utils/validation.util");

const registerUserController = async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return standardError(
      res,
      new Error("All fields are required"),
      "name, email, password required"
    );
  }

  if (!validateEmail(email)) {
    return standardError(
      res,
      new Error("Invalid email format"),
      "Email is not valid email"
    );
  }

  if (!validatePassword(password)) {
    return standardError(
      res,
      new Error("Invalid password format"),
      "Password must contain a capital letter, a small letter, a number and a special character"
    );
  }

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return standardError(
        res,
        new Error("Email already exists"),
        "You are already registered please login"
      );
    }

    const newUser = new User({ name, email, password });
    await newUser.save();

    standardResponse(res, 201, "User registered successfully");
  } catch (error) {
    standardError(res, error, "User registration failed");
  }
};

module.exports = { registerUserController };
