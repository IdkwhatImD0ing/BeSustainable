import performOCR from './gcpVision'
import {matchIngredientsWithOpenAI, performOCRWithOpenAI} from './openaiVision'
import fetchIngredientsByUPC from './spoonacular'
import getScore from './utils'

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
        return {status: 400, body: {error: 'Invalid mode specified'}}
    }

    // Calculate the score based on matched ingredients
    const matchedIngredients = await matchIngredientsWithOpenAI(
      ingredientsString,
    )
    const score = getScore(matchedIngredients)

    // Return the list of matched ingredients and the score as response
    return {status: 200, body: {matchedIngredients, score}}
  } catch (error) {
    console.error('Error in POST route:', error)
    return {status: 500, body: {error: 'Internal Server Error'}}
  }
}
