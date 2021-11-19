import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from '../views/Home/Home'
import Login from '../views/Login/Login'
import Register from '../views/Register/Register'
import Navbar from '../components/Navbar/Navbar'
import PrivateRoute from './PrivateRoute'
import Profile from '../views/Profile/Profile'
import PublicRoute from './PublicRoute'
import ApiHome from '../views/ApiHome/ApiHome'

export default function Main() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="container">
        <Switch>
          <Route exact path="/" component={Home} />
          <PublicRoute path="/login" component={Login} />
          <PublicRoute path="/register" component={Register} />
          <PrivateRoute path="/profile" component={Profile} />
          <Route path="/apihome" component={ApiHome} />
        </Switch>
      </div>

    </BrowserRouter>
  )
}
