import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Todos, SingleTodos } from './pages'
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Todos />}></Route>
        <Route path='/:id' element={<SingleTodos />}></Route>
      </Routes>
    </BrowserRouter>
  )
}
export default App
