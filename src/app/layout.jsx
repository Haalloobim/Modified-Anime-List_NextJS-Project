import { Inter } from 'next/font/google'
import '@/app/globals.css'
import Navbar from '@/app/component/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Modified Anime List',
  description: 'Modified Anime List created by KokGueBitici with NextJS',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen bg-slate-100`} suppressHydrationWarning={true}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
