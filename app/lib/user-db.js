const User = require("../models/userModel.js")

async function createUser(username, email, password) {
  try {

    const newUser = new User({
      username : username,
      email : email,
      password : password,
    });

    console.log("HERE");

    await newUser.save();

    console.log("User created: ", newUser);

    return newUser;
  } catch (error) {
    console.error("Error creating user: ", error);
    throw error;
  }
}

async function getUserByEmail(email) {
  try {
    const user = await User.findOne({email : email});
    return user;
  } catch (error) {
    consoler.error('Error finding user by email: ', error);
    throw error;
  }
}

async function updateScore(id, day, increase) {
  try {
    // Find the user by ID
    const user = await User.findById(id);

    // Check if the user exists
    if (!user) {
      throw new Error('User not found');
    }

    // Check if the day is valid (assuming scores array has 7 elements for 7
    // days)
    if (day < 0 || day >= user.scores.length) {
      throw new Error('Invalid day index');
    }

    // Increase the score for the specified day
    user.scores[day] += increase;

    // Save the updated user document
    await user.save();

    console.log("User score updated: ", user);

    return user;
  } catch (error) {
    console.error("Error updating user score: ", error);
    throw error;
  }
}

module.exports = {
  createUser,
  getUserByEmail,
  updateScore
}
