import Image from 'next/image'
import Content from './components/content'

import face from '@/app/assets/icon.png'
import Contact from './components/contact'

export default function Home() {
  return (
    <div className='sm:mx-[5rem] md:mx-[10rem] lg:mx-[15rem] mx-5'>
      <Content>
        {/* <Image
          loading='lazy'
          src={face}
          alt='illustration of myself'
          className=' self-center w-20 md:w-40 md:mr-8'
        />
        <div className='text-sm md:text-lg text-center '>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
          laoreet diam congue fringilla facilisis. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. Proin commodo libero a arcu ultricies, eu
          mollis nulla tincidunt. In mollis accumsan nulla, vel congue dolor
          porta sed.
        </div> */}
        <Contact />
      </Content>
    </div>
  )
}
