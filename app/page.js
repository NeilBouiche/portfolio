import Image from 'next/image'
import Content from './components/content'

import face from '@/app/assets/icon.png'

export default function Home() {
  return (
    <div className='sm:mx-[5rem] md:mx-[10rem] lg:mx-[15rem] mx-5'>
      <Content>
        <Image
          loading='lazy'
          src={face}
          alt='illustration of myself'
          className=' self-center w-20 md:w-40 md:mr-8'
        />
        <div className='text-sm md:text-lg text-center '>
          Dynamic and passionate web developer, proficient in the latest
          technologies, including JavaScript with React for front-end and
          Next.js for back-end development. Recently graduated, I am actively
          seeking an opportunity to apply my technical and creative skills in an
          innovative environment.
        </div>
      </Content>
    </div>
  )
}
