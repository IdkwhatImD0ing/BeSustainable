import './globals.css'
import {UserProvider} from '@auth0/nextjs-auth0/client'
import BottomNav from './BottomNavbar'
import Logout from './logout'

export const viewport = {
  themeColor: '#000000',
  initialScale: '1.0',
  maximumScale: '1.0',
  userScalable: 'no',
  colorScheme: 'light dark',
}

export const metadata = {
  title: 'BeSustainable',
  applicationName: 'BeSustainable',
  description: 'BeReal but for food',
  manifest: '/manifest.json',
  icons: [
    {
      rel: 'apple-touch-icon',
      url: '/icons/apple-touch-icon.png',
    },
    {
      rel: 'icon',
      url: '/icons/favicon-32x32.png',
    },
    {
      rel: 'icon',
      url: '/icons/favicon-16x16.png',
    },
  ],
  appleWebApp: {
    capable: 'yes',
    title: 'BeSustainable',
    statusBarStyle: 'default',
  },
}

export default function RootLayout({children}) {
  return (
    <UserProvider>
      <html lang="en">
        <body>
          <Logout />
          <BottomNav />
          {children}
        </body>
      </html>
    </UserProvider>
  )
}
