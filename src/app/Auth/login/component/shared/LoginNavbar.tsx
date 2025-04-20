import Link from 'next/link'
import React from 'react'

export default function LoginNavbar() {
  const links=[
    {
      text:"Home",
      href:"/"
    },
    {
      text:"Brand and organization",
      href:"/Brand and organization"
    },
    {
      text:"About us",
      href:"/About us"
    },
    {
      text:"Help and support",
      href:"/Help and support"
    }
  ]
  return (
    <nav className="ltr">
      <ul className='flex items-center justify-center mt-3'>
        {links.map((link)=>(
          <li className='p-1.5' key={link.text}>
            <Link href={link.href} className="no-underline hover:text-indigo-600 text-sm">{link.text}</Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
