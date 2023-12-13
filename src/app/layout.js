import { Roboto } from 'next/font/google'
import './globals.css'
import Navbar, { NavbarComponent } from '@/shared/NavbarComponent'

const roboto = Roboto({ subsets: ['latin'],weight:['500','700'] })

export const metadata = {
  title: 'Food-app',
  description: 'This is home page',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <main className=' max-w-5xl mx-auto'>
          <NavbarComponent />
          {children}
        </main>
      </body>
    </html>
  )
}
