import MovingTextBackground from './components/backGround'
import Content from './components/content'
import NavBar from './components/navBar'
import Title from './components/title'

import './globals.css'

export const metadata = {
  title: 'Neil Bouiche',
  description: 'Neil Bouiche web developer portfolio',
}

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <head>
        <link
          href='https://fonts.googleapis.com/css2?family=Space+Mono:ital,wght@0,400;0,700;1,400;1,700&display=swap'
          rel='stylesheet'
        />
        <link
          href='https://fonts.googleapis.com/css2?family=Climate+Crisis&family=Rubik+Broken+Fax&display=swap'
          rel='stylesheet'
        />
      </head>
      <body>
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
