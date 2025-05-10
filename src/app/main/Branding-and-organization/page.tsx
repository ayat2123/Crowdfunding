import PublicFooter from '@/components/PublicFooter'
import PublicNavbar from '@/components/PublicNavbar'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function BrandingPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <PublicNavbar />
      
      <main className="flex-1 container mx-auto px-4 py-12">
        {/* Hero Section */}
        <section className="max-w-4xl mx-auto text-center mb-16 space-y-6">
          <h1 className="text-2xl md:text-2xl font-bold  leading-tight bg-gradient-to-b from-[#270F94] to-[#270F94] bg-clip-text text-transparent">
            Create your profile and take the first step towards new opportunities
          </h1>
          <p className="text-base md:text-base text-gray-600 leading-relaxed max-w-3xl mx-auto">
            By creating your account, you will gain access to a thriving community
            where brands and individuals are committed to offering you ongoing support.
            This support network will empower you with the resources, guidance and
            connections you need to succeed, ensuring that you're never alone on your journey.
          </p>
        </section>

        {/* Brand Section */}
        <section className="max-w-sm mx-auto bg-white rounded-2xl shadow-xl p-8 md:p-12 space-y-8">
          <div className="flex justify-center">
            <Image
              src="/Vector (6).png"
              alt="Brand Separator"
              width={80}
              height={80}
            />
          </div>
          
          <div className="text-center space-y-4">
            <h2 className="text-xl md:text-2xl font-bold text-[#644FC1] ">
              Brand and Organization
            </h2>
            <p className="text-xs text-gray-900 max-w-2xl mx-auto">
              If your brand is established and you're looking for continuous support,
              get started now and join our community of successful organizations.
            </p>
          </div>

            <Link href='/main/Branding-and-organization/Basic-Info'>
          <div className="flex justify-center pt-6">
            <button className="bg-indigo-600 hover:bg-indigo-700 w-full text-white text-lg font-semibold px-16 py-3 rounded transition-colors duration-200 cursor-pointer shadow-lg hover:shadow-xl">
              start
            </button>
          </div>
            </Link>
        </section>
      </main>

      <PublicFooter />
    </div>
  )
}
