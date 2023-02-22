import React from 'react'

const Footer = () => {
  return (
    <footer>
      <div className='flex flex-col items-center pt-6'>
        <div className='text-base text-gray-100 text-center'>
          &copy; {new Date().getFullYear()} Andini Anissa. All rights reserved.
        </div>
        <div className='mb-8'>
          <p className='text-base text-gray-100 text-center'>
            Built with React and Node
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
