import React from 'react'
import {Route, Redirect} from 'react-router-dom'

export default function PublicRoute({path, component:Component, ...rest }) {

  //This will normally come from backend server
  const login = true;

  return (
    <Route path={path} {...rest}>
      {
        login ?
          <Redirect to="/profile" />
        :
          <Component />
      }
    </Route>
  )
}
