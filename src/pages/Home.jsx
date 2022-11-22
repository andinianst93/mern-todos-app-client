import React, { useState } from 'react'
import { useGlobalContext } from '../context/appContext'
import { Navigate } from 'react-router-dom'
import FormRow from '../components/FormRow'
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
        {user && <Navigate to='/todos' />}
        <div className='mx-auto max-w-[1120px] px-4 sm:px-6 xl:max-w-5xl xl:px-0 min-h-[100vh] grid items-center'>
          <div>
            {showAlert && (
              <div className='py-[0.375rem] px-[0.75rem] m-auto border-transparent rounded-md w-[500px] max-w-[1120px] text-center capitalize text-red-800 bg-red-200'>
                there was an error, please try again
              </div>
            )}
            <form
              className='max-w-[1120px] md:w-[35vw] bg-white rounded-md shadow-md p-[2.5rem] mx-auto my-auto'
              onSubmit={onSubmit}
            >
              <div className='h-4 flex items-center justify-center mb-8'>
                <h2 className='ml-2 text-2xl font-bold'>
                  <span className='text-gray-900'>TodosApp</span>{' '}
                  <span className='text-sky-700'>ADN</span>
                </h2>
              </div>
              <h4 className='capitalize text-center font-medium text-xl'>
                {values.isMember ? 'Login' : 'Register'}
              </h4>
              {!values.isMember && (
                <FormRow
                  type='name'
                  name='name'
                  value={values.name}
                  handleChange={handleChange}
                />
              )}
              <FormRow
                type='email'
                name='email'
                value={values.email}
                handleChange={handleChange}
              />
              <FormRow
                type='password'
                name='password'
                value={values.password}
                handleChange={handleChange}
              />
              <button
                type='submit'
                className='mt-4 cursor-pointer text-white bg-sky-700 border-transparent rounded-md py-[0.375rem] px-[0.75rem] shadow-md capitalize inline-block w-[100%] mb-4'
              >
                Submit
              </button>
              <p className='m-0 mt-4 text-center'>
                {values.isMember ? 'Not a member yet?' : 'Already a member?'}{' '}
                <button
                  type='button'
                  onClick={toggleMember}
                  className='bg-transparent border-transparent text-sky-700 cursor-pointer'
                >
                  {values.isMember ? 'Register' : 'Login'}
                </button>
              </p>
            </form>
          </div>
        </div>
      </SectionContainer>
    </>
  )
}

export default Home
