import React from 'react'
import Login from './Login'
import Profile from './Profile'

export default function Home() {
  let authenticated = localStorage.getItem("Authenticated")
  return (
    <div>
        {authenticated ? <Profile/> : <Login/>}

    </div>
  )
}
