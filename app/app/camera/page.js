"use client";
import React, { useEffect, useState, useRef } from "react";
import { BrowserMultiFormatReader, NotFoundException } from "@zxing/library";
import { Box, Typography, Button, Stack, ButtonGroup } from "@mui/material";
import CircleIcon from "@mui/icons-material/Circle";
import PanoramaFishEyeIcon from "@mui/icons-material/PanoramaFishEye";
import Item from "@mui/material/ListItem";

const ScannerCamera = () => {
  const [result, setResult] = useState("No Code");
  const [mode, setMode] = useState("scanner"); // ['scanner', 'ingredients', 'upload'
  const codeReader = new BrowserMultiFormatReader();
  const videoRef = useRef();

  const startVideoStream = async (videoElementRef) => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      videoElementRef.current.srcObject = stream;
      videoElementRef.current.play();
    } catch (error) {
      console.error("Error accessing the camera:", error);
    }
  };

  useEffect(() => {
    if (mode === "scanner") {
      // Start decoding from the default video device.
      codeReader.decodeFromVideoDevice(null, "video", (result, err) => {
        if (result) {
          console.log(result);
          setResult(result.text);
        }

        if (err && !(err instanceof NotFoundException)) {
          console.error(err);
        }
      });

      console.log(`Started continuous decode from the default camera.`);

      // Cleanup: Reset the code reader when the component is unmounted.
      return () => {
        codeReader.reset();
        console.log("Reset.");
      };
    } else {
      startVideoStream(videoRef);
    }
  }, [codeReader, mode]);

  // Capture image and convert to base64
  const captureImage = () => {
    const video = videoRef.current;
    if (!video) {
      return;
    }

    const canvas = document.createElement("canvas");
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    const ctx = canvas.getContext("2d");
    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
    const imageData = canvas.toDataURL("image/png");
    return imageData;
  };

  const handleCircleClick = async () => {
    console.log("Circle Button Clicked");
    if (mode !== "scanner") {
      const imageData = captureImage();

      // Determine the mode for the API ('ocr' or 'vision')
      const apiMode = mode === "ingredients" ? "ocr" : "vision";

      // Prepare the body of the POST request
      const requestBody = {
        mode: apiMode,
        image: imageData, // Ensure this is in the correct format expected by your API
      };

      try {
        const response = await fetch("/api/sustainability", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(requestBody),
        });

        const data = await response.json();
        if (response.ok) {
          console.log("Response from server:", data);
          // Handle successful response (e.g., display ingredients and score)
        } else {
          console.error("Server responded with an error:", data.error);
          // Handle errors (e.g., show error message to the user)
        }
      } catch (error) {
        console.error("Error making the request:", error);
        // Handle network errors (e.g., show error message to the user)
      }
    }
  };
  // Change state of camera to scan ingredients
  const handleIngredientsClick = () => {
    setMode("ingredients");
  };

  // Change state of camera to scan qr code
  const handleScannerClick = () => {
    setMode("scanner");
  };

  // Change state of camera to upload a photo
  const handleUploadClick = () => {
    setMode("upload");
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
          justifyContent: "center",
          fontFamily: "Helvetica",
          fontSize: "30px",
          fontStyle: "normal",
          fontWeight: 700,
          color: "rgba(63, 170, 114, 1)",
          top: "-10px",
        }}
      >
        BeSustainable
      </Item>
      {mode === "scanner" && (
        <Box width="450px" height="300px">
          <video
            id="video"
            style={{
              position: "relative",
              height: "100%",
              width: "100%",
              padding: "20px",
            }}
          />
        </Box>
      )}

      {(mode === "ingredients" || mode === "upload") && (
        <Box width="450px" height="300px">
          <video
            id="camera"
            ref={videoRef}
            style={{
              position: "relative",
              height: "100%",
              width: "100%",
              padding: "20px",
            }}
          />
        </Box>
      )}
      <Stack
        direction="column"
        sx={{
          position: "relative",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "50%", // Adjust this value to move the Stack down
        }}
      >
        <Typography
          variant="subtitle1"
          color="black"
          sx={{ marginTop: "-10%", fontWeight: "bold", fontSize: "20px" }}
        >
          {result}
        </Typography>

        <ButtonGroup
          size="small"
          variant="text"
          sx={{
            marginTop: "10%",
            marginBottom: "10%",
            width: "100%",
            position: "relative",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Button
            style={{
              color: "rgba(63, 170, 114, 1)",
              fontFamily: "Helvetica",
              marginRight: "2.5%",
              marginLeft: "-6.5%",
            }}
            onClick={handleIngredientsClick}
          >
            Ingredients
          </Button>
          <Button
            style={{
              color: "rgba(63, 170, 114, 1)",
              fontFamily: "Helvetica",
              margin: "auto",
            }}
            onClick={handleScannerClick}
          >
            Scanner
          </Button>
          <Button
            style={{
              color: "rgba(63, 170, 114, 1)",
              fontFamily: "Helvetica",
              marginLeft: "3.5%",
            }}
            onClick={handleUploadClick}
          >
            Upload
          </Button>
        </ButtonGroup>
        <Stack direction="row" sx={{ justifyContent: "center" }}>
          <Stack
            direction="row"
            sx={{
              justifyContent: "center",
              marginTop: "25%",
              position: "relative",
            }}
          >
            <Button
              style={{
                borderRadius: "90%",
                width: "50px",
                height: "70px",
                padding: "10px",
                color: "rgba(63, 170, 114, 1)",
                fontFamily: "Helvetica",
                position: "relative",
                zIndex: 5, // increased from 1
              }}
              onClick={handleCircleClick}
            >
              <CircleIcon style={{ fontSize: "65px" }} />
            </Button>
            <PanoramaFishEyeIcon
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                color: "rgba(63, 170, 114, 1)",

                transform: "translate(-50%, -50%)",
                fontSize: "95px",
                zIndex: 1, // decreased from 2
              }}
            />
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default ScannerCamera;
