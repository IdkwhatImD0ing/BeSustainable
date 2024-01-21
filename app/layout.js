import './globals.css'
import {UserProvider} from '@auth0/nextjs-auth0/client'
import {Inter} from 'next/font/google'

import BottomNav from './components/BottomNavbar.js'
const inter = Inter({subsets: ['latin']})

export const metadata = {
  title: 'BeSustainable',
  description: 'BeReal but for food',
}

export default function RootLayout({children}) {
  return (
    <UserProvider>
      <html lang="en">
        <body>
          <BottomNav />
          {children}
        </body>
      </html>
    </UserProvider>
  )
}
