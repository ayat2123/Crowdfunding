'use client';

import PublicNavbar from "@/components/PublicNavbar";
import Image from "next/image";
import Link from 'next/link';
import { useState } from 'react';
import { toast, Toaster } from "react-hot-toast";
import * as yup from 'yup';

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
}

interface FormErrors {
  firstName?: string;
  lastName?: string;
  email?: string;
}

const signupSchema = yup.object().shape({
  firstName: yup.string()
    .required('First name is required')
    .min(2, 'First name must be at least 2 characters')
    .matches(/^[a-zA-Z]+$/, 'First name must contain only letters'),
  lastName: yup.string()
    .required('Last name is required')
    .min(2, 'Last name must be at least 2 characters')
    .matches(/^[a-zA-Z]+$/, 'Last name must contain only letters'),
  email: yup.string()
    .required('Email address is required')
    .email('Please enter a valid email address'),
})

export default function Signup() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: ''
  });

  const [errors, setErrors] = useState({
    firstName: '',
    lastName: '',
    email: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    setErrors(prev => ({
      ...prev,
      [name]: ''
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newErrors = {
      firstName: '',
      lastName: '',
      email: ''
    };

    if (!formData.firstName) {
      newErrors.firstName = 'نام الزامی است';
    } else if (formData.firstName.length < 2) {
      newErrors.firstName = 'نام باید حداقل 2 کاراکتر باشد';
    }

    if (!formData.lastName) {
      newErrors.lastName = 'نام خانوادگی الزامی است';
    } else if (formData.lastName.length < 2) {
      newErrors.lastName = 'نام خانوادگی باید حداقل 2 کاراکتر باشد';
    }

    if (!formData.email) {
      newErrors.email = 'ایمیل الزامی است';
    } else if (!formData.email.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)) {
      newErrors.email = 'لطفا ایمیل معتبر وارد کنید';
    }

    setErrors(newErrors);

    if (!newErrors.firstName && !newErrors.lastName && !newErrors.email) {
      toast.success('فرم با موفقیت ارسال شد!');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center gap-2">
      <Toaster position="top-right" />
      <PublicNavbar />

      <div className="relative w-full flex justify-center items-center  ">
        <Link href="/Auth/login" className="absolute left-8 hidden md:block" >
          <Image
            src="/Vector (5).png"
            alt="Go to login"
            width={20}
            height={20}
            className="cursor-pointer"
          />
        </Link>

        <p className="text-2xl text-gray-600 mt-4 text-center">
          Create your personal account
        </p>
      </div>
      <div className="text-center bg-white p-6 rounded-lg shadow-lg max-w-sm w-full mx-4">

        <h1 className="text-2xl font-bold text-center" style={{ color: 'rgba(100, 79, 193, 1)' }}>FUND FOR FOUND</h1>
        <div style={{ width: '80px', height: '80px', margin: '0 auto' }}>
          <Image
            src="/Vector.png"
            alt="Vector illustration"
            width={80}
            height={80}
            style={{ width: '100%', height: '100%' }}
            className="mx-auto"
          />
        </div>
        <div className="mt-4">
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

          <form onSubmit={handleSubmit} className="space-y-2">
            <div>
              <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 text-left">
                First name
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className={`mt-1 block w-full px-3 py-1.5 border ${errors.firstName ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-sm`}
              />
              {errors.firstName && <p className="mt-1 text-sm text-red-500 text-right">{errors.firstName}</p>}
            </div>

            <div>
              <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 text-left">
                last name
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className={`mt-1 block w-full px-3 py-1.5 border ${errors.lastName ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-sm`}
              />
              {errors.lastName && <p className="mt-1 text-sm text-red-500 text-right">{errors.lastName}</p>}
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 text-left">
                Email address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder='example@gmail.com'
                className={`mt-1 block w-full px-3 py-1.5 border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-sm`}
              />
              {errors.email && <p className="mt-1 text-sm text-red-500 text-right">{errors.email}</p>}
            </div>

            <button
              type="submit"
              className="w-full flex justify-center py-1.5 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              submit
            </button>
          </form>

        </div>
      </div>
      <div className="mt-4 text-center">
        <span className="text-xs text-gray-500">
          This site is protected by reCAPTCHA and the Google Privacy and Policy and Terms of Service apply
        </span>
      </div>
    </div>
  );
}
