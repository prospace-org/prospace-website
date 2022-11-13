import { createSlice } from '@reduxjs/toolkit'
import axios from 'src/utils/axios'
import { UserState, UserCreateData, UserEditData } from 'src/@types/user'
import { dispatch } from '../store'

const initialState: UserState = {
  isLoading: false,
  error: null,
  users: [],
  user: null
}

const slice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    // START LOADING
    startLoading(state) {
      state.isLoading = true
    },

    // HAS ERROR
    hasError(state, action) {
      state.isLoading = false
      state.error = action.payload
    },

    // GET USERS
    getUsersSuccess(state, action) {
      state.isLoading = false
      state.users = action.payload
    },

    // GET USER
    getUserSuccess(state, action) {
      state.isLoading = false
      state.error = null
      state.user = action.payload
    },

    // CREATE USER
    createUserSuccess(state) {
      state.isLoading = false
      state.error = null
    },

    // UPDATE USER
    updateUserSuccess(state, action) {
      state.isLoading = false
      state.error = null
      state.user = action.payload
    },

    // DELETE USER
    deleteUserSuccess(state, action) {
      const { userId } = action.payload
      const deleteUser = state.users.filter((user) => user._id !== userId)
      state.users = deleteUser
    },

    // GET CHECK USER
    getCheckUserSuccess(state, action) {
      state.isLoading = false
      state.error = null
      state.user = action.payload
    }
  }
})

// Reducer
export default slice.reducer

// Actions
export const { actions } = slice

// ----------------------------------------------------------------------

export function getUsers() {
  return async () => {
    dispatch(slice.actions.startLoading())
    try {
      const response = await axios.get('/api/user')
      dispatch(slice.actions.getUsersSuccess(response.data.users))
    } catch (error) {
      dispatch(slice.actions.hasError(error))
    }
  }
}

// ----------------------------------------------------------------------

export function getUser(userId: string | string[] | undefined) {
  return async () => {
    dispatch(slice.actions.startLoading())
    try {
      const response = await axios.get(`/api/user/${userId}`)
      dispatch(slice.actions.getUserSuccess(response.data.user))
    } catch (error) {
      dispatch(slice.actions.hasError(error))
    }
  }
}

// ----------------------------------------------------------------------

export function createUser(newUser: UserCreateData) {
  return async () => {
    dispatch(slice.actions.startLoading())
    try {
      const response = await axios.post('/api/user/register', newUser)
      // dispatch(slice.actions.createUserSuccess(response.data.user))
      console.log(response.data.user)

      return true
    } catch (error) {
      // dispatch(slice.actions.hasError(error))

      return false
    }
  }
}

// ----------------------------------------------------------------------

export function updateUser(userId: string, updateUser: UserEditData) {
  return async () => {
    dispatch(slice.actions.startLoading())
    try {
      const response = await axios.patch(`/api/user/edit/${userId}`, updateUser)
      dispatch(slice.actions.updateUserSuccess(response.data))

      return true
    } catch (error) {
      dispatch(slice.actions.hasError(error))

      return false
    }
  }
}

// ----------------------------------------------------------------------

export function deleteUser(userId: string) {
  return async () => {
    dispatch(slice.actions.startLoading())
    try {
      await axios.delete(`/api/user/${userId}`)
      dispatch(slice.actions.deleteUserSuccess({ userId }))
    } catch (error) {
      dispatch(slice.actions.hasError(error))
    }
  }
}

export function getCheckUser() {
  return async () => {
    dispatch(slice.actions.startLoading())
    try {
      const response = await axios.get('/api/user/checkuser')
      dispatch(slice.actions.getCheckUserSuccess(response.data.user))
    } catch (error) {
      dispatch(slice.actions.hasError(error))
    }
  }
}
