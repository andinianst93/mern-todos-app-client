import React from 'react'
import { Link } from 'react-router-dom'
const Error = () => {
  return (
    <div className='mx-auto max-w-[1120px] px-4 sm:px-6 xl:max-w-5xl xl:px-0 text-center flex items-center justify-center py-8'>
      <div>
        <h1 className='capitalize m-0 mb-[1.38rem] text-gray-100 font-medium text-3xl leading-[1.3]'>
          Ohh! page not found
        </h1>
        <p className='text-gray-100 text-lg mb-2 font-medium'>
          We can not seem to find the page you're looking for
        </p>
        <Link to='/' className='text-gray-100 underline font-medium text-lg'>
          Back to home
        </Link>
      </div>
    </div>
  )
}

export default Error
