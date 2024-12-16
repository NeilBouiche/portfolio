// RootLayout.js
import MovingTextBackground from './components/backGround'
import NavBar from './components/navBar'
import Title from './components/title'
import { Space_Mono, Climate_Crisis } from 'next/font/google'
import './globals.css'

export const metadata = {
  title: 'Neil Bouiche',
  description: 'Neil Bouiche web developer portfolio',
}

const spaceMono = Space_Mono({
  weight: ['400', '700'],
  subsets: ['latin'],
})

const climateCrisis = Climate_Crisis({
  weight: '400',
  subsets: ['latin'],
})

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={`${climateCrisis.className}, ${spaceMono.className} `}>
        <MovingTextBackground />
        <div className='sm:mx-[5rem] md:mx-[10rem] lg:mx-[15rem] mx-5'>
          <NavBar />
          <Title />
        </div>
        {children}
      </body>
    </html>
  )
}
