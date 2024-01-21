const axios = require('axios')

/**
 * Fetches product details by UPC and returns the list of ingredients.
 * @param {string} upc - The UPC code of the product.
 * @param {string} apiKey - The API key for the spoonacular API.
 * @returns {Promise<Array>} A promise that resolves to an array of ingredients.
 */
async function fetchIngredientsByUPC(upc, apiKey) {
  const options = {
    method: 'GET',
    url: `https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/food/products/upc/${upc}`,
    headers: {
      'X-RapidAPI-Key': process.env.SPOONACULAR_API_KEY,
      'X-RapidAPI-Host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com',
    },
  }

  try {
    const response = await axios.request(options)
    const ingredients = response.data.ingredients

    // Check if ingredients exist and return them as a string
    if (ingredients && Array.isArray(ingredients)) {
      return ingredients.map((ingredient) => ingredient.name).join(', ')
    } else {
      return ''
    }
  } catch (error) {
    console.error('Error fetching ingredients:', error)
    throw error
  }
}

export default fetchIngredientsByUPC
