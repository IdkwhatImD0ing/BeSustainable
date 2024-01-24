'use client'

import {Stack, Button, Box, Typography, LinearProgress} from '@mui/material'
import Image from 'next/image'
import {useState, useEffect} from 'react'
import {useRouter} from 'next/navigation'
import {useUser} from '@auth0/nextjs-auth0/client'
import Error from './error'
import Loading from '../camera/Loading'

export default function Results() {
  const [ingredients, setIngredients] = useState()
  const [score, setScore] = useState(0)
  const [image, setImage] = useState('')
  const [mode, setMode] = useState('')
  const [loading, setLoading] = useState(false)
  const router = useRouter()
  const {user} = useUser()

  useEffect(() => {
    if (!user) {
      return
    }
    const score = localStorage.getItem('score')
    setIngredients(localStorage.getItem('ingredients'))
    setScore(score)
    setImage(localStorage.getItem('image'))
    setMode(localStorage.getItem('mode'))
    // convert to number
    fetch('/api/scores', {
      method: 'POST',
      body: JSON.stringify({
        userId: user.sid,
        increase: Number(score),
      }),
    })
  }, [user])

  // If ingredients list is empty, but not undefined
  if (ingredients && ingredients.length === 0) {
    return <Error />
  }

  if (loading) {
    return <Loading />
  }

  return (
    <Stack
      direction="column"
      width="100%"
      height="100vh"
      backgroundColor="White"
      justifyContent="center"
      alignItems="center"
      spacing={3}
      paddingTop="20%"
      overflow="hidden"
      paddingX="10%"
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
        Results
      </Typography>

      <Image
        src={image} // Dynamic source, ensure it's a valid path or URL
        alt="Result" // Always provide an alt attribute for accessibility
        width={450} // Width of the image in pixels
        height={300} // Height of the image in pixels
        layout="fixed" // This will keep the dimensions you provided
      />

      <Typography
        width="100%"
        align="center"
        sx={{
          fontFamily: 'Helvetica',
          fontSize: '24px',
          color: 'black',
          fontWeight: '700',
        }}
      >
        {ingredients}
      </Typography>

      <Typography
        sx={{
          fontFamily: 'Helvetica',
          fontWeight: '700',
          fontSize: '24px',
          color: 'rgba(26, 28, 28, 1)',
        }}
      >
        {score ? score.slice(0, 5) : 0}%
      </Typography>
      <Box width="100%">
        <LinearProgress variant="determinate" value={score} color="success" />
      </Box>

      {mode === 'upload' && (
        <Button
          onClick={() => {
            setLoading(true)
            fetch('/api/post', {
              method: 'POST',
              body: JSON.stringify({
                userId: user.sid,
                image: image,
              }),
            }).then(() => {
              router.push('/home')
            })
          }}
          sx={{width: '331px', height: '60px', color: 'rgba(63, 170, 114, 1)'}}
        >
          Post to social media
        </Button>
      )}
    </Stack>
  )
}
