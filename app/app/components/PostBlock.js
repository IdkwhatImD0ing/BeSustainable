import React from 'react';
import { Box, Typography } from '@mui/material';

const PostBlock = ({ imageUrl, caption }) => {
  return (
    <Box justifyContent="center" sx={{ marginTop: "-11%", marginLeft: "8%" }}>
      <Box
        sx={{
          width: "300px",
          height: "300px",
          marginLeft: "3.5%",
          justifyContent: "center",
          marginTop: "10%",
          display: "flex",
          zIndex: "1",
          backgroundColor: "rgba(166, 166, 166, 1)",
          backgroundImage: `url(${imageUrl})`, // Directly using base64 encoded image
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <Box
        sx={{
          backgroundColor: "rgba(212, 212, 212, 1)",
          width: "300px",
          marginLeft: "3.5%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "81px",
          flexShrink: "0",
        }}
      >
        <Typography sx={{ color: "rgba(26, 28, 28, 1)" }}>
          {caption}
        </Typography>
      </Box>
    </Box>
  );
};

export default PostBlock;
