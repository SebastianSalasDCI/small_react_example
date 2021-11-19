import React from 'react'
import {Route, Redirect} from 'react-router-dom'

// The props we obtain for PrivateRoute will come from the Main.jsx and react-router-dom
//    The path is the path the user wants to go, and component is the desired component to render.
//    By using "component:Component" we are renaming the property from lower case to the capital letter
//    at the beginning. Then component = Component.
export default function PrivateRoute({path, component:Component, ...rest }) {

  //This will normally come from backend server
  const login = true;

  return (
    <Route path={path} {...rest} >
      {
        login ?
          <Component />
        : 
          <Redirect to="/login" />
      }
    </Route>
  )
}
