import NavBar from './components/navBar'
import './globals.css'

export const metadata = {
  title: 'Neil Bouiche',
  description: 'Neil Bouiche web developer portfolio',
}

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body>
        <NavBar />
        {children}
      </body>
    </html>
  )
}
