'use client'

import {useState, useEffect} from 'react'
import {Box, Stack} from '@mui/material'
import Item from '@mui/material/ListItem'
import PostBlock from '../components/PostBlock'
import {useUser} from '@auth0/nextjs-auth0/client'

export default function Home() {
  const {user} = useUser()
  const [posts, setPosts] = useState([])

  useEffect(() => {
    console.log('user', user)
    if (!user) return
    const fetchData = async () => {
      await fetch('/api/user', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({userId: user.sid}),
      })

      const data = await fetch('/api/post?userId=' + user.sid)
      const posts = await data.json()
      setPosts(posts)
    }

    fetchData()
  }, [user])

  const icon = () => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
      >
        <path
          d="M16 3.33331C17.5681 3.33283 19.0951 3.83503 20.3569 4.76621C21.6186 5.69738 22.5486 7.00848 23.0104 8.50708C23.4722 10.0057 23.4414 11.6128 22.9227 13.0927C22.4039 14.5725 21.4244 15.8471 20.128 16.7293C22.3782 17.5546 24.3299 19.0346 25.7319 20.9785C27.1339 22.9225 27.9219 25.2416 27.9947 27.6373C28.0015 27.7703 27.9816 27.9033 27.9364 28.0285C27.8911 28.1537 27.8212 28.2686 27.7309 28.3665C27.6406 28.4643 27.5317 28.5432 27.4105 28.5984C27.2894 28.6536 27.1584 28.684 27.0253 28.6879C26.8922 28.6918 26.7597 28.6691 26.6355 28.6211C26.5113 28.5731 26.3979 28.5008 26.302 28.4084C26.2062 28.316 26.1297 28.2054 26.0772 28.0831C26.0246 27.9607 25.997 27.8291 25.996 27.696C25.9166 25.0979 24.8287 22.6329 22.9629 20.8232C21.0971 19.0135 18.5999 18.0015 16.0007 18.0015C13.4014 18.0015 10.9043 19.0135 9.03844 20.8232C7.17261 22.6329 6.08473 25.0979 6.00533 27.696C5.99738 27.9612 5.88439 28.2124 5.69123 28.3943C5.49806 28.5762 5.24055 28.6739 4.97533 28.666C4.71012 28.658 4.45892 28.545 4.27701 28.3519C4.0951 28.1587 3.99738 27.9012 4.00533 27.636C4.07833 25.2405 4.86653 22.9217 6.26848 20.978C7.67044 19.0343 9.622 17.5546 11.872 16.7293C10.5756 15.8471 9.59611 14.5725 9.07734 13.0927C8.55856 11.6128 8.52782 10.0057 8.98961 8.50708C9.45141 7.00848 10.3814 5.69738 11.6431 4.76621C12.9049 3.83503 14.4319 3.33283 16 3.33331ZM10.6667 10.6666C10.6667 12.0811 11.2286 13.4377 12.2288 14.4379C13.229 15.4381 14.5855 16 16 16C17.4145 16 18.771 15.4381 19.7712 14.4379C20.7714 13.4377 21.3333 12.0811 21.3333 10.6666C21.3333 9.25216 20.7714 7.8956 19.7712 6.89541C18.771 5.89522 17.4145 5.33331 16 5.33331C14.5855 5.33331 13.229 5.89522 12.2288 6.89541C11.2286 7.8956 10.6667 9.25216 10.6667 10.6666Z"
          fill="#3A4320"
        />
      </svg>
    )
  }

  return (
    <Stack direction="column">
      <Item sx={{marginTop: '22px', marginLeft: '5%'}}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="22"
          height="22"
          viewBox="0 0 22 22"
          fill="none"
        >
          <g clipPath="url(#clip0_49_254)">
            <path
              d="M6.46868 2.83788C6.60976 2.71905 6.7847 2.64772 6.96864 2.63402C7.15258 2.62031 7.33616 2.66494 7.49329 2.76156C10.525 4.62743 12.1865 6.98806 13.0725 9.58642C13.2918 10.2294 13.4629 10.8847 13.5953 11.5479C14.498 10.0303 15.9402 8.82674 18.1122 7.95828C18.2653 7.89712 18.4326 7.88037 18.5949 7.90995C18.7571 7.93953 18.9077 8.01424 19.0294 8.12551C19.1511 8.23678 19.239 8.38011 19.283 8.53905C19.327 8.69799 19.3252 8.86611 19.278 9.02412L19.1192 9.55396C17.9262 13.5261 17.5604 14.7428 17.5604 17.5447C17.5604 17.7773 17.468 18.0005 17.3035 18.165C17.139 18.3295 16.9158 18.4219 16.6832 18.4219C16.4505 18.4219 16.2274 18.3295 16.0629 18.165C15.8984 18.0005 15.8059 17.7773 15.8059 17.5447C15.8059 14.8647 16.1393 13.4217 17.0077 10.49C16.0235 11.1426 15.3752 11.9006 14.9401 12.7401C14.269 14.0331 14.0515 15.6191 14.0515 17.5447C14.0515 17.7773 13.9591 18.0005 13.7945 18.165C13.63 18.3295 13.4069 18.4219 13.1742 18.4219C12.9416 18.4219 12.7185 18.3295 12.5539 18.165C12.3894 18.0005 12.297 17.7773 12.297 17.5447C12.297 14.92 12.183 12.4155 11.4119 10.1522C10.8943 8.6355 10.0767 7.21263 8.7644 5.93977C9.65654 9.32588 9.66531 12.5927 9.66531 17.321V17.5447C9.66531 17.7773 9.57289 18.0005 9.40838 18.165C9.24387 18.3295 9.02074 18.4219 8.78808 18.4219C8.55543 18.4219 8.3323 18.3295 8.16778 18.165C8.00327 18.0005 7.91085 17.7773 7.91085 17.5447C7.91085 15.5358 7.90208 13.7103 7.40469 12.1672C7.11871 11.2786 6.66781 10.483 5.9283 9.82152C6.73536 12.5874 7.03362 14.6349 7.03362 17.5447C7.03362 17.7773 6.94119 18.0005 6.77668 18.165C6.61217 18.3295 6.38904 18.4219 6.15639 18.4219C5.92373 18.4219 5.7006 18.3295 5.53609 18.165C5.37158 18.0005 5.27915 17.7773 5.27915 17.5447C5.27915 14.155 4.8651 12.0576 3.56943 8.17232C3.5167 8.01366 3.51041 7.84323 3.5513 7.68111C3.59219 7.51899 3.67857 7.37193 3.80024 7.25726C3.92192 7.14259 4.07384 7.06508 4.23809 7.03386C4.40235 7.00264 4.57211 7.01901 4.72737 7.08105C5.95111 7.56967 6.88098 8.22233 7.58276 8.99341C7.34792 7.22339 6.88987 5.49022 6.21955 3.83529C6.15086 3.66397 6.13796 3.47534 6.18269 3.29626C6.22742 3.11718 6.3275 2.95678 6.46868 2.83788Z"
              fill="#F0C571"
            />
          </g>
          <defs>
            <clipPath id="clip0_49_254">
              <rect
                width="21.0536"
                height="21.0536"
                fill="white"
                transform="translate(0.892944)"
              />
            </clipPath>
          </defs>
        </svg>
      </Item>
      <Item sx={{marginTop: '-22px', marginLeft: '5%'}}>
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
      <Stack direction="column">
        <Item
          sx={{
            fontFamily: 'Helvetica',
            fontSize: '20px',
            fontWeight: '400',
            color: ' rgba(26, 28, 28, 1)',
            marginTop: '10%',
            marginLeft: '5%',
          }}
        >
          Welcome home,
        </Item>
        <Item
          sx={{
            fontFamily: 'Helvetica',
            fontSize: '32px',
            fontWeight: '700',
            color: ' rgba(26, 28, 28, 1)',
            marginLeft: '5%',
          }}
        >
          {user ? user.name : ''}
        </Item>
        <Item
          sx={{
            position: 'relative',
            top: '-95px', // Adjust this value to move the icon up
            right: '40px',
            justifyContent: 'flex-end',
          }}
        >
          {' '}
          {icon()}
        </Item>
        <Item>
          <img
            src="/cart.png"
            style={{
              position: 'absolute',
              marginTop: '10%',
              width: '221px',
              height: '166px',
              zIndex: '1',
              right: '5px',
            }}
            alt="Cart"
          />
        </Item>
        <Item
          sx={{
            fontFamily: 'Helvetica',
            fontSize: '32px',
            fontWeight: '700',
            color: 'black',
            marginTop: '18%',
            marginLeft: '5%',
          }}
        >
          Time to Feast
        </Item>

        {posts.map((post, index) => (
          <PostBlock
            key={index}
            imageUrl={post.imageUrl}
            caption={post.caption}
          />
        ))}
      </Stack>
      <Item sx={{zIndex: '-1', marginTop: '-50%'}}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="390"
          height="1134"
          viewBox="0 0 390 1134"
          fill="none"
        >
          <path
            d="M349.262 31.592C342.321 46.3476 346.87 10.5718 352.447 5.1154C353.777 4.53499 355.043 4.02561 356.203 3.59427C354.757 3.50347 353.509 4.07611 352.447 5.1154C340.937 10.1351 324.547 20.4684 329.408 31.592C325.804 26.6735 319.207 14.9826 321.661 7.56696C316.98 14.6295 307.812 31.3272 308.586 41.6183C306.596 36.8259 302.711 26.5222 303.098 23.6468C301.288 26.8883 298.124 34.0187 298.984 38.1496C296.154 28.4048 291.55 8.38355 294.059 0C290.401 7.08316 283.139 23.0925 282.927 31.2338C280.023 28.6562 275.547 23.3317 274.529 16.8365C272.538 22.8901 268.912 36.3214 270.332 41.6183C268.126 40.2941 263.714 36.8889 263.714 33.8621C262.208 34.4297 259.227 37.1916 259.356 43.6992C259.517 51.8337 252.9 21.9442 257.419 10.9721C254.029 14.3142 247.25 23.5711 247.25 33.8621C245.367 29.2589 242.02 17.5553 243.699 7.56696C240.309 10.5307 233.627 20.5065 234.014 36.6998C231.97 35.1864 227.881 31.0245 227.881 26.4844C226.536 30.8354 224.104 41.2021 225.137 47.861C220.617 44.8973 212.934 35.0729 218.357 19.4849C215.883 24.7818 211.03 37.5321 211.417 46.1585C208.888 42.3119 204.056 32.4244 204.96 23.6468C202.216 26.3582 196.341 33.2189 194.792 38.9698C192.101 38.4023 187.528 33.7108 190.756 19.4849C188.012 19.9894 182.04 26.0303 180.103 46.1585C178.381 36.1322 175.261 15.0583 176.552 10.9721C173.378 17.5301 167.093 33.2568 167.352 43.6992C165.522 40.6724 162.09 33.9757 162.993 31.4029C162.133 33.673 160.669 38.8942 161.702 41.6183C159.173 40.6094 154.665 36.3592 156.86 27.4302C154.546 28.5022 150.016 32.8406 150.403 41.6183C148.574 37.0781 145.045 26.5979 145.561 20.9983C143.786 28.1239 140.235 43.4722 140.235 47.861V48.9961C139.158 39.6004 137.168 19.4849 137.813 14.1881C134.531 19.9894 127.967 33.3325 127.967 40.2941C126.299 39.9157 122.899 37.6078 122.641 31.4029C121.349 33.0424 118.864 37.797 119.251 43.6992C118.014 40.9246 115.377 33.5973 114.732 26.4844C113.171 30.9615 110.051 41.1643 110.051 46.1585C110.051 52.4012 106.984 35.5647 105.047 20.9983C102.195 28.25 96.7826 44.0019 97.9448 48.9961C96.3845 45.7171 93.5867 37.6078 94.878 31.4029C93.5867 33.2946 91.0041 37.9861 91.0041 41.6183C89.8204 39.0329 87.679 32.5758 88.5829 27.4302C86.8074 31.0876 83.2563 39.4617 83.2563 43.6992V44.8342C81.1042 42.6903 77.4455 35.4512 80.0281 23.6468C77.3379 27.9347 72.1834 38.1753 73.0873 44.8342C70.5048 42.9425 66.1144 37.6078 69.2135 31.4029C67.3842 34.1144 63.9838 40.3697 65.0168 43.6992C61.8962 42.5011 56.5911 36.8133 60.3358 23.6468C56.5695 28.1239 49.7151 38.4023 52.4268 43.6992C55.1385 48.9961 52.911 45.9062 51.4583 43.6992C50.7051 39.6635 48.6819 31.7812 46.6158 32.5379C46.8848 36.2584 46.9708 43.6992 45.163 43.6992C42.9032 43.6992 39.8365 31.9704 40.3207 26.4844C39.137 29.1328 36.8987 35.6026 37.4152 40.2941C38.0609 46.1585 30.7974 25.7277 32.5729 20.9983C30.7697 23.1504 27.1812 29.2063 27.11 36.3486C27.1093 36.4204 27.1088 36.4923 27.1088 36.5644C26.6502 35.2173 25.7636 32.1767 25.8859 30.7911C24.714 31.9457 22.4925 34.7169 22.9817 36.5644C21.3919 34.7169 20.2302 28.6567 20.2302 28.6567C20.2302 28.6567 18.9434 34.2686 19.0491 38.695C18.2256 36.0331 14.9344 31.7949 13.0459 29.6364C13.6573 30.7141 12.7911 36.2436 12.2816 38.8737C9.83585 37.7374 9.32629 30.7713 9.37726 27.4302C8.04291 25.2654 7.02872 33.3084 6.58759 38.7548C6.31924 36.0036 4.06226 32.1121 2.59271 29.9872C2.54382 29.8023 2.4631 29.6807 2.34583 29.6364C2.42511 29.747 2.5076 29.8642 2.59271 29.9872C3.0535 31.7305 0.684784 39.0968 -0.558502 40.2941C-1.93369 41.6183 0.342987 1134 0.342987 1134L190.756 1134L390 1134V27.4292C386.026 22.6798 383.367 54.2692 383.367 49.6506C383.367 46.1755 377.81 32.5408 374.536 25.0004C374.379 24.5107 374.183 24.0574 373.944 23.6468C374.13 24.0708 374.328 24.5235 374.536 25.0004C376.332 30.6249 372.91 41.052 370.456 46.7615C370.306 46.5733 370.144 46.3725 369.969 46.1585C366.178 41.5173 365.536 26.4423 365.689 19.4849C363.366 19.4849 361.562 32.4749 360.951 38.9699C358.016 36.8511 357.588 21.7294 357.741 14.4333C354.317 12.5108 350.662 25.0714 349.262 31.592Z"
            fill="#F0C571"
          />
        </svg>
      </Item>
      <Stack
        sx={{
          position: 'relative',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Box>ListItem</Box>
      </Stack>
    </Stack>
  )
}
