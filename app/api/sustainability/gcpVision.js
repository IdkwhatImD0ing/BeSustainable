const vision = require('@google-cloud/vision')
const {GoogleAuth, grpc} = require('google-gax')

// Get from environment variable
const apiKey = process.env.GCP_API_KEY

function getApiKeyCredentials() {
  const sslCreds = grpc.credentials.createSsl()
  const googleAuth = new GoogleAuth()
  const authClient = googleAuth.fromAPIKey(apiKey)
  const credentials = grpc.credentials.combineChannelCredentials(
    sslCreds,
    grpc.credentials.createFromGoogleCredential(authClient),
  )
  return credentials
}

/**
 * Performs OCR on a base64 encoded image using Google Cloud Vision API.
 *
 * @param {string} base64Image The base64 encoded image string.
 * @returns {Promise<string[]>} A promise that resolves to an array of detected texts.
 */
async function performOCR(base64Image) {
  const sslCreds = getApiKeyCredentials()
  // Create a client
  const client = new vision.ImageAnnotatorClient({sslCreds})

  // Remove the prefix (if exists) from the base64 string
  const base64Data = base64Image.replace(/^data:image\/\w+;base64,/, '')

  // Convert the base64 string to a Buffer
  const imageBuffer = Buffer.from(base64Data, 'base64')

  try {
    // Prepare the request for the Vision API
    const request = {
      image: {
        content: imageBuffer,
      },
    }

    // Performs text detection on the image buffer
    const [result] = await client.textDetection(request)
    const detections = result.textAnnotations

    // Extract and return texts
    return detections.map((text) => text.description)
  } catch (err) {
    console.error('Failed to perform text detection:', err)
    throw err
  }
}

export default performOCR
