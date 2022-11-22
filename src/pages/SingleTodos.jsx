import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { Link } from 'react-router-dom'

const SingleTodos = () => {
  const [todos, setTodos] = useState({})
  const { id } = useParams()
  const [completed, setCompleted] = useState(false)
  const [newSingleTodo, setNewSingleTodo] = useState('')

  const fetchData = async () => {
    try {
      const { data } = await axios.get(
        `https://mern-todos-app-server.onrender.com/api/v1/todos/${id}`
      )

      setTodos(data.todo)
    } catch (error) {
      console.log(error.response)
    }
  }
  useEffect(() => {
    fetchData()
  }, [])

  const updateTodo = async (_id) => {
    setCompleted(false)
    const data = await axios.patch(
      `https://mern-todos-app-server.onrender.com/api/v1/todos/${_id}`,
      {
        completed: !todos.completed,
      }
    )

    if (todos._id === _id) {
      todos.completed = !todos.completed
    }
    return setCompleted(true)
  }
  const newTodo = async (_id) => {
    const data = await axios.patch(
      `https://mern-todos-app-server.onrender.com/api/v1/todos/${_id}`,
      {
        todo: newSingleTodo ? newSingleTodo : undefined,
      }
    )
    if (!newSingleTodo) {
      await axios.patch(
        `https://mern-todos-app-server.onrender.com/api/v1/todos/${_id}`,
        {
          todo: newSingleTodo ? newSingleTodo : undefined,
        }
      )
    }
  }
  return (
    <div className='p-[32px]'>
      <section className=' bg-slate-700 md:w-[50%] w-[100%]  rounded-xl cursor-pointer mx-auto'>
        <article className='flex items-center flex-col'>
          <h1 className='text-slate-50 font-semibold text-center text-xl pt-8 pb-4'>
            Edit Todo
          </h1>
          <input
            placeholder={todos.todo}
            type='text'
            className='appearance-none outline-0	border-none bg-white p-[32px] rounded-md w-[80%]  shadow-lg text-[20px] mx-auto'
            onChange={(e) => setNewSingleTodo(e.target.value)}
            value={newSingleTodo}
          />
          <div className='flex flex-row items-center justify-center'>
            <div
              className={
                todos.completed
                  ? 'w-[20px] h-[20px] mr-[16px] mt-4 rounded-lg bg-purple-600'
                  : 'w-[20px] h-[20px] mr-[16px] mt-4 rounded-lg bg-slate-600'
              }
              onClick={() => updateTodo(todos._id)}
            ></div>
            <div className='text-slate-200 mt-4 mr-4'>Completed</div>
          </div>

          <div
            className='py-[8px] px-[32px] rounded-lg inline-block font-bold uppercase text-sm mt-[16px] mb-[32px] text-center bg-sky-500 text-white cursor-pointer'
            onClick={() => newTodo(todos._id)}
          >
            <Link to='/'>Update Todo</Link>
          </div>
        </article>
      </section>
      <section className='mx-auto md:w-[50%] w-[100%] flex items-center justify-center'>
        <button
          type='button'
          className='py-[8px] px-[32px] rounded-lg inline-block font-bold uppercase text-sm mt-[16px] mb-[32px] text-center bg-sky-900 text-white cursor-pointer'
        >
          <Link to='/todos'> Back to all todos</Link>
        </button>
      </section>
    </div>
  )
}

export default SingleTodos
