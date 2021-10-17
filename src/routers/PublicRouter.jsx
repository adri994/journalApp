import React from 'react'
import PropTypes from 'prop-types'

import { Redirect, Route } from 'react-router-dom'

export const PublicRouter = ({
  isAuthenticated,
  component:Component,
  ...rest
}) => {
  return (
    <Route  
      {...rest}
      component={ (props)=>(
        (!isAuthenticated) 
          ? <Component {...props} />
          :  <Redirect to="/"/>
      )}
    
    >
      
    </Route>
  )
}

PublicRouter.prototype ={
  isAuthenticated: PropTypes.bool.isRequired,
  component: PropTypes.func.isRequired
}