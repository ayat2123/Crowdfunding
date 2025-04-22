"use client"

import React, { useState, ChangeEvent, FormEvent } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import * as yup from 'yup'
import toast, { Toaster } from 'react-hot-toast'
import Link from 'next/link'

interface FormData {
  email: string;
  password: string;
}

interface FormErrors {
  email?: string;
  password?: string;
}

const loginSchema = yup.object().shape({
  email: yup.string()
    .required('Email or mobile number is required')
    .test('email-or-phone', 'Invalid email or mobile number', value => {
      if (!value) return false
      const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
      const phoneRegex = /^09[0-9]{9}$/
      return emailRegex.test(value) || phoneRegex.test(value)
    }),
  password: yup.string()
    .required('Password is required')
    .min(8, 'Password must be at least 8 characters')
})

export default function Login() {
  const router = useRouter()
  const [formData, setFormData] = useState<FormData>({
    email: '',
    password: ''
  })
  const [errors, setErrors] = useState<FormErrors>({})

  const handleChange = async (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))

    try {
      await loginSchema.validateAt(name, { [name]: value })
      setErrors(prev => ({
        ...prev,
        [name]: undefined
      }))
    } catch (err) {
      if (err instanceof yup.ValidationError) {
        setErrors(prev => ({
          ...prev,
          [name]: err.message
        }))
      }
    }
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    try {
      await loginSchema.validate(formData, { abortEarly: false })
      toast.success('Login successful')
      console.log('Form is valid', formData)
    } catch (err) {
      if (err instanceof yup.ValidationError) {
        const validationErrors: FormErrors = {}
        err.inner.forEach(error => {
          if (error.path) {
            validationErrors[error.path as keyof FormErrors] = error.message
          }
        })
        setErrors(validationErrors)
        toast.error('Please enter valid information')
      }
    }
  }

  return (
    <div className="flex items-center justify-center min-h-screen h-full">
      <Toaster position="top-center" />
      <div className="text-center bg-white p-6 rounded-lg shadow-lg max-w-sm w-full mx-4 my-4">
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
            onClick={() => toast.success('Google login successful')}
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

          <form onSubmit={handleSubmit} className="space-y-3">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 text-left">
                Mobile number or email Address
              </label>
              <input
                type="text"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder='e.g 09374703079 or example@gmail .com'
                className={`mt-1 block w-full px-3 py-1.5 border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-sm`}
              />
              {errors.email && <p className="mt-1 text-sm text-red-500 text-right">{errors.email}</p>}
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 text-left">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className={`mt-1 block w-full px-3 py-1.5 border ${errors.password ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-sm`}
              />
              {errors.password && <p className="mt-1 text-sm text-red-500 text-right">{errors.password}</p>}
              <div className="text-sm text-left">
                <Link href="/Auth/forget-password" className="font-medium text-indigo-600 hover:text-indigo-500">
                  Forget your password?
                </Link>
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
              <Link href="/Auth/signup" className="text-indigo-600 hover:text-indigo-500 font-medium">
                Create an account
              </Link>
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
