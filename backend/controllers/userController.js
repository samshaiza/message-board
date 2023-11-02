const User = require("../models/UserModel");

// login user
const loginUser = async (req, res) => {
  res.json({ message: "login user" });
};

// sign up user
const signupUser = async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await User.signup(username, password);

    res.status(200).json({ username, user });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

module.exports = { loginUser, signupUser };
