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
        <label htmlFor={name} className='block font-medium capitalize mb-2'>
          {name}
        </label>
      )}
      <input
        type={type}
        value={value}
        name={name}
        onChange={handleChange}
        placeholder={placeholder}
        className='w-[100%] py-[0.375rem] px-[0.75rem] rounded-md bg-gray-50 border-solid border-2 border-gray-100'
      />
    </div>
  )
}

export default FormRow
