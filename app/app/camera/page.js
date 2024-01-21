'use client'
import React, {useEffect, useState} from 'react'
import {BrowserMultiFormatReader, NotFoundException} from '@zxing/library'
import {Box, Typography, Button, Stack, ButtonGroup} from '@mui/material'
import CircleIcon from '@mui/icons-material/Circle'
import PanoramaFishEyeIcon from '@mui/icons-material/PanoramaFishEye'
import Item from '@mui/material/ListItem'

const ScannerCamera = () => {
  const [result, setResult] = useState('No Code')
  const codeReader = new BrowserMultiFormatReader()

  useEffect(() => {
    // Start decoding from the default video device.
    codeReader.decodeFromVideoDevice(null, 'video', (result, err) => {
      if (result) {
        console.log(result)
        setResult(result.text)
      }

      if (err && !(err instanceof NotFoundException)) {
        console.error(err)
      }
    })

    console.log(`Started continuous decode from the default camera.`)

    // Cleanup: Reset the code reader when the component is unmounted.
    return () => {
      codeReader.reset()
      console.log('Reset.')
    }
  }, [codeReader])

  const flashicon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="80"
      height="80"
      viewBox="0 0 35 35"
      fill="none"
    >
      <path
        d="M10.5075 3.565C10.6289 3.25126 10.8424 2.98161 11.12 2.79152C11.3975 2.60142 11.7261 2.4998 12.0625 2.5H22.7075C23.8663 2.5 24.67 3.6525 24.2725 4.74L21.655 11.875H27.7013C29.1738 11.875 29.9225 13.645 28.8975 14.7025L12.23 31.8787C10.805 33.3475 8.34754 32.025 8.78879 30.0262L10.8638 20.625H7.39629C7.00689 20.6249 6.62337 20.53 6.27893 20.3483C5.9345 20.1667 5.63951 19.9038 5.41952 19.5825C5.19953 19.2612 5.06116 18.8911 5.01638 18.5043C4.97161 18.1175 5.02177 17.7256 5.16254 17.3625L10.5075 3.565Z"
        fill="#3FAA72"
      />
    </svg>
  )

  // Take photo where depending on state, use OCR or save it to db or do nothing if in scanning state
  const handleCircleClick = () => {
    console.log("Circle Button Clicked");
    
  };

  // Change state of camera to scan ingredients
  const handleIngredientsClick = () => {
    console.log("Ingredients Button Clicked");
    
  };

  // Change state of camera to scan qr code
  const handleScannerClick = () => {
    console.log("Scanner Button Clicked");
    
  };

  // Change state of camera to upload a photo
  const handleUploadClick = () => {
    console.log("Upload Button Clicked");
    
  };

  return (
    <Stack
      direction="column"
      justifyContent="center"
      alignItems="center"
      width="100%"
      height="100vh"
      spacing={5}
    >
      <Item
        sx={{
          justifyContent: 'center',
          fontFamily: 'Helvetica',
          fontSize: '24px',
          fontStyle: 'normal',
          fontWeight: 700,
          color: 'rgba(63, 170, 114, 1)',
        }}
      >
        BeSustainable
      </Item>

      <Box width="450px" height="300px">
        <video
          id="video"
          style={{position: 'relative', height: '100%', width: '100%'}}
        />
      </Box>

      <Typography variant="subtitle1" color="black">
        {result}
      </Typography>

      <ButtonGroup size="small" variant="text">
        <Button
          style={{
            color: 'rgba(63, 170, 114, 1)',
            fontFamily: 'Helvetica',
          }}
          onClick={handleIngredientsClick}
        >
          Ingredients
        </Button>
        <Button
          style={{
            marginRight: '2.5%',
            color: 'rgba(63, 170, 114, 1)',
            fontFamily: 'Helvetica',
          }}
          onClick={handleScannerClick}
        >
          Scanner
        </Button>
        <Button
          style={{
            color: 'rgba(63, 170, 114, 1)',
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
            marginTop: '10%',
            position: 'relative',
          }}
        >
          <Button
            style={{
              borderRadius: '90%',
              width: '50px',
              height: '70px',
              padding: '10px',
              color: 'rgba(63, 170, 114, 1)',
              fontFamily: 'Helvetica',
              position: 'relative',
              zIndex: 5, // increased from 1
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
  )
}

export default ScannerCamera
