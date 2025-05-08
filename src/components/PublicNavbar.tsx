'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'

export default function PublicNavbar() {
  const [isOpen, setIsOpen] = useState(false)

  const links = [
    { text: 'Home', href: '/home' },
    { text: 'Explore', href: '/explore' },
    { text: 'About Us', href: '/about-us' },
    { text: 'Help & Support', href: '/help-and-support' },
  ]

  return (
    <header className="w-full bg-white">
      <div className="container mx-auto px-4 flex items-center justify-bettwen w-full relative">
        {/* لوگو و دکمه همبرگری */}
        <div className="flex items-center justify-between w-full md:w-auto gap-4">
          <div className="flex items-center justify-center">
            <Image
              src="/vector.png"
              alt="Site Logo"
              width={60}
              height={60}
              className="w-16 h-16"
              priority
            />
          </div>

          {/* دکمه همبرگری فقط در موبایل */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600 focus:outline-none">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* منو لینک‌ها و سایر بخش‌ها */}
        <div
          className={`w-full z-50 flex-col md:flex-row md:flex items-center justify-center gap-6 shadow-md
          ${isOpen ? 'flex absolute top-full left-0 bg-white' : 'hidden'} md:flex md:shadow-none md:mx-auto`}
        >
          {/* لینک‌های منو */}
          <nav className="flex justify-center w-full mx-auto">
            <ul className="w-full flex flex-col md:flex-row items-center justify-center gap-6 px-16">
              {links.map((link, index) => (
                <li className="flex items-center gap-2" key={link.text}>
                  <Link
                    href={link.href}
                    className="no-underline hover:text-indigo-600 text-sm font-medium"
                  >
                    {link.text}
                  </Link>
                  {index !== links.length - 1 && (
                    <Image
                      src="/Vector (4).png"
                      alt="Separator"
                      width={8}
                      height={8}
                      className="w-2 h-2 hidden md:block"
                    />
                  )}
                </li>
              ))}
            </ul>
          </nav>

          {/* سرچ */}
          <div className="mt-3 md:mt-0 relative">
            <input
              type="text"
              placeholder="Search brand,category or tag,..."
              className="hidden md:block border border-gray-300 rounded-full py-1 pl-10 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-400 w-full md:w-auto"
            />
            <div className="absolute left-3 top-1/2 transform -translate-y-1/2 hidden md:block">
              <Image
                src="/Vector (12).png"
                alt="Search"
                width={16}
                height={16}
                className="w-4 h-4"
              />
            </div>
          </div>

          {/* دکمه ورود */}
          <div className="mt-3 md:mt-0">
            <Link href="/Auth/login">
              <button className="bg-indigo-500 hover:bg-indigo-600 text-white text-sm font-semibold py-2 px-4 md:px-8 rounded-full transition w-full md:w-auto">
                Login
              </button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}
