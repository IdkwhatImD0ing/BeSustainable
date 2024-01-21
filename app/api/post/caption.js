import OpenAI from 'openai'

/**
 * Creates a caption for an image using OpenAI.
 * @param {string} base64Image - The base64 encoded image string.
 */
export default async function createCaption(base64Image) {
  const openai = new OpenAI(process.env.OPENAI_API_KEY)
  const dataUri = base64Image

  const prompt = `Here is an image of a food item. Please create a funny caption for the image.`

  try {
    const response = await openai.chat.completions.create({
      model: 'gpt-4-vision-preview',
      temperature: 0,
      max_tokens: 2000,
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
    return response.choices[0].message.content
  } catch (error) {
    console.error('Error performing OCR with OpenAI:', error)
    throw error
  }
}
