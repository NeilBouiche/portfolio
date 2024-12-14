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
          className=' self-center w-32 md:w-40 mb-6 md:mb-0 md:mr-8'
        />
        <div className='text-lg md:text-xl text-center '>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
          laoreet diam congue fringilla facilisis. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. Proin commodo libero a arcu ultricies, eu
          mollis nulla tincidunt. In mollis accumsan nulla, vel congue dolor
          porta sed.
        </div>
      </Content>
    </div>
  )
}
