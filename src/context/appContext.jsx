import axios from 'axios'
import '../axios'
import React, { useContext, useEffect, useReducer } from 'react'
import {
  SET_LOADING,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_ERROR,
  SET_USER,
  LOGOUT_USER,
} from './actions'
import reducer from './reducer'

const initialState = {
  user: null,
  isLoading: 'false',
  showAlert: false,
  editComplete: false,
  editItem: null,
}
const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)
  const setLoading = () => {
    dispatch({ type: SET_LOADING })
  }
  // register
  const register = async (userInput) => {
    setLoading()
    try {
      const { data } = await axios.post(`/auth/register`, { ...userInput })
      dispatch({ type: REGISTER_USER_SUCCESS, payload: data.user.name })
      localStorage.setItem(
        'user',
        JSON.stringify({ name: data.user.name, token: data.token })
      )
    } catch (error) {
      dispatch({ type: REGISTER_USER_ERROR })
    }
  }
  // login
  const login = async (userInput) => {
    setLoading()
    try {
      const { data } = await axios.post(`/auth/login`, { ...userInput })
      dispatch({ type: REGISTER_USER_SUCCESS, payload: data.user.name })
      localStorage.setItem(
        'user',
        JSON.stringify({ name: data.user.name, token: data.token })
      )
    } catch (error) {
      dispatch({ type: REGISTER_USER_ERROR })
    }
  }
  // logout
  const logout = () => {
    localStorage.removeItem('user')
    dispatch({ type: LOGOUT_USER })
  }

  // useEffect localStorage
  useEffect(() => {
    const user = localStorage.getItem('user')
    if (user) {
      const newUser = JSON.parse(user)
      dispatch({ type: SET_USER, payload: newUser.name })
    }
  }, [])
  return (
    <AppContext.Provider
      value={{
        ...state,
        setLoading,
        register,
        login,
        logout,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}
export const useGlobalContext = () => {
  return useContext(AppContext)
}
export { AppProvider }
