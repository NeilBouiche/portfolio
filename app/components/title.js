'use client'
import { usePathname } from 'next/navigation'
import { motion, useAnimation } from 'framer-motion'
import { useEffect, useState } from 'react'

const Title = () => {
  const path = usePathname()
  const title = path.match(/^\/(\w+)/)?.[1] || 'ABOUTME'

  const controls = useAnimation()
  const [displayedTitle, setDisplayedTitle] = useState('ABOUTME')

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setDisplayedTitle(title)
    }, 400)

    controls
      .start({
        opacity: 0,
        x: -20,
        transition: { duration: 0.4 },
      })
      .then(() => {
        controls.start({
          opacity: 1,
          x: 0,
          transition: { duration: 0.4, type: 'spring' },
        })
      })

    return () => clearTimeout(timeoutId)
  }, [path, controls, title])

  return (
    <div className='title-container'>
      <motion.h1 animate={controls} initial={{ opacity: 0, x: -20 }}>
        {displayedTitle}
      </motion.h1>
    </div>
  )
}

export default Title
