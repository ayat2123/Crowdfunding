"use client"

import React, { useState, ChangeEvent, FormEvent } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import * as yup from 'yup'
import toast, { Toaster } from 'react-hot-toast'

interface FormData {
  email: string;
}

interface FormErrors {
  email?: string;
}

const forgetPasswordSchema = yup.object().shape({
  email: yup.string()
    .required('Email or mobile number is required')
    .test('email-or-phone', 'Invalid email or mobile number', value => {
      if (!value) return false
      const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
      const phoneRegex = /^09[0-9]{9}$/
      return emailRegex.test(value) || phoneRegex.test(value)
    })
})

export default function ForgetPassword() {
  const [formData, setFormData] = useState<FormData>({
    email: ''
  })
  const [errors, setErrors] = useState<FormErrors>({})

  const handleChange = async (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))

    try {
      await forgetPasswordSchema.validateAt(name, { [name]: value })
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
      await forgetPasswordSchema.validate(formData, { abortEarly: false })
      toast.success('Password reset link sent successfully')
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
    <div className="min-h-screen bg-gray-50">
      <div className="flex min-h-[calc(100vh-64px)] flex-col items-center justify-center p-4">
        <div className="w-full max-w-md space-y-8 rounded-lg bg-white p-8 shadow-lg">
          <Toaster position="top-center" />
          <div className="text-center">
            <div style={{ width: '80px', height: '80px', margin: '0 auto' }}>
              <Image 
                src="/Vector (2).png"
                alt="Vector illustration"
                width={80}
                height={80}
                style={{ width: '100%', height: '100%' }}
                className="mx-auto mb-8"
              />
            </div>
            <h1 className="text-3xl font-bold tracking-tight text-gray-900 mt-4">
              Trouble with logging in?
            </h1>
            <p className="mt-2 text-sm text-gray-600">
              Enter your email address or mobile number and we'll send you a link to reset your password.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="mt-8 space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 text-left">
                Mobile number or Email address
              </label>
              <div className="mt-1">
                <input
                  id="email"
                  name="email"
                  type="text"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="example@gmail.com"
                  className={`block w-full rounded-md border ${errors.email ? 'border-red-500' : 'border-gray-300'} px-3 py-2 text-gray-900 placeholder-gray-500 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm`}
                />
                {errors.email && <p className="mt-1 text-sm text-red-500 text-right">{errors.email}</p>}
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                Contune
              </button>
            </div>
          </form>

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
              <Link href="/Auth/signup" className="text-sm text-indigo-600 hover:text-indigo-500">
                Create an account
              </Link>
              <Link href="/Auth/login" className="text-sm text-gray-900 hover:text-indigo-500">
                back to login
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 