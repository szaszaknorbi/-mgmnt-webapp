const bcrypt = require('bcryptjs');
const User = require('../models/User');

exports.registerUser = async (req, res) => {
  const { username, password } = req.body;

  try {
    // Hash the password
    const hashedPassword = bcrypt.hashSync(password, 10);

    // Create a new user
    const newUser = new User({
      username,
      password: hashedPassword,
      // ... other fields
    });

    // Save the new user to the database
    await newUser.save();

    // ... rest of registration logic
  } catch (error) {
    // Handle errors
    res.status(500).send(error.message);
  }
};
