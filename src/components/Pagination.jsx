import React from 'react'

const Pagination = ({ items, pageSize, currentPage, onPageChange }) => {
  const pagesCount = Math.ceil(items / pageSize)
  if (pagesCount === 1) return null
  const pages = Array.from({ length: pagesCount }, (_, i) => i + 1)
  console.log(pages)
  return (
    <nav>
      <ul className='inline-flex -space-x-px list-none'>
        {pages.map((page) => {
          return (
            <li
              key={page}
              className={
                page === currentPage
                  ? 'px-3 py-2 leading-tight  bg-blue-700 border-gray-700 text-gray-100 hover:bg-gray-700 hover:text-white rounded-lg'
                  : 'px-3 py-2 leading-tight  bg-gray-800 border-gray-700 text-gray-400 hover:bg-gray-700 hover:text-white rounded-lg'
              }
            >
              <a onClick={() => onPageChange(page)}>{page}</a>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

export default Pagination
