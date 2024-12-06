'use client'
import { motion } from 'framer-motion'

const MovingTextBackground = ({ word = 'ABOUT' }) => {
  const textArray = new Array(30).fill(word)

  return (
    <div className='background-container'>
      {Array.from({ length: 40 }).map((_, rowIndex) => (
        <motion.div
          className='text-row'
          key={rowIndex}
          initial={{ x: '-100%' }}
          animate={{ x: '100%' }}
          transition={{
            duration: 120,
            repeat: Infinity,
          }}>
          {textArray.map((item, index) => (
            <span className='word' key={index}>
              {item}
            </span>
          ))}
        </motion.div>
      ))}

      <style jsx>{`
        .background-container {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          overflow: hidden;
          background-color: #1a1a1a; /* Dark gray */
        }
        .text-row {
          display: flex;
          white-space: nowrap;
          position: absolute;
          top: calc(20% * var(--row-index)); /* Stack rows evenly */
          width: 100%;
        }
        .word {
          font-size: 2rem;
          color: #d4ff00; /* Neon yellow */
          margin-right: 2rem;
          font-family: monospace;
          opacity: 0.1; /* Slight transparency */
        }
      `}</style>
    </div>
  )
}

export default MovingTextBackground
