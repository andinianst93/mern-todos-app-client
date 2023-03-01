import React, { useState } from 'react'
import { useGlobalContext } from '../context/appContext'
import { Navigate } from 'react-router-dom'
import FormRowS from '../components/FormRowS'
import SectionContainer from '../components/SectionContainer'
const Home = () => {
  const [values, setValues] = useState({
    name: '',
    email: '',
    password: '',
    isMember: true,
  })
  const { user, register, login, showAlert } = useGlobalContext()
  const toggleMember = () => {
    setValues({ ...values, isMember: !values.isMember })
  }
  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value })
  }
  const onSubmit = (e) => {
    e.preventDefault()
    const { name, email, password, isMember } = values
    if (isMember) {
      login({ email, password })
    } else {
      register({ name, email, password })
    }
  }
  return (
    <>
      <SectionContainer>
        {user && <Navigate to='/dashboard' />}
        <div className='flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0'>
          <h1 className='flex items-center mb-6 text-2xl font-semibold text-white'>
            ADN Journal
          </h1>
          <div className='w-full rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0 bg-gray-800 border-gray-700'>
            {showAlert && (
              <div className='py-[0.375rem] px-[0.75rem] m-auto border-transparent rounded-md md:w-[35vw] max-w-[1120px] text-center capitalize text-red-800 bg-red-200'>
                there was an error, please try again
              </div>
            )}
            <div className='p-6 space-y-4 md:space-y-6 sm:p-8'>
              <h2 className='text-xl font-bold leading-tight tracking-tight t md:text-2xl text-white'>
                {values.isMember ? 'Login' : 'Create an Account'}
              </h2>
              <form
                className='space-y-4 md:space-y-6 capitalize'
                onSubmit={onSubmit}
              >
                {!values.isMember && (
                  <FormRowS
                    type='name'
                    name='name'
                    value={values.name}
                    handleChange={handleChange}
                  />
                )}
                <FormRowS
                  type='email'
                  name='email'
                  value={values.email}
                  handleChange={handleChange}
                />
                <FormRowS
                  type='password'
                  name='password'
                  value={values.password}
                  handleChange={handleChange}
                />
                <button
                  type='submit'
                  className='w-full text-white  focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-blue-600 hover:bg-blue-700 focus:ring-blue-800'
                >
                  Submit
                </button>
                <p className='text-sm font-light text-gray-400'>
                  {values.isMember ? 'Not a member yet?' : 'Already a member?'}{' '}
                  <button
                    type='button'
                    onClick={toggleMember}
                    className='font-medium hover:underline dark:text-blue-500'
                  >
                    {values.isMember ? 'Register' : 'Login'}
                  </button>
                </p>
              </form>
            </div>
          </div>
        </div>
      </SectionContainer>
    </>
  )
}

export default Home
