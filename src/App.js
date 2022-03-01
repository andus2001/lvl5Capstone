import React from 'react'

import { Routes, Route, Link } from 'react-router-dom'

import CreateUser from './screens/CreateUser'
import Error from './screens/Error'
import Login from './screens/Login'
import Profile from './screens/Profile'

export default function App(){
    return(
        <>
            <header>
            </header>
            <nav>
                <Link to='/'>Login</Link>
                <Link to='/createuser'>Sign Up</Link>
                <Link to='/profile'>Profile</Link>
            </nav>
            <Routes>
                <Route path='*' element={<Error />}/>
                <Route path='/' element={<Login />}/>
                <Route path='/createuser' element={<CreateUser />} />
                <Route path='/profile' element={<Profile />} />
            </Routes>
            <footer>
            </footer>
        </>
    )
}