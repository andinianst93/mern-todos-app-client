import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Dashboard, Home, Edit, PrivateRoute, Error } from './pages'
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path='/dashboard'
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        ></Route>
        <Route path='/' element={<Home />}></Route>
        <Route path='/edit/:id' element={<Edit />}></Route>
        <Route path='*' element={<Error />}></Route>
      </Routes>
    </BrowserRouter>
  )
}
export default App
