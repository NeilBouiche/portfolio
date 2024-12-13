'use client'
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { usePathname } from 'next/navigation'

const MovingTextBackground = () => {
  const path = usePathname()
  const word = path.match(/^\/(\w+)/)?.[1] || 'ABOUT'

  const rowHeight = 58
  const textArray = new Array(20).fill(word.toUpperCase())
  const [diagonal, setDiagonal] = useState(0)

  useEffect(() => {
    const calculateDiagonal = () => {
      const { innerWidth, innerHeight } = window
      setDiagonal(Math.sqrt(innerWidth ** 2 + innerHeight ** 2))
    }

    calculateDiagonal()
    window.addEventListener('resize', calculateDiagonal)

    return () => {
      window.removeEventListener('resize', calculateDiagonal)
    }
  }, [])

  const numberOfRows = Math.ceil(diagonal / rowHeight)

  return (
    <div className='absolute top-0 left-0 w-full h-full overflow-hidden bg-[#232323] z-0'>
      <div
        className='absolute'
        style={{
          width: diagonal,
          height: diagonal,
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%) rotate(-45deg)',
        }}>
        {Array.from({ length: numberOfRows }).map((_, rowIndex) => (
          <motion.div
            key={rowIndex}
            className='flex absolute w-full whitespace-nowrap'
            style={{ top: `${(rowIndex * 100) / numberOfRows}%` }}
            initial={{ x: '-100%' }}
            animate={{ x: '0%' }}
            transition={{
              duration: 90,
              ease: 'linear',
              repeat: Infinity,
            }}>
            {textArray.map((item, index) => (
              <span
                key={index}
                className='text-2xl font-mono text-white opacity-10 mr-8'>
                {item}
              </span>
            ))}
            {textArray.map((item, index) => (
              <span
                key={`duplicate-${index}`}
                className='text-2xl font-mono text-white opacity-10 mr-8'>
                {item}
              </span>
            ))}
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default MovingTextBackground
