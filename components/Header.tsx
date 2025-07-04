'use client'

import { ClerkLoaded, SignedIn, SignInButton, UserButton, useUser } from '@clerk/nextjs'
import Link from 'next/link'
import React from 'react'
import Form from 'next/form'
import { PackageIcon, TrolleyIcon } from '@sanity/icons'
import { useBasketStore } from '@/app/(store)/store'




export default function Header() {
  const { user } = useUser()
  const itemCount = useBasketStore((state)=> state.items.reduce((total, item)=> total + item.quantity, 0 )
  )



  return (
    <header className='flex flex-wrap justify-between items-center px-4 py-2'>
      <div className='flex w-full flex-wrap justify-between items-center'>
        <Link
          className='text-2xl font-bold text-blue-500 hover:opacity-50 cursor-pointer mx-auto sm:mx-0'
          href='/'
        >

         VISCERAL

        </Link>
        <Form
          action='/search'
          className='w-full sm:w-auto sm:flex-1 sm:mx-4 mt-2 sm:mt-0'

        >
          <input
            type="text"
            name='query'
            placeholder='Search products'
            className='
            bg-gray-100 
            text-gray-800
            px-4
            py-2
            rounded
            focus:outline-none
            focus:ring-2
            focus:ring-blue-500
            focus:ring-opacity-50
            border
            w-full
            max-w-4xl
            '
          />


        </Form>
      
        <div className='flex items-center space-x-4 mt-4 sm:mt-0 flx-1 sm:flex-none'>
          <Link href='/basket'
            className='relative flex justify-center sm:justify-start sm:flex-none items-center space-x-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
          >
            <TrolleyIcon className='w-6 h-6' />
          
            <span
              className='
              absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 items-center justify-center text-center text-xs'
            >
              {itemCount}
            </span>
            <span> My Basket</span>
          </Link>
          {/* area do usuario*/}
          <ClerkLoaded>
            <SignedIn>

              <Link href='/orders'
                className='flex-1 relative flex justify-center sm:justify-start sm:flex-none items-center space-x-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded cursor-pointer'>
                <PackageIcon className='w-6 h-6' />
                <span>My orders</span>

              </Link>
           
            </SignedIn>

            {user ? (
              <div className='flex items-center space-x-2 '>
                <UserButton />
                <div className='hidden sm:block text-xs'>
                  <p className='text-gray-400'>Welcome Back</p>
                  <p className='font-bold'>{user.fullName}</p>
                </div>

              </div>
            ) : (
              <SignInButton mode='modal' />
            )

            }
          </ClerkLoaded>
        </div >
      </div>

    </header>
  )
}
