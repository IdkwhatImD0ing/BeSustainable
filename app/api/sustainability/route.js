import performOCR from './gcpVision'
import {matchIngredientsWithOpenAI, performOCRWithOpenAI} from './openaiVision'
import fetchIngredientsByUPC from './spoonacular'
import getScore from './utils'
import {NextResponse} from 'next/server'

export async function POST(request) {
  try {
    const res = await request.json() // res now contains the body
    const {mode, code, image} = res

    let ingredientsString = '' // String of ingredients

    // Handle different modes
    switch (mode) {
      case 'upc':
        ingredientsString = await fetchIngredientsByUPC(code)
        break
      case 'ocr':
        ingredientsString = await performOCR(image)
        break
      case 'vision':
        ingredientsString = await performOCRWithOpenAI(image)
        break
      default:
        return NextResponse.json(
          {
            error: 'Invalid mode',
          },
          {
            status: 400,
          },
        )
    }

    // Calculate the score based on matched ingredients
    const matchedIngredients = await matchIngredientsWithOpenAI(
      ingredientsString,
    )

    const score = getScore(matchedIngredients.matched_ingredients)

    // Return the list of matched ingredients and the score as response
    return NextResponse.json(
      {
        ingredients: matchedIngredients,
        score: score,
      },
      {
        status: 200,
      },
    )
  } catch (error) {
    console.error('Error in POST route:', error)
    return NextResponse.json(
      {
        error: error.message,
      },
      {
        status: 500,
      },
    )
  }
}
