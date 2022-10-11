import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Todos, SingleTodos, Testing } from './pages'
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Todos />}></Route>
        <Route path='/:id' element={<SingleTodos />}></Route>
        <Route path='/testing' element={<Testing />}></Route>
      </Routes>
    </BrowserRouter>
  )
}
export default App
