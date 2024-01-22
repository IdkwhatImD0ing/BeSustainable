'use client'
import React, {useEffect, useState, useRef} from 'react'
import {BrowserMultiFormatReader, NotFoundException} from '@zxing/library'
import {Box, Typography, Button, Stack, ButtonGroup} from '@mui/material'
import CircleIcon from '@mui/icons-material/Circle'
import PanoramaFishEyeIcon from '@mui/icons-material/PanoramaFishEye'
import Item from '@mui/material/ListItem'
import Loading from './Loading'
import {useRouter} from 'next/navigation'

const ScannerCamera = () => {
  const [mode, setMode] = useState('scanner') // ['scanner', 'ingredients', 'upload'
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  const videoRef = useRef()

  const startVideoStream = async (videoElementRef, useBackCamera = true) => {
    try {
      const constraints = {
        video: {
          facingMode: useBackCamera ? 'environment' : 'user', // 'environment' for back camera, 'user' for front
        },
      }
      const stream = await navigator.mediaDevices.getUserMedia(constraints)
      videoElementRef.current.srcObject = stream
      videoElementRef.current.play()
    } catch (error) {
      console.error('Error accessing the camera:', error)
    }
  }

  useEffect(() => {
    if (mode === 'scanner') {
      const codeReader = new BrowserMultiFormatReader()
      // Start decoding from the default video device.
      codeReader.decodeFromVideoDevice(null, 'video', (result, err) => {
        if (result) {
          // Save image to local storage
          const imageData = captureImage()
          localStorage.setItem('image', imageData)
          codeReader.reset()
          setLoading(true)
          fetch('/api/sustainability', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              mode: 'upc',
              code: result.text,
            }),
          })
            .then((res) => res.json())
            .then((data) => {
              localStorage.setItem(
                'ingredients',
                data.ingredients.matched_ingredients,
              )
              localStorage.setItem('mode', 'scanner')
              localStorage.setItem('score', data.score)
              router.push('/results')
            })
        }

        if (err && !(err instanceof NotFoundException)) {
          console.error(err)
        }
      })

      // Cleanup: Reset the code reader when the component is unmounted.
      return () => {
        codeReader.reset()
      }
    } else {
      startVideoStream(videoRef)
    }
  }, [mode, router])

  // Capture image and convert to base64
  const captureImage = () => {
    const video = videoRef.current
    if (!video) {
      return
    }

    const canvas = document.createElement('canvas')
    canvas.width = video.videoWidth
    canvas.height = video.videoHeight
    const ctx = canvas.getContext('2d')
    ctx.drawImage(video, 0, 0, canvas.width, canvas.height)
    const imageData = canvas.toDataURL('image/png')
    return imageData
  }

  const handleCircleClick = async () => {
    setLoading(true)
    if (mode !== 'scanner') {
      const imageData = captureImage()

      // Determine the mode for the API ('ocr' or 'vision')
      const apiMode = mode === 'ingredients' ? 'ocr' : 'vision'

      // Prepare the body of the POST request
      const requestBody = {
        mode: apiMode,
        image: imageData, // Ensure this is in the correct format expected by your API
      }

      try {
        const response = await fetch('/api/sustainability', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(requestBody),
        })

        const data = await response.json()
        if (response.ok) {
          localStorage.setItem('image', imageData)
          localStorage.setItem(
            'ingredients',
            data.ingredients.matched_ingredients,
          )
          localStorage.setItem('score', data.score)
          localStorage.setItem('mode', mode)
          router.push('/results')
          // Handle successful response (e.g., display ingredients and score)
        } else {
          console.error('Server responded with an error:', data.error)
          // Handle errors (e.g., show error message to the user)
        }
      } catch (error) {
        console.error('Error making the request:', error)
        // Handle network errors (e.g., show error message to the user)
      }
    }
  }
  // Change state of camera to scan ingredients
  const handleIngredientsClick = () => {
    setMode('ingredients')
  }

  // Change state of camera to scan qr code
  const handleScannerClick = () => {
    setMode('scanner')
  }

  // Change state of camera to upload a photo
  const handleUploadClick = () => {
    setMode('upload')
  }

  if (loading) {
    return <Loading />
  }

  return (
    <Stack
      direction="column"
      justifyContent="flex-start"
      alignItems="center"
      width="100%"
      height="100vh"
      spacing={5}
      paddingTop="20%"
      overflow="hidden"
    >
      <Typography
        variant="h2"
        sx={{
          justifyContent: 'center',
          fontFamily: 'Helvetica',
          fontSize: '30px',
          fontStyle: 'normal',
          fontWeight: 700,
          color: 'rgba(63, 170, 114, 1)',
        }}
      >
        BeSustainable
      </Typography>

      <Box width="450px" height="300px">
        <video
          id="video"
          ref={videoRef}
          style={{
            position: 'relative',
            height: '100%',
            width: '100%',
            padding: '20px',
          }}
        />
      </Box>

      <Stack
        direction="column"
        spacing={5}
        sx={{
          position: 'relative',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <ButtonGroup
          size="small"
          variant="text"
          sx={{
            width: '100%',
            position: 'relative',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Button
            style={{
              color: mode === 'ingredients' ? 'white' : 'rgba(63, 170, 114, 1)',
              backgroundColor:
                mode === 'ingredients' ? 'rgba(63, 170, 114, 1)' : '',
              fontFamily: 'Helvetica',
            }}
            onClick={handleIngredientsClick}
          >
            Ingredients
          </Button>
          <Button
            style={{
              color: mode === 'scanner' ? 'white' : 'rgba(63, 170, 114, 1)',
              backgroundColor:
                mode === 'scanner' ? 'rgba(63, 170, 114, 1)' : '',
              fontFamily: 'Helvetica',
            }}
            onClick={handleScannerClick}
          >
            Scanner
          </Button>
          <Button
            style={{
              color: mode === 'upload' ? 'white' : 'rgba(63, 170, 114, 1)',
              backgroundColor: mode === 'upload' ? 'rgba(63, 170, 114, 1)' : '',
              fontFamily: 'Helvetica',
            }}
            onClick={handleUploadClick}
          >
            Upload
          </Button>
        </ButtonGroup>

        <Stack direction="row" sx={{justifyContent: 'center'}}>
          <Stack
            direction="row"
            sx={{
              justifyContent: 'center',
              position: 'relative',
            }}
          >
            <Button
              disabled={mode === 'scanner'}
              style={{
                borderRadius: '90%',
                width: '50px',
                height: '70px',
                padding: '10px',
                color:
                  mode === 'scanner'
                    ? 'rgba(63, 170, 114, 0.5)'
                    : 'rgba(63, 170, 114, 1)', // Fade color when disabled
                backgroundColor:
                  mode === 'scanner' ? 'rgba(255, 255, 255, 0.5)' : '', // Optional: Fade background as well
                fontFamily: 'Helvetica',
                position: 'relative',
                zIndex: 5, // increased from 1
                // Apply opacity reduction if the button is disabled
                opacity: mode === 'scanner' ? 0.5 : 1,
                // Optionally, you could add a cursor style
                cursor: mode === 'scanner' ? 'not-allowed' : 'pointer',
              }}
              onClick={handleCircleClick}
            >
              <CircleIcon style={{fontSize: '65px'}} />
            </Button>

            <PanoramaFishEyeIcon
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                color: 'rgba(63, 170, 114, 1)',

                transform: 'translate(-50%, -50%)',
                fontSize: '95px',
                zIndex: 1, // decreased from 2
              }}
            />
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  )
}

export default ScannerCamera
