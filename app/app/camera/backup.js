'use client'

import React, {useEffect, useState, useRef, useCallback} from 'react'
import Quagga from '@ericblade/quagga2'

const Scanner = () => {
  const [result, setResult] = useState('No Code')
  const cameraRef = useRef(null)

  function getMedian(arr) {
    const newArr = [...arr] // copy the array before sorting, otherwise it mutates the array passed in, which is generally undesireable
    newArr.sort((a, b) => a - b)
    const half = Math.floor(newArr.length / 2)
    if (newArr.length % 2 === 1) {
      return newArr[half]
    }
    return (newArr[half - 1] + newArr[half]) / 2
  }

  function getMedianOfCodeErrors(decodedCodes) {
    const errors = decodedCodes.flatMap((x) => x.error)
    const medianOfErrors = getMedian(errors)
    return medianOfErrors
  }

  const defaultConstraints = {
    width: 640,
    height: 480,
  }

  const defaultLocatorSettings = {
    patchSize: 'medium',
    halfSample: true,
    willReadFrequently: true,
  }

  const defaultDecoders = ['ean_reader']

  const handleProcessed = (result) => {
    const drawingCtx = Quagga.canvas.ctx.overlay
    const drawingCanvas = Quagga.canvas.dom.overlay
    drawingCtx.font = '24px Arial'
    drawingCtx.fillStyle = 'green'

    const onDetected = (result) => {
      setResult(result)
    }

    if (result) {
      // console.warn('* quagga onProcessed', result);
      if (result.boxes) {
        drawingCtx.clearRect(
          0,
          0,
          parseInt(drawingCanvas.getAttribute('width')),
          parseInt(drawingCanvas.getAttribute('height')),
        )
        result.boxes
          .filter((box) => box !== result.box)
          .forEach((box) => {
            Quagga.ImageDebug.drawPath(box, {x: 0, y: 1}, drawingCtx, {
              color: 'purple',
              lineWidth: 2,
            })
          })
      }
      if (result.box) {
        Quagga.ImageDebug.drawPath(result.box, {x: 0, y: 1}, drawingCtx, {
          color: 'blue',
          lineWidth: 2,
        })
      }
      if (result.codeResult && result.codeResult.code) {
        // const validated = barcodeValidator(result.codeResult.code);
        // const validated = validateBarcode(result.codeResult.code);
        // Quagga.ImageDebug.drawPath(result.line, { x: 'x', y: 'y' }, drawingCtx, { color: validated ? 'green' : 'red', lineWidth: 3 });
        drawingCtx.font = '24px Arial'
        // drawingCtx.fillStyle = validated ? 'green' : 'red';
        // drawingCtx.fillText(`${result.codeResult.code} valid: ${validated}`, 10, 50);
        drawingCtx.fillText(result.codeResult.code, 10, 20)
        // if (validated) {
        //     onDetected(result);
        // }
      }
    }
  }

  useEffect(() => {
    if (!cameraRef.current) {
      console.error('Camera ref is not attached to a DOM element.')
      return
    }

    const errorCheck = (result) => {
      if (!onDetected) {
        return
      }
      const err = getMedianOfCodeErrors(result.codeResult.decodedCodes)
      // if Quagga is at least 75% certain that it read correctly, then accept the code.
      if (err < 0.25) {
        onDetected(result.codeResult.code)
      }
    }

    Quagga.init(
      {
        inputStream: {
          type: 'LiveStream',
          constraints: {
            ...defaultConstraints,
          },
          target: cameraRef.current,
          willReadFrequently: true,
        },
      },
      (err) => {
        Quagga.onProcessed(handleProcessed)
        if (err) {
          console.log(err, 'error msg')
        }
        Quagga.start()
        return () => {
          Quagga.stop()
        }
      },
    )
    Quagga.onDetected(errorCheck)
  }, [cameraRef.current])

  return (
    <>
      <div ref={cameraRef} style={{width: '100%', height: '100%'}} />
      <div
        style={{
          position: 'absolute',
          top: '50%',
          right: '0',
        }}
      >
        Result: {result}
      </div>
    </>
  )
}

export default Scanner
