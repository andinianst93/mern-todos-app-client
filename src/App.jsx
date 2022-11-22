import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Todos, Home, SingleTodos, PrivateRoute, Testing } from './pages'
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path='/todos'
          element={
            <PrivateRoute>
              <Todos />
            </PrivateRoute>
          }
        ></Route>
        <Route path='/' element={<Home />}></Route>
        <Route path='/:id' element={<SingleTodos />}></Route>
      </Routes>
    </BrowserRouter>
  )
}
export default App
