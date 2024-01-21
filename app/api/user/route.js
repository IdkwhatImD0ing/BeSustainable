import {NextResponse} from 'next/server'
import {createUser} from '../../../lib/user-db'

export async function POST(request) {
  try {
    // Parse the request body
    const body = await request.json()
    const {userId} = body

    if (!userId) {
      return NextResponse.json(
        {error: 'User ID is required'},
        {
          status: 400,
        },
      )
    }

    // Call your helper function to create a user
    const newUser = await createUser(userId)

    // Return the new user in the response
    return NextResponse.json(newUser, {
      status: 201, // 201 for Created
    })
  } catch (error) {
    console.error('Error in POST request: ', error)
    return NextResponse.json(
      {error: error.message},
      {
        status: 500, // 500 for Internal Server Error
      },
    )
  }
}
