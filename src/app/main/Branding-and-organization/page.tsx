import PublicNavbar from '@/components/PublicNavbar'
import Image from 'next/image'
import React from 'react'

export default function page() {
  return (
    <div>
      <PublicNavbar />
      <div className='flex flex-col '>
        <h1>Create your profile and take the first step towards new opportunities</h1>
        <p>By creating your account, you will gain access to a thriving community
          where brands and individuals are committed to offering you ongoing support.
          this support network will empover you with the resources, guidance and
          connections you need to succeed,ensuring that you re never alone on your journey</p>
        <div>
          <Image
            src="/Vector (4).png"
            alt="Separator"
            width={8}
            height={8}
            className="w-2 h-2 hidden md:block"
          />
        </div>
      </div>


    </div>
  )
}
