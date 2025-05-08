'use client';

import Link from 'next/link';
import Image from 'next/image';
import LanguageToggle from './LanguageToggle';

export default function PublicFooter() {
  return (
    <footer className="bg-white">
      <div className="container mx-auto px-4 py-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  px-16">

          <div>
            <h4 className="text-sm  mb-4 text-gray-800">َABOUT</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-xs text-gray-600 hover:text-indigo-600">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/explore" className="text-xs text-gray-600 hover:text-indigo-600">
                  Contact us
                </Link>
              </li>
            </ul>
          </div>


          <div>
            <h4 className="text-sm mb-4 text-gray-800">RESOURES</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/help" className="text-xs text-gray-600 hover:text-indigo-600">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-xs text-gray-600 hover:text-indigo-600">
                  how 3F works?
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-xs text-gray-600 hover:text-indigo-600">
                  Help and Support
                </Link>
              </li>
            </ul>
          </div>


          <div>
            <h4 className="text-sm mb-4 text-gray-800">CONTRIBUTING</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/help" className="text-xs text-gray-600 hover:text-indigo-600">
                  Brand annd Organization
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-xs text-gray-600 hover:text-indigo-600">
                  Pricing
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex items-center justify-between border-t border-gray-800 px-8">
          <div><LanguageToggle /></div>
          <div className="flex md:flex-row justify-between items-center gap-4">
            <div className="flex gap-6">
              <Link href="/privacy" className="text-sm text-gray-600 hover:text-indigo-600">
                Trust and safety
              </Link>
              <Link href="/privacy" className="text-sm text-gray-600 hover:text-indigo-600">
                Terms of use
              </Link>
              <Link href="/terms" className="text-sm text-gray-600 hover:text-indigo-600">
                Privacy Policy
              </Link>
            </div>
          </div>
          <div className='flex items-center  gap-8'>
            <Image
              src="/Vector (7).png"
              alt="twiter"
              width={25}
              height={25}
            />
            <Image
              src="/Vector (8).png"
              alt="github"
              width={25}
              height={25}
            />
            <Image
              src="/Vector (9).png"
              alt="discord"
              width={25}
              height={25}
            />
            <Image
              src="/Vector (10).png"
              alt="linkdin"
              width={10}
              height={10}
            />
          </div>
        </div>
      </div>
    </footer>
  );
}