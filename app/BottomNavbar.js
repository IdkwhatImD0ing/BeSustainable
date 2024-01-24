'use client'
import BottomNavigation from '@mui/material/BottomNavigation'
import BottomNavigationAction from '@mui/material/BottomNavigationAction'
import HomeIcon from '@mui/icons-material/Home'
import {PhotoCamera} from '@mui/icons-material'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import {useRouter} from 'next/navigation'

const BottomNav = () => {
  const router = useRouter()
  return (
    <BottomNavigation
      sx={{
        position: 'fixed',
        bottom: 10,
        width: '100%',
      }}
      showLabels // if you want to show the labels
    >
      <BottomNavigationAction
        label="Home"
        icon={<HomeIcon style={{color: 'rgba(96, 143, 69, 1)'}} />}
        onClick={() => {
          router.push('/home')
        }}
      />

      <BottomNavigationAction
        label="Camera"
        icon={<PhotoCamera style={{color: 'rgba(96, 143, 69, 1)'}} />}
        onClick={() => {
          router.push('/camera')
        }}
      />

      <BottomNavigationAction
        label="Profile"
        icon={<AccountCircleIcon style={{color: 'rgba(96, 143, 69, 1)'}} />}
        onClick={() => {
          router.push('/profile')
        }}
      />
    </BottomNavigation>
  )
}

export default BottomNav
