'use client'

import {Stack, Button} from '@mui/material'
import Item from '@mui/material/ListItem'
import {LinearProgress} from '@mui/material'
import {useState, useEffect} from 'react'
import {useRouter} from 'next/navigation'
import {useUser} from '@auth0/nextjs-auth0/client'
import Error from './error'

export default function Results() {
  const [ingredients, setIngredients] = useState()
  const [score, setScore] = useState(0)
  const [image, setImage] = useState('')
  const [mode, setMode] = useState('')
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

  return (
    <Stack direction="column">
      <Item
        sx={{
          position: 'relative',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: '10%',
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="22"
          height="22"
          viewBox="0 0 22 22"
          fill="none"
        >
          <g clip-path="url(#clip0_85_218)">
            <path
              d="M6.46859 2.83788C6.60967 2.71905 6.78461 2.64772 6.96855 2.63402C7.15249 2.62031 7.33607 2.66494 7.4932 2.76156C10.5249 4.62743 12.1864 6.98806 13.0724 9.58642C13.2917 10.2294 13.4628 10.8847 13.5952 11.5479C14.4979 10.0303 15.9401 8.82674 18.1121 7.95828C18.2652 7.89712 18.4325 7.88037 18.5948 7.90995C18.757 7.93953 18.9076 8.01424 19.0293 8.12551C19.151 8.23678 19.2389 8.38011 19.2829 8.53905C19.3269 8.69799 19.3251 8.86611 19.2779 9.02412L19.1192 9.55396C17.9261 13.5261 17.5603 14.7428 17.5603 17.5447C17.5603 17.7773 17.4679 18.0005 17.3034 18.165C17.1389 18.3295 16.9157 18.4219 16.6831 18.4219C16.4504 18.4219 16.2273 18.3295 16.0628 18.165C15.8983 18.0005 15.8058 17.7773 15.8058 17.5447C15.8058 14.8647 16.1392 13.4217 17.0077 10.49C16.0234 11.1426 15.3751 11.9006 14.94 12.7401C14.2689 14.0331 14.0514 15.6191 14.0514 17.5447C14.0514 17.7773 13.959 18.0005 13.7944 18.165C13.6299 18.3295 13.4068 18.4219 13.1742 18.4219C12.9415 18.4219 12.7184 18.3295 12.5539 18.165C12.3893 18.0005 12.2969 17.7773 12.2969 17.5447C12.2969 14.92 12.1829 12.4155 11.4118 10.1522C10.8942 8.6355 10.0766 7.21263 8.7643 5.93977C9.65645 9.32588 9.66522 12.5927 9.66522 17.321V17.5447C9.66522 17.7773 9.5728 18.0005 9.40829 18.165C9.24377 18.3295 9.02065 18.4219 8.78799 18.4219C8.55533 18.4219 8.33221 18.3295 8.16769 18.165C8.00318 18.0005 7.91076 17.7773 7.91076 17.5447C7.91076 15.5358 7.90199 13.7103 7.40459 12.1672C7.11862 11.2786 6.66772 10.483 5.92821 9.82152C6.73527 12.5874 7.03353 14.6349 7.03353 17.5447C7.03353 17.7773 6.9411 18.0005 6.77659 18.165C6.61208 18.3295 6.38895 18.4219 6.15629 18.4219C5.92364 18.4219 5.70051 18.3295 5.536 18.165C5.37148 18.0005 5.27906 17.7773 5.27906 17.5447C5.27906 14.155 4.86501 12.0576 3.56934 8.17232C3.51661 8.01366 3.51032 7.84323 3.55121 7.68111C3.5921 7.51899 3.67847 7.37193 3.80015 7.25726C3.92183 7.14259 4.07375 7.06508 4.238 7.03386C4.40226 7.00264 4.57202 7.01901 4.72728 7.08105C5.95102 7.56967 6.88089 8.22233 7.58267 8.99341C7.34783 7.22339 6.88978 5.49022 6.21945 3.83529C6.15077 3.66396 6.13787 3.47534 6.1826 3.29626C6.22733 3.11718 6.32741 2.95678 6.46859 2.83788Z"
              fill="#F0C571"
            />
          </g>
          <defs>
            <clipPath id="clip0_85_218">
              <rect
                width="21.0536"
                height="21.0536"
                fill="white"
                transform="translate(0.892914)"
              />
            </clipPath>
          </defs>
        </svg>
      </Item>
      <Item
        sx={{
          position: 'relative',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: '-27px',
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="27"
          height="15"
          viewBox="0 0 27 15"
          fill="none"
        >
          <path
            d="M24.7532 0.839294H2.27937C1.07154 0.839294 0.130449 1.90899 0.405805 3.08502C2.61321 12.5127 9.99282 14.7613 13.6497 14.6573C21.7047 14.3366 25.3584 7.73513 26.5778 3.04212C26.8786 1.8842 25.9496 0.839294 24.7532 0.839294Z"
            fill="#3FAA72"
          />
        </svg>
      </Item>
      <Item
        sx={{
          width: '331px',
          height: '311px',
          position: 'relative',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: '10%',
          color: 'rgba(26, 28, 28, 0.5)',
        }}
      >
        <img src={image} />
      </Item>
      <Item
        sx={{
          position: 'relative',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: '10%',
          fontFamily: 'Helvetica',
          fontSize: '24px',
          color: 'black',
          fontWeight: '700',
        }}
      >
        {ingredients}
      </Item>

      <Item
        sx={{
          fontFamily: 'Helvetica',
          fontWeight: '700',
          fontSize: '24px',
          color: 'rgba(26, 28, 28, 1)',
        }}
      >
        {score ? score.slice(0, 5) : 0}%
      </Item>
      <LinearProgress></LinearProgress>
      <Stack direction="row">
        <Item
          sx={{
            fontFamily: 'Helvetica',
            fontSize: '64px',
            fontWeight: '700',
            color: 'rgba(63, 170, 114, 1)',
          }}
        >
          X
        </Item>
        <Item
          sx={{
            fontFamily: 'Helvetica',
            fontSize: '64px',
            fontWeight: '700',
            color: 'rgba(63, 170, 114, 1)',
          }}
        >
          %
        </Item>
        <Item
          sx={{
            fontFamily: 'Helvetica',
            fontSize: '24px',
            fontWeight: '400',
            color: 'rgba(63, 170, 114, 1)',
          }}
        >
          Sustainable or Not
        </Item>
      </Stack>
      {mode === 'upload' && (
        <Button
          onClick={() => {
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
          sx={{width: '331px', height: '60px', color: 'rgba(185, 220, 199, 1)'}}
        >
          Post to social media
        </Button>
      )}
    </Stack>
  )
}
