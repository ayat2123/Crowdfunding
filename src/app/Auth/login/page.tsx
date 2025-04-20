import React from 'react'
import Image from 'next/image'

export default function Login() {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="text-center bg-white p-6 rounded-lg shadow-lg max-w-sm w-full mx-4">
        <h1 className="text-2xl font-bold mb-3 text-center" style={{ color: 'rgba(100, 79, 193, 1)' }}>FUND FOR FOUND</h1>
        <p className="text-base text-gray-600 mb-3 max-w-xs mx-auto text-center">create an account or sign in to start<br />creating</p>
        <div style={{ width: '80px', height: '80px', margin: '0 auto' }}>
          <Image 
            src="/vector.png"
            alt="Vector illustration"
            width={80}
            height={80}
            style={{ width: '100%', height: '100%' }}
            className="mx-auto"
          />
        </div>
        
        <div className="mt-6">
          <button 
            className="w-full flex items-center justify-center gap-2 bg-white border border-gray-300 rounded-lg px-4 py-1.5 text-sm font-medium text-gray-800 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
          >
            Continue with Google
          </button>
          <div className="flex items-center justify-start px-8 mt-2">
            <Image src="/google.png" alt="Google" width={14} height={14} />
          </div>

          <div className="relative my-4">
            <div className="w-full h-px bg-gray-300"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="px-2 bg-white text-gray-500 text-xs">or</span>
            </div>
          </div>

          <form className="space-y-3">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 text-left">
                Mobile number or email Address
              </label>
              <input
                type="text"
                id="email"
                placeholder='e.g 09374703079 or example@gmail .com'
                className="mt-1 block w-full px-3 py-1.5 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-sm"
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 text-left">
                Password
              </label>
              <input
                type="password"
                id="password"
                className="mt-1 block w-full px-3 py-1.5 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-sm"
              />
              <div className="text-left mt-1">
                <a href="#" className="text-xs text-indigo-600 hover:text-indigo-500">
                  Forget your password?
                </a>
              </div>
            </div>

            <button
              type="submit"
              className="w-full flex justify-center py-1.5 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Continue
            </button>

            <div className="text-center text-xs text-gray-600">
              <span>You don't have one? </span>
              <br />
              <a href="#" className="text-indigo-600 hover:text-indigo-500 font-medium">
                Create an account
              </a>
            </div>
          </form>

          <div className="mt-4 text-center">
            <span className="text-xs text-gray-500">
              This site is protected by reCAPTCHA and the Google Privacy and Policy and Terms of Service apply
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
