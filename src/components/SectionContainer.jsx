import React from 'react'

const SectionContainer = ({ children }) => {
  return (
    <div className='mx-auto max-w-lg px-4 sm:px-6 xl:max-w-2xl xl:px-0 h-full'>
      {children}
    </div>
  )
}

export default SectionContainer
