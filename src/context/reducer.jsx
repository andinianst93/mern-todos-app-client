import {
  SET_LOADING,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_ERROR,
  SET_USER,
  FETCH_ITEMS_SUCCESS,
  FETCH_ITEMS_ERROR,
  LOGOUT_USER,
  CREATE_ITEM_SUCCESS,
  CREATE_ITEM_ERROR,
  DELETE_ITEM_ERROR,
  FETCH_SINGLE_ITEM_SUCCESS,
  FETCH_SINGLE_ITEM_ERROR,
  EDIT_ITEM_SUCCESS,
  EDIT_ITEM_ERROR,
} from './actions'

const reducer = (state, action) => {
  if (action.type === SET_LOADING) {
    return { ...state, isLoading: true, showAlert: false, editComplete: false }
  }
  if (action.type === REGISTER_USER_SUCCESS) {
    return { ...state, isLoading: false, user: action.payload }
  }
  if (action.type === REGISTER_USER_ERROR) {
    return { ...state, isLoading: false, user: null, showAlert: true }
  }
  if (action.type === SET_USER) {
    return { ...state, user: action.payload }
  }
  if (action.type === LOGOUT_USER) {
    return {
      ...state,
      user: null,
      showAlert: false,
      data: [],
      isEditing: false,
      editItem: null,
    }
  }

  if (action.type === FETCH_ITEMS_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      editItem: null,
      singleItemError: false,
      editComplete: false,
      data: action.payload,
    }
  }
  if (action.type === FETCH_ITEMS_ERROR) {
    return {
      ...state,
      isLoading: false,
    }
  }
  if (action.type === CREATE_ITEM_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      data: [...state.data, action.payload],
    }
  }
  if (action.type === CREATE_ITEM_ERROR) {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
    }
  }
  if (action.type === DELETE_ITEM_ERROR) {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
    }
  }
  if (action.type === FETCH_SINGLE_ITEM_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      editItem: action.payload,
    }
  }
  if (action.type === FETCH_SINGLE_ITEM_ERROR) {
    return { ...state, isLoading: false, editItem: '', singleItemError: true }
  }
  if (action.type === EDIT_ITEM_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      editComplete: true,
      editItem: action.payload,
    }
  }
  if (action.type === EDIT_ITEM_ERROR) {
    return { ...state, isLoading: false, editComplete: true, showAlert: true }
  }
  throw new Error(`no such action : ${action}`)
}

export default reducer
