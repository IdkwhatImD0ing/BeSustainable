import {Box, Typography} from '@mui/material'
import React from 'react'

const PostBlock = ({imageUrl, caption}) => {
  return (
    <Box justifyContent="center">
      {' '}
      <Box
        sx={{
          width: '300px',
          height: '300px',
          justifyContent: 'center',
          display: 'flex',
          zIndex: '1',
          backgroundColor: 'rgba(166, 166, 166, 1)',
          backgroundImage: `url(${imageUrl})`, // Directly using base64 encoded image
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <Box
        padding="20px"
        sx={{
          backgroundColor: 'rgba(212, 212, 212, 1)',
          width: '300px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Typography sx={{color: 'rgba(26, 28, 28, 1)'}}>{caption}</Typography>
      </Box>
    </Box>
  )
}

export default PostBlock
