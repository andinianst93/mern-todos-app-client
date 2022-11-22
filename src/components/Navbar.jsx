import React from 'react'
import { FaUserCircle, FaCaretDown } from 'react-icons/fa'
import { useGlobalContext } from '../context/appContext'

const Navbar = () => {
  const { user, logout } = useGlobalContext()
  const [showLogout, setShowLogout] = React.useState(false)
  return (
    <div className='flex items-center justify-between'>
      <div className='w-[500px] m-0 h-[6rem] flex items-center'>
        <h2 className='ml-2 text-2xl font-bold text-white capitalize'>
          Welcome, {user}!
        </h2>
      </div>
      {user && (
        <div className='relative'>
          <button
            className='flex items-center justify-center gap-y-0 gap-x-[0.5rem] relative capitalize bg-blue-700 text-white py-[0.25rem] px-[1rem] rounded-md'
            onClick={() => setShowLogout(!showLogout)}
          >
            <FaUserCircle /> {user} <FaCaretDown />
          </button>
          <div
            className={
              showLogout
                ? 'absolute top-[40px] left-0 w-[100%] bg-white p-[0.5rem] text-center visible rounded-md'
                : 'absolute top-[40px] left-0 w-[100%] bg-white p-[0.5rem] text-center hidden rounded-md'
            }
          >
            <button
              className='bg-transparent border-transparent text-sky-700 capitalize cursor-pointer'
              onClick={() => logout()}
            >
              logout
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default Navbar
