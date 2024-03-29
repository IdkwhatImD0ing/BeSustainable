'use client'

import {useState, useEffect} from 'react'
import {Avatar, Stack, Typography} from '@mui/material'
import Box from '@mui/material/Box'
import Image from 'next/image'

import {useUser} from '@auth0/nextjs-auth0/client'
import LineChartComponent from './LineChart'

export default function Profile() {
  const {user} = useUser()
  const [scores, setScores] = useState()

  useEffect(() => {
    if (!user) {
      return
    }
    fetch('/api/scores?userId=' + user.sid)
      .then((res) => res.json())
      .then((data) => {
        setScores(data)
      })
  }, [user])

  return (
    <Stack
      width="100%"
      height="100vh"
      backgroundColor="white"
      justifyContent="flex-start"
      alignItems="center"
      direction="column"
      paddingTop="15%"
      spacing={3}
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
        Profile
      </Typography>
      <Stack
        width="100%"
        direction="row"
        justifyContent="center"
        alignItems="center"
        sx={{marginTop: '16%'}}
        spacing={5}
      >
        <Avatar
          src={user ? user.picture : ''}
          sx={{width: '100px', height: '100px'}}
        />

        <Stack direction="column">
          <Typography
            variant="h5"
            sx={{
              color: 'gray',
              marginRight: '10%',
              fontFamily: 'Helvetica',
            }}
          >
            {user ? user.name : ''}
          </Typography>
          <Typography
            sx={{
              color: 'gray',
              marginRight: '10%',
              fontFamily: 'Helvetica',
            }}
          >
            #12345
          </Typography>
        </Stack>
      </Stack>
      <Typography zIndex={50} color="black">
        Way to Go Green
      </Typography>
      <Box
        zIndex={50}
        sx={{
          justifyContent: 'center',
          backgroundColor: 'white',
        }}
      >
        {scores && <LineChartComponent data={scores} />}
      </Box>
      <Box
        height="100%"
        position="fixed"
        left="0"
        top="0"
        paddingTop="40%"
        width="100%"
        overflow="hidden"
        zIndex="1"
      >
        {/* <Image
          src="/woman.png" // Relative path to your image file
          alt="Woman"
          layout="fill" // This allows the image to fill the parent container
          objectFit="contain" // This can be 'contain', 'cover', etc. depending on how you want the image to fit
          objectPosition="110px bottom" // Positions the image at the bottom and 110px from the left
          style={{
            position: 'absolute',
            zIndex: '4',
          }}
        /> */}

        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="100%"
          height="1134"
          viewBox="0 0 390 1134"
          preserveAspectRatio="none"
          fill="none"
        >
          <path
            d="M349.262 31.592C342.321 46.3476 346.87 10.5718 352.447 5.1154C353.777 4.53499 355.043 4.02561 356.203 3.59427C354.757 3.50347 353.509 4.07611 352.447 5.1154C340.937 10.1351 324.547 20.4684 329.408 31.592C325.804 26.6735 319.207 14.9826 321.661 7.56696C316.98 14.6295 307.812 31.3272 308.586 41.6183C306.596 36.8259 302.711 26.5222 303.098 23.6468C301.288 26.8883 298.124 34.0187 298.984 38.1496C296.154 28.4048 291.55 8.38355 294.059 0C290.401 7.08316 283.139 23.0925 282.927 31.2338C280.023 28.6562 275.547 23.3317 274.529 16.8365C272.538 22.8901 268.912 36.3214 270.332 41.6183C268.126 40.2941 263.714 36.8889 263.714 33.8621C262.208 34.4297 259.227 37.1916 259.356 43.6992C259.517 51.8337 252.9 21.9442 257.419 10.9721C254.029 14.3142 247.25 23.5711 247.25 33.8621C245.367 29.2589 242.02 17.5553 243.699 7.56696C240.309 10.5307 233.627 20.5065 234.014 36.6998C231.97 35.1864 227.881 31.0245 227.881 26.4844C226.536 30.8354 224.104 41.2021 225.137 47.861C220.617 44.8973 212.934 35.0729 218.357 19.4849C215.883 24.7818 211.03 37.5321 211.417 46.1585C208.888 42.3119 204.056 32.4244 204.96 23.6468C202.216 26.3582 196.341 33.2189 194.792 38.9698C192.101 38.4023 187.528 33.7108 190.756 19.4849C188.012 19.9894 182.04 26.0303 180.103 46.1585C178.381 36.1322 175.261 15.0583 176.552 10.9721C173.378 17.5301 167.093 33.2568 167.352 43.6992C165.522 40.6724 162.09 33.9757 162.993 31.4029C162.133 33.673 160.669 38.8942 161.702 41.6183C159.173 40.6094 154.665 36.3592 156.86 27.4302C154.546 28.5022 150.016 32.8406 150.403 41.6183C148.574 37.0781 145.045 26.5979 145.561 20.9983C143.786 28.1239 140.235 43.4722 140.235 47.861V48.9961C139.158 39.6004 137.168 19.4849 137.813 14.1881C134.531 19.9894 127.967 33.3325 127.967 40.2941C126.299 39.9157 122.899 37.6078 122.641 31.4029C121.349 33.0424 118.864 37.797 119.251 43.6992C118.014 40.9246 115.377 33.5973 114.732 26.4844C113.171 30.9615 110.051 41.1643 110.051 46.1585C110.051 52.4012 106.984 35.5647 105.047 20.9983C102.195 28.25 96.7826 44.0019 97.9448 48.9961C96.3845 45.7171 93.5867 37.6078 94.878 31.4029C93.5867 33.2946 91.0041 37.9861 91.0041 41.6183C89.8204 39.0329 87.679 32.5758 88.5829 27.4302C86.8074 31.0876 83.2563 39.4617 83.2563 43.6992V44.8342C81.1042 42.6903 77.4455 35.4512 80.0281 23.6468C77.3379 27.9347 72.1834 38.1753 73.0873 44.8342C70.5048 42.9425 66.1144 37.6078 69.2135 31.4029C67.3842 34.1144 63.9838 40.3697 65.0168 43.6992C61.8962 42.5011 56.5911 36.8133 60.3358 23.6468C56.5695 28.1239 49.7151 38.4023 52.4268 43.6992C55.1385 48.9961 52.911 45.9062 51.4583 43.6992C50.7051 39.6635 48.6819 31.7812 46.6158 32.5379C46.8848 36.2584 46.9708 43.6992 45.163 43.6992C42.9032 43.6992 39.8365 31.9704 40.3207 26.4844C39.137 29.1328 36.8987 35.6026 37.4152 40.2941C38.0609 46.1585 30.7974 25.7277 32.5729 20.9983C30.7697 23.1504 27.1812 29.2063 27.11 36.3486C27.1093 36.4204 27.1088 36.4923 27.1088 36.5644C26.6502 35.2173 25.7636 32.1767 25.8859 30.7911C24.714 31.9457 22.4925 34.7169 22.9817 36.5644C21.3919 34.7169 20.2302 28.6567 20.2302 28.6567C20.2302 28.6567 18.9434 34.2686 19.0491 38.695C18.2256 36.0331 14.9344 31.7949 13.0459 29.6364C13.6573 30.7141 12.7911 36.2436 12.2816 38.8737C9.83585 37.7374 9.32629 30.7713 9.37726 27.4302C8.04291 25.2654 7.02872 33.3084 6.58759 38.7548C6.31924 36.0036 4.06226 32.1121 2.59271 29.9872C2.54382 29.8023 2.4631 29.6807 2.34583 29.6364C2.42511 29.747 2.5076 29.8642 2.59271 29.9872C3.0535 31.7305 0.684784 39.0968 -0.558502 40.2941C-1.93369 41.6183 0.342987 1134 0.342987 1134L190.756 1134L390 1134V27.4292C386.026 22.6798 383.367 54.2692 383.367 49.6506C383.367 46.1755 377.81 32.5408 374.536 25.0004C374.379 24.5107 374.183 24.0574 373.944 23.6468C374.13 24.0708 374.328 24.5235 374.536 25.0004C376.332 30.6249 372.91 41.052 370.456 46.7615C370.306 46.5733 370.144 46.3725 369.969 46.1585C366.178 41.5173 365.536 26.4423 365.689 19.4849C363.366 19.4849 361.562 32.4749 360.951 38.9699C358.016 36.8511 357.588 21.7294 357.741 14.4333C354.317 12.5108 350.662 25.0714 349.262 31.592Z"
            fill="#F0C571"
          />
        </svg>
      </Box>
    </Stack>
  )
}
