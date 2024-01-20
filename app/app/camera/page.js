'use client'
import React, {useEffect, useState} from 'react'
import Quagga from '@ericblade/quagga2'
import './styles.css'
import {Box, Typography} from '@mui/material'

const Scanner = () => {
  const [result, setResult] = useState('No Code')
  useEffect(() => {
    const config = {
      inputStream: {
        type: 'LiveStream',
        constraints: {
          width: {min: 450},
          height: {min: 300},
          facingMode: 'environment',
          aspectRatio: {min: 1, max: 2},
        },
        willReadFrequently: true,
      },
      locator: {
        patchSize: 'large',
        halfSample: true,
        willReadFrequently: true,
      },
      numOfWorkers: 2,
      frequency: 10,
      decoder: {
        readers: ['upc_reader'],
      },
      locate: true,
    }
    try {
      Quagga.init(config, (err) => {
        if (err) {
          console.log(err, 'error msg')
          return
        }
        Quagga.start()
        console.log('init')
        return () => {
          Quagga.stop()
        }
      })

      //detecting boxes on stream
      Quagga.onProcessed((result) => {
        var drawingCtx = Quagga.canvas.ctx.overlay,
          drawingCanvas = Quagga.canvas.dom.overlay

        if (result) {
          if (result.boxes) {
            drawingCtx.clearRect(
              0,
              0,
              Number(drawingCanvas.getAttribute('width')),
              Number(drawingCanvas.getAttribute('height')),
            )
            result.boxes
              .filter(function (box) {
                return box !== result.box
              })
              .forEach(function (box) {
                Quagga.ImageDebug.drawPath(box, {x: 0, y: 1}, drawingCtx, {
                  color: 'green',
                  lineWidth: 2,
                })
              })
          }

          if (result.box) {
            Quagga.ImageDebug.drawPath(result.box, {x: 0, y: 1}, drawingCtx, {
              color: '#00F',
              lineWidth: 2,
            })
          }

          if (result.codeResult && result.codeResult.code) {
            Quagga.ImageDebug.drawPath(
              result.line,
              {x: 'x', y: 'y'},
              drawingCtx,
              {color: 'red', lineWidth: 3},
            )
          }
        }
      })
      Quagga.onDetected(detected)
    } catch (err) {
      console.log(err, 'error')
    }
  }, [])

  const detected = (result) => {
    setResult(result.codeResult.code)
    console.log(result.codeResult.code, 'result')
  }

  return (
    <Box
      width="100%"
      height="100vh"
      display="flex"
      justifyContent="center"
      alignItems="center"
      position="relative"
    >
      <div id="interactive" className="viewport" />
      <Typography variant="h3" sx={{position: 'absolute', top: '10%'}}>
        {result}
      </Typography>
    </Box>
  )
}

export default Scanner
