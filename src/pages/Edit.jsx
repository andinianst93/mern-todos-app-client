import React, { useState, useEffect } from 'react'
import { useParams, Navigate, Link } from 'react-router-dom'
import { useGlobalContext } from '../context/appContext'
import FormRow from '../components/FormRow'
import FormRowS from '../components/FormRowS'
import Navbar from '../components/Navbar'
import SectionContainer from '../components/SectionContainer'

const Edit = () => {
  const { id } = useParams()
  const {
    isLoading,
    editItem,
    fetchSingleItem,
    singleItemError: error,
    user,
    editSingleItem,
    editComplete,
  } = useGlobalContext()
  const [values, setValues] = useState({
    title: '',
    description: '',
    status: '',
  })
  useEffect(() => {
    fetchSingleItem(id)
  }, [id])

  useEffect(() => {
    if (editItem) {
      const { title, description, status } = editItem
      setValues({ title, description, status })
    }
  }, [editItem])
  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const { title, description, status } = values
    if (title && description) {
      editSingleItem(id, { title, description, status })
    }
  }
  if (isLoading && !editItem) {
    return (
      <div className='w-[6rem] h-[6rem] border-solid border-2 border-gray-400 rounded-md border-t-sky-700 m-auto animate-spin'></div>
    )
  }

  return (
    <SectionContainer>
      {!user && <Navigate to='/' />}
      <Navbar />
      <div className='mx-auto flex items-center justify-center mb-8'>
        <Link
          to='/dashboard'
          className='cursor-pointer text-center text-white bg-blue-700 border-transparent rounded-md py-[0.375rem] px-[0.75rem] shadow-md capitalize inline-block md:w-fit w-[100%]'
        >
          Dashboard
        </Link>
      </div>
      <form className='max-w-screen-lg mx-auto' onSubmit={handleSubmit}>
        <p className='text-sky-700'>{editComplete && 'Success!'}</p>
        <h4 className='text-center font-bold text-xl text-gray-100 mb-4'>
          Edit
        </h4>
        <div className='text-white'>
          <FormRowS
            type='name'
            name='title'
            value={values.title}
            handleChange={handleChange}
            className='text-black'
          />
          <FormRow
            type='name'
            name='description'
            value={values.description}
            handleChange={handleChange}
          />

          <div className='mb-4'>
            <label htmlFor='status' className='mr-4'>
              Status:
            </label>
            <select
              name='status'
              value={values.status}
              onChange={handleChange}
              className='bg-gray-100 text-black rounded-md border-transparent p-[0.25rem] capitalize'
            >
              <option value='true'>finish</option>
              <option value='false'>pending</option>
            </select>
          </div>

          <div className='flex items-center justify-center'>
            <button
              type='submit'
              className='pointer text-white bg-blue-700 border-transparent rounded-md py-[0.5rem] px-[2rem] shadow-md capitalize hover:bg-gray-200 hover:text-sky-700'
            >
              Edit
            </button>
          </div>
        </div>
      </form>
    </SectionContainer>
  )
}

export default Edit
