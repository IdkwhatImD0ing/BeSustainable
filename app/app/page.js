import RootLayout from './layout'
import styles from './home.module.css'
import PersonIcon from '@mui/icons-material/Person'
import Tree from './components/Tree'

export default function Home() {
  return (
    <div className={styles.titleformat}>
      <h1 className={styles.welcome}> Welcome home, </h1>
      <h1 className={styles.username}> User</h1>
      <PersonIcon className={styles.icon} />
    </div>
  )
}
