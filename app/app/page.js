import RootLayout from './layout'
import styles from './page.module.css'

export default function Home() {
  return (
    <main>
      <div className={styles.container}>
        {/* Other content of your page */}
        <RootLayout>
          <div className={styles.titleformat}>
            <h1 className={styles.welcome}> Welcome home, </h1>
            <h1 className={styles.username}> User</h1>
          </div>
        </RootLayout>
      </div>
    </main>
  )
}
