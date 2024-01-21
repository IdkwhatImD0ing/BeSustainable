import Box from "@mui/material/Box";
import Item from "@mui/material/ListItem";
import ButtonGroup from "@mui/material-next/ButtonGroup";
import { Button } from "@mui/material-next";
import Stack from "@mui/material/Stack";
import CircleIcon from "@mui/icons-material/Circle";
import PanoramaFishEyeIcon from "@mui/icons-material/PanoramaFishEye";

export default function Camera() {
  const flashicon = () => {
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
    </svg>;
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        width: "100%",
      }}
    >
      <Stack
        direction="column"
        sx={{
          marginTop: "12%",
          display: "flex",
          justifyContent: "center",
          width: "100%",
        }}
      >
        <Item
          sx={{
            justifyContent: "center",
            fontFamily: "Helvetica",
            fontSize: "24px",
            fontStyle: "normal",
            fontWeight: 700,
            color: "rgba(63, 170, 114, 1)",
            marginBottom: "5%",
          }}
        >
          BeSustainable
        </Item>
        <Box
          sx={{
            marginLeft: "11%",
            width: "300px",
            height: "450px",
            flexShrink: "0",
            justifyContent: "center",
            backgroundColor: "gray",
          }}
        >
          camera LOL
        </Box>

        <ButtonGroup
          size="small"
          variant="text"
          sx={{ marginLeft: "12.5%", marginTop: "5%", width: "100%" }}
        >
          <Button
            style={{
              color: "rgba(63, 170, 114, 1)",
              fontFamily: "Helvetica",
            }}
          >
            Ingredients
          </Button>
          <Button
            style={{
              marginRight: "2.5%",
              color: "rgba(63, 170, 114, 1)",
              fontFamily: "Helvetica",
            }}
          >
            Scanner
          </Button>
          <Button
            style={{
              color: "rgba(63, 170, 114, 1)",
              fontFamily: "Helvetica",
            }}
          >
            Upload
          </Button>
        </ButtonGroup>
        <Stack direction="row" sx={{ justifyContent: "center" }}>
          <Stack
            direction="row"
            sx={{
              justifyContent: "center",
              marginTop: "10%",
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
    </Box>
  );
}
