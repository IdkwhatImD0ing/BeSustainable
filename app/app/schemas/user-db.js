const User = require("../schemas/userModel.js");

async function createUser(username, email, password) {
    try {
        const newUser = new User({
            username: username,
            email: email,
            password: password,
        });

        await newUser.save();

        console.log("User created: ", newUser);

        return newUser;
    } catch (error) {
        console.error("Error creating user: ", error);
        throw error;
    }
}

async function getUserById(userId) {
    try {
        const user = await User.findById({id: userId});
        return user;
    } catch(error) {
        console.error("Error finding user: ", error);
        throw error;
    }
}

async function getUserByEmail(email) {
    try {
        const user = await User.findOne({email: email});
        return user;
    } catch (error) {
        consoler.error('Error finding user by email: ', error);
        throw error;
    }
}

module.exports = {
    createUser,
    getUserById,
    getUserByEmail
}

