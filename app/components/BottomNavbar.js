import Link from 'next/link'
import BottomNavigation from '@mui/material/BottomNavigation'
import BottomNavigationAction from '@mui/material/BottomNavigationAction'
import HomeIcon from '@mui/icons-material/Home'
import {AccountCircle, PhotoCamera} from '@mui/icons-material'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'

const BottomNav = () => {
  return (
    <BottomNavigation
      sx={{
        position: 'fixed',
        bottom: 10,
        width: '100%',
        zIndex: '100',
      }}
      color="rgba(96, 143, 69, 0)"
    >
      <Link href="/home">
        <BottomNavigationAction
          label="Home"
          icon={<HomeIcon style={{color: 'rgba(96, 143, 69, 1)'}} />}
        />
      </Link>
      <Link href="/camera">
        <BottomNavigationAction
          label="Camera"
          icon={<PhotoCamera style={{color: 'rgba(96, 143, 69, 1)'}} />}
        />
      </Link>
      <Link href="/profile">
        <BottomNavigationAction
          label="Profile"
          icon={<AccountCircleIcon style={{color: 'rgba(96, 143, 69, 1)'}} />}
        />
      </Link>
    </BottomNavigation>
  )
}

export default BottomNav
