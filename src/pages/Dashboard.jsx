import React, { useState, useEffect } from 'react'
import { useGlobalContext } from '../context/appContext'
import FormRow from '../components/FormRow'
import FormRowS from '../components/FormRowS'
import Navbar from '../components/Navbar'
import Items from '../components/Items'
import Footer from '../components/Footer'
import SectionContainer from '../components/SectionContainer'
const Dashboard = () => {
  const [values, setValues] = useState({ title: '', description: '' })
  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value })
  }
  const { isLoading, showAlert, fetchItems, createItem } = useGlobalContext()
  const handleSubmit = (e) => {
    e.preventDefault()
    const { title, description } = values
    if (title && description) {
      createItem(values)
      setValues({ title: '', description: '' })
    }
  }
  useEffect(() => {
    fetchItems()
  }, [])
  return (
    <>
      <SectionContainer>
        <Navbar />
        <section className='max-w-screen-lg mx-auto'>
          {showAlert && (
            <div className='py-[0.375rem] px-[0.75rem] m-auto border-transparent rounded-md w-[500px] max-w-[1120px] text-center capitalize text-red-800 bg-red-200'>
              There was an error, please try again
            </div>
          )}
          <form
            className='bg-white grid gap-y-[1rem] gap-x-[0.5rem] items-center mb-[3rem] rounded-md p-[1.5rem] max-w-screen-lg'
            onSubmit={handleSubmit}
          >
            <FormRowS
              type='name'
              name='title'
              value={values.title}
              handleChange={handleChange}
              horizontal
              placeholder='Title'
            />
            <FormRow
              type='name'
              name='description'
              value={values.description}
              handleChange={handleChange}
              horizontal
              placeholder='Description'
            />

            <button
              type='submit'
              className='mt-4 cursor-pointer text-white bg-blue-700 border-transparent rounded-md py-[0.375rem] px-[0.75rem] shadow-md capitalize inline-block w-[100%] mb-4'
            >
              {isLoading ? 'Posting' : 'Post'}
            </button>
          </form>
          <Items />
        </section>
        <Footer />
      </SectionContainer>
    </>
  )
}

export default Dashboard
