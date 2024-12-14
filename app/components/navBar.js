'use client'
import Link from 'next/link'
import NavItem from './navItems'
import Image from 'next/image'
import icon from '@/app/assets/icon.png'
import { motion } from 'framer-motion'

const NavBar = () => {
  const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 2, type: 'spring' } },
  }

  return (
    <motion.nav
      initial='hidden'
      animate='visible'
      variants={variants}
      className='text-white container sticky mx-auto my-8 py-3 px-6 flex items-center md:justify-between justify-center rounded-full bg-white/20 shadow-lg ring-1 ring-black/5 backdrop-blur lg:px-10'>
      <div className='text-xl sm:text-2xl hidden md:block'>
        <Link href='/'>
          <Image
            src={icon}
            alt='illustation of myself'
            width={75}
            height={67}
          />
        </Link>
      </div>
      <div className='flex'>
        <NavItem />
      </div>
    </motion.nav>
  )
}

export default NavBar
