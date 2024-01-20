import {getSession} from '@auth0/nextjs-auth0'
import PersonIcon from '@mui/icons-material/Person'

import styles from './home.module.css'

// import Tree from './components/Tree'

export default async function Home() {
  const {user} = await getSession()
  console.log(user)
  return (<div className = {styles.titleformat}>
          <h1 className = {styles.welcome}>Welcome home,
          </h1>
      <h1 className={styles.username}> {user?.name}</h1>
          <PersonIcon className = { styles.icon } />
    </div>)
}
