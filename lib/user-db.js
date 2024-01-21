const User = require('../models/userModel.js')

async function createUser(userId) {
  try {
    const newUser = new User({
      _id: userId,
    })
    await newUser.save()

    return newUser
  } catch (error) {
    console.error('Error creating user: ', error)
    throw error
  }
}

async function getUserById(userId) {
  try {
    const user = await User.findById(userId)
    return user
  } catch (error) {
    console.error('Error finding user by id: ', error)
    throw error
  }
}

async function updateScore(id, increase) {
  try {
    // Find the user by ID
    const user = await User.findById(id)
    const day = new Date().getDay()

    // Check if the user exists
    if (!user) {
      throw new Error('User not found')
    }

    // Check if the day is valid (assuming scores array has 7 elements for 7 days)
    if (day < 0 || day >= user.scores.length) {
      throw new Error('Invalid day index')
    }

    // Increase the score for the specified day
    user.scores[day] += increase

    // Save the updated user document
    await user.save()

    console.log('User score updated: ', user)

    return user
  } catch (error) {
    console.error('Error updating user score: ', error)
    throw error
  }
}

// This function gets the most recent 7 scores for a user
async function getScores(userId) {
  try {
    // Find the user by ID
    const user = await User.findById(userId)

    // Check if the user exists
    if (!user) {
      throw new Error('User not found')
    }

    // Assuming scores array has length 7 and index 0 is Sunday, 1 is Monday, etc.
    const scoresLength = user.scores.length // Normally 7

    // Get today's index based on the current day of the week
    const todayIndex = new Date().getDay() // Sunday is 0, Monday is 1, etc.

    // Calculate the index for 7 days ago
    const sevenDaysAgoIndex = (todayIndex + 1) % scoresLength

    let scores = []

    // If the array needs to wrap
    if (sevenDaysAgoIndex > todayIndex) {
      // Get the scores from sevenDaysAgoIndex to the end of the array
      scores = scores.concat(user.scores.slice(sevenDaysAgoIndex))

      // Get the scores from the start of the array to todayIndex
      scores = scores.concat(user.scores.slice(0, todayIndex + 1))
    } else {
      // The array doesn't need to wrap
      scores = user.scores.slice(sevenDaysAgoIndex, todayIndex + 1)
    }

    console.log('User scores retrieved for the last 7 days: ', scores)

    return scores
  } catch (error) {
    console.error('Error retrieving user scores for the last 7 days: ', error)
    throw error
  }
}

module.exports = {
  createUser,
  getUserById,
  updateScore,
  getScores,
}
