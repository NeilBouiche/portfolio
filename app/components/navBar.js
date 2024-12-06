import Link from 'next/link'
import NavItem from './navItems'
import Image from 'next/image'
import icon from '@/app/assets/icon.png'

const NavBar = () => {
  return (
    <nav className='text-white container sticky mx-auto my-8 py-3 px-6 flex items-center justify-between rounded-full bg-white/20 shadow-lg ring-1 ring-black/5 backdrop-blur lg:px-10'>
      <div className='font-bold text-xl sm:text-2xl'>
        <Link href='/'>
          <Image
            src={icon}
            alt='Icon showing myself as an illustration'
            width={75}
            height={67}
            className='hidden sm:block'
          />
        </Link>
      </div>
      <div className='flex-grow sm:flex-grow-0 flex justify-center'>
        <NavItem />
      </div>
    </nav>
  )
}

export default NavBar
