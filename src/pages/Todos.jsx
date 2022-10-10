import React, { useState, useEffect } from 'react'
import axios from 'axios'

import { Link } from 'react-router-dom'
const Todos = () => {
  const [todos, setTodos] = useState([])
  const [popup, setPopUp] = useState(false)
  const [newTodo, setNewTodo] = useState('')

  const fetchData = async () => {
    try {
      const response = await axios.get(
        'https://mern-todos-app-adn.herokuapp.com/api/v1/todos',
        {
          headers: {
            authorization: ' xxxxxxxxxx',
            'Content-Type': 'application/json',
          },
        }
      )
      const data = response.data
      setTodos(data.todos)
    } catch (error) {
      console.log(error.response)
    }
  }

  const addTodo = async (e) => {
    e.preventDefault()
    const data = await axios.post(
      'https://mern-todos-app-adn.herokuapp.com/api/v1/todos',
      {
        todo: newTodo,
      }
    )
    setTodos([...todos, data])
    setPopUp(false)
    setNewTodo('')
  }

  const deleteTodo = async (_id) => {
    await axios.delete(
      `https://mern-todos-app-adn.herokuapp.com/api/v1/todos/${_id}`,
      { _id }
    )
    setTodos((todos) => todos.filter((todo) => todo._id !== _id))
  }

  const completeTodo = async (_id) => {
    const data = await axios.patch(
      `https://mern-todos-app-adn.herokuapp.com/api/v1/todos/${_id}`,
      {
        completed: !todos.completed,
      }
    )
    setTodos((todos) =>
      todos.map((todo) => {
        if (todos._id === _id) {
          todos.completed = !todos.completed
        }
        return todo
      })
    )
  }

  useEffect(() => {
    fetchData()
  }, [newTodo])
  return (
    <div className='p-[32px]'>
      <h1 className='text-3xl font-bold mb-[32px] text-slate-100'>Welcome!</h1>
      <h2 className='text-lg text-slate-300 uppercase font-semibold mb-[16px]'>
        Your todos
      </h2>
      <div>
        {todos.map((todo, index) => {
          return (
            <div
              className={
                todo.completed
                  ? 'relative bg-slate-700 p-[16px] rounded-xl flex items-center transition duration-[0.5s] cursor-pointer mb-[16px] line-through decoration-2 decoration-slate-100'
                  : 'relative bg-slate-700 p-[16px] rounded-xl flex items-center transition duration-[0.5s] cursor-pointer mb-[16px]'
              }
              key={index}
            >
              <div
                className={
                  todo.completed
                    ? 'w-[20px] h-[20px] mr-[16px] rounded-lg bg-purple-600'
                    : 'w-[20px] h-[20px] mr-[16px] rounded-lg bg-slate-100'
                }
                onClick={() => completeTodo(todo._id)}
              ></div>
              <div className='text-base text-slate-50'>{todo.todo}</div>
              <div className='flex justify-between items-center'>
                <div
                  className='absolute top-[50%] translate-y-[-50%]	right-[16px] text-red-100 w-[24px] h-[24px] rounded-xl bg-red-600 flex items-center justify-center font-bold'
                  onClick={() => deleteTodo(todo._id)}
                >
                  X
                </div>
                <div className='absolute top-[50%] translate-y-[-50%] right-[54px]	 text-red-100 w-[24px] h-[24px] rounded-xl bg-green-600 flex items-center justify-center font-bold'>
                  <Link to={`/${todo._id}`}>U</Link>
                </div>
              </div>
            </div>
          )
        })}
      </div>
      <div
        className='fixed bottom-[32px] right-[32px] flex items-center justify-center w-[32px] h-[32px] rounded-xl text-[28px] font-bold text-slate-50 bg-sky-600 cursor-pointer'
        onClick={() => {
          setPopUp(true)
        }}
      >
        +
      </div>
      {popup ? (
        <div className='fixed top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%] w-[100%] max-w-[400px] bg-slate-200 p-[32px] rounded-md shadow-lg'>
          <div
            className='absolute top-[16px] right-[16px] rounded-xl bg-red-500 w-[20px] font-bold h-[20px] text-[20px] text-red-700 cursor-pointer'
            onClick={() => setPopUp(false)}
          ></div>
          <div>
            <h3 className='text-slate-900 mb-[16px] font-semibold uppercase text-lg'>
              Add Todo
            </h3>
            <input
              type='text'
              className='appearance-none	outline-0	border-none bg-white p-[16px] rounded-md w-[100%] shadow-lg text-[20px]'
              onChange={(e) => setNewTodo(e.target.value)}
              value={newTodo}
            />
            <div
              className='py-[8px] px-[32px] rounded-lg inline-block font-bold uppercase text-base mt-[16px] text-center bg-sky-800 text-white cursor-pointer'
              onClick={addTodo}
            >
              Create Todo
            </div>
          </div>
        </div>
      ) : (
        ''
      )}
    </div>
  )
}

export default Todos
