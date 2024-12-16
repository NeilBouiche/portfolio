import Image from 'next/image'
import face from '@/app/assets/icon.png'

const projects = [
  {
    name: 'Kasa',
    img: face,
    alt: 'preview of Kasa React app',
    desc: 'A react app that showcases a listing of proprety for holliday renting',
  },
  {
    name: 'SportSee',
    img: face,
    alt: 'preview of SportSee React app',
    desc: 'Created with React is used to visualize health and activity data for a given user via a graph API in a nicely design dashboard.',
  },
  {
    name: 'Fisheye',
    img: face,
    alt: 'preview of Fisheye JS app',
    desc: 'An app that allow users to showcase their creation on their profile for a chance to get hired by customers',
  },
  {
    name: 'Ohmyfood',
    img: face,
    alt: 'preview of Ohmyfood Next.js app',
    desc: 'Restaurant menu website created with Next.js',
  },
]

const Project = () => {
  return (
    <div className='flex flex-col gap-6'>
      {projects.map((project) => (
        <div className='flex gap-6' key={project.src}>
          <Image
            src={project.img}
            alt={project.alt}
            width={100}
            height={72}
            className='filter-[#CCFF00]'
          />
          <div className='flex flex-col'>
            <h2 className='uppercase font-vlack text-[#CCFF00]'>
              {project.name}
            </h2>
            <p>{project.desc}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Project
