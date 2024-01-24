import {Stack, Box, Typography} from '@mui/material'
import Item from '@mui/material/ListItem'
import Image from 'next/image'

const Loading = () => {
  return (
    <Stack
      direction="column"
      justifyContent="center"
      alignItems="flex-start"
      paddingX="10%"
      height="100vh"
      overflow="hidden"
      backgroundColor="white"
    >
      <Typography
        sx={{
          fontFamily: 'Helvetica',
          fontSize: '24px',
          fontWeight: '400',
          color: 'rgba(63, 170, 114, 1)',
          marginTop: '20%',
        }}
      >
        Hello lovely human,
      </Typography>
      <Typography
        sx={{
          fontFamily: 'Helvetica',
          fontSize: '32px',
          fontWeight: '700',
          color: 'rgba(63, 170, 114, 1)',
        }}
      >
        Every bite counts.
      </Typography>
      <Typography
        sx={{
          fontFamily: 'Helvetica',
          fontSize: '32px',
          fontWeight: '700',
          color: 'rgba(63, 170, 114, 1)',
          marginTop: '-14px',
        }}
      >
        So let&apos;s make it
      </Typography>
      <Typography
        sx={{
          fontFamily: 'Helvetica',
          fontSize: '32px',
          fontWeight: '700',
          color: 'rgba(63, 170, 114, 1)',
          marginTop: '-14px',
        }}
      >
        sustainable.
      </Typography>

      <Image
        src="/bag.png" // Relative path to your image file
        alt="bag"
        width={181} // Width of the image in pixels
        height={181} // Height of the image in pixels
        layout="fixed" // This will keep the dimensions you provided
        style={{
          marginTop: '20%',
          position: 'relative',
          display: 'flex',
          justifyContent: 'center',
          top: '0', // Adjust these values to position the image
          zIndex: '1',
        }}
      />
      <Item
        sx={{
          position: 'relative',
          display: 'flex',
          justifyContent: 'center',

          alignItems: 'center',
          color: 'rgba(63, 170, 114, 1)',
          fontWeight: '700',
          fontSize: '20px',
          fontFamily: 'Helvetica',
        }}
      >
        Please wait for you results to load...
      </Item>
    </Stack>
  )
}

export default Loading
