const bcrypt = require('bcrypt');
const User = require('../models/user.model');

async function createUser({ fullName, email, password }) {
  const hashedPassword = await bcrypt.hash(password, 10);
  const user = new User({ fullName, email, password: hashedPassword });
  await user.save();
}

async function updateUser(email, { fullName, password }) {
  const user = await User.findOne({ email });
  if (!user) {
    throw new Error("User with given mail doesn't exist");
  }
  user.fullName = fullName;
  user.password = await bcrypt.hash(password, 10);
  await user.save();
}

async function deleteUser(email) {
  const user = await User.findOneAndDelete({ email });
  if (!user) {
    throw new Error("User with given mail doesn't exist");
  }
}

async function getAllUsers() {
  return await User.find();
}
async function getUserByEmail(email) {
    return await User.findOne({ email });
  }

  async function loginUser({ email, password }) {
    const user = await User.findOne({ email });
  
    if (!user) {
      throw new Error("User not found");
    }
  
    const passwordMatch = await bcrypt.compare(password, user.password);
  
    if (!passwordMatch) {
      throw new Error("Incorrect password");
    }
  
    return user;
  }  

module.exports = {
  createUser,
  updateUser,
  deleteUser,
  getAllUsers,
  getUserByEmail,
  loginUser
};
