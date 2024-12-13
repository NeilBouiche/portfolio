import face from '@/app/assets/icon.png'
import Image from 'next/image'

const Content = () => {
  return (
    <div className='fixed flex flex-col text-2xl text-center text-white rounded-none max-w-[985px] shadow-[14px_12px_0px_rgba(204,255,0,1)]'>
      <div className='flex flex-col px-20 pt-16 pb-40 w-full bg-neutral-800 rounded-[40px] max-md:px-5 max-md:pb-24 max-md:max-w-full'>
        <Image
          loading='lazy'
          src={face}
          alt='illustration of myself'
          className='object-contain self-center max-w-full aspect-[1.21] w-[134px]'
        />
        <div className='mt-16 mb-0 max-md:mt-10 max-md:mb-2.5 max-md:max-w-full'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
          laoreet diam congue fringilla facilisis. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. Proin commodo libero a arcu ultricies, eu
          mollis nulla tincidunt. In mollis accumsan nulla, vel congue dolor
          porta sed.
        </div>
      </div>
    </div>
  )
}

export default Content
