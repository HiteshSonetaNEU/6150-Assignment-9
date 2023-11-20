const userService = require('../services/user.service');

async function createUser(req, res) {
    try {
        const { fullName, email, password } = req.body;
      
        if (!checkFullName(fullName)){
          return res.status(400).json({ message: 'Special Characters in full name are not allowed' });
        }
      
        if (!checkEmail(email) ) {
          return res.status(400).json({ message: 'Invalid email, use Northeastern Mail' });
        }
      
        if (!checkPassword(password)) {
          return res.status(400).json({ message: 'Invalid password, password length should be greater than 12' });
        }
      
        var check = await userService.getUserByEmail(email);
        if (check){
          return res.status(400).json({ message: 'User with same email already exists' });
        }
        
        
      
        await userService.createUser({ fullName, email, password });
          res.status(201).json({ message: 'User created successfully' });
        } catch (err) {
          console.log(err)
          res.status(500).json({ message: 'Error creating user' });
        }
}

async function updateUser(req, res) {
  try {
    const { fullName, password } = req.body;
    const email = req.query.email;
    if (!checkPassword(password)) {
        return res.status(400).json({ message: 'Invalid password, password length should be greater than 12' });
      }
    
      if (!checkFullName(fullName)){
        return res.status(400).json({ message: 'Special Characters in full name are not allowed' });
      }
      
      const user=await userService.getUserByEmail(email);
      if (!user) {
        return res.status(404).json({ message: "User with given mail doesn't exist" });
      }
      await userService.updateUser(email, { fullName, password });
    res.json({ message: 'User details updated successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Error updating user' });
  }
}

async function deleteUser(req, res) {
  try {
    const { email } = req.body;
    
    const user=await userService.getUserByEmail(email);
      if (!user) {
        return res.status(404).json({ message: "User with given mail doesn't exist" });
      }
    await userService.deleteUser(email);
    res.json({ message: 'User deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Error deleting user' });
  }
}

async function getAllUsers(req, res) {
  try {
    const users = await userService.getAllUsers();
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: 'Error retrieving users' });
  }
}

async function loginUser(req, res) {
  try {
    const { email, password } = req.body;

    // Validate credentials
    const user = await userService.loginUser({ email, password });

    // Return user data or token as needed
    res.status(200).json({ message: 'Login successful', user });
  } catch (err) {
    res.status(401).json({ message: 'Invalid credentials' });
  }
}


function checkPassword(password) {
    return password.length >= 12;
  }
  
  function checkEmail(email) {
    return /^[a-zA-Z0-9._-]+@northeastern\.edu$/.test(email);
  }
  function checkFullName(fullName){
    return  /^[a-zA-Z_]+$/.test(fullName);
  }

module.exports = {
  createUser,
  updateUser,
  deleteUser,
  getAllUsers,
  loginUser
};
