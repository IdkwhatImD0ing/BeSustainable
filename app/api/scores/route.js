import {NextResponse} from 'next/server'
import {updateScore, getScores} from '../../../lib/user-db'

export async function POST(request) {
  try {
    // Parse the request body
    const body = await request.json()
    const {userId, increase} = body

    if (!userId || increase === undefined) {
      return NextResponse.json(
        {error: 'Missing required fields'},
        {
          status: 400,
        },
      )
    }

    // Call your helper function to update the user's score
    const updatedUser = await updateScore(userId, increase)

    // Return the updated user in the response
    return NextResponse.json(updatedUser, {
      status: 200,
    })
  } catch (error) {
    console.error('Error in POST request for updateScore: ', error)
    return NextResponse.json(
      {error: error.message},
      {
        status: 500,
      },
    )
  }
}

export async function GET(request) {
  try {
    // Extract user ID from the query parameters
    const userId = request.nextUrl.searchParams.get('userId')

    if (!userId) {
      return NextResponse.json(
        {error: 'User ID is required'},
        {
          status: 400,
        },
      )
    }

    // Call your helper function to get the scores
    const scores = await getScores(userId)

    // Return the scores in the response
    return NextResponse.json(scores, {
      status: 200,
    })
  } catch (error) {
    console.error('Error in GET request for getScores: ', error)
    return NextResponse.json(
      {error: error.message},
      {
        status: 500,
      },
    )
  }
}
