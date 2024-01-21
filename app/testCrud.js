require('dotenv').config({path : './.env.local'});

const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI,
                 {useNewUrlParser : true, useUnifiedTopology : true});

const clientPromise = require('./lib/mongodb');
const {createPost, getPosts} = require('./lib/post-db');
const {createUser, getUserById, getUserByEmail, updateScore} =
    require('./lib/user-db'); // Adjust paths as necessary

async function testCRUD() {
  try {
    const client = await clientPromise;

    // Now you have a connected client
    // You can get the database from the client
    const db = client.db();

    // Create a new user
    const user =
        await createUser('testuser2', 'test2@example.com', 'password1235');
    console.log('User created:', user);

    // Fetch user by email
    const fetchedByEmail = await getUserByEmail('test2@example.com');
    console.log('User fetched by email:', fetchedByEmail);

    const post = await createPost(fetchedByEmail._id, "https://test.com",
                                  "HAHAHA FUNNY");
    console.log("Posted", post);

    const postTwo = await createPost(fetchedByEmail._id, "https://test2.com",
                                     "HAHAHA FUNNY2");
    console.log("Posted", post);

    const posts = await getPosts(fetchedByEmail._id);
    console.log("See Posts", posts);

    const score = await updateScore(fetchedByEmail._id, 5, 10);
    console.log("Updated Score", score);

    // Add more CRUD operations here as needed

  } catch (error) {
    console.error('Error during CRUD operations:', error);
  }
}

// Run the test
testCRUD();
