import Link from 'next/link'
import BottomNavigation from '@mui/material/BottomNavigation'
import BottomNavigationAction from '@mui/material/BottomNavigationAction'
import HomeIcon from '@mui/icons-material/Home'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline'
import {PhotoCamera} from '@mui/icons-material'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import styles from './BottomNavbar.module.css'

const BottomNav = () => {
  return (
    <BottomNavigation style={{position: 'fixed', bottom: 0, width: '100%'}}>
      <nav className={styles.navbar}>
        <Link href="/">
          <BottomNavigationAction label="Home" icon={<HomeIcon />} />
        </Link>
        <Link href="/camera">
          <BottomNavigationAction label="Camera" icon={<PhotoCamera />} />
        </Link>
        <Link href="/profile">
          {' '}
          <BottomNavigationAction
            label="Profile"
            icon={<AccountCircleIcon />}
          />
        </Link>
      </nav>
    </BottomNavigation>
  )
}

export default BottomNav
