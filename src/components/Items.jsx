import React, { useState } from 'react'
import { useGlobalContext } from '../context/appContext'
import { Link } from 'react-router-dom'
import { FiEdit } from 'react-icons/fi'
import { MdDeleteForever } from 'react-icons/md'
const Items = () => {
  const { data, isLoading, deleteItem } = useGlobalContext()

  if (isLoading) {
    return (
      <div className='w-[6rem] h-[6rem] border-solid border-2 border-gray-400 rounded-md border-t-sky-700 m-auto animate-spin'></div>
    )
  }
  if (data.length < 1) {
    return (
      <div className='text-center'>
        <h5>
          Currently, you have no{' '}
          <span className='text-sky-700 font-semibold'>Data</span> to display.
        </h5>
      </div>
    )
  }
  return (
    <>
      <div>
        {data.map((x) => {
          const { _id: id, title, description, status, createdAt } = x
          console.log(status)
          return (
            <article
              key={id}
              className='p-6 mb-6 text-base rounded-lg bg-gray-800'
            >
              <footer>
                <div className='flex items-center justify-between'>
                  <div className='flex flex-col items-left'>
                    <h2 className='inline-flex text-lg items-center mr-3 text-white capitalize font-semibold'>
                      {title}
                    </h2>
                    <p className='text-base text-gray-400'>
                      {' '}
                      <span>{createdAt}</span>
                    </p>
                  </div>
                  <div className='flex items-center'>
                    <Link
                      to={`/edit/${id}`}
                      type='button'
                      className='block py-2 px-4 text-green-700'
                    >
                      <FiEdit />
                    </Link>

                    <button
                      type='button'
                      onClick={() => deleteItem(id)}
                      className='block py-2 px-4 text-red-700'
                    >
                      <MdDeleteForever />
                    </button>
                  </div>
                </div>
              </footer>
              <p className='text-gray-400'>{description}</p>
              <p
                className={
                  status === true
                    ? 'text-white bg-blue-700 mt-4 py-1 px-2 max-w-fit rounded-lg text-sm'
                    : 'text-white bg-red-700 mt-4 py-1 px-2 max-w-fit rounded-lg text-sm'
                }
              >
                {status === true ? 'Finish' : 'Pending'}
              </p>
            </article>
          )
        })}
      </div>
    </>
  )
}

export default Items
