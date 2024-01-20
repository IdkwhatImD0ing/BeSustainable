import './globals.css'
// import BottomNav from './components/BottomNavbar.js'
import {UserProvider} from '@auth0/nextjs-auth0/client'

export const metadata = {
  title: 'BeSustainable',
  description: 'BeReal but for food',
}

export default function RootLayout({children}) {
  return (
    <>
      <UserProvider>
        {/* <BottomNav /> */}
        <main>{children}</main>
      </UserProvider>
    </>
  )
}
