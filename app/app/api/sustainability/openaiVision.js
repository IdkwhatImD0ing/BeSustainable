import OpenAI from 'openai'

/**
 * Performs OCR on a base64 encoded image using OpenAI's model.
 * @param {string} base64Image - The base64 encoded image string.
 */
async function performOCRWithOpenAI(base64Image) {
  const openai = new OpenAI(process.env.OPENAI_API_KEY)
  const dataUri = base64Image

  const prompt =
    'Here is an image of a food item. Here is the list of ingredients:\n' +
    INGREDIENTS +
    '\nWhat are the ingredients from that list which is in this food item?\n\nImage:'

  try {
    const response = await openai.chat.completions.create({
      model: 'gpt-4-vision-preview',
      messages: [
        {
          role: 'user',
          content: [
            {type: 'text', text: prompt},
            {
              type: 'image_url',
              image_url: {
                url: dataUri,
              },
            },
          ],
        },
      ],
    })

    // Process and return the response
    console.log(response.choices[0])
    return response.choices[0]
  } catch (error) {
    console.error('Error performing OCR with OpenAI:', error)
    throw error
  }
}

/**
 * Matches a list of ingredients with a predefined list using OpenAI.
 * @param {string} ingredientsString - A string containing ingredients.
 * @returns {Promise<string[]>} - A promise that resolves to a list of matching ingredients.
 */
async function matchIngredientsWithOpenAI(ingredientsString) {
  // Prepare the message for the AI
  const message = `Reference Ingredients:
  ${INGREDIENTS}

  Parsed Text:
  ${ingredientsString}

  This is a text parsed from an image. Please match the ingredients from the reference list with the ingredients from the parsed text.`

  try {
    const completion = await openai.chat.completions.create({
      messages: [
        {
          role: 'system',
          content: 'You are a helpful assistant designed to output JSON.',
        },
        {role: 'user', content: message},
      ],
      model: 'gpt-4-1106-preview',
      response_format: {type: 'json_object'},
    })

    // Extracting the content from the response
    const content = completion.choices[0].message.content
    const matchedIngredients = JSON.parse(content)
    return matchedIngredients
  } catch (error) {
    console.error('Error matching ingredients:', error)
    throw error
  }
}

const INGREDIENTS = `
Wheat & Rye (Bread)
Maize (Meal)
Barley (Beer)
Oatmeal
Rice
Potatoes
Cassava
Cane Sugar
Beet Sugar
Other Pulses
Peas
Nuts
Groundnuts
Soymilk
Tofu
Soybean Oil
Palm Oil
Sunflower Oil
Rapeseed Oil
Olive Oil
Tomatoes
Onions & Leeks
Root Vegetables
Brassicas
Other Vegetables
Citrus Fruit
Bananas
Apples
Berries & Grapes
Wine
Other Fruit
Coffee
Dark Chocolate
Beef (beef herd)
Beef (dairy herd)
Lamb & Mutton
Pig Meat
Poultry Meat
Milk
Cheese
Eggs
Fish (farmed)
Shrimps (farmed)
`
export {performOCRWithOpenAI, matchIngredientsWithOpenAI}
