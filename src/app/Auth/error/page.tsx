import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Error() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="flex min-h-[calc(100vh-64px)] flex-col items-center justify-center p-4">
        <div className="w-full max-w-md space-y-8 rounded-lg bg-white p-8 shadow-lg">
          <div className="text-center">
            <div style={{ width: '80px', height: '80px', margin: '0 auto' }}>
              <Image 
                src="/Vector (3).png"
                alt="Vector illustration"
                width={80}
                height={80}
                style={{ width: '100%', height: '100%' }}
                className="mx-auto"
              />
            </div>
            <h1 className="text-3xl font-bold tracking-tight text-gray-900 mt-4">
              Trouble with logging in?
            </h1>
            <p className="mt-2 text-sm text-gray-600">
              Enter your email address or phone number and we will send you a link to get back into your account.
            </p>
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 text-left">
              Mobile number or email address
            </label>
            <input
              id="email"
              type="text"
              placeholder="example@gmail.com"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-sm"
            />
          </div>

          <div className="text-center space-y-2">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">or</span>
              </div>
            </div>
            <div className="flex flex-col items-center gap-2">
            <Link href="/Auth/login" className="text-sm text-indigo-600 hover:text-indigo-500">
                Create an account
              </Link>
              <Link href="/Auth/login" className="text-sm text-indigo-600 hover:text-indigo-500">
                back to login
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 