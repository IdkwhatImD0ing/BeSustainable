import { NextResponse, NextRequest } from 'next/server'
import { getPosts, createPost } from '../../../lib/post-db'

export async function GET(request: NextRequest) {
  try {
    // Extract user ID from the query parameters
    const userId = request.nextUrl.searchParams.get('userId')

    if (!userId) {
      return NextResponse.json({ error: 'User ID is required' }, {
        status: 400,
      });
    }

    // Call your helper function to get the posts
    const posts = await getPosts(userId);

    // Return the posts in the response
    return NextResponse.json(posts, {
      status: 200,
    });
  } catch (error) {
    console.log('Error in GET request: ', error);
    return NextResponse.json({ error: error.message }, {
      status: 500,
    });
  }
}

export async function POST(request: NextRequest) {
  try {
    // Parse the request body
    const body = await request.json();
    const { userId, imageLink, caption } = body;

    if (!userId || !imageLink || !caption) {
      return NextResponse.json({ error: 'Missing required fields' }, {
        status: 400,
      });
    }

    // Call your helper function to create a post
    const newPost = await createPost(userId, imageLink, caption);

    // Return the new post in the response
    return NextResponse.json(newPost, {
      status: 201,
    });
  } catch (error) {
    console.error('Error in POST request: ', error);
    return NextResponse.json({ error: error.message }, {
      status: 500,
    });
  }
}

