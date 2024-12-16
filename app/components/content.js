'use client'
import { motion } from 'framer-motion'

const Content = ({ children }) => {
  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 2, type: 'spring' } },
  }
  return (
    <motion.div
      initial='hidden'
      animate='visible'
      variants={variants}
      className='relative flex container mx-auto mt-12 lg:mt-32 rounded-[40px] shadow-[14px_12px_0px_rgba(204,255,0,1)]'>
      <div className='bg-neutral-800 rounded-[40px] px-6 py-8 md:px-20 md:py-10 lg:py-16 flex flex-col justify-center md:items-start gap-12'>
        {children}
      </div>
    </motion.div>
  )
}

export default Content

// Corriger emplacements fonts => voir erreur
// Construire contact et Responsive
// polish et vérifications
