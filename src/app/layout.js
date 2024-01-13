import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/component/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Modified Anime List',
  description: 'Modified Anime List created by KokGueBitici with NextJS',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
