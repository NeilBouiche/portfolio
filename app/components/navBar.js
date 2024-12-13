'use client'
import Link from 'next/link'
import NavItem from './navItems'
import Image from 'next/image'
import icon from '@/app/assets/icon.png'
import { motion } from 'framer-motion'

const NavBar = () => {
  const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1 } },
  }

  return (
    <motion.nav
      initial='hidden'
      animate='visible'
      variants={variants}
      className='text-white container sticky mx-auto my-8 py-3 px-6 flex items-center justify-between rounded-full bg-white/20 shadow-lg ring-1 ring-black/5 backdrop-blur lg:px-10'>
      <div className='text-xl sm:text-2xl'>
        <Link href='/'>
          <Image
            src={icon}
            alt='illustation of myself'
            width={75}
            height={67}
            className='hidden sm:block'
          />
        </Link>
      </div>
      <div className='flex-grow sm:flex-grow-0 flex justify-center'>
        <NavItem />
      </div>
    </motion.nav>
  )
}

export default NavBar
