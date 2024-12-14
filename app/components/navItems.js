'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function NavItems() {
  const pathname = usePathname()
  const navLinks = [
    { href: '/', label: 'about' },
    { href: '/projects', label: 'projects' },
    { href: '/contact', label: 'contact' },
  ]

  return (
    <ul className='flex gap-16 text-center'>
      {navLinks.map((link) => (
        <li key={link.href}>
          <Link
            href={link.href}
            className={`text-sm sm:text-xl font-medium nav-items ${
              pathname === link.href ? 'text-[#CCFF00]' : 'text-white'
            } hover:text-neon-green`}>
            {link.label}
          </Link>
        </li>
      ))}
    </ul>
  )
}
