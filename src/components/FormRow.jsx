import React from 'react'

const FormRow = ({
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
      <textarea
        type={type}
        value={value}
        name={name}
        onChange={handleChange}
        placeholder={placeholder}
        className='block p-2.5 w-full h-[250px] text-sm rounded-lg border bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-primary-500 focus:border-primary-500'
      />
    </div>
  )
}

export default FormRow
