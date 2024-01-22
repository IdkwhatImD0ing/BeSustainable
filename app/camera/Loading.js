import {Stack, Box} from '@mui/material'
import Item from '@mui/material/ListItem'
import Image from 'next/image'

const Loading = () => {
  return (
    <Stack
      direction="column"
      justifyContent="flex-start"
      alignItems="center"
      width="100%"
      height="100vh"
      overflow="hidden"
      sx={{
        position: 'relative',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Box
        sx={{
          position: 'relative',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <svg
          width="27"
          height="32"
          viewBox="0 0 27 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_49_253)">
            <path
              d="M8.46868 2.83788C8.60976 2.71905 8.7847 2.64772 8.96864 2.63402C9.15258 2.62031 9.33616 2.66494 9.49329 2.76156C12.525 4.62743 14.1865 6.98806 15.0725 9.58642C15.2918 10.2294 15.4629 10.8847 15.5953 11.5479C16.498 10.0303 17.9402 8.82674 20.1122 7.95828C20.2653 7.89712 20.4326 7.88037 20.5949 7.90995C20.7571 7.93953 20.9077 8.01424 21.0294 8.12551C21.1511 8.23678 21.239 8.38011 21.283 8.53905C21.327 8.69799 21.3252 8.86611 21.278 9.02412L21.1192 9.55396C19.9262 13.5261 19.5604 14.7428 19.5604 17.5447C19.5604 17.7773 19.468 18.0005 19.3035 18.165C19.139 18.3295 18.9158 18.4219 18.6832 18.4219C18.4505 18.4219 18.2274 18.3295 18.0629 18.165C17.8984 18.0005 17.8059 17.7773 17.8059 17.5447C17.8059 14.8647 18.1393 13.4217 19.0077 10.49C18.0235 11.1426 17.3752 11.9006 16.9401 12.7401C16.269 14.0331 16.0515 15.6191 16.0515 17.5447C16.0515 17.7773 15.9591 18.0005 15.7945 18.165C15.63 18.3295 15.4069 18.4219 15.1742 18.4219C14.9416 18.4219 14.7185 18.3295 14.5539 18.165C14.3894 18.0005 14.297 17.7773 14.297 17.5447C14.297 14.92 14.183 12.4155 13.4119 10.1522C12.8943 8.6355 12.0767 7.21263 10.7644 5.93977C11.6565 9.32588 11.6653 12.5927 11.6653 17.321V17.5447C11.6653 17.7773 11.5729 18.0005 11.4084 18.165C11.2439 18.3295 11.0207 18.4219 10.7881 18.4219C10.5554 18.4219 10.3323 18.3295 10.1678 18.165C10.0033 18.0005 9.91085 17.7773 9.91085 17.5447C9.91085 15.5358 9.90208 13.7103 9.40469 12.1672C9.11871 11.2786 8.66781 10.483 7.9283 9.82152C8.73536 12.5874 9.03362 14.6349 9.03362 17.5447C9.03362 17.7773 8.94119 18.0005 8.77668 18.165C8.61217 18.3295 8.38904 18.4219 8.15639 18.4219C7.92373 18.4219 7.7006 18.3295 7.53609 18.165C7.37158 18.0005 7.27915 17.7773 7.27915 17.5447C7.27915 14.155 6.8651 12.0576 5.56943 8.17232C5.5167 8.01366 5.51041 7.84323 5.5513 7.68111C5.59219 7.51899 5.67857 7.37193 5.80024 7.25726C5.92192 7.14259 6.07384 7.06508 6.23809 7.03386C6.40235 7.00264 6.57211 7.01901 6.72737 7.08105C7.95111 7.56967 8.88098 8.22233 9.58276 8.99341C9.34792 7.22339 8.88987 5.49022 8.21955 3.83529C8.15086 3.66396 8.13796 3.47534 8.18269 3.29626C8.22742 3.11718 8.3275 2.95678 8.46868 2.83788Z"
              fill="#F0C571"
            />
          </g>
          <path
            d="M24.7532 17.8393H2.27937C1.07154 17.8393 0.130449 18.909 0.405805 20.085C2.61321 29.5127 9.99282 31.7613 13.6497 31.6573C21.7047 31.3366 25.3584 24.7351 26.5778 20.0421C26.8786 18.8842 25.9496 17.8393 24.7532 17.8393Z"
            fill="#3FAA72"
          />
          <path
            d="M1.56323 20.7829C2.08929 22.7696 4.58253 27.3207 7.46161 28.3957"
            stroke="#2C8A59"
            stroke-width="0.5"
            stroke-linecap="round"
          />
          <path
            d="M2.53589 20.3445C2.808 21.5727 4.07523 24.393 5.51931 25.0715"
            stroke="#2C8A59"
            stroke-width="0.5"
            stroke-linecap="round"
          />
          <defs>
            <clipPath id="clip0_49_253">
              <rect
                width="21.0536"
                height="21.0536"
                fill="white"
                transform="translate(2.89294)"
              />
            </clipPath>
          </defs>
        </svg>
      </Box>
      <Item
        sx={{
          marginLeft: '10%',
          fontFamily: 'Helvetica',
          fontSize: '24px',
          fontWeight: '400',
          color: 'rgba(63, 170, 114, 1)',
          marginTop: '20%',
        }}
      >
        Hello lovely human,
      </Item>
      <Item
        sx={{
          marginLeft: '10%',
          fontFamily: 'Helvetica',
          fontSize: '32px',
          fontWeight: '700',
          color: 'rgba(63, 170, 114, 1)',
        }}
      >
        Every bite counts.
      </Item>
      <Item
        sx={{
          marginLeft: '10%',
          fontFamily: 'Helvetica',
          fontSize: '32px',
          fontWeight: '700',
          color: 'rgba(63, 170, 114, 1)',
          marginTop: '-14px',
        }}
      >
        So let&apos;s make it
      </Item>
      <Item
        sx={{
          marginLeft: '10%',
          fontFamily: 'Helvetica',
          fontSize: '32px',
          fontWeight: '700',
          color: 'rgba(63, 170, 114, 1)',
          marginTop: '-14px',
        }}
      >
        sustainable.
      </Item>

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
