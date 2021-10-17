import { types } from '../types'

export const setError = (error) =>({
  type: types.uiSetError,
  payload: error
})

export const uiRemoveError = (error) =>({
  type: types.uiRemoveError,
})

export const setLoading = () => ({
  type: types.uiStartLoading
})

export const removeLoading = () => ({
  type: types.uiFinishLoading
})