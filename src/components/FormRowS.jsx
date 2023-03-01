import React from 'react'

const FormRowS = ({
  type,
  name,
  value,
  handleChange,
  horizontal,
  placeholder,
}) => {
  return (
    <div className='mb-4'>
      {!horizontal && (
        <label
          htmlFor={name}
          className='block mb-2 text-sm font-medium text-white'
        >
          {name}
        </label>
      )}
      <input
        type={type}
        value={value}
        name={name}
        onChange={handleChange}
        placeholder={placeholder}
        className='border sm:text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500'
      />
    </div>
  )
}

export default FormRowS
