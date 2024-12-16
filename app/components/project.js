import Image from 'next/image'
import Link from 'next/link'
import kasa from '@/app/assets/kasa.png'
import sportsee from '@/app/assets/sportsee.png'
import fisheye from '@/app/assets/fisheye.png'

const projects = [
  {
    name: 'Fisheye',
    img: fisheye,
    alt: 'preview of Fisheye JS app',
    desc: 'An app that allow users to showcase their creation on their profile for a chance to get hired by customers',
    href: 'https://fisheye-orcin.vercel.app',
  },
  {
    name: 'SportSee',
    img: sportsee,
    alt: 'preview of SportSee React app',
    desc: 'Created with React is used to visualize health and activity data for a given user via a graph API in a well design dashboard.',
    href: 'https://sport-see-flame.vercel.app',
  },
  {
    name: 'Kasa',
    img: kasa,
    alt: 'preview of Kasa React app',
    desc: 'A react app that showcases listing of proprety for holliday renting',
    href: 'https://kasa-lyart-iota.vercel.app',
  },
  // {
  //   name: 'Ohmyfood',
  //   img: face,
  //   alt: 'preview of Ohmyfood Next.js app',
  //   desc: 'Restaurant menu website created with Next.js',
  // },
]

const Project = () => {
  return (
    <div className='flex flex-col gap-6'>
      {projects.map((project) => (
        <Link href={project.href} key={project.href} className='w-full'>
          <div className={'flex flex-col md:flex-row gap-6 items-center'}>
            <div className='relative w-28 flex-shrink-0'>
              <Image
                src={project.img}
                alt={project.alt}
                width={100}
                height={100}
                className=' bg-[#CCFF00] w-24 h-auto md:w-28 md:h-auto'
              />{' '}
              <div className='absolute inset-0 bg-[#CCFF00] mix-blend-multiply opacity-70'></div>
            </div>

            <div className='flex flex-col text-center md:text-left'>
              <h2 className='uppercase font-vlack text-[#CCFF00] text-lg md:text-2xl'>
                {project.name}
              </h2>
              <p className='text-sm md:text-base text-gray-300'>
                {project.desc}
              </p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  )
}

export default Project
