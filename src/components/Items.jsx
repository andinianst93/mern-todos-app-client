import React from 'react'
import { useGlobalContext } from '../context/appContext'
import { Link } from 'react-router-dom'
import ItemsShow from './ItemsShow'
const Items = () => {
  const { data, isLoading, deleteItem } = useGlobalContext()
  console.log(data)
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
      <ItemsShow />
      <div>
        {data.map((x) => {
          const { _id: id, title, description, status, createdAt } = x
          return (
            <article
              key={id}
              className='p-6 mb-6 text-base rounded-lg bg-gray-100 max-w-screen-lg'
            >
              <footer>
                <div className='flex items-center'>
                  <h2 className='inline-flex text-lg items-center mr-3 text-black capitalize font-semibold'>
                    {title}
                  </h2>
                  <p className='text-base text-gray-500'>{createdAt}</p>
                </div>
                <p className='text-gray-900'>{description}</p>
                <div className='flex items-center mt-2'>
                  <Link
                    to={`/edit/${id}`}
                    type='button'
                    className='text-blue-800 mr-2'
                  >
                    Edit
                  </Link>
                  <button
                    type='button'
                    onClick={() => deleteItem(id)}
                    className='text-red-800'
                  >
                    Remove
                  </button>
                </div>
              </footer>
            </article>
          )
        })}
      </div>
    </>
  )
}

export default Items
