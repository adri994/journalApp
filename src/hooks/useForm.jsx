
import { useState } from 'react'

export const useForm = ( initialState = {} ) => {
  
  const [values, setValues] = useState(initialState)

  const handleChange = ({ target }) => {
    setValues({
      ...values,
      [target.name]: target.value,
    })
  }

  const reset = () =>{
    setValues(initialState)
  }

  return [ values, handleChange, reset ]

}
