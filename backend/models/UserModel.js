const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const validator = require("validator");

const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

userSchema.statics.signup = async function (username, password) {
  // validation
  if (!username || !password) {
    throw new Error("all fields must be filled");
  }

  if (
    !validator.isStrongPassword(password, {
      minSymbols: 0,
      minUppercase: 0,
      minLength: 4,
      minNumbers: 0,
    })
  ) {
    throw Error("password must be at least 4 characters");
  }

  const exists = await this.findOne({ username });

  if (exists) {
    throw new Error("username already exists");
  }

  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(password, salt);

  const user = await this.create({
    username,
    password: hash,
  });

  return user;
};

module.exports = mongoose.model("User", userSchema);
