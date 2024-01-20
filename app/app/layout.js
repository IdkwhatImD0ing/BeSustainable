import {Inter} from 'next/font/google'
import './globals.css'
import BottomNav from './components/BottomNavbar.js'
import {UserProvider} from '@auth0/nextjs-auth0/client'

const inter = Inter({subsets: ['latin']})

export const metadata = {
  title: 'BeSustainable',
  description: 'BeReal but for food',
}

export default function RootLayout({children}) {
  return (
    <html lang="en">
      <body>
        <UserProvider>
          <BottomNav />
          {children}
        </UserProvider>
      </body>
    </html>
  )
}
